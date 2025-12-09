/* eslint-disable @typescript-eslint/no-explicit-any */
import Navbar from "@/components/app/Navbar";
import { STORIES_READ, TEST_RESULTS } from "@/constants";
import { FileCheck, Loader2, TrendingUp, Trophy } from "lucide-react";
import { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

// --- TYPES ---
interface TestResult {
  percentage: number;
  totalQuestions: number;
  date?: string;
  score: number;
}

interface UserStats {
  testsDone: number;
  storiesRead: number;
  averageScore: number;
}

// --- THEME UTILS ---
const getColorForScore = (score: number) => {
  if (score >= 90) return "#34d399"; // emerald-400 (Excellent)
  if (score >= 70) return "#6366f1"; // indigo-500 (Good)
  if (score >= 50) return "#fbbf24"; // amber-400 (Average)
  return "#f87171"; // red-400 (Needs Improvement)
};

const Results = () => {
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState<UserStats>({
    testsDone: 0,
    storiesRead: 0,
    averageScore: 0,
  });
  const [graphData, setGraphData] = useState<unknown[]>([]);

  useEffect(() => {
    // 1. Fetch Data from LocalStorage
    const rawResults = localStorage.getItem(TEST_RESULTS);
    // const rawUserInfo = localStorage.getItem("user-info");
    const rawStories = localStorage.getItem(STORIES_READ);

    // 2. Parse Data
    const results: TestResult[] = rawResults ? JSON.parse(rawResults) : [];
    const storiesCount = rawStories ? JSON.parse(rawStories).length : 0;

    // 3. Calculate Stats
    const totalTests = results.length;

    // Calculate Average
    const totalScoreSum = results.reduce(
      (sum, item) => sum + item.percentage,
      0
    );
    const avgScore =
      totalTests > 0 ? Math.round(totalScoreSum / totalTests) : 0;

    setStats({
      testsDone: totalTests,
      storiesRead: storiesCount,
      averageScore: avgScore,
    });

    // 4. Format Graph Data (Test 1, Test 2...)
    const formattedGraphData = results.map((result, index) => ({
      name: `Test ${index + 1}`, // Auto-generates Test 1, Test 2, etc.
      score: result.percentage,
      date: result.date,
      fullDate: result.date
        ? new Date(result.date).toLocaleDateString()
        : "N/A",
    }));

    setGraphData(formattedGraphData);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950">
        <Loader2 className="w-8 h-8 animate-spin text-indigo-500" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 pt-24 pb-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <Navbar />
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500">
            Learning Results
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Overview of your tests and reading milestones.
          </p>
        </div>

        {/* --- STATS ROW --- */}
        <div className="grid grid-cols-2 gap-4 md:gap-6n mb-8">
          <StatCard
            title="Tests Completed"
            value={stats.testsDone}
            icon={FileCheck}
            color="indigo"
          />
          {/* <StatCard
            title="Stories Read"
            value={stats.storiesRead}
            icon={BookOpen}
            color="pink"
          /> */}
          <StatCard
            title="Average Score"
            value={`${stats.averageScore}%`}
            icon={Trophy}
            color="amber"
          />
        </div>

        {/* --- MAIN GRAPH: MARKS PER TEST --- */}
        <div className="bg-white dark:bg-gray-900 rounded-3xl p-6 sm:p-8 shadow-xl shadow-indigo-100/50 dark:shadow-none border border-gray-100 dark:border-gray-800">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg">
                <TrendingUp className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                Test Performance History
              </h2>
            </div>

            {/* Legend for color coding */}
            <div className="hidden sm:flex gap-4 text-xs font-medium text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-emerald-400" />{" "}
                Excellent
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-indigo-500" /> Good
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-amber-400" /> Average
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-red-400" /> Low
              </div>
            </div>
          </div>

          {/* SCROLL WRAPPER START */}
          <div className="w-full overflow-x-auto pb-4">
            <div
              className="h-[400px]"
              // Dynamic width: If > 6 items, use 60px per item. Else, fit to screen (100%).
              style={{
                width:
                  graphData.length > 6 ? `${graphData.length * 60}px` : "100%",
                minWidth: "100%",
              }}
            >
              {graphData.length > 0 ? (
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={graphData as any}
                    margin={{ top: 20, right: 30, left: 0, bottom: 20 }}
                  >
                    <CartesianGrid
                      strokeDasharray="3 3"
                      vertical={false}
                      strokeOpacity={0.1}
                    />
                    <XAxis
                      dataKey="name"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "#6b7280", fontSize: 12 }}
                      dy={10}
                      interval={0} // Forces all labels to show
                    />
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "#6b7280", fontSize: 12 }}
                      domain={[0, 100]}
                    />
                    <Tooltip
                      content={<CustomTooltip />}
                      cursor={{ fill: "transparent" }}
                    />
                    <ReferenceLine
                      y={50}
                      stroke="#ef4444"
                      strokeDasharray="3 3"
                      strokeOpacity={0.5}
                    />
                    <Bar
                      dataKey="score"
                      radius={[8, 8, 8, 8]}
                      barSize={40} // Fixed bar size looks better when scrolling
                      animationDuration={1500}
                    >
                      {graphData.map((entry: any, index: number) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={getColorForScore(entry.score)}
                          className="hover:opacity-80 transition-opacity cursor-pointer"
                        />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-gray-400">
                  <FileCheck className="w-12 h-12 mb-2 opacity-20" />
                  <p>No tests taken yet.</p>
                </div>
              )}
            </div>
          </div>
          {/* SCROLL WRAPPER END */}
        </div>
      </div>
    </div>
  );
};

// --- SUB-COMPONENTS ---

const StatCard = ({ title, value, icon: Icon, color }: any) => {
  const styles: Record<string, any> = {
    indigo: {
      // Very soft background, professional slate-blue feel
      bg: "bg-gradient-to-br from-white to-slate-50 dark:from-gray-900 dark:to-slate-900",
      border: "border-indigo-100 dark:border-indigo-900/40",
      // Icon is colored but not neon
      iconColor: "text-indigo-600 dark:text-indigo-400",
      // Subtle glow effect
      shadow: "shadow-indigo-100/40 dark:shadow-none",
      ring: "ring-indigo-50 dark:ring-indigo-900/20",
    },
    pink: {
      bg: "bg-gradient-to-br from-white to-rose-50 dark:from-gray-900 dark:to-rose-950/20",
      border: "border-rose-100 dark:border-rose-900/40",
      iconColor: "text-rose-600 dark:text-rose-400",
      shadow: "shadow-rose-100/40 dark:shadow-none",
      ring: "ring-rose-50 dark:ring-rose-900/20",
    },
    amber: {
      bg: "bg-gradient-to-br from-white to-amber-50 dark:from-gray-900 dark:to-amber-950/20",
      border: "border-amber-100 dark:border-amber-900/40",
      iconColor: "text-amber-600 dark:text-amber-400",
      shadow: "shadow-amber-100/40 dark:shadow-none",
      ring: "ring-amber-50 dark:ring-amber-900/20",
    },
  };

  const s = styles[color] || styles.indigo;

  return (
    <div
      className={`relative overflow-hidden rounded-2xl p-6 transition-all duration-300 border ${s.bg} ${s.border} shadow-lg ${s.shadow} hover:shadow-xl hover:-translate-y-1`}
    >
      <div className="relative flex flex-col items-center text-center">
        {/* Icon Box: White background makes it pop professionally without extra color noise */}
        <div
          className={`inline-flex items-center justify-center w-12 h-12 bg-white dark:bg-gray-800 rounded-xl mb-4 shadow-sm ring-4 ${s.ring} transition-transform duration-300 group-hover:scale-105`}
        >
          <Icon className={`w-6 h-6 ${s.iconColor}`} />
        </div>

        {/* Value */}
        <div className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight mb-1">
          {value}
        </div>

        {/* Title: Muted gray for better readability */}
        <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
          {title}
        </p>
      </div>
    </div>
  );
};
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const score = payload[0].value;
    return (
      <div className="bg-white/95 dark:bg-gray-950/95 backdrop-blur-sm p-4 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 text-center min-w-[150px]">
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-1">
          {label}
        </p>
        <p className="text-3xl font-bold text-gray-800 dark:text-white mb-1">
          {score}%
        </p>
        <span
          className={`text-xs font-bold px-2 py-1 rounded-full ${
            score >= 90
              ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400"
              : score >= 70
              ? "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400"
              : "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
          }`}
        >
          {score >= 90
            ? "Excellent!"
            : score >= 70
            ? "Good Job"
            : "Keep Trying"}
        </span>
      </div>
    );
  }
  return null;
};

export default Results;
