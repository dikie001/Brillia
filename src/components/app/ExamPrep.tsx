import React, { useState, useEffect, useRef } from "react";
import {
  BarChart3,
  BookOpen,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  Download,
  History,
  XCircle,
  RotateCcw,
  Search,
  Trophy,
  Target,
  ArrowRight,
  Send,
  TrendingUp,
  RefreshCcw,
} from "lucide-react";
import grade9Subjects, { type SubjectInfo } from "@/jsons/grade9";
import type { Grade9Question } from "@/types";
import { STORAGE_KEYS } from "@/constants";
import useSound from "@/hooks/useSound";
import { useNavigate } from "react-router-dom";

interface ExamResult {
  subjectId: string;
  subjectName: string;
  score: number;
  total: number;
  percentage: number;
  date: string;
}

type ExamView = "subjects" | "quiz" | "results" | "history" | "report";

const QUESTIONS_PER_SESSION = 10;

const validateAnswer = (
  userAnswer: string,
  question: Grade9Question,
): { isCorrect: boolean; matchedAnswer: string | null } => {
  const normalise = (s: string) =>
    s
      .trim()
      .toLowerCase()
      .replace(/\s+/g, " ")
      .replace(/[.!?]+$/, "");

  const userNorm = normalise(userAnswer);
  if (!userNorm) return { isCorrect: false, matchedAnswer: null };

  const accepted =
    question.acceptedAnswers && question.acceptedAnswers.length > 0
      ? question.acceptedAnswers
      : [question.answer];

  for (const ans of accepted) {
    if (normalise(ans) === userNorm) {
      return { isCorrect: true, matchedAnswer: ans };
    }
  }

  return { isCorrect: false, matchedAnswer: null };
};

interface ExamPrepProps {
  initialView?: "subjects" | "history" | "report";
}

const ExamPrep: React.FC<ExamPrepProps> = ({ initialView = "subjects" }) => {
  const [view, setView] = useState<ExamView>(initialView);
  const [selectedSubject, setSelectedSubject] = useState<SubjectInfo | null>(
    null,
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [sessionQuestions, setSessionQuestions] = useState<Grade9Question[]>(
    [],
  );
  const [history, setHistory] = useState<ExamResult[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [userAnswer, setUserAnswer] = useState("");
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const inputRef = useRef<HTMLTextAreaElement>(null);
  const navigate = useNavigate();
  const { playSuccess, playError, playFinish, playSend } = useSound();

  useEffect(() => {
    setView(initialView);
  }, [initialView]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.GRADE9_RESULTS);
      if (saved) setHistory(JSON.parse(saved));
    } catch (e) {
      console.error("Error loading exam results:", e);
    }
  }, []);

  useEffect(() => {
    if (view === "quiz" && !showFeedback && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [currentIndex, view, showFeedback]);

  const startExam = (subject: SubjectInfo) => {
    playSend();
    const shuffled = [...subject.questions].sort(() => Math.random() - 0.5);
    const questions = shuffled.slice(0, QUESTIONS_PER_SESSION);
    setSelectedSubject(subject);
    setSessionQuestions(questions);
    setCurrentIndex(0);
    setScore(0);
    setUserAnswer("");
    setShowFeedback(false);
    setView("quiz");
  };

  const handleSubmitAnswer = () => {
    if (!userAnswer.trim() || showFeedback) return;

    const q = sessionQuestions[currentIndex];
    if (!q) return;

    const result = validateAnswer(userAnswer, q);
    const correct = result.isCorrect;

    setIsCorrect(correct);
    setShowFeedback(true);

    if (correct) {
      playSuccess();
      setScore((s) => s + 1);
    } else {
      playError();
    }
  };

  const handleNext = () => {
    if (currentIndex < sessionQuestions.length - 1) {
      setCurrentIndex((i) => i + 1);
      setUserAnswer("");
      setShowFeedback(false);
    } else {
      finishExam();
    }
  };

  const finishExam = () => {
    playFinish();
    const finalScore = score;
    const result: ExamResult = {
      subjectId: selectedSubject!.id,
      subjectName: selectedSubject!.name,
      score: finalScore,
      total: sessionQuestions.length,
      percentage: Math.round((finalScore / sessionQuestions.length) * 100),
      date: new Date().toLocaleDateString(),
    };
    const updated = [...history, result];
    setHistory(updated);
    try {
      localStorage.setItem(
        STORAGE_KEYS.GRADE9_RESULTS,
        JSON.stringify(updated),
      );
    } catch (e) {
      console.error("Error saving exam results:", e);
    }
    setView("results");
  };

  const getPerformance = (pct: number) => {
    if (pct >= 90)
      return {
        msg: "Outstanding! 🌟",
        color: "text-emerald-600 dark:text-emerald-400",
      };
    if (pct >= 70)
      return {
        msg: "Great work! 🎉",
        color: "text-blue-600 dark:text-blue-400",
      };
    if (pct >= 50)
      return {
        msg: "Good effort! 💪",
        color: "text-amber-600 dark:text-amber-400",
      };
    return {
      msg: "Keep practicing! 📚",
      color: "text-rose-600 dark:text-rose-400",
    };
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmitAnswer();
    }
  };

  const exportHistoryAsCSV = () => {
    if (history.length === 0) return;
    const headers = ["Date", "Subject", "Score", "Total", "Percentage"];
    const rows = history.map((item) => [
      item.date,
      item.subjectName,
      item.score.toString(),
      item.total.toString(),
      `${item.percentage}%`,
    ]);

    const csv = [headers, ...rows]
      .map((row) =>
        row.map((value) => `"${value.replace(/"/g, '""')}"`).join(","),
      )
      .join("\n");

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute(
      "download",
      `exam-prep-report-${new Date().toISOString().slice(0, 10)}.csv`,
    );
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // ─── VIEWS ───

  if (view === "subjects") {
    const totalExams = history.length;
    const avgScore =
      totalExams > 0
        ? Math.round(history.reduce((a, r) => a + r.percentage, 0) / totalExams)
        : 0;
    const subjectsAttempted = new Set(history.map((h) => h.subjectId)).size;

    const filteredSubjects = grade9Subjects.filter((subject) =>
      subject.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );

    return (
      <div className="h-full overflow-y-auto pr-1 space-y-6 animate-in fade-in duration-500 max-w-7xl mx-auto pb-4">
        {/* Top Bar: Search + Buttons (Mobile First) */}
        <div className="flex flex-col md:flex-row items-center gap-3 w-full">
          {/* Search Bar */}
          <div className="relative w-full flex-1">
            <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for a subject..."
              className="w-full pl-11 pr-4 py-3.5 rounded-2xl border-2 border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder:text-gray-400 focus:outline-none focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100 dark:focus:ring-indigo-900/30 transition-all shadow-sm"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 w-full md:w-auto">
            <button
              onClick={() => {
                playSend();
                navigate("/exam-prep/history");
              }}
              className="flex-1 md:flex-none flex justify-center items-center gap-2 px-5 py-3.5 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700/70 text-sm font-semibold text-gray-700 dark:text-gray-200 transition-all shadow-sm"
            >
              <History className="w-4 h-4" /> History
            </button>
            <button
              onClick={() => {
                playSend();
                navigate("/results?report=exam-prep");
              }}
              className="flex-1 md:flex-none flex justify-center items-center gap-2 px-5 py-3.5 rounded-2xl border border-indigo-200 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-900/30 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 text-sm font-semibold text-indigo-700 dark:text-indigo-300 transition-all shadow-sm"
            >
              <BarChart3 className="w-4 h-4" /> Reports
            </button>
          </div>
        </div>

        {/* Stats Block */}
        {totalExams > 0 && (
          <div className="flex flex-col sm:flex-row gap-4">
            {[
              {
                icon: <Trophy className="w-5 h-5 text-amber-500" />,
                label: "Exams",
                value: totalExams,
              },
              {
                icon: <TrendingUp className="w-5 h-5 text-emerald-500" />,
                label: "Avg Score",
                value: `${avgScore}%`,
              },
              {
                icon: <Target className="w-5 h-5 text-indigo-500" />,
                label: "Subjects",
                value: subjectsAttempted,
              },
            ].map((stat, i) => (
              <div
                key={i}
                className="flex-1 bg-white dark:bg-gray-800 rounded-2xl p-4 border border-gray-100 dark:border-gray-700 shadow-sm flex items-center gap-3"
              >
                <div className="p-2.5 rounded-xl bg-gray-50 dark:bg-gray-700/50">
                  {stat.icon}
                </div>
                <div>
                  <div className="text-xl font-black text-gray-900 dark:text-white leading-none">
                    {stat.value}
                  </div>
                  <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mt-1">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Subject Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredSubjects.map((subject) => {
            const subjectHistory = history.filter(
              (h) => h.subjectId === subject.id,
            );
            const avgSubjectScore =
              subjectHistory.length > 0
                ? Math.round(
                    subjectHistory.reduce((a, r) => a + r.percentage, 0) /
                      subjectHistory.length,
                  )
                : null;

            return (
              <button
                key={subject.id}
                onClick={() => startExam(subject)}
                className="group relative bg-white dark:bg-gray-800 rounded-3xl p-6 border border-gray-100 dark:border-gray-700/80 shadow-sm hover:shadow-xl hover:shadow-indigo-500/10 hover:border-indigo-200 dark:hover:border-indigo-500/30 transition-all duration-300 text-left flex flex-col justify-between overflow-hidden"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-indigo-50 dark:bg-indigo-900/20 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
                    {subject.icon}
                  </div>
                  {subjectHistory.length > 0 && (
                    <span className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 px-2.5 py-1 rounded-full">
                      {subjectHistory.length} Sessions
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {subject.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
                    <BookOpen className="w-3.5 h-3.5" />{" "}
                    {subject.questions.length} questions
                  </p>
                </div>

                {avgSubjectScore !== null && (
                  <div className="mt-5 pt-4 border-t border-gray-100 dark:border-gray-700/50">
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-[11px] font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Average Score
                      </span>
                      <span className="text-[11px] font-bold text-indigo-600 dark:text-indigo-400">
                        {avgSubjectScore}%
                      </span>
                    </div>
                    <div className="h-1.5 w-full bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-indigo-500 rounded-full transition-all"
                        style={{ width: `${avgSubjectScore}%` }}
                      />
                    </div>
                  </div>
                )}

                <div className="absolute bottom-5 right-5 w-8 h-8 rounded-full bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-4 transition-all duration-300">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </button>
            );
          })}
        </div>
        {filteredSubjects.length === 0 && (
          <div className="py-20 text-center rounded-3xl border-2 border-dashed border-gray-200 dark:border-gray-700">
            <Search className="w-10 h-10 text-gray-300 mx-auto mb-3" />
            <p className="text-gray-500 dark:text-gray-400 font-medium">
              No subjects found matching your search.
            </p>
          </div>
        )}
      </div>
    );
  }

  if (view === "history" || view === "report") {
    const isReport = view === "report";
    const totalExams = history.length;
    const avgScore =
      totalExams > 0
        ? Math.round(
            history.reduce((sum, item) => sum + item.percentage, 0) /
              totalExams,
          )
        : 0;

    return (
      <div className="h-full overflow-y-auto pr-1 space-y-6 animate-in fade-in duration-300 max-w-4xl mx-auto pb-4">
        <div className="flex items-center justify-between bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
          <button
            onClick={() => {
              playSend();
              navigate("/exam-prep");
            }}
            className="flex items-center gap-1 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-semibold text-sm transition-colors"
          >
            <ChevronLeft className="w-4 h-4" /> Back
          </button>
          <h3 className="font-bold text-lg text-gray-900 dark:text-white">
            {isReport ? "Performance Report" : "Exam History"}
          </h3>
          {isReport ? (
            <button
              onClick={exportHistoryAsCSV}
              disabled={history.length === 0}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm transition-colors"
            >
              <Download className="w-4 h-4" />{" "}
              <span className="hidden sm:inline">Export</span>
            </button>
          ) : (
            <button
              onClick={() => {
                setHistory([]);
                localStorage.removeItem(STORAGE_KEYS.GRADE9_RESULTS);
              }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-rose-600 bg-rose-50 dark:bg-rose-900/20 border border-rose-100 dark:border-rose-800/50 hover:bg-rose-100 transition-colors"
            >
              <RotateCcw className="w-4 h-4" />{" "}
              <span className="hidden sm:inline">Clear</span>
            </button>
          )}
        </div>

        {isReport && (
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl p-6 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">
                  Exams Done
                </p>
                <p className="text-3xl font-black text-gray-900 dark:text-white">
                  {totalExams}
                </p>
              </div>
              <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-500 flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
            </div>
            <div className="rounded-2xl p-6 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">
                  Average Score
                </p>
                <p className="text-3xl font-black text-gray-900 dark:text-white">
                  {avgScore}%
                </p>
              </div>
              <div className="w-12 h-12 rounded-full bg-emerald-50 dark:bg-emerald-900/20 text-emerald-500 flex items-center justify-center">
                <TrendingUp className="w-6 h-6" />
              </div>
            </div>
          </div>
        )}

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
          {history.length === 0 ? (
            <div className="p-12 text-center text-gray-500 dark:text-gray-400">
              <History className="w-12 h-12 mx-auto mb-3 opacity-20" />
              <p>No exam data available yet.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-gray-600 dark:text-gray-300">
                <thead className="bg-gray-50 dark:bg-gray-900/50 text-xs uppercase font-bold text-gray-500 dark:text-gray-400 border-b border-gray-100 dark:border-gray-700">
                  <tr>
                    <th className="px-6 py-4">Date</th>
                    <th className="px-6 py-4">Subject</th>
                    <th className="px-6 py-4">Score</th>
                    <th className="px-6 py-4 text-right">Result</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-700/50">
                  {[...history].reverse().map((entry, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors"
                    >
                      <td className="px-6 py-4 whitespace-nowrap flex items-center gap-2">
                        <CalendarDays className="w-4 h-4 text-gray-400" />{" "}
                        {entry.date}
                      </td>
                      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                        {entry.subjectName}
                      </td>
                      <td className="px-6 py-4">
                        {entry.score} / {entry.total}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <span
                          className={`inline-flex px-2.5 py-1 rounded-md text-xs font-bold ${
                            entry.percentage >= 80
                              ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400"
                              : entry.percentage >= 50
                                ? "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
                                : "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400"
                          }`}
                        >
                          {entry.percentage}%
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
    );
  }

  // ─── QUIZ VIEW ───
  if (view === "quiz" && selectedSubject) {
    const q = sessionQuestions[currentIndex];
    if (!q) return null;

    return (
      <div className="h-full max-w-3xl mx-auto flex flex-col gap-4 animate-in fade-in duration-300">
        <div className="flex items-center justify-between bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
          <button
            onClick={() => {
              playSend();
              setView("subjects");
            }}
            className="flex items-center text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors font-semibold text-sm"
          >
            <ChevronLeft className="w-4 h-4 mr-1" /> Exit
          </button>
          <div className="text-center flex items-center gap-2">
            <span className="text-xl">{selectedSubject.icon}</span>
            <h3 className="font-bold text-sm text-gray-900 dark:text-white hidden sm:block">
              {selectedSubject.name}
            </h3>
          </div>
          <div className="text-right">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-lg font-bold text-sm">
              {currentIndex + 1}{" "}
              <span className="opacity-50 font-normal">
                / {sessionQuestions.length}
              </span>
            </div>
          </div>
        </div>

        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div
            className="bg-indigo-600 h-2 rounded-full transition-all duration-500 ease-out"
            style={{
              width: `${((currentIndex + 1) / sessionQuestions.length) * 100}%`,
            }}
          />
        </div>

        <div className="flex-1 min-h-0 overflow-y-auto bg-white dark:bg-gray-800 rounded-3xl p-5 md:p-7 shadow-sm border border-gray-100 dark:border-gray-700 transition-all duration-300">
          <div className="flex justify-between items-start mb-4">
            <span className="inline-flex px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
              {q.topic}
            </span>
            <span className="text-xs font-bold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20 px-2 py-1 rounded-md">
              {q.marks} mark{q.marks > 1 ? "s" : ""}
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white leading-relaxed mb-6">
            {q.question}
          </h3>

          {!showFeedback ? (
            <div className="space-y-3">
              <div className="relative">
                <textarea
                  ref={inputRef}
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type your answer here..."
                  rows={4}
                  className="w-full p-4 rounded-2xl bg-gray-50 dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 outline-none transition-all duration-300 resize-none text-base"
                />
              </div>

              <div className="flex items-center justify-between">
                <p className="text-xs text-gray-400 hidden sm:block">
                  Press{" "}
                  <kbd className="bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded text-gray-500 dark:text-gray-300 font-sans">
                    Enter
                  </kbd>{" "}
                  to submit
                </p>
                <button
                  onClick={handleSubmitAnswer}
                  disabled={!userAnswer.trim()}
                  className={`flex items-center justify-center gap-2 px-8 py-3 rounded-xl font-bold transition-all duration-300 ${
                    userAnswer.trim()
                      ? "bg-indigo-600 text-white shadow-lg shadow-indigo-200 dark:shadow-indigo-900/40 hover:-translate-y-0.5 active:translate-y-0"
                      : "bg-gray-200 dark:bg-gray-700 text-gray-400 cursor-not-allowed"
                  } sm:w-auto w-full`}
                >
                  Submit <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : (
            <div className="animate-in slide-in-from-bottom-4 fade-in duration-300 space-y-4">
              <div
                className={`p-6 rounded-2xl border ${isCorrect ? "bg-emerald-50 border-emerald-200 dark:bg-emerald-900/20 dark:border-emerald-800" : "bg-rose-50 border-rose-200 dark:bg-rose-900/20 dark:border-rose-800"}`}
              >
                <div className="flex items-start gap-4">
                  {isCorrect ? (
                    <CheckCircle className="w-8 h-8 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-1" />
                  ) : (
                    <XCircle className="w-8 h-8 text-rose-600 dark:text-rose-400 flex-shrink-0 mt-1" />
                  )}
                  <div className="flex-1">
                    <h4
                      className={`text-xl font-bold mb-3 ${isCorrect ? "text-emerald-700 dark:text-emerald-400" : "text-rose-700 dark:text-rose-400"}`}
                    >
                      {isCorrect ? "Perfectly Answered!" : "Not Quite Right"}
                    </h4>

                    <div className="bg-white/60 dark:bg-gray-900/50 rounded-xl p-4 mb-3 border border-gray-100 dark:border-gray-700">
                      <p className="text-xs font-bold uppercase text-gray-500 mb-1 flex items-center gap-1">
                        <BookOpen className="w-3.5 h-3.5" /> Accepted Answer
                      </p>
                      <p className="text-gray-900 dark:text-white font-medium">
                        {q.answer}
                      </p>
                    </div>

                    {q.explanation && (
                      <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                        <span className="font-semibold text-gray-900 dark:text-white">
                          Explanation:{" "}
                        </span>
                        {q.explanation}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <button
                onClick={handleNext}
                className="w-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold py-3.5 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
              >
                {currentIndex < sessionQuestions.length - 1
                  ? "Next Question"
                  : "View Results"}
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  // ─── RESULTS VIEW ───
  if (view === "results" && selectedSubject) {
    const pct = Math.round((score / sessionQuestions.length) * 100);
    const perf = getPerformance(pct);
    const isExcellent = pct >= 80;

    const themeColor =
      pct >= 90
        ? "text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-800"
        : pct >= 70
          ? "text-blue-600 bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800"
          : pct >= 50
            ? "text-amber-600 bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800"
            : "text-rose-600 bg-rose-50 dark:bg-rose-900/20 border-rose-200 dark:border-rose-800";

    const accentColor = themeColor.split(" ")[0];

    return (
      <div className="h-full flex items-center justify-center animate-in zoom-in-95 fade-in duration-500 px-2 sm:px-4">
        <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-3xl shadow-2xl shadow-indigo-500/10 dark:shadow-black/40 border border-gray-100 dark:border-gray-700 overflow-hidden text-center">
          <div className="pt-10 pb-6 px-8">
            <div
              className={`mx-auto w-20 h-20 rounded-full flex items-center justify-center mb-6 ring-8 ring-gray-50 dark:ring-gray-900 ${themeColor.split(" ").slice(1).join(" ")}`}
            >
              {isExcellent ? (
                <Trophy className={`w-10 h-10 ${accentColor}`} />
              ) : (
                <CheckCircle className={`w-10 h-10 ${accentColor}`} />
              )}
            </div>
            <h1 className="text-3xl font-black tracking-tight text-gray-900 dark:text-white mb-2">
              {isExcellent ? "Outstanding Job!" : "Exam Complete!"}
            </h1>
            <p className="text-gray-500 dark:text-gray-400 font-medium">
              {selectedSubject.name} Assessment
            </p>
          </div>

          <div className="px-8 pb-10">
            <div className="inline-flex flex-col items-center justify-center mb-8">
              <span
                className={`text-7xl font-black tracking-tighter drop-shadow-sm ${accentColor}`}
              >
                {pct}%
              </span>
              <span
                className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mt-3 border ${themeColor}`}
              >
                {perf.msg}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-8">
              <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-2xl border border-gray-100 dark:border-gray-600">
                <Target className="w-5 h-5 text-gray-400 mx-auto mb-2" />
                <p className="text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1">
                  Score
                </p>
                <p className="text-xl font-bold text-gray-900 dark:text-white">
                  {score}{" "}
                  <span className="text-sm text-gray-400">
                    / {sessionQuestions.length}
                  </span>
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-2xl border border-gray-100 dark:border-gray-600">
                <CheckCircle className="w-5 h-5 text-gray-400 mx-auto mb-2" />
                <p className="text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1">
                  Status
                </p>
                <p className="text-xl font-bold text-gray-900 dark:text-white">
                  {pct >= 50 ? "Passed" : "Review"}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setView("subjects")}
                className="flex-1 px-6 py-4 rounded-xl font-bold text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                Dashboard
              </button>
              <button
                onClick={() => startExam(selectedSubject)}
                className="flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold text-white bg-indigo-600 hover:bg-indigo-700 shadow-md shadow-indigo-200 dark:shadow-indigo-900/40 transition-all active:scale-95"
              >
                <RefreshCcw className="w-4 h-4" /> Retry
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default ExamPrep;
