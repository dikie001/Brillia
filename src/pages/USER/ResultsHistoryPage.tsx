import React, { useEffect, useMemo, useState } from "react";
import Navbar from "@/components/app/Navbar";
import { STORAGE_KEYS, TEST_RESULTS } from "@/constants";
import { ArrowLeft, Calendar, Filter, Loader2 } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

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
  id: string;
  percentage: number;
  totalQuestions: number;
  date?: string;
  score: number;
  source: "Quick Quiz" | "Exam Prep";
}

const ResultsHistoryPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const initialReportType =
    searchParams.get("report") === "exam-prep" ? "exam-prep" : "all";
  const [loading, setLoading] = useState(true);
  const [reportSource] = useState<ReportSource>(initialReportType);
  const [allResults, setAllResults] = useState<UnifiedResult[]>([]);

  useEffect(() => {
    const rawResults = localStorage.getItem(TEST_RESULTS);
    const rawGrade9Results = localStorage.getItem(STORAGE_KEYS.GRADE9_RESULTS);

    const results: TestResult[] = rawResults ? JSON.parse(rawResults) : [];
    const grade9Results: Grade9Result[] = rawGrade9Results ? JSON.parse(rawGrade9Results) : [];

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

  const selectedResults = useMemo(() => {
    return allResults.filter((item) => {
      if (reportSource === "all") return true;
      if (reportSource === "quick-quiz") return item.source === "Quick Quiz";
      return item.source === "Exam Prep";
    });
  }, [allResults, reportSource]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950">
        <Loader2 className="w-8 h-8 animate-spin text-indigo-500" />
      </div>
    );
  }

  const title =
    reportSource === "all" ? "All History" : reportSource === "quick-quiz" ? "Quick Quiz History" : "Exam Prep History";

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 pt-24 pb-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <Navbar currentPage={title} />
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <button
              onClick={() => navigate("/results")}
              className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 mb-3"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Reports
            </button>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500">
              {title}
            </h1>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              All history items in one place.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-3 shadow-sm text-sm font-semibold text-gray-700 dark:text-gray-200">
            <Filter className="w-4 h-4 text-gray-500" />
            {reportSource === "all" ? "All" : reportSource === "quick-quiz" ? "Quick Quiz" : "Exam Prep"}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-3xl p-6 sm:p-8 shadow-xl shadow-indigo-100/50 dark:shadow-none border border-gray-100 dark:border-gray-800">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg">
              <Calendar className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-100">
              History Items
            </h2>
          </div>

          {selectedResults.length === 0 ? (
            <div className="py-16 text-center text-gray-500 dark:text-gray-400">
              No history items available yet.
            </div>
          ) : (
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
                  {[...selectedResults].reverse().map((result) => (
                    <tr key={result.id} className="border-b border-gray-100 dark:border-gray-800/50 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                      <td className="py-4 px-4 text-sm text-gray-800 dark:text-gray-200">
                        {result.date ? new Date(result.date).toLocaleDateString() : "N/A"}
                      </td>
                      <td className="py-4 px-4">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          result.source === "Quick Quiz"
                            ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
                            : "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300"
                        }`}>
                          {result.source}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-sm text-center text-gray-600 dark:text-gray-400">
                        {result.score} / {result.totalQuestions}
                      </td>
                      <td className="py-4 px-4 text-right">
                        <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400">
                          {result.percentage}%
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResultsHistoryPage;