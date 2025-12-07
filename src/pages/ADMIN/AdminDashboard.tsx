/* eslint-disable @typescript-eslint/no-explicit-any */
import { db } from "@/firebase/config.firebase";
import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import {
  Activity,
  ArrowRight,
  BookOpen,
  Calendar,
  ChevronLeft, // Added
  ChevronRight,
  Clock,
  Download,
  Eye,
  Filter,
  MessageSquare,
  RefreshCw,
  Search,
  Settings,
  Target,
  Trophy,
  Users,
  X,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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

interface RecentMessage {
  id: string;
  name: string;
  message: string;
  createdAt: any;
}

// --- MODAL COMPONENT ---
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-white dark:bg-gray-800 p-4 border border-gray-100 dark:border-gray-700 shadow-xl rounded-xl">
        <p className="text-sm font-bold text-gray-900 dark:text-white mb-1">
          {label}
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
          {data.date}
        </p>
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

// --- MAIN MODAL ---
const UserDetailModal = ({
  user,
  onClose,
}: {
  user: UserData;
  onClose: () => void;
}) => {
  if (!user) return null;

  const chartData = [...user.quizHistory].map((item, index) => ({
    ...item,
    displayLabel: `Test ${index + 1}`,
  }));

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div
        className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      <div className="relative w-full max-w-4xl max-h-[85vh] overflow-y-auto bg-white dark:bg-gray-900 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-800 flex flex-col animate-in fade-in zoom-in-95 duration-200">
        <div className="relative h-14 bg-indigo-900/10 shrink-0">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full backdrop-blur-md transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="px-8 pb-8">
          <div className="relative flex justify-between items-end -mt-12 mb-6">
            <div className="flex items-end gap-4">
              <div className="w-14 h-14 rounded-3xl bg-white dark:bg-gray-800 p-1 shadow-xl shrink-0">
                <div className="w-full h-full rounded-xl bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-2xl font-bold text-indigo-600 dark:text-indigo-400 uppercase">
                  {`${user.fullName.charAt(0)}${user.fullName
                    .split(" ")[1]
                    .charAt(0)}`}
                </div>
              </div>
              <div className="mb-1">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {user.fullName}
                </h2>
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
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                Student Details
              </h3>
              <div className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg mt-1">
                  <Target className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-gray-400 block">
                    Favorite Subject
                  </span>
                  <span className="text-sm font-medium">
                    {user.favoriteSubject}
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg mt-1">
                  <Activity className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-gray-400 block">Hobby</span>
                  <span className="text-sm font-medium">{user.hobby}</span>
                </div>
              </div>
              <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
                  <Calendar className="w-4 h-4" />
                </div>
                <span className="text-sm">Last Active: {user.last}</span>
              </div>
            </div>

            <div className="col-span-2 grid grid-cols-3 gap-4">
              <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-2xl border border-indigo-100 dark:border-indigo-800/30">
                <p className="text-xs text-indigo-500 font-bold uppercase">
                  Tests Taken
                </p>
                <p className="text-2xl font-bold text-indigo-700 dark:text-indigo-300">
                  {user.quizHistory.length}
                </p>
              </div>
              <div className="bg-pink-50 dark:bg-pink-900/20 p-4 rounded-2xl border border-pink-100 dark:border-pink-800/30">
                <p className="text-xs text-pink-500 font-bold uppercase">
                  Best Score
                </p>
                <p className="text-2xl font-bold text-pink-700 dark:text-pink-300">
                  {user.quizHistory.length > 0
                    ? Math.max(
                        ...user.quizHistory.map((q: any) => q.percentage)
                      )
                    : 0}
                  %
                </p>
              </div>
              <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-2xl border border-amber-100 dark:border-amber-800/30">
                <p className="text-xs text-amber-500 font-bold uppercase">
                  Avg Score
                </p>
                <p className="text-2xl font-bold text-amber-700 dark:text-amber-300">
                  {user.calculatedAvg}%
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-2xl border border-gray-100 dark:border-gray-800">
            <div className="flex items-center gap-2 mb-6">
              <Trophy className="w-5 h-5 text-indigo-500" />
              <h3 className="font-bold text-gray-800 dark:text-gray-100">
                Performance Trend
              </h3>
            </div>
            <div className="w-full overflow-x-auto pb-2">
              <div className="h-[300px] w-full min-w-[500px]">
                {chartData && chartData.length > 0 ? (
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      data={chartData}
                      margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                    >
                      <defs>
                        <linearGradient
                          id="colorScore"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="5%"
                            stopColor="#6366f1"
                            stopOpacity={0.4}
                          />
                          <stop
                            offset="95%"
                            stopColor="#6366f1"
                            stopOpacity={0}
                          />
                        </linearGradient>
                      </defs>
                      <CartesianGrid
                        strokeDasharray="3 3"
                        vertical={false}
                        stroke="#e5e7eb"
                        strokeOpacity={0.5}
                      />
                      <XAxis
                        dataKey="displayLabel"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 12, fill: "#9ca3af" }}
                        dy={10}
                      />
                      <YAxis
                        domain={[0, 100]}
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 12, fill: "#9ca3af" }}
                      />
                      <Tooltip content={<CustomTooltip />} />
                      <Area
                        type="monotone"
                        dataKey="percentage"
                        name="Score (%)"
                        stroke="#6366f1"
                        strokeWidth={4}
                        fillOpacity={1}
                        fill="url(#colorScore)"
                        activeDot={{
                          r: 6,
                          strokeWidth: 2,
                          stroke: "#fff",
                          fill: "#6366f1",
                        }}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                ) : (
                  <div className="h-full flex items-center justify-center text-gray-400">
                    No tests taken yet.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- MAIN DASHBOARD ---
const AdminDashboard = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUser, setSelectedUser] = useState<UserData | null>(null);

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Data States
  const [users, setUsers] = useState<UserData[]>([]);
  const [recentMessages, setRecentMessages] = useState<RecentMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Storage Keys
  const STORAGE_KEY_USERS = "admin_dashboard_users";
  const STORAGE_KEY_MSGS = "admin_dashboard_messages";

  // --- DATA FETCHING ---
  const fetchAndCacheData = async () => {
    try {
      // 1. Fetch Users
      const usersRef = collection(db, "users");
      const q = query(usersRef);
      const userSnapshot = await getDocs(q);

      const userDataPromises = userSnapshot.docs.map(async (userDoc) => {
        const rawUser = userDoc.data();
        const userId = userDoc.id;

        const quizRef = collection(db, "users", userId, "quizResults");
        const quizSnapshot = await getDocs(quizRef);

        const quizzes: QuizResult[] = quizSnapshot.docs.map(
          (doc) => doc.data() as QuizResult
        );

        let totalPercent = 0;
        if (quizzes.length > 0) {
          totalPercent = quizzes.reduce(
            (sum, quiz) => sum + quiz.percentage,
            0
          );
        }
        const avg =
          quizzes.length > 0 ? Math.round(totalPercent / quizzes.length) : 0;

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

      // 2. Fetch Latest 2 Messages
      const msgRef = collection(db, "messages");
      const msgQuery = query(msgRef, orderBy("createdAt", "desc"), limit(2));
      const msgSnapshot = await getDocs(msgQuery);

      const msgs = msgSnapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          id: doc.id,
          ...data,
          createdAt: data.createdAt?.toDate
            ? data.createdAt.toDate().toISOString()
            : new Date().toISOString(),
        };
      }) as RecentMessage[];

      setUsers(fullUsersData);
      setRecentMessages(msgs);

      localStorage.setItem(STORAGE_KEY_USERS, JSON.stringify(fullUsersData));
      localStorage.setItem(STORAGE_KEY_MSGS, JSON.stringify(msgs));
    } catch (error) {
      console.error("Error fetching admin data:", error);
    }
  };

  useEffect(() => {
    const loadInitialData = async () => {
      setLoading(true);
      const cachedUsers = localStorage.getItem(STORAGE_KEY_USERS);
      const cachedMsgs = localStorage.getItem(STORAGE_KEY_MSGS);

      if (cachedUsers && cachedMsgs) {
        setUsers(JSON.parse(cachedUsers));
        setRecentMessages(JSON.parse(cachedMsgs));
        setLoading(false);
      } else {
        await fetchAndCacheData();
        setLoading(false);
      }
    };
    loadInitialData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await fetchAndCacheData();
    setIsRefreshing(false);
  };

  // --- FILTERS & PAGINATION LOGIC ---
  const filteredUsers = users.filter((user) =>
    user.fullName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Reset page when search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);

  const totalUsers = users.length;
  const totalTestsTaken = users.reduce(
    (acc, user) => acc + user.quizHistory.length,
    0
  );
  const globalAvgScore =
    users.length > 0
      ? Math.round(
          users.reduce((acc, user) => acc + user.calculatedAvg, 0) /
            users.length
        )
      : 0;

  const adminStats = [
    {
      label: "Total Students",
      value: totalUsers.toLocaleString(),
      icon: Users,
      color: "indigo",
    },
    {
      label: "Total Tests Taken",
      value: totalTestsTaken.toLocaleString(),
      icon: BookOpen,
      color: "pink",
    },
    {
      label: "Global Avg Score",
      value: `${globalAvgScore}%`,
      icon: Clock,
      color: "amber",
    },
  ];

  const formatTime = (timestamp: any) => {
    if (!timestamp) return "";
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
  };

  if (loading) {
    return <LoaderPage />;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <AdminNavbar />
      <UserDetailModal
        user={selectedUser!}
        onClose={() => setSelectedUser(null)}
      />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Admin Dashboard
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              Manage students and monitor performance.
            </p>
          </div>
          <button
            onClick={handleRefresh}
            disabled={isRefreshing}
            className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-200 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all disabled:opacity-50 shadow-sm font-medium text-sm"
          >
            <RefreshCw
              className={`w-4 h-4 ${isRefreshing ? "animate-spin" : ""}`}
            />
            {isRefreshing ? "Refreshing..." : "Refresh Data"}
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
          {adminStats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800"
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {stat.label}
                  </p>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-1">
                    {stat.value}
                  </h3>
                </div>
                <div
                  className={`p-2 rounded-lg ${
                    stat.color === "indigo"
                      ? "bg-indigo-50 text-indigo-600"
                      : stat.color === "pink"
                      ? "bg-pink-50 text-pink-600"
                      : "bg-amber-50 text-amber-600"
                  }`}
                >
                  <stat.icon className="w-5 h-5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 p-6 flex flex-col">
            <h3 className="font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber-500" /> Quick Actions
            </h3>
            <div className="grid grid-cols-2 gap-3 flex-1">
              <button
                onClick={() => navigate("/admin/messages")}
                className="flex flex-col items-center justify-center p-4 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-600 transition-colors gap-2 group border border-transparent hover:border-indigo-100 dark:hover:border-indigo-500/30"
              >
                <div className="p-2 bg-white dark:bg-gray-700 rounded-full shadow-sm group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <span className="text-xs font-semibold">Messages</span>
              </button>

              {/* Export data */}
              <button className="flex flex-col items-center justify-center p-4 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 hover:text-emerald-600 transition-colors gap-2 group border border-transparent hover:border-emerald-100 dark:hover:border-emerald-500/30">
                <div className="p-2 bg-white dark:bg-gray-700 rounded-full shadow-sm group-hover:scale-110 transition-transform">
                  <Download className="w-5 h-5" />
                </div>
                <span className="text-xs font-semibold">Export Data</span>
              </button>

              {/* Settings */}
              <button
                onClick={() => navigate("/admin/settings")}
                className="flex flex-col items-center justify-center p-4 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-pink-50 dark:hover:bg-pink-900/20 hover:text-pink-600 transition-colors gap-2 group border border-transparent hover:border-pink-100 dark:hover:border-pink-500/30"
              >
                <div className="p-2 bg-white dark:bg-gray-700 rounded-full shadow-sm group-hover:scale-110 transition-transform">
                  <Settings className="w-5 h-5" />
                </div>
                <span className="text-xs font-semibold">Settings</span>
              </button>

              <button
                onClick={() => navigate("/admin/users")}
                className="flex flex-col items-center justify-center p-4 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 transition-colors gap-2 group border border-transparent hover:border-blue-100 dark:hover:border-blue-500/30"
              >
                <div className="p-2 bg-white dark:bg-gray-700 rounded-full shadow-sm group-hover:scale-110 transition-transform">
                  <Users className="w-5 h-5" />
                </div>
                <span className="text-xs font-semibold">Manage</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-2 bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 p-6 flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-gray-800 dark:text-white flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-indigo-500" /> Recent
                Inquiries
              </h3>
              <button
                onClick={() => navigate("/admin/messages")}
                className="text-xs font-medium text-indigo-600 hover:text-indigo-700 flex items-center gap-1 hover:underline"
              >
                View all <ArrowRight className="w-3 h-3" />
              </button>
            </div>

            <div className="space-y-3">
              {recentMessages.length > 0 ? (
                recentMessages.map((msg) => (
                  <div
                    key={msg.id}
                    className="group flex items-start gap-4 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors border border-transparent hover:border-gray-100 dark:hover:border-gray-800"
                  >
                    <div className="w-10 h-10 rounded-full bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-bold text-sm uppercase shrink-0">
                      {msg.name.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start">
                        <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                          {msg.name}
                        </h4>
                        <span className="text-[10px] text-gray-400 whitespace-nowrap ml-2">
                          {formatTime(msg.createdAt)}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-1 mt-0.5">
                        {msg.message}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8 text-gray-400 text-sm">
                  No recent messages found.
                </div>
              )}
            </div>
          </div>
        </div>

        {/* User Table Container */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
          <div className="p-4 border-b border-gray-100 dark:border-gray-800 flex flex-col sm:flex-row gap-4 justify-between items-center">
            <div className="relative w-full sm:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search student name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none dark:text-white"
              />
            </div>
            <div className="flex gap-2">
              <button className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                <Filter className="w-4 h-4" /> Filter
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50/50 dark:bg-gray-800/50 text-gray-500 dark:text-gray-400 text-xs uppercase tracking-wider">
                  <th className="p-4 font-semibold">Student Name</th>
                  <th className="p-4 font-semibold text-center">Age</th>
                  <th className="p-4 font-semibold text-center">Fav Subject</th>
                  <th className="p-4 font-semibold">Avg Score</th>
                  <th className="p-4 font-semibold">Logins</th>
                  <th className="p-4 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                {currentUsers.length > 0 ? (
                  currentUsers.map((user) => (
                    <tr
                      key={user.id}
                      onClick={() => setSelectedUser(user)}
                      className="hover:bg-gray-50 cursor-pointer dark:hover:bg-gray-800/50 transition-colors"
                    >
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-bold text-xs uppercase">
                            {user.fullName.charAt(0)}
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900 dark:text-gray-100 text-sm">
                              {user.fullName}
                            </p>
                            <p className="text-xs text-gray-500">
                              Tests: {user.quizHistory.length}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 text-center font-medium text-gray-700 dark:text-gray-300">
                        {user.age}
                      </td>
                      <td className="p-4 text-center">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                          {user.favoriteSubject}
                        </span>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <div className="w-16 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                            <div
                              style={{ width: `${user.calculatedAvg}%` }}
                              className={`h-full rounded-full ${
                                user.calculatedAvg > 80
                                  ? "bg-emerald-500"
                                  : user.calculatedAvg > 50
                                  ? "bg-indigo-500"
                                  : "bg-amber-500"
                              }`}
                            />
                          </div>
                          <span className="text-xs font-bold text-gray-600 dark:text-gray-400">
                            {user.calculatedAvg}%
                          </span>
                        </div>
                      </td>
                      <td className="p-4 text-sm text-gray-500">
                        {user.totalLogins}
                      </td>
                      <td className="p-4 text-right">
                        <button
                          onClick={() => setSelectedUser(user)}
                          className="p-2 text-indigo-600 bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-900/20 dark:text-indigo-400 dark:hover:bg-indigo-900/40 rounded-lg transition-all"
                          title="View Details"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="p-8 text-center text-gray-500">
                      No students found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination Controls */}
          {filteredUsers.length > 0 && (
            <div className="flex items-center justify-between p-4 border-t border-gray-100 dark:border-gray-800">
              <span className="text-xs text-gray-500 dark:text-gray-400">
                Showing {indexOfFirstItem + 1} to{" "}
                {Math.min(indexOfLastItem, filteredUsers.length)} of{" "}
                {filteredUsers.length} results
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPage === 1}
                  className="p-2 text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <div className="flex items-center gap-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (page) => (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`w-8 h-8 flex items-center justify-center rounded-lg text-xs font-medium transition-all ${
                          currentPage === page
                            ? "bg-indigo-50 text-indigo-600 dark:bg-indigo-900/20 dark:text-indigo-400"
                            : "text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800"
                        }`}
                      >
                        {page}
                      </button>
                    )
                  )}
                </div>
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                  className="p-2 text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
