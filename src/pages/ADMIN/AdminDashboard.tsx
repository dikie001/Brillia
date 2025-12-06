/* eslint-disable @typescript-eslint/no-explicit-any */
import Navbar from "@/components/app/Navbar";
import { db } from "@/firebase/config.firebase";
import { collection, getDocs, query } from "firebase/firestore";
import {
  Activity,
  BookOpen,
  Calendar,
  Clock,
  Eye,
  Filter,
  Search,
  Target,
  Trophy,
  Users,
  X
} from "lucide-react";
import { useEffect, useState } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import LoaderPage from "./Loader";

// --- TYPES BASED ON YOUR DATA ---

interface QuizResult {
  date: string; // "12/6/2025"
  percentage: number; // 45
  score: number; // 9
  subject: string; // "Pre-Technical..."
  testNumber: number; // 9
  timeTaken: number; // 30
  totalQuestions: number; // 20
}

interface UserData {
  id: string; // "18adff..."
  fullName: string; // "Dickens Omondi"
  age: string; // "34"
  favoriteSubject: string; // "pre-tech studies"
  hobby: string; // "Swimming"
  last: string; // "2025-12-06"
  totalLogins: number; // 1
  // Calculated fields we will add after fetching:
  calculatedAvg: number;
  quizHistory: QuizResult[];
}



// --- MODAL COMPONENT ---
const UserDetailModal = ({
  user,
  onClose,
}: {
  user: UserData;
  onClose: () => void;
}) => {
  if (!user) return null;

  return (
<div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
  <div
    className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm transition-opacity"
    onClick={onClose}
  />
  <div className="relative w-full max-w-4xl max-h-[85vh] overflow-y-auto bg-white dark:bg-gray-900 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-800 flex flex-col animate-in fade-in zoom-in-95 duration-200">
    
    {/* Header Background: Changed to solid color */}
    <div className="relative h-32 bg-indigo-600 shrink-0">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full backdrop-blur-md transition-all"
      >
        <X className="w-5 h-5" />
      </button>
    </div>

    <div className="px-8 pb-8">
      {/* User Profile Info */}
      <div className="relative flex justify-between items-end -mt-12 mb-6">
        <div className="flex items-end gap-4">
          <div className="w-24 h-24 rounded-2xl bg-white dark:bg-gray-800 p-1 shadow-xl shrink-0">
            <div className="w-full h-full rounded-xl bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-3xl font-bold text-indigo-600 dark:text-indigo-400 uppercase">
              {user.fullName.charAt(0)}
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
        {/* Left Column: Personal Info */}
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

        {/* Right Column: Key Metrics */}
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
                ? Math.max(...user.quizHistory.map((q: any) => q.percentage))
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

      {/* Graph Section */}
      <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-2xl border border-gray-100 dark:border-gray-800">
        <div className="flex items-center gap-2 mb-6">
          <Trophy className="w-5 h-5 text-indigo-500" />
          <h3 className="font-bold text-gray-800 dark:text-gray-100">
            Performance History
          </h3>
        </div>
        
        {/* Mobile Scroll Wrapper */}
        <div className="w-full overflow-x-auto pb-2">
          <div className="h-[250px] w-full min-w-[500px]">
            {user.quizHistory && user.quizHistory.length > 0 ? (
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={user.quizHistory}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                    strokeOpacity={0.1}
                  />
                  <XAxis
                    dataKey="date"
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
                  <Tooltip
                    contentStyle={{
                      borderRadius: "12px",
                      border: "none",
                      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="percentage"
                    name="Score (%)"
                    stroke="#6366f1"
                    strokeWidth={3}
                    dot={{
                      r: 4,
                      fill: "#6366f1",
                      strokeWidth: 2,
                      stroke: "#fff",
                    }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
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
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUser, setSelectedUser] = useState<UserData | null>(null);

  // Data States
  const [users, setUsers] = useState<UserData[]>([]);
  const [loading, setLoading] = useState(true);

  // --- FETCH DATA ---
  useEffect(() => {
    const fetchUsersAndScores = async () => {
      try {
        setLoading(true);

        // 1. Fetch Users Collection
        const usersRef = collection(db, "users");
        // Sort by 'last' active date descending
        const q = query(usersRef);
        const userSnapshot = await getDocs(q);

        // 2. Map through users and fetch their Quiz Results Sub-collection
        const userDataPromises = userSnapshot.docs.map(async (userDoc) => {
          const rawUser = userDoc.data();
          const userId = userDoc.id; // Or rawUser.id since it's in the data too

          // Fetch Sub-collection: "quizResults"
          // <--- CHANGE "quizResults" BELOW IF YOUR COLLECTION IS NAMED DIFFERENTLY
          const quizRef = collection(db, "users", userId, "quizResults");
          const quizSnapshot = await getDocs(quizRef);

          const quizzes: QuizResult[] = quizSnapshot.docs.map(
            (doc) => doc.data() as QuizResult
          );

          // Calculate Average
          let totalPercent = 0;
          if (quizzes.length > 0) {
            totalPercent = quizzes.reduce(
              (sum, quiz) => sum + quiz.percentage,
              0
            );
          }
          const avg =
            quizzes.length > 0 ? Math.round(totalPercent / quizzes.length) : 0;

          // Return combined data
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

        // Wait for all sub-collections to load
        const fullData = await Promise.all(userDataPromises);

        setUsers(fullData);
      } catch (error) {
        console.error("Error fetching admin data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsersAndScores();
  }, []);

  // Filter Logic
  const filteredUsers = users.filter((user) =>
    user.fullName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Stats Logic
  const totalUsers = users.length;
  // Sum of all tests taken by all users
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

  if (loading) {
    return (
<LoaderPage/>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <Navbar />
      <UserDetailModal
        user={selectedUser!}
        onClose={() => setSelectedUser(null)}
      />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Admin Dashboard
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              Manage students and monitor performance.
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
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

        {/* User Table Container */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
          {/* Table Header/Search */}
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

          {/* Table */}
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
                {filteredUsers.length > 0 ? (
                  filteredUsers.map((user) => (
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
                        { user.totalLogins}
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
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
