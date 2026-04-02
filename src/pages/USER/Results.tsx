import React, { useEffect, useState, useMemo, useRef } from "react";
import Navbar from "@/components/app/Navbar";
import { STORAGE_KEYS, TEST_RESULTS } from "@/constants";
import {
  Calendar,
  Check,
  Download,
  FileCheck,
  Filter,
  ChevronDown,
  Loader2,
  TrendingUp,
  Trophy,
} from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { jsPDF } from "jspdf";
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

interface Grade9Result {
  percentage: number;
  total: number;
  date?: string;
  score: number;
}

type ReportSource = "all" | "quick-quiz" | "exam-prep";

interface UnifiedResult {
  id: string; // Added for stable React keys
  percentage: number;
  totalQuestions: number;
  date?: string;
  score: number;
  source: "Quick Quiz" | "Exam Prep";
}

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ElementType;
  color: "indigo" | "pink" | "amber";
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{ value: number }>;
  label?: string;
}

// --- THEME UTILS ---
const getColorForScore = (score: number) => {
  if (score >= 90) return "#34d399"; // emerald-400 (Excellent)
  if (score >= 70) return "#6366f1"; // indigo-500 (Good)
  if (score >= 50) return "#fbbf24"; // amber-400 (Average)
  return "#f87171"; // red-400 (Needs Improvement)
};

const Results = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const filterRef = useRef<HTMLDivElement>(null);
  const initialReportType =
    searchParams.get("report") === "exam-prep" ? "exam-prep" : "all";

  const [loading, setLoading] = useState(true);
  const [reportSource, setReportSource] = useState<ReportSource>(initialReportType);
  const [allResults, setAllResults] = useState<UnifiedResult[]>([]);
  const [filterOpen, setFilterOpen] = useState(false);

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
        setFilterOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setFilterOpen(false);
    };

    window.addEventListener("mousedown", handlePointerDown);
    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("mousedown", handlePointerDown);
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  // 1. Fetch Data
  useEffect(() => {
    const rawResults = localStorage.getItem(TEST_RESULTS);
    const rawGrade9Results = localStorage.getItem(STORAGE_KEYS.GRADE9_RESULTS);

    const results: TestResult[] = rawResults ? JSON.parse(rawResults) : [];
    const grade9Results: Grade9Result[] = rawGrade9Results
      ? JSON.parse(rawGrade9Results)
      : [];

    const normalizedQuickQuiz: UnifiedResult[] = results.map((r, i) => ({
      ...r,
      source: "Quick Quiz",
      id: `qq-${i}-${r.date || Date.now()}`,
    }));

    const normalizedGrade9: UnifiedResult[] = grade9Results.map((r, i) => ({
      percentage: r.percentage,
      totalQuestions: r.total,
      date: r.date,
      score: r.score,
      source: "Exam Prep",
      id: `ep-${i}-${r.date || Date.now()}`,
    }));

    setAllResults([...normalizedQuickQuiz, ...normalizedGrade9]);
    setLoading(false);
  }, []);

  // 2. Derive State (useMemo instead of useEffect)
  const selectedResults = useMemo(() => {
    return allResults.filter((item) => {
      if (reportSource === "all") return true;
      if (reportSource === "quick-quiz") return item.source === "Quick Quiz";
      return item.source === "Exam Prep";
    });
  }, [allResults, reportSource]);

  const stats = useMemo(() => {
    const totalTests = selectedResults.length;
    const totalScoreSum = selectedResults.reduce(
      (sum, item) => sum + item.percentage,
      0
    );
    return {
      testsDone: totalTests,
      averageScore: totalTests > 0 ? Math.round(totalScoreSum / totalTests) : 0,
    };
  }, [selectedResults]);

  const graphData = useMemo(() => {
    return selectedResults.map((result, index) => ({
      name: `Test ${index + 1}`,
      score: result.percentage,
      date: result.date,
      fullDate: result.date ? new Date(result.date).toLocaleDateString() : "N/A",
      source: result.source,
    }));
  }, [selectedResults]);

  // 3. Export PDF
  const exportReportAsPDF = () => {
    if (selectedResults.length === 0) return;

    const selectedLabel =
      reportSource === "all"
        ? "All Reports"
        : reportSource === "quick-quiz"
        ? "Quick Quiz"
        : "Exam Prep";

    const doc = new jsPDF({ unit: "pt", format: "a4" });
    const pageWidth = doc.internal.pageSize.getWidth();

    // Header
    doc.setFillColor(37, 99, 235);
    doc.roundedRect(32, 28, pageWidth - 64, 72, 12, 12, "F");
    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.text("Brillia Learning Report", 48, 58);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);
    doc.text(`Category: ${selectedLabel}`, 48, 79);
    doc.text(`Exported: ${new Date().toLocaleString()}`, 220, 79);

    // Stats
    doc.setTextColor(31, 41, 55);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.text(`Tests Completed: ${stats.testsDone}`, 40, 130);
    doc.text(`Average Score: ${stats.averageScore}%`, 220, 130);

    // Mini chart block
    const chartX = 40;
    const chartY = 150;
    const chartW = pageWidth - 80;
    const chartH = 180;

    doc.setFillColor(248, 250, 252);
    doc.roundedRect(chartX, chartY, chartW, chartH, 10, 10, "F");
    doc.setDrawColor(203, 213, 225);
    doc.line(chartX + 30, chartY + 150, chartX + chartW - 24, chartY + 150);
    doc.line(chartX + 30, chartY + 20, chartX + 30, chartY + 150);

    const chartPoints = selectedResults.slice(-10);
    const barGap = 8;
    const barWidth =
      (chartW - 70 - (chartPoints.length - 1) * barGap) /
      Math.max(chartPoints.length, 1);

    chartPoints.forEach((entry, idx) => {
      const safeWidth = Math.max(10, barWidth);
      const x = chartX + 36 + idx * (safeWidth + barGap);
      const h = Math.max(6, (entry.percentage / 100) * 120);
      const y = chartY + 150 - h;

      doc.setFillColor(entry.source === "Quick Quiz" ? 59 : 99, entry.source === "Quick Quiz" ? 130 : 102, entry.source === "Quick Quiz" ? 246 : 241);
      doc.roundedRect(x, y, safeWidth, h, 4, 4, "F");
      doc.setTextColor(71, 85, 105);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(8);
      doc.text(`${entry.percentage}%`, x + 1, y - 4);
    });

    doc.setTextColor(30, 41, 59);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.text("Recent Performance (last 10 tests)", chartX + 14, chartY + 16);

    let yOffset = 370;
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.setTextColor(30, 41, 59);
    doc.text("Recent Attempts", 40, yOffset);
    yOffset += 18;

    const rows = [...selectedResults].reverse().slice(0, 12);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);

    rows.forEach((row, index) => {
      if (yOffset > 790) return;
      if (index % 2 === 0) {
        doc.setFillColor(248, 250, 252);
        doc.rect(40, yOffset - 10, pageWidth - 80, 16, "F");
      }
      doc.setTextColor(51, 65, 85);
      doc.text(row.date || "N/A", 44, yOffset);
      doc.text(row.source, 170, yOffset);
      doc.text(`${row.score}/${row.totalQuestions}`, 280, yOffset);
      doc.text(`${row.percentage}%`, 360, yOffset);
      yOffset += 16;
    });

    doc.save(`learning-report-${reportSource}-${new Date().toISOString().slice(0, 10)}.pdf`);
  };

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
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* HEADER */}
        <div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500">
            Learning Reports
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Track your progress across Quick Quizzes and Exam Prep.
          </p>
        </div>

        {/* CONTROLS */}
        <div className="flex flex-col sm:flex-row gap-4 sm:items-center justify-between">
          <div ref={filterRef} className="relative inline-flex">
            <button
              onClick={() => setFilterOpen((open) => !open)}
              aria-haspopup="menu"
              aria-expanded={filterOpen}
              className="inline-flex items-center gap-2 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-3 shadow-sm text-sm font-semibold text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              <Filter className="w-4 h-4 text-gray-500" />
              {reportSource === "all"
                ? "All"
                : reportSource === "quick-quiz"
                  ? "Quick Quiz"
                  : "Exam Prep"}
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </button>

            {filterOpen && (
              <div className="absolute left-0 top-full z-20 mt-2 w-56 overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-2xl shadow-black/10 dark:shadow-black/40">
                {(["all", "quick-quiz", "exam-prep"] as ReportSource[]).map((key) => {
                  const active = reportSource === key;
                  return (
                    <button
                      key={key}
                      onClick={() => {
                        setReportSource(key);
                        setSearchParams(key === "all" ? {} : { report: key });
                        setFilterOpen(false);
                      }}
                      className={`flex w-full items-center justify-between px-4 py-3 text-sm transition-colors ${
                        active
                          ? "bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300"
                          : "text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800"
                      }`}
                    >
                      <span>{key === "all" ? "All" : key === "quick-quiz" ? "Quick Quiz" : "Exam Prep"}</span>
                      {active && <Check className="w-4 h-4" />}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          <button
            onClick={exportReportAsPDF}
            disabled={stats.testsDone === 0}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-md"
          >
            <Download className="w-4 h-4" /> Export PDF
          </button>
        </div>

        {/* STATS CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          <StatCard
            title="Tests Completed"
            value={stats.testsDone}
            icon={FileCheck}
            color="indigo"
          />
          <StatCard
            title="Average Score"
            value={`${stats.averageScore}%`}
            icon={Trophy}
            color="amber"
          />
        </div>

        {/* MAIN CHART */}
        <div className="bg-white dark:bg-gray-900 rounded-3xl p-6 sm:p-8 shadow-xl shadow-indigo-100/50 dark:shadow-none border border-gray-100 dark:border-gray-800">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg">
                <TrendingUp className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-100">
                Performance History
              </h2>
            </div>

            {/* Legend */}
            <div className="flex flex-wrap gap-4 text-xs font-medium text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-emerald-400" /> Excellent</div>
              <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-indigo-500" /> Good</div>
              <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-amber-400" /> Average</div>
              <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-red-400" /> Low</div>
            </div>
          </div>

          <div className="w-full overflow-x-auto pb-4 custom-scrollbar">
            <div className="h-[400px] min-w-[700px]">
              {graphData.length > 0 ? (
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={graphData} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} strokeOpacity={0.1} />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: "#6b7280", fontSize: 12 }} dy={10} interval={0} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fill: "#6b7280", fontSize: 12 }} domain={[0, 100]} />
                    <Tooltip content={<CustomTooltip />} cursor={{ fill: "transparent" }} />
                    <ReferenceLine y={50} stroke="#ef4444" strokeDasharray="3 3" strokeOpacity={0.5} />
                    <Bar dataKey="score" radius={[8, 8, 8, 8]} barSize={40} animationDuration={1000}>
                      {graphData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={getColorForScore(entry.score)} className="hover:opacity-80 transition-opacity cursor-pointer" />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-gray-400">
                  <FileCheck className="w-12 h-12 mb-3 opacity-20" />
                  <p className="font-medium">No tests taken in this category yet.</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* RECENT RESULTS TABLE (Better Categorization) */}
        {selectedResults.length > 0 && (
          <div className="bg-white dark:bg-gray-900 rounded-3xl p-6 sm:p-8 shadow-xl shadow-indigo-100/50 dark:shadow-none border border-gray-100 dark:border-gray-800">
             <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg">
                <Calendar className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-100">
                Recent Tests
              </h2>
              <button
                onClick={() => navigate(`/results/history${reportSource === "all" ? "" : `?report=${reportSource}`}`)}
                className="ml-auto inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-900/30 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 transition-colors"
              >
                View All
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-800 text-sm text-gray-500 dark:text-gray-400">
                    <th className="pb-3 px-4 font-medium">Date</th>
                    <th className="pb-3 px-4 font-medium">Category</th>
                    <th className="pb-3 px-4 font-medium text-center">Score</th>
                    <th className="pb-3 px-4 font-medium text-right">Percentage</th>
                  </tr>
                </thead>
                <tbody>
                  {[...selectedResults].reverse().slice(0, 4).map((result) => (
                    <tr key={result.id} className="border-b border-gray-100 dark:border-gray-800/50 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                      <td className="py-4 px-4 text-sm text-gray-800 dark:text-gray-200">
                        {result.date ? new Date(result.date).toLocaleDateString() : "N/A"}
                      </td>
                      <td className="py-4 px-4">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          result.source === "Quick Quiz" ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300" : "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300"
                        }`}>
                          {result.source}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-sm text-center text-gray-600 dark:text-gray-400">
                        {result.score} / {result.totalQuestions}
                      </td>
                      <td className="py-4 px-4 text-right">
                        <span className="text-sm font-bold" style={{ color: getColorForScore(result.percentage) }}>
                          {result.percentage}%
                        </span>
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

// --- SUB-COMPONENTS ---

const StatCard: React.FC<StatCardProps> = ({ title, value, icon: Icon, color }) => {
  const styles = {
    indigo: {
      bg: "bg-gradient-to-br from-white to-slate-50 dark:from-gray-900 dark:to-slate-900",
      border: "border-indigo-100 dark:border-indigo-900/40",
      iconColor: "text-indigo-600 dark:text-indigo-400",
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
    <div className={`relative overflow-hidden rounded-3xl p-6 transition-all duration-300 border ${s.bg} ${s.border} shadow-lg ${s.shadow} hover:shadow-xl hover:-translate-y-1`}>
      <div className="relative flex flex-col items-center text-center">
        <div className={`inline-flex items-center justify-center w-14 h-14 bg-white dark:bg-gray-800 rounded-2xl mb-4 shadow-sm ring-4 ${s.ring} transition-transform duration-300 group-hover:scale-110`}>
          <Icon className={`w-7 h-7 ${s.iconColor}`} />
        </div>
        <div className="text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-2">
          {value}
        </div>
        <p className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">
          {title}
        </p>
      </div>
    </div>
  );
};

const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const score = payload[0].value;
    return (
      <div className="bg-white/95 dark:bg-gray-950/95 backdrop-blur-sm p-4 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 text-center min-w-[150px]">
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-1">
          {label}
        </p>
        <p className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
          {score}%
        </p>
        <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${
            score >= 90
              ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400"
              : score >= 70
              ? "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400"
              : "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
          }`}
        >
          {score >= 90 ? "Excellent!" : score >= 70 ? "Good Job" : "Keep Trying"}
        </span>
      </div>
    );
  }
  return null;
};

export default Results;