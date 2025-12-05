import React, { useState } from "react";
import {
  Users,
  BookOpen,
  Activity,
  Search,
  MoreVertical,
  Shield,
  FileText,
  BarChart2,
  CheckCircle,
  XCircle,
  Clock,
  Filter
} from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// --- MOCK DATA ---

const adminStats = [
  { label: "Total Users", value: "1,248", change: "+12%", icon: Users, color: "indigo" },
  { label: "Stories Read", value: "8,540", change: "+24%", icon: BookOpen, color: "pink" },
  { label: "Tests Taken", value: "3,102", change: "+8%", icon: FileText, color: "cyan" },
  { label: "Avg. Engagement", value: "45m", change: "+5%", icon: Clock, color: "amber" },
];

const trafficData = [
  { name: "Mon", users: 400, reads: 240 },
  { name: "Tue", users: 300, reads: 139 },
  { name: "Wed", users: 500, reads: 980 },
  { name: "Thu", users: 280, reads: 390 },
  { name: "Fri", users: 590, reads: 480 },
  { name: "Sat", users: 800, reads: 680 },
  { name: "Sun", users: 700, reads: 500 },
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
    lastActive: "Just now",
    testAvg: 92,
    recentTests: [95, 88, 92],
  },
  {
    id: 2,
    name: "Sarah Smith",
    email: "sarah@example.com",
    role: "Student",
    status: "Active",
    storiesRead: 23,
    logins: 45,
    lastActive: "2h ago",
    testAvg: 78,
    recentTests: [75, 80, 78],
  },
  {
    id: 3,
    name: "John Doe",
    email: "john@example.com",
    role: "Student",
    status: "Inactive",
    storiesRead: 5,
    logins: 12,
    lastActive: "5d ago",
    testAvg: 65,
    recentTests: [60, 70, 65],
  },
  {
    id: 4,
    name: "Emily Chen",
    email: "emily@example.com",
    role: "Student",
    status: "Active",
    storiesRead: 67,
    logins: 89,
    lastActive: "1d ago",
    testAvg: 88,
    recentTests: [90, 85, 88],
  },
  {
    id: 5,
    name: "Michael Brown",
    email: "mike@example.com",
    role: "Student",
    status: "Warning",
    storiesRead: 2,
    logins: 4,
    lastActive: "2w ago",
    testAvg: 45,
    recentTests: [40, 50, 45],
  },
];

const recentActivities = [
  { user: "Dikie User", action: "Created a new test", time: "10 min ago", type: "admin" },
  { user: "Sarah Smith", action: "Completed 'Unit 4'", time: "32 min ago", type: "learning" },
  { user: "New User", action: "Registered an account", time: "1 hour ago", type: "account" },
  { user: "System", action: "Backup completed", time: "3 hours ago", type: "system" },
];

// --- COMPONENTS ---

const DashboardCard = ({ stat }: any) => {
  const colorMap: any = {
    indigo: "bg-indigo-50 text-indigo-600 dark:bg-indigo-900/20 dark:text-indigo-400",
    pink: "bg-pink-50 text-pink-600 dark:bg-pink-900/20 dark:text-pink-400",
    cyan: "bg-cyan-50 text-cyan-600 dark:bg-cyan-900/20 dark:text-cyan-400",
    amber: "bg-amber-50 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400",
  };

  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition-all">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{stat.label}</p>
          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-1">{stat.value}</h3>
        </div>
        <div className={`p-2 rounded-lg ${colorMap[stat.color]}`}>
          <stat.icon className="w-5 h-5" />
        </div>
      </div>
      <div className="mt-4 flex items-center text-sm">
        <span className="text-emerald-500 font-medium">{stat.change}</span>
        <span className="text-gray-400 ml-2">from last month</span>
      </div>
    </div>
  );
};

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState<"overview" | "users">("overview");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredUsers = usersData.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Admin Dashboard</h1>
            <p className="text-gray-500 dark:text-gray-400">Manage users, view statistics, and monitor performance.</p>
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
          <div className="space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {adminStats.map((stat, idx) => (
                <DashboardCard key={idx} stat={stat} />
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Traffic Chart */}
              <div className="lg:col-span-2 bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
                <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-4">App Activity</h3>
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
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#1f2937', borderColor: '#374151', color: '#fff' }}
                        itemStyle={{ color: '#fff' }}
                      />
                      <Area type="monotone" dataKey="users" stroke="#6366f1" fillOpacity={1} fill="url(#colorUsers)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
                <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-4">Activity Log</h3>
                <div className="space-y-4">
                  {recentActivities.map((act, idx) => (
                    <div key={idx} className="flex gap-3 items-start">
                      <div className={`mt-1 w-2 h-2 rounded-full flex-shrink-0 ${
                        act.type === 'admin' ? 'bg-indigo-500' : 
                        act.type === 'learning' ? 'bg-green-500' :
                        act.type === 'account' ? 'bg-blue-500' : 'bg-gray-400'
                      }`} />
                      <div>
                        <p className="text-sm text-gray-800 dark:text-gray-200">
                          <span className="font-semibold">{act.user}</span> {act.action}
                        </p>
                        <p className="text-xs text-gray-500">{act.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-6 py-2 text-sm text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 rounded-lg transition-colors">
                  View All Logs
                </button>
              </div>
            </div>
          </div>
        )}

        {/* --- USERS TAB --- */}
        {activeTab === "users" && (
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
            
            {/* Toolbar */}
            <div className="p-4 border-b border-gray-100 dark:border-gray-800 flex flex-col sm:flex-row gap-4 justify-between items-center">
              <div className="relative w-full sm:w-96">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search users by name or email..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
              </div>
              <div className="flex gap-2">
                 <button className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                    <Filter className="w-4 h-4" /> Filter
                 </button>
                 <button className="flex items-center gap-2 px-3 py-2 text-sm text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-lg shadow-indigo-500/20 transition-all">
                    <Users className="w-4 h-4" /> Add User
                 </button>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50/50 dark:bg-gray-800/50 text-gray-500 dark:text-gray-400 text-xs uppercase tracking-wider">
                    <th className="p-4 font-semibold">User Profile</th>
                    <th className="p-4 font-semibold">Status</th>
                    <th className="p-4 font-semibold text-center">Stories</th>
                    <th className="p-4 font-semibold text-center">Logins</th>
                    <th className="p-4 font-semibold">Avg Score</th>
                    <th className="p-4 font-semibold text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                  {filteredUsers.map((user) => (
                    <tr key={user.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors group">
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-400 to-purple-400 flex items-center justify-center text-white font-bold text-sm">
                            {user.name.charAt(0)}
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900 dark:text-gray-100">{user.name}</p>
                            <p className="text-xs text-gray-500">{user.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-4">
                        <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          user.status === 'Active' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' :
                          user.status === 'Inactive' ? 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400' :
                          'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'
                        }`}>
                          {user.status === 'Active' && <CheckCircle className="w-3 h-3"/>}
                          {user.status === 'Inactive' && <XCircle className="w-3 h-3"/>}
                          {user.status}
                        </span>
                      </td>
                      <td className="p-4 text-center font-medium text-gray-700 dark:text-gray-300">
                        {user.storiesRead}
                      </td>
                      <td className="p-4 text-center text-gray-600 dark:text-gray-400 text-sm">
                        {user.logins}
                        <span className="block text-[10px] text-gray-400">Last: {user.lastActive}</span>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                           <div className="w-full max-w-[80px] h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                              <div 
                                style={{ width: `${user.testAvg}%` }} 
                                className={`h-full rounded-full ${
                                  user.testAvg > 80 ? 'bg-emerald-500' : 
                                  user.testAvg > 60 ? 'bg-indigo-500' : 'bg-amber-500'
                                }`} 
                              />
                           </div>
                           <span className="text-sm font-bold text-gray-700 dark:text-gray-200">{user.testAvg}%</span>
                        </div>
                      </td>
                      <td className="p-4 text-right">
                        <button className="p-2 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 rounded-lg transition-all">
                          <MoreVertical className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {filteredUsers.length === 0 && (
                <div className="text-center py-12 text-gray-500">
                  <Shield className="w-12 h-12 mx-auto mb-3 opacity-20" />
                  <p>No users found matching "{searchTerm}"</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;