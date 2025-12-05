import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  ReferenceLine,
} from "recharts";
import { BookOpen, FileCheck, Trophy, TrendingUp } from "lucide-react";
import Navbar from "@/components/app/Navbar";

// --- MOCK DATA ---
const userStats = {
  testsDone: 12,
  storiesRead: 45,
  averageScore: 78,
};

const testResultsData = [
  { name: "Unit 1", score: 65, date: "2023-10-01" },
  { name: "Vocab A", score: 85, date: "2023-10-05" },
  { name: "Grammar", score: 45, date: "2023-10-10" }, // Low score example
  { name: "Unit 2", score: 90, date: "2023-10-15" },
  { name: "Oral 1", score: 95, date: "2023-10-20" },
  { name: "Unit 3", score: 70, date: "2023-10-25" },
  { name: "Final A", score: 88, date: "2023-11-01" },
];

// --- THEME UTILS ---
const getColorForScore = (score: number) => {
  if (score >= 90) return "#34d399"; // emerald-400 (Excellent)
  if (score >= 70) return "#6366f1"; // indigo-500 (Good)
  if (score >= 50) return "#fbbf24"; // amber-400 (Average)
  return "#f87171"; // red-400 (Needs Improvement)
};

const Results = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 pt-24 pb-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
        <Navbar/>
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <StatCard
            title="Tests Completed"
            value={userStats.testsDone}
            icon={FileCheck}
            color="indigo"
          />
          <StatCard
            title="Stories Read"
            value={userStats.storiesRead}
            icon={BookOpen}
            color="pink"
          />
          <StatCard
            title="Average Score"
            value={`${userStats.averageScore}%`}
            icon={Trophy}
            color="amber"
          />
        </div>

        {/* --- MAIN GRAPH: MARKS PER TEST --- */}
        <div className="bg-white dark:bg-gray-900 rounded-3xl p-6 sm:p-8 shadow-xl shadow-indigo-100/50 dark:shadow-none border border-gray-100 dark:border-gray-800">
          <div className="flex items-center justify-between mb-8">
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
              <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-emerald-400"/> Excellent</div>
              <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-indigo-500"/> Good</div>
              <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-amber-400"/> Average</div>
              <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-red-400"/> Low</div>
            </div>
          </div>

          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={testResultsData}
                margin={{ top: 20, right: 30, left: 0, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} strokeOpacity={0.1} />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: "#6b7280", fontSize: 12 }} 
                  dy={10} 
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: "#6b7280", fontSize: 12 }}
                  domain={[0, 100]}
                />
                <Tooltip content={<CustomTooltip />} cursor={{fill: 'transparent'}} />
                <ReferenceLine y={50} stroke="#ef4444" strokeDasharray="3 3" strokeOpacity={0.5} label={{ value: 'Pass Line', position: 'insideTopRight', fill: '#ef4444', fontSize: 10 }} />
                
                <Bar dataKey="score" radius={[8, 8, 8, 8]} barSize={50} animationDuration={1500}>
                  {testResultsData.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={getColorForScore(entry.score)} 
                      // Add a subtle glow effect filter via inline SVG if needed, but keeping it clean for now
                      className="hover:opacity-80 transition-opacity cursor-pointer"
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>
    </div>
  );
};

// --- SUB-COMPONENTS ---

const StatCard = ({ title, value, icon: Icon, color }: any) => {
  // Dynamic color classes based on the prop
  const colorStyles: any = {
    indigo: "from-indigo-500 to-blue-500 text-indigo-500 bg-indigo-50 dark:bg-indigo-900/20",
    pink: "from-pink-500 to-rose-500 text-pink-500 bg-pink-50 dark:bg-pink-900/20",
    amber: "from-amber-400 to-orange-500 text-amber-500 bg-amber-50 dark:bg-amber-900/20",
  };

  return (
    <div className="relative overflow-hidden bg-white dark:bg-gray-900 rounded-3xl p-6 shadow-lg border border-gray-100 dark:border-gray-800 group hover:-translate-y-1 transition-transform duration-300">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">{title}</p>
          <h3 className="text-4xl font-black text-gray-800 dark:text-gray-100 tracking-tight">
            {value}
          </h3>
        </div>
        <div className={`p-3 rounded-2xl ${colorStyles[color].split(" ")[3]} ${colorStyles[color].split(" ")[4]}`}>
          <Icon className={`w-6 h-6 ${colorStyles[color].split(" ")[2]}`} />
        </div>
      </div>
      
      {/* Decorative Bottom Bar */}
      <div className={`absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r ${colorStyles[color].split(" ").slice(0, 2).join(" ")} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
    </div>
  );
};

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const score = payload[0].value;
    return (
      <div className="bg-white/95 dark:bg-gray-950/95 backdrop-blur-sm p-4 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 text-center min-w-[150px]">
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-1">{label}</p>
        <p className="text-3xl font-bold text-gray-800 dark:text-white mb-1">
          {score}%
        </p>
        <span className={`text-xs font-bold px-2 py-1 rounded-full ${
          score >= 90 ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400" :
          score >= 70 ? "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400" :
          "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
        }`}>
          {score >= 90 ? "Excellent!" : score >= 70 ? "Good Job" : "Keep Trying"}
        </span>
      </div>
    );
  }
  return null;
};

export default Results 