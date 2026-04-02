/* eslint-disable @typescript-eslint/no-explicit-any */
import Navbar from "@/components/app/Navbar";
import { STORAGE_KEYS, TEST_RESULTS } from "@/constants";
import {
  Download,
  FileCheck,
  Filter,
  Loader2,
  TrendingUp,
  Trophy,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
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

interface UserStats {
  testsDone: number;
  averageScore: number;
}

type ReportSource = "all" | "quick-quiz" | "exam-prep";

interface UnifiedResult {
  percentage: number;
  totalQuestions: number;
  date?: string;
  score: number;
  source: "Quick Quiz" | "Exam Prep";
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
  const initialReportType =
    searchParams.get("report") === "exam-prep" ? "exam-prep" : "all";
  const [loading, setLoading] = useState(true);
  const [reportSource, setReportSource] =
    useState<ReportSource>(initialReportType);
  const [allResults, setAllResults] = useState<UnifiedResult[]>([]);
  const [stats, setStats] = useState<UserStats>({
    testsDone: 0,
    averageScore: 0,
  });
  const [graphData, setGraphData] = useState<unknown[]>([]);

  useEffect(() => {
    // 1. Fetch Data from LocalStorage
    const rawResults = localStorage.getItem(TEST_RESULTS);
    const rawGrade9Results = localStorage.getItem(STORAGE_KEYS.GRADE9_RESULTS);

    // 2. Parse Data
    const results: TestResult[] = rawResults ? JSON.parse(rawResults) : [];
    const grade9Results: any[] = rawGrade9Results
      ? JSON.parse(rawGrade9Results)
      : [];

    const normalizedQuickQuiz: UnifiedResult[] = results.map((r) => ({
      ...r,
      source: "Quick Quiz",
    }));

    // Normalize exam prep results to match a shared report shape
    const normalizedGrade9: UnifiedResult[] = grade9Results.map((r) => ({
      percentage: r.percentage,
      totalQuestions: r.total,
      date: r.date,
      score: r.score,
      source: "Exam Prep",
    }));

    setAllResults([...normalizedQuickQuiz, ...normalizedGrade9]);
    setLoading(false);
  }, []);

  useEffect(() => {
    const selectedResults = allResults.filter((item) => {
      if (reportSource === "all") return true;
      if (reportSource === "quick-quiz") return item.source === "Quick Quiz";
      return item.source === "Exam Prep";
    });

    const totalTests = selectedResults.length;

    const totalScoreSum = selectedResults.reduce(
      (sum, item) => sum + item.percentage,
      0
    );
    const avgScore =
      totalTests > 0 ? Math.round(totalScoreSum / totalTests) : 0;

    setStats({
      testsDone: totalTests,
      averageScore: avgScore,
    });

    const formattedGraphData = selectedResults.map((result, index) => ({
      name: `Test ${index + 1}`,
      score: result.percentage,
      date: result.date,
      fullDate: result.date
        ? new Date(result.date).toLocaleDateString()
        : "N/A",
      source: result.source,
    }));

    setGraphData(formattedGraphData);
  }, [allResults, reportSource]);

  const exportReportAsPDF = () => {
    const selectedLabel =
      reportSource === "all"
        ? "All Reports"
        : reportSource === "quick-quiz"
        ? "Quick Quiz"
        : "Exam Prep";

    const selectedResults = allResults.filter((item) => {
      if (reportSource === "all") return true;
      if (reportSource === "quick-quiz") return item.source === "Quick Quiz";
      return item.source === "Exam Prep";
    });

    if (selectedResults.length === 0) return;

    const doc = new jsPDF({ unit: "pt", format: "a4" });
    const pageWidth = doc.internal.pageSize.getWidth();

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

    doc.setTextColor(31, 41, 55);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.text(`Tests Completed: ${stats.testsDone}`, 40, 130);
    doc.text(`Average Score: ${stats.averageScore}%`, 220, 130);

    // Cute mini chart block
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
    const barWidth = (chartW - 70 - (chartPoints.length - 1) * barGap) / Math.max(chartPoints.length, 1);

    chartPoints.forEach((entry, idx) => {
      const safeWidth = Math.max(10, barWidth);
      const x = chartX + 36 + idx * (safeWidth + barGap);
      const h = Math.max(6, (entry.percentage / 100) * 120);
      const y = chartY + 150 - h;

      if (entry.source === "Quick Quiz") {
        doc.setFillColor(59, 130, 246);
      } else {
        doc.setFillColor(99, 102, 241);
      }

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

    doc.setFillColor(59, 130, 246);
    doc.circle(chartX + 16, chartY + chartH + 18, 4, "F");
    doc.setTextColor(51, 65, 85);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.text("Quick Quiz", chartX + 26, chartY + chartH + 21);

    doc.setFillColor(99, 102, 241);
    doc.circle(chartX + 100, chartY + chartH + 18, 4, "F");
    doc.text("Exam Prep", chartX + 110, chartY + chartH + 21);

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

      const when = row.date || "N/A";
      doc.setTextColor(51, 65, 85);
      doc.text(when, 44, yOffset);
      doc.text(row.source, 170, yOffset);
      doc.text(`${row.score}/${row.totalQuestions}`, 280, yOffset);
      doc.text(`${row.percentage}%`, 360, yOffset);
      yOffset += 16;
    });

    doc.save(
      `learning-report-${reportSource}-${new Date().toISOString().slice(0, 10)}.pdf`
    );
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
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500">
            Learning Reports
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            One report center for Quick Quiz and Exam Prep.
          </p>
        </div>

        <div className="mb-6 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
          <div className="inline-flex items-center rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-1 shadow-sm">
            <Filter className="w-4 h-4 text-gray-500 my-auto ml-2 mr-2" />
            {[
              { key: "all", label: "All" },
              { key: "quick-quiz", label: "Quick Quiz" },
              { key: "exam-prep", label: "Exam Prep" },
            ].map((item) => (
              <button
                key={item.key}
                onClick={() => {
                  const nextSource = item.key as ReportSource;
                  setReportSource(nextSource);
                  setSearchParams(
                    nextSource === "all" ? {} : { report: nextSource }
                  );
                }}
                className={`px-3 py-2 rounded-xl text-sm font-semibold transition-colors ${
                  reportSource === item.key
                    ? "bg-indigo-600 text-white"
                    : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            onClick={exportReportAsPDF}
            disabled={stats.testsDone === 0}
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow"
          >
            <Download className="w-4 h-4" /> Export PDF
          </button>
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
