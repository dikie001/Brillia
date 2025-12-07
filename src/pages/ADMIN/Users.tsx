/* eslint-disable @typescript-eslint/no-explicit-any */
import { db } from "@/firebase/config.firebase";
import { collection, deleteDoc, doc, getDocs, query } from "firebase/firestore";
import {
  Activity,
  ChevronLeft,
  ChevronRight,
  Download,
  Eye,
  FileSpreadsheet,
  Filter,
  MoreVertical,
  RefreshCw, // Added for the update button
  Search,
  Trash2,
  Trophy,
  UserCheck,
  Users,
  X
} from "lucide-react";
import { useEffect, useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import LoaderPage from "./Loader";
import AdminNavbar from "./layout/Navbar";

// --- TYPES ---
interface QuizResult {
  date: string;
  percentage: number;
  score: number;
  subject: string;
  testNumber: number;
  timeTaken: number;
  totalQuestions: number;
}

interface UserData {
  id: string;
  fullName: string;
  age: string;
  favoriteSubject: string;
  hobby: string;
  last: string;
  totalLogins: number;
  calculatedAvg: number;
  quizHistory: QuizResult[];
}

interface CacheData {
  users: UserData[];
  timestamp: string;
}

// --- SUB-COMPONENT: USER DETAIL MODAL ---
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-white dark:bg-gray-800 p-4 border border-gray-100 dark:border-gray-700 shadow-xl rounded-xl">
        <p className="text-sm font-bold text-gray-900 dark:text-white mb-1">{label}</p>
        <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">{data.date}</p>
        <div className="space-y-1">
          <p className="text-xs font-medium text-indigo-600 dark:text-indigo-400">
            Score: {data.score} / {data.totalQuestions}
          </p>
          <p className="text-xs font-medium text-gray-600 dark:text-gray-300">
            Percentage: {data.percentage}%
          </p>
        </div>
      </div>
    );
  }
  return null;
};

const UserDetailModal = ({ user, onClose }: { user: UserData; onClose: () => void }) => {
  if (!user) return null;
  const chartData = [...user.quizHistory].map((item, index) => ({
    ...item,
    displayLabel: `Test ${index + 1}`,
  }));

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm transition-opacity" onClick={onClose} />
      <div className="relative w-full max-w-4xl max-h-[85vh] overflow-y-auto bg-white dark:bg-gray-900 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-800 flex flex-col animate-in fade-in zoom-in-95 duration-200">
        <div className="relative h-14 bg-indigo-900/10 shrink-0">
          <button onClick={onClose} className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full backdrop-blur-md transition-all">
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="px-6 sm:px-8 pb-8">
          <div className="relative flex justify-between items-end -mt-12 mb-6">
            <div className="flex items-end gap-4">
              <div className="w-14 h-14 rounded-3xl bg-white dark:bg-gray-800 p-1 shadow-xl shrink-0">
                <div className="w-full h-full rounded-xl bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-2xl font-bold text-indigo-600 dark:text-indigo-400 uppercase">
                  {user.fullName.charAt(0)}{user.fullName.split(" ")[1]?.charAt(0)}
                </div>
              </div>
              <div className="mb-1">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">{user.fullName}</h2>
                <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
                  <span className="px-2 py-0.5 rounded-md bg-indigo-50 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-800">
                    Age: {user.age}
                  </span>
                  <span>•</span>
                  <span className="text-emerald-500">Active</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Student Details</h3>
              <div className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg mt-1"><Activity className="w-4 h-4" /></div>
                <div><span className="text-xs text-gray-400 block">Hobby</span><span className="text-sm font-medium">{user.hobby}</span></div>
              </div>
              <div className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                 <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg mt-1"><Trophy className="w-4 h-4" /></div>
                 <div><span className="text-xs text-gray-400 block">Fav Subject</span><span className="text-sm font-medium">{user.favoriteSubject}</span></div>
              </div>
            </div>
            <div className="col-span-2 grid grid-cols-3 gap-2 sm:gap-4">
              <div className="bg-indigo-50 dark:bg-indigo-900/20 p-3 sm:p-4 rounded-2xl border border-indigo-100 dark:border-indigo-800/30">
                <p className="text-[10px] sm:text-xs text-indigo-500 font-bold uppercase">Tests</p>
                <p className="text-xl sm:text-2xl font-bold text-indigo-700 dark:text-indigo-300">{user.quizHistory.length}</p>
              </div>
              <div className="bg-pink-50 dark:bg-pink-900/20 p-3 sm:p-4 rounded-2xl border border-pink-100 dark:border-pink-800/30">
                <p className="text-[10px] sm:text-xs text-pink-500 font-bold uppercase">Best</p>
                <p className="text-xl sm:text-2xl font-bold text-pink-700 dark:text-pink-300">
                  {user.quizHistory.length > 0 ? Math.max(...user.quizHistory.map((q) => q.percentage)) : 0}%
                </p>
              </div>
              <div className="bg-amber-50 dark:bg-amber-900/20 p-3 sm:p-4 rounded-2xl border border-amber-100 dark:border-amber-800/30">
                <p className="text-[10px] sm:text-xs text-amber-500 font-bold uppercase">Avg</p>
                <p className="text-xl sm:text-2xl font-bold text-amber-700 dark:text-amber-300">{user.calculatedAvg}%</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800/50 p-4 sm:p-6 rounded-2xl border border-gray-100 dark:border-gray-800">
            <h3 className="font-bold text-gray-800 dark:text-gray-100 mb-4">Performance Trend</h3>
            <div className="h-[250px] w-full">
              {chartData.length > 0 ? (
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData}>
                    <defs>
                      <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#6366f1" stopOpacity={0.4} />
                        <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" strokeOpacity={0.5} />
                    <XAxis dataKey="displayLabel" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#9ca3af" }} />
                    <YAxis domain={[0, 100]} axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#9ca3af" }} />
                    <Tooltip content={<CustomTooltip />} />
                    <Area type="monotone" dataKey="percentage" stroke="#6366f1" strokeWidth={3} fill="url(#colorScore)" />
                  </AreaChart>
                </ResponsiveContainer>
              ) : (
                <div className="h-full flex items-center justify-center text-gray-400">No tests taken yet.</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- MAIN USERS PAGE ---
const UsersPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUser, setSelectedUser] = useState<UserData | null>(null);
  
  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Data States
  const [users, setUsers] = useState<UserData[]>([]);
  const [loading, setLoading] = useState(true);
  
  // New States for Caching/Refreshing
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<string | null>(null);

  const STORAGE_KEY = "ADMIN_USERS_CACHE";

  // --- DATA FETCHING LOGIC ---
  const fetchFromFirebase = async (isBackground = false) => {
    try {
      if (!isBackground) setIsRefreshing(true);
      
      const usersRef = collection(db, "users");
      const q = query(usersRef);
      const userSnapshot = await getDocs(q);

      const userDataPromises = userSnapshot.docs.map(async (userDoc) => {
        const rawUser = userDoc.data();
        const userId = userDoc.id;
        const quizRef = collection(db, "users", userId, "quizResults");
        const quizSnapshot = await getDocs(quizRef);
        const quizzes: QuizResult[] = quizSnapshot.docs.map((doc) => doc.data() as QuizResult);

        let totalPercent = 0;
        if (quizzes.length > 0) {
          totalPercent = quizzes.reduce((sum, quiz) => sum + quiz.percentage, 0);
        }
        const avg = quizzes.length > 0 ? Math.round(totalPercent / quizzes.length) : 0;

        return {
          id: rawUser.id || userId,
          fullName: rawUser.fullName || "Unknown User",
          age: rawUser.age || "N/A",
          favoriteSubject: rawUser.favoriteSubject || "N/A",
          hobby: rawUser.hobby || "N/A",
          last: rawUser.last || "",
          totalLogins: rawUser.totalLogins || 0,
          calculatedAvg: avg,
          quizHistory: quizzes,
        } as UserData;
      });

      const fullUsersData = await Promise.all(userDataPromises);
      
      // Update State
      setUsers(fullUsersData);
      
      // Update LocalStorage
      const timestamp = new Date().toISOString();
      const cacheData: CacheData = {
        users: fullUsersData,
        timestamp: timestamp
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cacheData));
      setLastUpdated(timestamp);

    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setIsRefreshing(false);
      setLoading(false);
    }
  };

  // Initial Load Effect
  useEffect(() => {
    const loadInitialData = () => {
      const cached = localStorage.getItem(STORAGE_KEY);
      if (cached) {
        try {
          const parsed: CacheData = JSON.parse(cached);
          setUsers(parsed.users);
          setLastUpdated(parsed.timestamp);
          setLoading(false);
          // Optional: Fetch fresh data in background if needed, but for now we rely on the button
        } catch (e) {
          console.error("Cache parse error", e);
          fetchFromFirebase();
        }
      } else {
        fetchFromFirebase();
      }
    };

    loadInitialData();
  }, []);

  // --- HANDLERS ---
  const handleDeleteUser = async (userId: string) => {
    if (window.confirm("Are you sure you want to delete this user? This action cannot be undone.")) {
      try {
        await deleteDoc(doc(db, "users", userId));
        
        // Update State
        const updatedUsers = users.filter((u) => u.id !== userId);
        setUsers(updatedUsers);
        
        // Update LocalStorage immediately so it doesn't reappear on reload
        const timestamp = lastUpdated || new Date().toISOString();
        localStorage.setItem(STORAGE_KEY, JSON.stringify({
            users: updatedUsers,
            timestamp: timestamp
        }));

        alert("User deleted successfully.");
      } catch (error) {
        console.error("Error deleting user:", error);
        alert("Failed to delete user.");
      }
    }
  };

  const handleExportCSV = () => {
    const headers = ["ID,Full Name,Age,Favorite Subject,Avg Score,Total Tests,Last Active"];
    const rows = users.map(u => 
      `${u.id},"${u.fullName}",${u.age},"${u.favoriteSubject}",${u.calculatedAvg},${u.quizHistory.length},"${u.last}"`
    );
    const csvContent = "data:text/csv;charset=utf-8," + [headers, ...rows].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "users_export.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const formatLastUpdated = (isoString: string | null) => {
    if (!isoString) return "";
    const date = new Date(isoString);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  // --- FILTERS & PAGINATION ---
  const filteredUsers = users.filter((user) =>
    user.fullName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);

  const totalUsers = users.length;
  const activeUsers = users.filter(u => u.quizHistory.length > 0).length;

  if (loading) return <LoaderPage />;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <AdminNavbar />
      <UserDetailModal user={selectedUser!} onClose={() => setSelectedUser(null)} />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">User Management</h1>
                <p className="text-gray-500 dark:text-gray-400">View, manage and analyze all registered students.</p>
            </div>
            {lastUpdated && (
                <span className="text-xs text-gray-400 font-medium bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 px-3 py-1 rounded-full">
                    Last updated: {formatLastUpdated(lastUpdated)}
                </span>
            )}
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
           <div className="bg-white dark:bg-gray-900 p-5 rounded-2xl border border-gray-100 dark:border-gray-800 flex items-center gap-4">
              <div className="p-3 rounded-xl bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600"><Users className="w-6 h-6" /></div>
              <div><p className="text-sm text-gray-500">Total Users</p><p className="text-2xl font-bold text-gray-900 dark:text-white">{totalUsers}</p></div>
           </div>
           <div className="bg-white dark:bg-gray-900 p-5 rounded-2xl border border-gray-100 dark:border-gray-800 flex items-center gap-4">
              <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600"><UserCheck className="w-6 h-6" /></div>
              <div><p className="text-sm text-gray-500">Active Learners</p><p className="text-2xl font-bold text-gray-900 dark:text-white">{activeUsers}</p></div>
           </div>
           <div className="bg-white dark:bg-gray-900 p-5 rounded-2xl border border-gray-100 dark:border-gray-800 flex items-center gap-4 cursor-pointer hover:border-indigo-200 transition-colors" onClick={handleExportCSV}>
              <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-600"><FileSpreadsheet className="w-6 h-6" /></div>
              <div><p className="text-sm text-gray-500">Export Data</p><p className="text-sm font-bold text-blue-600">Download CSV</p></div>
           </div>
        </div>

        {/* Controls */}
        <div className="bg-white dark:bg-gray-900 rounded-t-2xl border-x border-t border-gray-100 dark:border-gray-800 p-4 flex flex-col sm:flex-row gap-4 justify-between items-center">
          <div className="relative w-full sm:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none dark:text-white"
            />
          </div>
          <div className="flex gap-2 w-full sm:w-auto">
            {/* Sync Button */}
            <button 
                onClick={() => fetchFromFirebase()} 
                disabled={isRefreshing}
                className="flex-1 sm:flex-none justify-center flex items-center gap-2 px-3 py-2 text-sm text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 disabled:opacity-50 transition-all"
            >
              <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} /> 
              {isRefreshing ? "Syncing..." : "Sync Data"}
            </button>

            <button className="flex-1 sm:flex-none justify-center flex items-center gap-2 px-3 py-2 text-sm text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
              <Filter className="w-4 h-4" /> Filters
            </button>
            <button onClick={handleExportCSV} className="flex-1 sm:flex-none justify-center flex items-center gap-2 px-3 py-2 text-sm text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 shadow-lg shadow-indigo-200 dark:shadow-indigo-900/20">
              <Download className="w-4 h-4" /> Export
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white dark:bg-gray-900 rounded-b-2xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px] sm:min-w-full">
              <thead>
                <tr className="bg-gray-50/50 dark:bg-gray-800/50 text-gray-500 dark:text-gray-400 text-xs uppercase tracking-wider">
                  <th className="p-4 font-semibold w-12 text-center">#</th>
                  <th className="p-4 font-semibold">User Profile</th>
                  <th className="p-4 font-semibold text-center hidden md:table-cell">Stats</th>
                  <th className="p-4 font-semibold hidden lg:table-cell">Performance</th>
                  <th className="p-4 font-semibold hidden xl:table-cell">Activity</th>
                  <th className="p-4 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                {currentUsers.length > 0 ? (
                  currentUsers.map((user, index) => (
                    <tr key={user.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors group">
                      
                      {/* 1. Numbering Column */}
                      <td className="p-4 text-center text-gray-400 font-medium text-sm">
                        {(currentPage - 1) * itemsPerPage + index + 1}
                      </td>

                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-bold text-sm uppercase shrink-0">
                            {user.fullName.charAt(0)}
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900 dark:text-gray-100 text-sm">{user.fullName}</p>
                            <div className="flex items-center gap-2 text-xs text-gray-500">
                                <span>Age: {user.age}</span>
                                <span className="hidden sm:inline">•</span>
                                <span className="hidden sm:inline">{user.hobby}</span>
                            </div>
                          </div>
                        </div>
                      </td>

                      {/* Hidden on Small Screens */}
                      <td className="p-4 text-center hidden md:table-cell">
                        <div className="flex flex-col gap-1 items-center">
                             <span className="text-xs font-medium bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded text-gray-600 dark:text-gray-400">
                                 {user.quizHistory.length} Tests
                             </span>
                             <span className="text-xs text-gray-400">{user.totalLogins} Logins</span>
                        </div>
                      </td>

                      {/* Hidden on Tablet/Mobile */}
                      <td className="p-4 hidden lg:table-cell">
                        <div className="flex items-center gap-3">
                          <div className="w-24 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                            <div
                              style={{ width: `${user.calculatedAvg}%` }}
                              className={`h-full rounded-full ${
                                user.calculatedAvg > 80 ? "bg-emerald-500" :
                                user.calculatedAvg > 50 ? "bg-indigo-500" : "bg-amber-500"
                              }`}
                            />
                          </div>
                          <span className="text-sm font-bold text-gray-700 dark:text-gray-300">{user.calculatedAvg}%</span>
                        </div>
                      </td>

                      {/* Hidden on Laptop/Tablet/Mobile */}
                      <td className="p-4 hidden xl:table-cell">
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                             <span className={`w-2 h-2 rounded-full ${user.quizHistory.length > 0 ? 'bg-emerald-500' : 'bg-gray-300'}`}></span>
                             {user.last ? new Date(user.last).toLocaleDateString() : 'Never'}
                          </div>
                      </td>

                      <td className="p-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                            <button onClick={() => setSelectedUser(user)} className="p-2 text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 rounded-lg transition-all" title="View Analytics">
                                <Eye className="w-4 h-4" />
                            </button>
                            <button onClick={() => handleDeleteUser(user.id)} className="p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-lg transition-all" title="Delete User">
                                <Trash2 className="w-4 h-4" />
                            </button>
                            <button className="p-2 text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg hidden sm:block">
                                <MoreVertical className="w-4 h-4" />
                            </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="p-12 text-center text-gray-500">
                      <div className="flex flex-col items-center justify-center gap-2">
                        <Search className="w-8 h-8 text-gray-300" />
                        <p>No students found matching your search.</p>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between p-4 border-t border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900">
            <span className="text-xs text-gray-500 dark:text-gray-400">
              Showing {filteredUsers.length > 0 ? indexOfFirstItem + 1 : 0} - {Math.min(indexOfLastItem, filteredUsers.length)} of {filteredUsers.length} users
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                disabled={currentPage === 1}
                className="p-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg disabled:opacity-50 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              
              <div className="hidden sm:flex items-center gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-8 h-8 flex items-center justify-center rounded-lg text-xs font-medium transition-all ${
                        currentPage === page
                        ? "bg-indigo-600 text-white shadow-md shadow-indigo-200 dark:shadow-indigo-900/30"
                        : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700 hover:bg-gray-50"
                    }`}
                    >
                    {page}
                    </button>
                ))}
              </div>

              <button
                onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                disabled={currentPage === totalPages || totalPages === 0}
                className="p-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg disabled:opacity-50 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersPage;