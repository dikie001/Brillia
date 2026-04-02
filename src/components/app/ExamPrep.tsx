import React, { useState, useEffect, useRef } from "react";
import {
  BookOpen,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  XCircle,
  RotateCcw,
  Trophy,
  Target,
  Sparkles,
  ArrowRight,
  Send,
  TrendingUp,
} from "lucide-react";
import grade9Subjects, { type SubjectInfo } from "@/jsons/grade9";
import type { Grade9Question } from "@/types";
import { STORAGE_KEYS } from "@/constants";
import useSound from "@/hooks/useSound";

interface ExamResult {
  subjectId: string;
  subjectName: string;
  score: number;
  total: number;
  percentage: number;
  date: string;
}

type ExamView = "subjects" | "quiz" | "results";

const QUESTIONS_PER_SESSION = 10;

/**
 * Validates a user's answer against the accepted answers using exact matching.
 * Case-insensitive, trims whitespace, and checks against all accepted variations.
 * Returns whether the answer is correct and which accepted answer was matched.
 */
const validateAnswer = (
  userAnswer: string,
  question: Grade9Question
): { isCorrect: boolean; matchedAnswer: string | null } => {
  const normalise = (s: string) =>
    s.trim().toLowerCase().replace(/\s+/g, " ").replace(/[.!?]+$/, "");

  const userNorm = normalise(userAnswer);
  if (!userNorm) return { isCorrect: false, matchedAnswer: null };

  // Build the list of accepted answers (fall back to answer field)
  const accepted = question.acceptedAnswers && question.acceptedAnswers.length > 0
    ? question.acceptedAnswers
    : [question.answer];

  for (const ans of accepted) {
    if (normalise(ans) === userNorm) {
      return { isCorrect: true, matchedAnswer: ans };
    }
  }

  return { isCorrect: false, matchedAnswer: null };
};


const ExamPrep: React.FC = () => {
  const [view, setView] = useState<ExamView>("subjects");
  const [selectedSubject, setSelectedSubject] = useState<SubjectInfo | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(0);
  const [sessionQuestions, setSessionQuestions] = useState<Grade9Question[]>([]);
  const [history, setHistory] = useState<ExamResult[]>([]);
  const [userAnswer, setUserAnswer] = useState("");
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const inputRef = useRef<HTMLTextAreaElement>(null);
  const { playSuccess, playError, playFinish, playSend } = useSound();

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.GRADE9_RESULTS);
      if (saved) setHistory(JSON.parse(saved));
    } catch (e) {
      console.error("Error loading exam results:", e);
    }
  }, []);

  // Auto-focus input when question changes
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
    setAnswered(0);
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
    setAnswered((a) => a + 1);

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
      localStorage.setItem(STORAGE_KEYS.GRADE9_RESULTS, JSON.stringify(updated));
    } catch (e) {
      console.error("Error saving exam results:", e);
    }
    setView("results");
  };

  const getPerformance = (pct: number) => {
    if (pct >= 90)
      return { msg: "Outstanding! 🌟", color: "text-emerald-600 dark:text-emerald-400" };
    if (pct >= 70)
      return { msg: "Great work! 🎉", color: "text-blue-600 dark:text-blue-400" };
    if (pct >= 50)
      return { msg: "Good effort! 💪", color: "text-amber-600 dark:text-amber-400" };
    return { msg: "Keep practicing! 📚", color: "text-rose-600 dark:text-rose-400" };
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmitAnswer();
    }
  };

  // ─── SUBJECT SELECTION ───
  if (view === "subjects") {
    // Compute overall stats
    const totalExams = history.length;
    const avgScore =
      totalExams > 0
        ? Math.round(history.reduce((a, r) => a + r.percentage, 0) / totalExams)
        : 0;
    const subjectsAttempted = new Set(history.map((h) => h.subjectId)).size;

    return (
      <div className="space-y-6 animate-in fade-in duration-500">
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100/50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 text-indigo-700 dark:text-indigo-300 text-sm font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Grade 9 • KCSE Style</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
            Exam Prep
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm max-w-lg mx-auto">
            Type your answer and let the system validate it. Case doesn't matter — just get the concepts right!
          </p>
        </div>

        {/* Stats Grid — matching Quick Quiz style */}
        {totalExams > 0 && (
          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            {[
              {
                icon: <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600 dark:text-amber-400" />,
                label: "Exams Done",
                value: totalExams,
              },
              {
                icon: <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 dark:text-emerald-400" />,
                label: "Avg Score",
                value: `${avgScore}%`,
              },
              {
                icon: <Target className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600 dark:text-indigo-400" />,
                label: "Subjects",
                value: subjectsAttempted,
              },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-white/60 dark:bg-gray-800/40 backdrop-blur-md rounded-2xl p-2 sm:p-4 border border-gray-200/50 dark:border-gray-700/50 shadow-sm flex flex-col items-center text-center group transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/10 hover:border-indigo-200/50 dark:hover:border-indigo-500/30"
              >
                <div className="mb-1 sm:mb-2 p-1.5 sm:p-2 rounded-xl bg-gray-50 dark:bg-gray-800 group-hover:scale-110 group-hover:bg-white dark:group-hover:bg-gray-700 transition-all duration-300 ring-1 ring-transparent group-hover:ring-indigo-100 dark:group-hover:ring-indigo-500/20">
                  {stat.icon}
                </div>
                <div className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-xs font-medium text-gray-500 dark:text-gray-400 mt-0.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Subject Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
          {grade9Subjects.map((subject) => {
            const subjectHistory = history.filter((h) => h.subjectId === subject.id);
            const avgSubjectScore =
              subjectHistory.length > 0
                ? Math.round(
                    subjectHistory.reduce((a, r) => a + r.percentage, 0) /
                      subjectHistory.length
                  )
                : null;

            return (
              <button
                key={subject.id}
                onClick={() => startExam(subject)}
                className="group relative overflow-hidden rounded-2xl p-4 border border-gray-200/50 dark:border-gray-700/50 bg-white/60 dark:bg-gray-800/40 backdrop-blur-md transition-all duration-300 hover:scale-[1.03] hover:shadow-lg hover:shadow-indigo-500/10 hover:border-indigo-200/50 dark:hover:border-indigo-500/30 text-left cursor-pointer"
              >
                <div className="text-3xl mb-2">{subject.icon}</div>
                <h3 className="font-semibold text-sm text-gray-900 dark:text-white">
                  {subject.name}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                  {subject.questions.length} questions
                </p>
                {avgSubjectScore !== null && (
                  <div className="mt-2 flex items-center gap-1">
                    <div className="h-1.5 flex-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full transition-all"
                        style={{ width: `${avgSubjectScore}%` }}
                      />
                    </div>
                    <span className="text-[10px] font-bold text-gray-500 dark:text-gray-400">
                      {avgSubjectScore}%
                    </span>
                  </div>
                )}
                {subjectHistory.length > 0 && (
                  <div className="absolute top-2 right-2">
                    <span className="text-[10px] font-bold text-indigo-500 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 px-1.5 py-0.5 rounded-full">
                      {subjectHistory.length}×
                    </span>
                  </div>
                )}
                <ArrowRight className="absolute bottom-3 right-3 w-4 h-4 text-gray-300 dark:text-gray-600 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-all group-hover:translate-x-0.5" />
              </button>
            );
          })}
        </div>

        {/* History summary */}
        {history.length > 0 && (
          <div className="bg-white/60 dark:bg-gray-800/40 backdrop-blur-md rounded-2xl p-4 border border-gray-200/50 dark:border-gray-700/50 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-gray-900 dark:text-white text-sm flex items-center gap-2">
                <Trophy className="w-4 h-4 text-amber-500" /> Recent Results
              </h3>
              <button
                onClick={() => {
                  setHistory([]);
                  localStorage.removeItem(STORAGE_KEYS.GRADE9_RESULTS);
                }}
                className="text-xs text-rose-500 hover:text-rose-600 font-medium flex items-center gap-1 cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" /> Clear
              </button>
            </div>
            <div className="space-y-2 max-h-40 overflow-y-auto">
              {[...history]
                .reverse()
                .slice(0, 5)
                .map((r, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between text-sm py-1.5 px-2 rounded-lg bg-gray-50 dark:bg-gray-800/60"
                  >
                    <span className="font-medium text-gray-700 dark:text-gray-300">
                      {r.subjectName}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-400">{r.date}</span>
                      <span className="text-xs text-gray-400">
                        {r.score}/{r.total}
                      </span>
                      <span
                        className={`font-bold ${
                          r.percentage >= 70
                            ? "text-emerald-600 dark:text-emerald-400"
                            : r.percentage >= 50
                            ? "text-amber-600 dark:text-amber-400"
                            : "text-rose-600 dark:text-rose-400"
                        }`}
                      >
                        {r.percentage}%
                      </span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  // ─── QUIZ VIEW ───
  if (view === "quiz" && selectedSubject) {
    const q = sessionQuestions[currentIndex];
    if (!q) return null;

    return (
      <div className="space-y-4 animate-in fade-in duration-300">
        {/* Header — matches Quick Quiz quiz header */}
        <div className="flex items-center justify-between">
          <button
            onClick={() => {
              playSend();
              setView("subjects");
            }}
            className="flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 transition-colors font-semibold text-sm"
          >
            <ChevronLeft className="w-4 h-4 mr-1" /> Subjects
          </button>
          <div className="text-center">
            <span className="text-lg">{selectedSubject.icon}</span>
            <h3 className="font-bold text-sm text-indigo-600 dark:text-indigo-400">
              {selectedSubject.name}
            </h3>
          </div>
          <div className="text-right">
            <p className="text-indigo-500 dark:text-indigo-400 font-semibold text-sm">
              {currentIndex + 1}/{sessionQuestions.length}
            </p>
            <p className="text-xs text-gray-400">
              Score: {score}/{answered}
            </p>
          </div>
        </div>

        {/* Progress Bar — same as Quick Quiz */}
        <div className="bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
          <div
            className="bg-indigo-500 h-full transition-all duration-500 ease-out"
            style={{
              width: `${((currentIndex + 1) / sessionQuestions.length) * 100}%`,
            }}
          />
        </div>

        {/* Question Card — matches Quick Quiz card style */}
        <div className="bg-gray-100 dark:bg-gray-800/70 backdrop-blur-md rounded-3xl px-6 py-6 border border-indigo-300 dark:border-indigo-700 shadow-lg shadow-indigo-200/20 dark:shadow-indigo-900/40 transition-all duration-300">
          {/* Topic badge */}
          <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 mb-3">
            {q.topic} • {q.marks} mark{q.marks > 1 ? "s" : ""}
          </span>

          {/* Question */}
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white leading-relaxed mb-5">
            {q.question}
          </h3>

          {/* Answer Input Area */}
          {!showFeedback ? (
            <div className="space-y-3">
              <div className="relative">
                <textarea
                  ref={inputRef}
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type your answer here..."
                  rows={3}
                  className="w-full p-4 pr-14 rounded-2xl bg-white dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-indigo-400 dark:focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:focus:ring-indigo-800 outline-none transition-all duration-300 resize-none text-base leading-relaxed"
                />
                {userAnswer.trim() && (
                  <button
                    onClick={handleSubmitAnswer}
                    className="absolute bottom-3 right-3 p-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-700 text-white shadow-lg shadow-indigo-500/30 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
                    title="Submit Answer"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                )}
              </div>
              <button
                onClick={handleSubmitAnswer}
                disabled={!userAnswer.trim()}
                className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl font-semibold transition-all duration-300 ${
                  userAnswer.trim()
                    ? "bg-gradient-to-r from-indigo-600 to-indigo-700 text-white shadow-lg shadow-indigo-200/20 dark:shadow-indigo-900/40 hover:scale-[1.01] cursor-pointer"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed"
                }`}
              >
                <CheckCircle className="w-5 h-5" /> Submit Answer
              </button>
              <p className="text-xs text-gray-400 dark:text-gray-500 text-center">
                Press Enter to submit • Shift+Enter for new line
              </p>
            </div>
          ) : (
            /* Next Button */
            <button
              onClick={handleNext}
              className="w-full mt-2 bg-gradient-to-r from-indigo-600 to-indigo-700 dark:from-indigo-700 dark:to-indigo-800 text-white font-bold py-4 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg shadow-indigo-200/20 dark:shadow-indigo-900/40 flex items-center justify-center gap-2 cursor-pointer"
            >
              {currentIndex < sessionQuestions.length - 1
                ? "Next Question"
                : "Complete Exam"}
              <ChevronRight className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Feedback Overlay — same pattern as Quick Quiz */}
        {showFeedback && (
          <div className="fixed top-24 left-4 right-4 md:left-1/2 md:-translate-x-1/2 md:max-w-3xl z-[9999] animate-in slide-in-from-top-4 fade-in duration-300 max-h-[80vh] overflow-y-auto">
            <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl p-5 rounded-2xl border border-indigo-200 dark:border-indigo-700 shadow-2xl shadow-indigo-500/20 dark:shadow-black/50 ring-1 ring-black/5">
              <div className="flex flex-col sm:flex-row items-start gap-4">
                {isCorrect ? (
                  <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-full flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                ) : (
                  <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-full flex-shrink-0">
                    <XCircle className="w-6 h-6 text-red-600 dark:text-red-400" />
                  </div>
                )}

                <div className="flex-1 min-w-0">
                  <h4
                    className={`font-bold text-lg mb-1 ${
                      isCorrect
                        ? "text-green-700 dark:text-green-400"
                        : "text-red-600 dark:text-red-400"
                    }`}
                  >
                    {isCorrect ? "Correct!" : "Not quite right"}
                  </h4>



                  {/* Model Answer */}
                  <div className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-xl p-3 mb-2">
                    <div className="flex items-start gap-1.5 mb-1">
                      <BookOpen className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                        Model Answer
                      </span>
                    </div>
                    <p className="text-gray-800 dark:text-gray-200 font-medium leading-relaxed text-sm">
                      {q.answer}
                    </p>
                  </div>

                  {/* Explanation */}
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                    {q.explanation}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // ─── RESULTS VIEW ── matches Quick Quiz results style
  if (view === "results" && selectedSubject) {
    const pct = Math.round((score / sessionQuestions.length) * 100);
    const perf = getPerformance(pct);
    const isExcellent = pct >= 80;

    const themeColor =
      pct >= 90
        ? "text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200"
        : pct >= 70
        ? "text-blue-600 bg-blue-50 dark:bg-blue-900/20 border-blue-200"
        : pct >= 50
        ? "text-yellow-600 bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200"
        : "text-red-600 bg-red-50 dark:bg-red-900/20 border-red-200";

    const accentColor = themeColor.split(" ")[0];

    return (
      <div className="flex items-center justify-center min-h-[60vh] animate-in fade-in duration-500">
        <div className="w-full max-w-md bg-white dark:bg-gray-900 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800 overflow-hidden">
          {/* Header */}
          <div className="pt-6 pb-4 px-8 text-center">
            <div
              className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4 ${themeColor
                .split(" ")
                .slice(1)
                .join(" ")}`}
            >
              {isExcellent ? (
                <Trophy className={`w-8 h-8 ${accentColor}`} />
              ) : (
                <CheckCircle className={`w-8 h-8 ${accentColor}`} />
              )}
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-1">
              {isExcellent ? "Outstanding Job!" : "Exam Complete!"}
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {selectedSubject.name}
            </p>
          </div>

          {/* Score Display */}
          <div className="px-8 pb-8 text-center border-b border-gray-100 dark:border-gray-800">
            <div className="relative inline-flex flex-col items-center">
              <span className={`text-6xl font-black tracking-tighter ${accentColor}`}>
                {pct}%
              </span>
              <span
                className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mt-2 ${themeColor}`}
              >
                {perf.msg}
              </span>
              <p className="mt-3 text-sm font-medium text-gray-500 dark:text-gray-400">
                {score} out of {sessionQuestions.length} Correct
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 divide-x divide-gray-100 dark:divide-gray-800 bg-gray-50/50 dark:bg-gray-800/20">
            <div className="p-4 flex flex-col items-center">
              <Target className="w-4 h-4 text-gray-400 mb-1" />
              <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">
                Questions
              </span>
              <span className="text-sm font-semibold text-gray-900 dark:text-white">
                {sessionQuestions.length}
              </span>
            </div>
            <div className="p-4 flex flex-col items-center">
              <Trophy className="w-4 h-4 text-gray-400 mb-1" />
              <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">
                Total Exams
              </span>
              <span className="text-sm font-semibold text-gray-900 dark:text-white">
                {history.filter((h) => h.subjectId === selectedSubject.id).length}
              </span>
            </div>
          </div>

          {/* Actions */}
          <div className="p-6 space-y-3">
            <button
              onClick={() => startExam(selectedSubject)}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white font-semibold h-12 rounded-xl transition-all hover:scale-[1.01] shadow-md cursor-pointer"
            >
              Try Again <ChevronRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                playSend();
                setView("subjects");
              }}
              className="w-full flex items-center justify-center gap-2 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 font-medium h-10 rounded-xl transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" /> All Subjects
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default ExamPrep;
