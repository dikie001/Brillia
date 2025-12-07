import { db } from "@/firebase/config.firebase";
import { collection, getDocs } from "firebase/firestore";
import {
    BarChart3,
    CheckCircle2,
    Clock,
    Download,
    FileText,
    PieChart,
    Printer,
    Search,
    TrendingUp,
    Users,
    XCircle
} from "lucide-react";
import { useEffect, useState } from "react";
import {
    Bar,
    BarChart,
    CartesianGrid,
    Cell,
    Legend,
    Line,
    LineChart,
    Pie,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";
import LoaderPage from "./Loader";
import AdminNavbar from "./layout/Navbar";

// --- TYPES ---
interface SystemLog {
  id: string;
  user: string;
  action: string;
  details: string;
  date: string; // ISO string
  type: "success" | "warning" | "info" | "error";
}

interface SubjectStat {
  subject: string;
  avgScore: number;
  totalTests: number;
}

interface DashboardMetrics {
  totalTests: number;
  globalAvgScore: number;
  passRate: number;
  activeUsers24h: number;
  subjectStats: SubjectStat[];
  trendData: { date: string; tests: number }[];
  passFailData: { name: string; value: number }[];
  recentLogs: SystemLog[];
}

// --- MOCK DATA GENERATOR (For charts empty states/padding) ---



const AdminReports = () => {
  const [dateRange, setDateRange] = useState<"7d" | "30d" | "all">("7d");
  const [loading, setLoading] = useState(true);
  const [metrics, setMetrics] = useState<DashboardMetrics>({
    totalTests: 0,
    globalAvgScore: 0,
    passRate: 0,
    activeUsers24h: 0,
    subjectStats: [],
    trendData: [],
    passFailData: [],
    recentLogs: [],
  });

  // --- DATA AGGREGATION ---
  useEffect(() => {
    const fetchReportData = async () => {
      try {
        setLoading(true);

        // 1. Fetch Users to get subcollections
        const usersRef = collection(db, "users");
        const usersSnap = await getDocs(usersRef);
        
        let totalTests = 0;
        let totalScoreSum = 0;
        let passCount = 0;
        let failCount = 0;
        const subjectMap: Record<string, { sum: number; count: number }> = {};
        const dateMap: Record<string, number> = {};
        const logs: SystemLog[] = [];

        // Iterate through all users to aggregate quiz data
        // Note: In a massive production app, you would use Cloud Functions to aggregate this in the background.
        const promises = usersSnap.docs.map(async (userDoc) => {
          const userData = userDoc.data();
          const quizRef = collection(db, "users", userDoc.id, "quizResults");
          const quizSnap = await getDocs(quizRef); // Fetch all quizzes for this user

          // Generate "Log" entry for user registration (Mocking logic for display)
          if(userData.createdAt) {
             logs.push({
                id: `reg-${userDoc.id}`,
                user: userData.fullName,
                action: "New Registration",
                details: "User joined the platform",
                date: userData.createdAt, // Assumes timestamp
                type: "info"
             });
          }

          quizSnap.forEach((doc) => {
            const q = doc.data();
            totalTests++;
            totalScoreSum += q.percentage;

            // Pass/Fail Logic (Assuming 50% pass)
            if (q.percentage >= 50) passCount++;
            else failCount++;

            // Subject Aggregation
            if (!subjectMap[q.subject]) subjectMap[q.subject] = { sum: 0, count: 0 };
            subjectMap[q.subject].sum += q.percentage;
            subjectMap[q.subject].count++;

            // Date Aggregation (Simple date string)
            const dateKey = new Date(q.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
            dateMap[dateKey] = (dateMap[dateKey] || 0) + 1;

            // Generate "Log" entry for quiz
            logs.push({
                id: doc.id,
                user: userData.fullName || "Unknown",
                action: "Quiz Completed",
                details: `Scored ${q.percentage}% in ${q.subject}`,
                date: q.date,
                type: q.percentage >= 50 ? "success" : "warning"
            });
          });
        });

        await Promise.all(promises);

        // Calculate Derived Stats
        const globalAvg = totalTests > 0 ? Math.round(totalScoreSum / totalTests) : 0;
        const passRate = totalTests > 0 ? Math.round((passCount / totalTests) * 100) : 0;

        // Format Subject Data for Chart
        const subjectStats = Object.keys(subjectMap).map(key => ({
            subject: key,
            avgScore: Math.round(subjectMap[key].sum / subjectMap[key].count),
            totalTests: subjectMap[key].count
        })).sort((a,b) => b.avgScore - a.avgScore); // Sort by highest score

        // Format Trend Data
        // Sort dates chronologically (mock sort for simplicity here)
        const trendData = Object.keys(dateMap).map(key => ({
            date: key,
            tests: dateMap[key]
        })).slice(-7); // Keep last 7 entries for cleaner chart

        // Sort Logs by Date Descending
        logs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

        setMetrics({
          totalTests,
          globalAvgScore: globalAvg,
          passRate,
          activeUsers24h: 12, // Mocked for now, requires 'lastLogin' filtering
          subjectStats,
          trendData: trendData.length ? trendData : [{date: 'Today', tests: 0}],
          passFailData: [
            { name: "Passed", value: passCount },
            { name: "Failed", value: failCount }
          ],
          recentLogs: logs.slice(0, 50) // Limit log size
        });

      } catch (error) {
        console.error("Error generating reports:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReportData();
  }, [dateRange]);

  const handlePrint = () => {
    window.print();
  };

  if (loading) return <LoaderPage />;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 pt-24 pb-12 px-4 sm:px-6 lg:px-8 print:bg-white print:pt-0">
      <AdminNavbar />

      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 print:hidden">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
              <FileText className="w-8 h-8 text-indigo-600" /> System Reports
            </h1>
            <p className="text-gray-500 dark:text-gray-400 mt-1">
              Comprehensive analytics and activity logs.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-1 flex items-center">
              {(["7d", "30d", "all"] as const).map((range) => (
                <button
                  key={range}
                  onClick={() => setDateRange(range)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                    dateRange === range
                      ? "bg-indigo-50 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400 shadow-sm"
                      : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  }`}
                >
                  {range === "7d" ? "7 Days" : range === "30d" ? "30 Days" : "All Time"}
                </button>
              ))}
            </div>
            
            <button 
                onClick={handlePrint}
                className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <Printer className="w-4 h-4" /> Print
            </button>
            
            <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow-lg shadow-indigo-200 dark:shadow-indigo-900/20 transition-all">
              <Download className="w-4 h-4" /> Export CSV
            </button>
          </div>
        </div>

        {/* --- KPI CARDS --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm flex flex-col justify-between">
                <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl text-blue-600">
                        <FileText className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-green-500 bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded-full">+12%</span>
                </div>
                <div>
                    <p className="text-gray-500 text-sm font-medium">Total Tests Taken</p>
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white">{metrics.totalTests}</h3>
                </div>
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm flex flex-col justify-between">
                <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl text-emerald-600">
                        <CheckCircle2 className="w-6 h-6" />
                    </div>
                </div>
                <div>
                    <p className="text-gray-500 text-sm font-medium">Global Pass Rate</p>
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white">{metrics.passRate}%</h3>
                </div>
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm flex flex-col justify-between">
                <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-amber-50 dark:bg-amber-900/20 rounded-xl text-amber-600">
                        <TrendingUp className="w-6 h-6" />
                    </div>
                </div>
                <div>
                    <p className="text-gray-500 text-sm font-medium">Avg. Score</p>
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white">{metrics.globalAvgScore}%</h3>
                </div>
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm flex flex-col justify-between">
                <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl text-indigo-600">
                        <Users className="w-6 h-6" />
                    </div>
                </div>
                <div>
                    <p className="text-gray-500 text-sm font-medium">Active Users</p>
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white">{metrics.activeUsers24h}</h3>
                </div>
            </div>
        </div>

        {/* --- CHARTS SECTION --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 print:grid-cols-2">
             {/* Chart 1: Subject Performance */}
             <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-gray-400" /> Subject Performance
                </h3>
                <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={metrics.subjectStats} layout="vertical" margin={{ left: 20 }}>
                            <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#e5e7eb" strokeOpacity={0.5} />
                            <XAxis type="number" domain={[0, 100]} hide />
                            <YAxis dataKey="subject" type="category" width={100} tick={{fontSize: 12}} />
                            <Tooltip 
                                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                cursor={{fill: 'transparent'}}
                            />
                            <Bar dataKey="avgScore" name="Avg Score" radius={[0, 4, 4, 0]} barSize={20}>
                                {metrics.subjectStats.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.avgScore > 70 ? '#10b981' : entry.avgScore > 50 ? '#f59e0b' : '#ef4444'} />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
             </div>

             {/* Chart 2: Pass vs Fail Ratio */}
             <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                    <PieChart className="w-5 h-5 text-gray-400" /> Outcome Distribution
                </h3>
                <div className="h-[300px] w-full flex items-center justify-center">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={metrics.passFailData}
                                cx="50%"
                                cy="50%"
                                innerRadius={80}
                                outerRadius={110}
                                paddingAngle={5}
                                dataKey="value"
                            >
                                {metrics.passFailData.map((_, index) => (
                                    <Cell key={`cell-${index}`} fill={index === 0 ? '#10b981' : '#ef4444'} />
                                ))}
                            </Pie>
                            <Tooltip />
                            <Legend verticalAlign="bottom" height={36} />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
             </div>

             {/* Chart 3: Activity Trend (Full Width) */}
             <div className="lg:col-span-2 bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-gray-400" /> Testing Activity Trend
                </h3>
                <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={metrics.trendData}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" strokeOpacity={0.5} />
                            <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#9ca3af" }} dy={10} />
                            <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#9ca3af" }} />
                            <Tooltip />
                            <Line type="monotone" dataKey="tests" stroke="#6366f1" strokeWidth={4} activeDot={{ r: 8 }} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
             </div>
        </div>

        {/* --- SYSTEM LOGS TABLE --- */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden break-inside-avoid">
            <div className="p-6 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center">
                <h3 className="font-bold text-gray-900 dark:text-white flex items-center gap-2">
                    <Clock className="w-5 h-5 text-gray-400" /> Recent System Logs
                </h3>
                <div className="relative hidden sm:block">
                     <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                     <input type="text" placeholder="Search logs..." className="pl-9 pr-4 py-1.5 text-sm rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-50/50 dark:bg-gray-800/50 text-gray-500 dark:text-gray-400 text-xs uppercase tracking-wider">
                            <th className="p-4 font-semibold w-16 text-center">#</th>
                            <th className="p-4 font-semibold">Event</th>
                            <th className="p-4 font-semibold">User</th>
                            <th className="p-4 font-semibold">Details</th>
                            <th className="p-4 font-semibold text-right">Time</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 dark:divide-gray-800 text-sm">
                        {metrics.recentLogs.length > 0 ? (
                            metrics.recentLogs.map((log, index) => (
                                <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                                    <td className="p-4 text-center text-gray-400">{index + 1}</td>
                                    <td className="p-4">
                                        <div className="flex items-center gap-2">
                                            {log.type === 'success' && <CheckCircle2 className="w-4 h-4 text-emerald-500" />}
                                            {log.type === 'warning' && <XCircle className="w-4 h-4 text-amber-500" />}
                                            {log.type === 'info' && <Users className="w-4 h-4 text-blue-500" />}
                                            <span className={`font-medium ${
                                                log.type === 'success' ? 'text-emerald-700 dark:text-emerald-400' :
                                                log.type === 'warning' ? 'text-amber-700 dark:text-amber-400' :
                                                'text-blue-700 dark:text-blue-400'
                                            }`}>
                                                {log.action}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="p-4 font-medium text-gray-900 dark:text-white">{log.user}</td>
                                    <td className="p-4 text-gray-500 dark:text-gray-400">{log.details}</td>
                                    <td className="p-4 text-right text-gray-400 text-xs whitespace-nowrap">
                                        {new Date(log.date).toLocaleString()}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={5} className="p-8 text-center text-gray-500">No logs found for this period.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            {metrics.recentLogs.length > 0 && (
                <div className="p-4 border-t border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900 text-center">
                    <button className="text-sm font-medium text-indigo-600 hover:text-indigo-700 hover:underline">View All Logs</button>
                </div>
            )}
        </div>

      </div>
    </div>
  );
};

export default AdminReports;