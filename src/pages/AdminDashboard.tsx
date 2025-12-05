import Navbar from "@/components/app/Navbar";
import {
    Activity as ActivityIcon,
    BookOpen,
    Calendar,
    Clock,
    Eye,
    Filter,
    Mail,
    Search,
    Shield,
    Trophy,
    Users,
    X
} from "lucide-react";
import { useState } from "react";
import {
    Area,
    AreaChart,
    CartesianGrid,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

// --- MOCK DATA ---

const adminStats = [
  { label: "Total Users", value: "1,248", change: "+12%", icon: Users, color: "indigo" },
  { label: "Stories Read", value: "8,540", change: "+24%", icon: BookOpen, color: "pink" },
  { label: "Avg. Engagement", value: "45m", change: "+5%", icon: Clock, color: "amber" },
];

const trafficData = [
  { name: "Mon", users: 400 },
  { name: "Tue", users: 300 },
  { name: "Wed", users: 500 },
  { name: "Thu", users: 280 },
  { name: "Fri", users: 590 },
  { name: "Sat", users: 800 },
  { name: "Sun", users: 700 },
];

// Restored Activity Data
const recentActivities = [
  { user: "Dikie User", action: "Created a new test", time: "10 min ago", type: "admin" },
  { user: "Sarah Smith", action: "Completed 'Unit 4'", time: "32 min ago", type: "learning" },
  { user: "New User", action: "Registered an account", time: "1 hour ago", type: "account" },
  { user: "System", action: "Backup completed", time: "3 hours ago", type: "system" },
];

const usersData = [
  {
    id: 1,
    name: "Dikie User",
    email: "dikie@example.com",
    role: "Admin",
    status: "Active",
    storiesRead: 45,
    logins: 128,
    joinedDate: "2023-01-15",
    lastActive: "Just now",
    testAvg: 92,
    recentTests: [
      { test: "Unit 1", score: 85 },
      { test: "Unit 2", score: 92 },
      { test: "Midterm", score: 95 },
      { test: "Unit 3", score: 88 },
      { test: "Final", score: 98 },
    ],
  },
  {
    id: 2,
    name: "Sarah Smith",
    email: "sarah@example.com",
    role: "Student",
    status: "Active",
    storiesRead: 23,
    logins: 45,
    joinedDate: "2023-03-20",
    lastActive: "2h ago",
    testAvg: 78,
    recentTests: [
      { test: "Unit 1", score: 70 },
      { test: "Unit 2", score: 75 },
      { test: "Midterm", score: 82 },
      { test: "Unit 3", score: 78 },
      { test: "Final", score: 85 },
    ],
  },
];

// --- MODAL COMPONENT ---

const UserDetailModal = ({ user, onClose }: { user: any; onClose: () => void }) => {
  if (!user) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-gray-900 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-800 flex flex-col animate-in fade-in zoom-in-95 duration-200">
        <div className="relative h-32 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
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
              <div className="w-24 h-24 rounded-2xl bg-white dark:bg-gray-800 p-1 shadow-xl">
                 <div className="w-full h-full rounded-xl bg-gradient-to-br from-indigo-400 to-cyan-400 flex items-center justify-center text-3xl font-bold text-white">
                    {user.name.charAt(0)}
                 </div>
              </div>
              <div className="mb-1">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{user.name}</h2>
                <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
                   <Shield className="w-3 h-3" /> {user.role}
                   <span>•</span>
                   <span className={user.status === 'Active' ? "text-emerald-500" : "text-amber-500"}>{user.status}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="space-y-4">
               <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Contact & Meta</h3>
               <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                  <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg"><Mail className="w-4 h-4"/></div>
                  <span className="text-sm">{user.email}</span>
               </div>
               <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                  <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg"><Calendar className="w-4 h-4"/></div>
                  <span className="text-sm">Joined {user.joinedDate}</span>
               </div>
               <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                  <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg"><ActivityIcon className="w-4 h-4"/></div>
                  <span className="text-sm">Last active {user.lastActive}</span>
               </div>
            </div>

            <div className="col-span-2 grid grid-cols-3 gap-4">
               <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-2xl border border-indigo-100 dark:border-indigo-800/30">
                  <p className="text-xs text-indigo-500 font-bold uppercase">Logins</p>
                  <p className="text-2xl font-bold text-indigo-700 dark:text-indigo-300">{user.logins}</p>
               </div>
               <div className="bg-pink-50 dark:bg-pink-900/20 p-4 rounded-2xl border border-pink-100 dark:border-pink-800/30">
                  <p className="text-xs text-pink-500 font-bold uppercase">Stories</p>
                  <p className="text-2xl font-bold text-pink-700 dark:text-pink-300">{user.storiesRead}</p>
               </div>
               <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-2xl border border-amber-100 dark:border-amber-800/30">
                  <p className="text-xs text-amber-500 font-bold uppercase">Avg Score</p>
                  <p className="text-2xl font-bold text-amber-700 dark:text-amber-300">{user.testAvg}%</p>
               </div>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-2xl border border-gray-100 dark:border-gray-800">
             <div className="flex items-center gap-2 mb-6">
                <Trophy className="w-5 h-5 text-indigo-500" />
                <h3 className="font-bold text-gray-800 dark:text-gray-100">Performance History</h3>
             </div>
             <div className="h-[250px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                   <LineChart data={user.recentTests}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} strokeOpacity={0.1} />
                      <XAxis dataKey="test" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#9ca3af'}} dy={10} />
                      <YAxis domain={[0, 100]} axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#9ca3af'}} />
                      <Tooltip 
                        contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="score" 
                        stroke="#6366f1" 
                        strokeWidth={3} 
                        dot={{ r: 4, fill: "#6366f1", strokeWidth: 2, stroke: "#fff" }} 
                        activeDot={{ r: 6 }}
                      />
                   </LineChart>
                </ResponsiveContainer>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

// --- MAIN DASHBOARD ---

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState<"overview" | "users">("overview");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUser, setSelectedUser] = useState<any>(null);

  const filteredUsers = usersData.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <Navbar/>
      <UserDetailModal user={selectedUser} onClose={() => setSelectedUser(null)} />

      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Admin Dashboard</h1>
            <p className="text-gray-500 dark:text-gray-400">Manage users and monitor performance.</p>
          </div>
          <div className="flex p-1 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
            <button
              onClick={() => setActiveTab("overview")}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                activeTab === "overview"
                  ? "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300"
                  : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800"
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab("users")}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                activeTab === "users"
                  ? "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300"
                  : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800"
              }`}
            >
              User Management
            </button>
          </div>
        </div>

        {/* --- OVERVIEW TAB --- */}
        {activeTab === "overview" && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
             
             {/* Stats Grid */}
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {adminStats.map((stat, idx) => (
                <div key={idx} className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition-all">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{stat.label}</p>
                      <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-1">{stat.value}</h3>
                    </div>
                    <div className={`p-2 rounded-lg ${
                      stat.color === 'indigo' ? "bg-indigo-50 text-indigo-600" :
                      stat.color === 'pink' ? "bg-pink-50 text-pink-600" :
                      "bg-amber-50 text-amber-600"
                    }`}>
                      <stat.icon className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Main Content Grid (Chart + Activity Log) */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* Traffic Chart (Takes 2/3 width on large screens) */}
              <div className="lg:col-span-2 bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
                  <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-4">Traffic Overview</h3>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={trafficData}>
                        <defs>
                          <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3} />
                            <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} strokeOpacity={0.1} />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#9ca3af' }} />
                        <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#9ca3af' }} />
                        <Tooltip />
                        <Area type="monotone" dataKey="users" stroke="#6366f1" fillOpacity={1} fill="url(#colorUsers)" />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
              </div>

              {/* Activity Log (Takes 1/3 width, Restored) */}
              <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
                <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-4">Activity Log</h3>
                <div className="space-y-4">
                  {recentActivities.map((act, idx) => (
                    <div key={idx} className="flex gap-3 items-start p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                      <div className={`mt-1.5 w-2 h-2 rounded-full flex-shrink-0 ${
                        act.type === 'admin' ? 'bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.6)]' : 
                        act.type === 'learning' ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]' :
                        act.type === 'account' ? 'bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]' : 'bg-gray-400'
                      }`} />
                      <div>
                        <p className="text-sm text-gray-800 dark:text-gray-200 leading-tight">
                          <span className="font-semibold text-indigo-600 dark:text-indigo-400">{act.user}</span> {act.action}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-500 mt-1 flex items-center gap-1">
                           <Clock className="w-3 h-3" /> {act.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-6 py-2 text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 rounded-lg transition-colors border border-indigo-100 dark:border-indigo-900/30">
                  View All Logs
                </button>
              </div>

            </div>
          </div>
        )}

        {/* --- USERS TAB --- */}
        {activeTab === "users" && (
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="p-4 border-b border-gray-100 dark:border-gray-800 flex flex-col sm:flex-row gap-4 justify-between items-center">
              <div className="relative w-full sm:w-96">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search users..."
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
                    <th className="p-4 font-semibold">User</th>
                    <th className="p-4 font-semibold text-center">Stories</th>
                    <th className="p-4 font-semibold text-center">Logins</th>
                    <th className="p-4 font-semibold">Avg Score</th>
                    <th className="p-4 font-semibold text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                  {filteredUsers.map((user) => (
                    <tr key={user.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-bold text-xs">
                            {user.name.charAt(0)}
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900 dark:text-gray-100 text-sm">{user.name}</p>
                            <p className="text-xs text-gray-500">{user.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 text-center font-medium text-gray-700 dark:text-gray-300">
                        {user.storiesRead}
                      </td>
                      <td className="p-4 text-center text-gray-600 dark:text-gray-400 text-sm">
                        {user.logins}
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                           <div className="w-16 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                              <div 
                                style={{ width: `${user.testAvg}%` }} 
                                className={`h-full rounded-full ${user.testAvg > 80 ? 'bg-emerald-500' : 'bg-indigo-500'}`} 
                              />
                           </div>
                           <span className="text-xs font-bold text-gray-600 dark:text-gray-400">{user.testAvg}%</span>
                        </div>
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
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;