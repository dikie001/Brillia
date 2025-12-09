import { useTheme } from "@/hooks/useHook";
import {
  BookOpen,
  Calendar,
  CheckCircle,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock,
  Play,
  RotateCcw,
  Sparkles,
  Target,
  TrendingUp,
  Trophy,
  XCircle,
} from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

import Footer from "@/components/app/Footer";
import Navbar from "@/components/app/Navbar";
import { FIREBASE_TEST_RESULTS, STORAGE_KEYS } from "@/constants";
import quizData from "@/jsons/quizData";
import ResetModal from "@/modals/Delete";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import useSound from "../../hooks/useSound";
import logo from "/images/logo.png";

type Options = {
  A: string;
  B: string;
  C: string;
  D: string;
};

export interface QuizType {
  id: number;
  question: string;
  subject: string;
  options: Options;
  correctAnswer: keyof Options;
  explanation: string;
}

interface TestResult {
  testNumber: number;
  score: number;
  totalQuestions: number;
  percentage: number;
  date: string;
  subject: string;
  timeTaken?: number;
}

interface QuizProgress {
  currentTest: number;
  currentQuestion: number;
  score: number;
  startTime?: number;
  selectedAnswers: string[];
  isActive: boolean;
}

type GameState = "home" | "quiz" | "results";

interface QuizAppState {
  currentTest: number;
  currentQuestion: number;
  selectedAnswer: string;
  showFeedback: boolean;
  testResults: TestResult[];
  gameState: GameState;
  score: number;
  loading: boolean;
  startTime?: number;
  quizData: QuizType[];
  error: string | null;
}
interface User {
  name: string;
  hobby: string;
  subject: string;
}

const QuizApp: React.FC = () => {
  const [state, setState] = useState<QuizAppState>({
    currentTest: 0,
    currentQuestion: 0,
    selectedAnswer: "",
    showFeedback: false,
    testResults: [],
    gameState: "home",
    score: 0,
    loading: true,
    quizData: [],
    error: null,
  });
  const [user, setUser] = useState<User>({
    name: "",
    hobby: "",
    subject: "",
  });
  const navigate = useNavigate();
  const [openResetModal, setOpenResetModal] = useState(false);
  const { theme } = useTheme();
  useEffect(() => {
    console.log(theme);
  }, []);
  const quizResultsRef = useRef<TestResult | null>(null);

  const QUESTIONS_PER_TEST = 20;

  const { playError, playSuccess, playFinish, playSend } = useSound();

  // Initialize app
  useEffect(() => {
    const initializeApp = async (): Promise<void> => {
      try {
        // Try to load quiz data from  or show error
        const loadedQuizData: QuizType[] = quizData;

        // Load saved data from localStorage
        const savedResults = loadSavedResults();
        const savedProgress = loadSavedProgress();
        const savedTestIndex = loadCurrentTestIndex();

        setState((prev) => ({
          ...prev,
          testResults: savedResults,
          currentTest: savedTestIndex,
          quizData: loadedQuizData,
          loading: false,
          // Restore progress if there's an active quiz
          ...(savedProgress.isActive && {
            currentQuestion: savedProgress.currentQuestion,
            score: savedProgress.score,
            startTime: savedProgress.startTime,
            gameState: "quiz" as GameState,
          }),
        }));
      } catch (error) {
        console.error("Error initializing app:", error);
        setState((prev) => ({
          ...prev,
          loading: false,
          error:
            "Failed to initialize the quiz app. Please refresh and try again.",
        }));
      }
    };

    initializeApp();
  }, []);

  // Fetch User details from stoarge
  useEffect(() => {
    const details = localStorage.getItem("user-info");
    const parsesData = details && JSON.parse(details);
    setUser(parsesData);
  }, []);

  // Save progress whenever quiz state changes
  useEffect(() => {
    if (state.gameState === "quiz" && !state.loading) {
      const progress: QuizProgress = {
        currentTest: state.currentTest,
        currentQuestion: state.currentQuestion,
        score: state.score,
        startTime: state.startTime,
        selectedAnswers: [], // Could be expanded to store all answers
        isActive: true,
      };
      saveQuizProgress(progress);
    }
  }, [
    state.currentTest,
    state.currentQuestion,
    state.score,
    state.startTime,
    state.gameState,
    state.loading,
  ]);

  // localStorage functions
  const loadSavedResults = (): TestResult[] => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.TEST_RESULTS);
      return saved ? JSON.parse(saved) : [];
    } catch (error) {
      console.error("Error loading saved results:", error);
      return [];
    }
  };

  // Save the results
  const saveResults = (results: TestResult[]): void => {
    try {
      localStorage.setItem(STORAGE_KEYS.TEST_RESULTS, JSON.stringify(results));

      const firebaseData = localStorage.getItem(FIREBASE_TEST_RESULTS);
      if (!firebaseData) {
        localStorage.setItem(FIREBASE_TEST_RESULTS, JSON.stringify(results));
        console.log(results);
      }

      const parsedData = firebaseData ? JSON.parse(firebaseData) : [];
      const updatedData = [...parsedData, quizResultsRef.current];
      console.log(quizResultsRef.current);
      localStorage.setItem(FIREBASE_TEST_RESULTS, JSON.stringify(updatedData));
      console.log(updatedData);
    } catch (error) {
      console.error("Error saving results:", error);
    }
  };

  // Load saved progress
  const loadSavedProgress = (): QuizProgress => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.QUIZ_PROGRESS);
      return saved
        ? JSON.parse(saved)
        : {
            currentTest: 0,
            currentQuestion: 0,
            score: 0,
            selectedAnswers: [],
            isActive: false,
          };
    } catch (error) {
      console.error("Error loading saved progress:", error);
      return {
        currentTest: 0,
        currentQuestion: 0,
        score: 0,
        selectedAnswers: [],
        isActive: false,
      };
    }
  };

  // Save quiz progress
  const saveQuizProgress = (progress: QuizProgress): void => {
    try {
      localStorage.setItem(
        STORAGE_KEYS.QUIZ_PROGRESS,
        JSON.stringify(progress)
      );
    } catch (error) {
      console.error("Error saving quiz progress:", error);
    }
  };

  // Clear progress
  const clearQuizProgress = (): void => {
    try {
      localStorage.removeItem(STORAGE_KEYS.QUIZ_PROGRESS);
    } catch (error) {
      console.error("Error clearing quiz progress:", error);
    }
  };

  // Load current test index
  const loadCurrentTestIndex = (): number => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.CURRENT_TEST_INDEX);
      return saved ? parseInt(saved, 10) : 0;
    } catch (error) {
      console.error("Error loading current test index:", error);
      return 0;
    }
  };

  // Save current text index
  const saveCurrentTestIndex = (testIndex: number): void => {
    try {
      localStorage.setItem(
        STORAGE_KEYS.CURRENT_TEST_INDEX,
        testIndex.toString()
      );
    } catch (error) {
      console.error("Error saving current test index:", error);
    }
  };

  // Get current test questions
  const getCurrentTestQuestions = (): QuizType[] => {
    if (!state.quizData || state.quizData.length === 0) return [];
    const startIndex = state.currentTest * QUESTIONS_PER_TEST;
    return state.quizData.slice(startIndex, startIndex + QUESTIONS_PER_TEST);
  };

  // Get total number of tests
  const getTotalTests = (): number => {
    if (!state.quizData || state.quizData.length === 0) return 0;
    return Math.ceil(state.quizData.length / QUESTIONS_PER_TEST);
  };

  // Handle answer selection
  const handleAnswerSelect = (answer: "A" | "B" | "C" | "D"): void => {
    if (state.showFeedback) return;

    const currentQuestions = getCurrentTestQuestions();
    const currentQ = currentQuestions[state.currentQuestion];
    if (!currentQ) return;

    const isCorrect = answer === currentQ.correctAnswer;
    if (isCorrect) playSuccess();
    if (!isCorrect) playError();

    setState((prev) => ({
      ...prev,
      selectedAnswer: answer,
      showFeedback: true,
      score: isCorrect ? prev.score + 1 : prev.score,
    }));
  };

  // Handle next question
  const handleNext = (): void => {
    const currentQuestions = getCurrentTestQuestions();

    if (state.currentQuestion < currentQuestions.length - 1) {
      setState((prev) => ({
        ...prev,
        currentQuestion: prev.currentQuestion + 1,
        selectedAnswer: "",
        showFeedback: false,
      }));
    } else {
      completeTest();
    }
  };

  // Complete current test
  const completeTest = (): void => {
    toast.success("Quiz completed!");
    playFinish();
    const currentQuestions = getCurrentTestQuestions();
    const timeTaken = state.startTime
      ? Math.floor((Date.now() - state.startTime) / 1000)
      : undefined;

    const testResult: TestResult = {
      testNumber: state.currentTest + 1,
      score: state.score,
      totalQuestions: currentQuestions.length,
      percentage: Math.round((state.score / currentQuestions.length) * 100),
      date: new Date().toLocaleDateString(),
      subject: getCurrentTestSubjects(),
      timeTaken,
    };
    const updatedResults = [...state.testResults, testResult];
    quizResultsRef.current = testResult;
    const nextTestIndex = state.currentTest + 1;

    setState((prev) => ({
      ...prev,
      testResults: updatedResults,
      gameState: "results",
      currentTest: nextTestIndex,
    }));

    saveResults(updatedResults);
    saveCurrentTestIndex(nextTestIndex);
    clearQuizProgress(); // Clear progress as test is completed
  };

  // Get subjects for current test
  const getCurrentTestSubjects = (): string => {
    const currentQuestions = getCurrentTestQuestions();
    const subjects = [
      ...new Set(currentQuestions.map((q: QuizType) => q.subject)),
    ];
    return subjects.join(", ");
  };

  // Start new test
  const startTest = (testIndex: number = state.currentTest): void => {
    setState((prev) => ({
      ...prev,
      currentTest: testIndex,
      currentQuestion: 0,
      selectedAnswer: "",
      showFeedback: false,
      score: 0,
      gameState: "quiz",
      startTime: Date.now(),
    }));
    saveCurrentTestIndex(testIndex);
  };

  // Update game state
  const setGameState = (newState: GameState): void => {
    setState((prev) => ({ ...prev, gameState: newState }));
    if (newState !== "quiz") {
      clearQuizProgress();
    }
  };

  // Format time helper
  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  // Get performance message
  const getPerformanceMessage = (percentage: number): string => {
    if (percentage >= 90) return "E.E. Outstanding! You're a quiz master! 🌟";
    if (percentage >= 80) return "M.E. Excellent work! Keep it up! 🎉";
    if (percentage >= 70) return "M.E. Great job! You're doing well! 👏";
    if (percentage >= 60) return "A.E. Good effort! Keep practicing! 💪";
    return "B.E. Keep studying and you'll improve! 📚 ";
  };

  // Loading screen: Centered spinner with consistent background
  if (state.loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-indigo-100 to-indigo-200 dark:bg-gray-900 dark:from-transparent dark:via-transparent dark:to-transparent flex items-center justify-center transition-colors duration-300">
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 dark:border-gray-700/20">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-indigo-500 border-t-transparent mx-auto mb-4"></div>
          <p className="text-indigo-600 dark:text-indigo-400 text-lg font-semibold">
            Loading Quiz Data...
          </p>
        </div>
      </div>
    );
  }

  // Error screen: Card-style error display with retry option
  if (state.error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-indigo-100 to-indigo-200 dark:bg-gray-900 dark:from-transparent dark:via-transparent dark:to-transparent flex items-center justify-center p-4 transition-colors duration-300">
        <div className="text-center max-w-md">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 dark:border-gray-700/20">
            <XCircle className="w-16 h-16 text-red-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Error Loading Quiz
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {state.error}
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-gradient-to-r from-indigo-700 to-indigo-600 text-white px-6 py-3 rounded-2xl font-semibold shadow-lg transition-all duration-300 hover:scale-105"
            >
              Retry Loading
            </button>
          </div>
        </div>
      </div>
    );
  }

  // No data available: Card-style message when quiz data is missing
  if (!state.quizData || state.quizData.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-indigo-100 to-indigo-200 dark:bg-gray-900 dark:from-transparent dark:via-transparent dark:to-transparent flex items-center justify-center p-4 transition-colors duration-300">
        <div className="text-center max-w-md">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 dark:border-gray-700/20">
            <BookOpen className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              No Quiz Data Available
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Please ensure your RandomQuiz.json file is properly imported and
              contains valid Quick Quizions.
            </p>
            <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 text-left text-sm text-gray-600 dark:text-gray-400">
              <p className="mb-2 font-medium">Expected format:</p>
              <code className="text-indigo-600 dark:text-indigo-400">
                [
                {`{question: "...", options: {...}, correctAnswer: "A", explanation: "..."}`}
                , ...]
              </code>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Home Screen: Displays welcome, user stats, and action buttons for starting or viewing results
  if (state.gameState === "home") {
    return (
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-indigo-50/30 to-purple-50/30 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 relative transition-colors duration-300">
        <Navbar currentPage="Quick Quiz" />

        {openResetModal && (
          <ResetModal open={openResetModal} setOpen={setOpenResetModal} />
        )}

        <main className="flex-1 flex flex-col  justify-center w-full max-w-5xl mx-auto px-4 sm:px-6 py-20 sm:py-24 relative z-10">
          {/* Header Section */}
          <div className="text-center mb-10 sm:mb-12 space-y-4 animate-in fade-in slide-in-from-top-4 duration-700">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100/50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 text-indigo-700 dark:text-indigo-300 text-sm font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              <span> Assessment Dashboard</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Welcome back,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
                {user.name}
              </span>
            </h1>

            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Track your progress, challenge yourself, and master new topics
              today.
            </p>
          </div>

          {/* Stats Grid - Enhanced with Lift and Glow */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-10 sm:mb-12">
            {[
              {
                icon: (
                  <BookOpen className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                ),
                label: "Questions",
                value: state.quizData.length,
                sub: "Quizes available",
              },
              {
                icon: (
                  <Target className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                ),
                label: "Tests",
                value: getTotalTests(),
                sub: "Tests ready",
              },
              {
                icon: (
                  <Trophy className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                ),
                label: "Completed",
                value: state.testResults.length,
                sub: "Tests Done",
              },
              {
                icon: (
                  <TrendingUp className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                ),
                label: "Success Rate",
                value:
                  state.testResults.length > 0
                    ? Math.round(
                        state.testResults.reduce(
                          (acc, r) => acc + r.percentage,
                          0
                        ) / state.testResults.length
                      )
                    : 0,
                sub: "Average Score",
                isPercent: true,
              },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-white/60 dark:bg-gray-800/40 backdrop-blur-md rounded-3xl p-5 border border-gray-200/50 dark:border-gray-700/50 shadow-sm flex flex-col items-center text-center justify-center group transition-all duration-300 hover:-translate-y-1  hover:shadow-xl hover:shadow-indigo-500/10 hover:border-indigo-200/50 dark:hover:border-indigo-500/30"
              >
                <div className="mb-3 p-2.5 rounded-xl bg-gray-50 dark:bg-gray-800 group-hover:scale-110 group-hover:bg-white dark:group-hover:bg-gray-700 transition-all duration-300 ring-1 ring-transparent group-hover:ring-indigo-100 dark:group-hover:ring-indigo-500/20">
                  {stat.icon}
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white tracking-tight">
                  {stat.value}
                  {stat.isPercent && (
                    <span className="text-lg align-top opacity-60">%</span>
                  )}
                </div>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-400 mt-1">
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>

          {/* Main Actions Area */}
          <div className="max-w-2xl mx-auto w-full space-y-6">
            {/* Primary CTA: Start Test */}
            {state.currentTest < getTotalTests() && (
              <button
                onClick={() => {
                  playSend();
                  startTest(state.currentTest);
                }}
                className="group relative w-full cursor-pointer overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-600 to-indigo-700 p-1 shadow-xl transition-all duration-300 hover:scale-[1.01] hover:shadow-indigo-500/25"
              >
                <div className="relative flex items-center justify-between rounded-[14px] bg-indigo-600/10 px-6 py-5 sm:px-8 sm:py-6 transition-colors group-hover:bg-indigo-600/0">
                  <div className="flex flex-col text-left">
                    <span className="text-xs font-semibold uppercase tracking-wider text-indigo-200">
                      {state.testResults.length === 0
                        ? "Get Started"
                        : "Up Next"}
                    </span>
                    <span className="text-2xl sm:text-3xl font-bold text-white mt-1">
                      {state.testResults.length === 0
                        ? "Start First Quiz"
                        : `Continue Test ${state.currentTest + 1}`}
                    </span>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-transform duration-300 group-hover:translate-x-1 group-hover:bg-white text-white group-hover:text-indigo-600">
                    <Play className="w-6 h-6 ml-1 fill-current" />
                  </div>
                </div>
              </button>
            )}

            {/* Secondary Actions - Enhanced with Scale and Icon Animation */}
            {state.testResults.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  onClick={() => {
                    playSend();
                    navigate("/results");
                  }}
                  className="group flex items-center justify-center gap-3 px-6 py-4 rounded-xl font-semibold text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 hover:scale-[1.02] hover:shadow-md transition-all duration-200"
                >
                  <Trophy className="w-5 h-5 text-amber-500 transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110" />
                  View Analytics
                </button>

                <button
                  onClick={() => setOpenResetModal(true)}
                  className="group flex items-center justify-center gap-3 px-6 py-4 rounded-xl font-semibold text-rose-600 dark:text-rose-400 bg-transparent border border-rose-200 dark:border-rose-900/50 hover:bg-rose-50 dark:hover:bg-rose-900/20 hover:border-rose-300 dark:hover:border-rose-800 transition-all duration-200"
                >
                  <RotateCcw className="w-5 h-5 transition-transform duration-500 group-hover:-rotate-180" />
                  Reset Progress
                </button>
              </div>
            )}
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  // Quiz Screen: Handles the active quiz session with questions, options, and feedback
  if (state.gameState === "quiz") {
    const currentQuestions = getCurrentTestQuestions();
    const currentQ = currentQuestions[state.currentQuestion];

    if (!currentQ) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-indigo-100 to-indigo-200 dark:bg-gray-900 dark:from-transparent dark:via-transparent dark:to-transparent flex items-center justify-center transition-colors duration-300">
          <Navbar currentPage="Quick Quiz" />
          <div className="text-center pt-16">
            <p className="text-gray-900 dark:text-white text-xl font-semibold mb-4">
              No questions available for this test.
            </p>
            <button
              onClick={() => {
                playSend();
                setGameState("home");
              }}
              className="flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 transition-colors font-semibold"
            >
              <ChevronLeft className="w-5 h-5 mr-2" />
              Home
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-indigo-100 to-indigo-200 dark:bg-gray-900 dark:from-transparent dark:via-transparent dark:to-transparent p-4 transition-colors duration-300">
        <Navbar currentPage="Quick Quiz" />
        <div className="max-w-4xl mx-auto pt-16 ">
          {/* Header */}
          <div className="flex items-center justify-between mb-6 mt-1">
            <button
              onClick={() => {
                playSend();
                setGameState("home");
              }}
              className="flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 transition-colors font-semibold"
            >
              <ChevronLeft className="w-5 h-5 mr-2" />
              Home
            </button>

            <div className="text-center">
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Test {state.currentTest + 1}
                </h2>
                <img src={logo} className="h-10" alt="logo" />
              </div>
              <p className="text-indigo-600 dark:text-indigo-400 font-medium">
                {currentQ.subject}
              </p>
            </div>

            <div className="text-right">
              <p className="text-indigo-500 dark:text-indigo-400 font-semibold">
                Question {state.currentQuestion + 1}/{currentQuestions.length}
              </p>
              {state.startTime && (
                <p className="text-gray-500 dark:text-gray-400 text-xs">
                  Time:{" "}
                  {formatTime(
                    Math.floor((Date.now() - state.startTime) / 1000)
                  )}
                </p>
              )}
            </div>
          </div>

          {/* Progress Bar */}
          <div className="bg-gray-200 dark:bg-gray-700 rounded-full h-3 mb-8 overflow-hidden">
            <div
              className="bg-indigo-500 h-full transition-all duration-500 ease-out"
              style={{
                width: `${
                  ((state.currentQuestion + 1) / currentQuestions.length) * 100
                }%`,
              }}
            ></div>
          </div>

          {/* Question Card */}
          <div className="bg-gray-100 dark:bg-gray-800/70 backdrop-blur-md rounded-3xl px-6 py-6 border border-indigo-300 dark:border-indigo-700 shadow-lg shadow-indigo-200/20 dark:shadow-indigo-900/40 transition-all duration-300">
            {/* Question */}
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white leading-relaxed mb-6">
              {currentQ.question}
            </h3>

            {/* Options */}
            <div className="grid gap-3">
              {(
                Object.entries(currentQ.options) as [
                  keyof typeof currentQ.options,
                  string
                ][]
              ).map(([key, value]) => {
                let base =
                  "w-full p-3 rounded-2xl text-start font-medium transition-all duration-300 transform hover:scale-[1.01] border-2 flex items-center";

                if (!state.showFeedback) {
                  base +=
                    state.selectedAnswer === key
                      ? " bg-indigo-500 border-indigo-500 text-white shadow-md"
                      : " bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 hover:bg-indigo-50 dark:hover:bg-indigo-900 hover:border-indigo-400";
                } else {
                  if (key === currentQ.correctAnswer) {
                    base +=
                      " bg-green-600/20 border-green-500 text-green-800 dark:text-green-100 shadow-md ring-1 ring-green-500";
                  } else if (
                    key === state.selectedAnswer &&
                    key !== currentQ.correctAnswer
                  ) {
                    base +=
                      " bg-red-600/20 border-red-500 text-red-800 dark:text-red-100 shadow-md";
                  } else {
                    base +=
                      " bg-gray-100 dark:bg-gray-700/50 border-gray-200 dark:border-gray-700 text-gray-400 dark:text-gray-500 opacity-70";
                  }
                }

                return (
                  <button
                    key={key}
                    onClick={() => handleAnswerSelect(key)}
                    className={base}
                    disabled={state.showFeedback}
                  >
                    <span className="min-w-8 min-h-8 rounded-full bg-gray-300/20 dark:bg-gray-600/20 flex items-center justify-center mr-3 font-bold">
                      {key}
                    </span>
                    <span className="flex-1">{value}</span>
                    {state.showFeedback && key === currentQ.correctAnswer && (
                      <CheckCircle className="w-6 h-6 text-green-500 ml-2" />
                    )}
                    {state.showFeedback &&
                      key === state.selectedAnswer &&
                      key !== currentQ.correctAnswer && (
                        <XCircle className="w-6 h-6 text-red-500 ml-2" />
                      )}
                  </button>
                );
              })}
            </div>

            {/* Next Button */}
            {state.showFeedback && (
              <button
                onClick={handleNext}
                className="w-full mt-4 bg-gradient-to-r from-indigo-600 to-indigo-700 dark:from-indigo-700 dark:to-indigo-800 text-white font-bold py-4 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg shadow-indigo-200/20 dark:shadow-indigo-900/40 flex items-center justify-center gap-2"
              >
                {state.currentQuestion < currentQuestions.length - 1
                  ? "Next Question"
                  : "Complete Test"}
                <ChevronRight className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
        {/* Feedback */}
        {state.showFeedback && (
          <div className="fixed top-6 left-4  right-4 md:left-1/2 md:-translate-x-1/2 md:max-w-3xl z-50 animate-in slide-in-from-bottom-4 fade-in duration-300">
            <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl p-5 rounded-2xl border border-indigo-200 dark:border-indigo-700 shadow-2xl shadow-indigo-500/20 dark:shadow-black/50 ring-1 ring-black/5">
              <div className="flex items-start gap-4">
                {state.selectedAnswer === currentQ.correctAnswer ? (
                  <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-full flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                ) : (
                  <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-full flex-shrink-0">
                    <XCircle className="w-6 h-6 text-red-600 dark:text-red-400" />
                  </div>
                )}

                <div className="flex-1">
                  <h4
                    className={`font-bold text-lg mb-1 ${
                      state.selectedAnswer === currentQ.correctAnswer
                        ? "text-green-700 dark:text-green-400"
                        : "text-red-600 dark:text-red-400"
                    }`}
                  >
                    {state.selectedAnswer === currentQ.correctAnswer
                      ? "Correct!"
                      : "Incorrect"}
                  </h4>

                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                    {currentQ.explanation}
                  </p>

                  {state.selectedAnswer !== currentQ.correctAnswer && (
                    <div className="mt-3 text-sm font-medium text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-700/50 px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-600 inline-block">
                      Correct answer:{" "}
                      <span className="text-green-600 dark:text-green-400 font-bold">
                        {currentQ.correctAnswer}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Single Test Results Screen: Displays the outcome of the just completed test
  if (state.gameState === "results") {
    const latestResult = state.testResults[state.testResults.length - 1];

    // Logic for styling based on score
    // const isPassing = latestResult.percentage >= 60;
    const isExcellent = latestResult.percentage >= 80;

    const themeColor =
      latestResult.percentage >= 90
        ? "text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200"
        : latestResult.percentage >= 70
        ? "text-blue-600 bg-blue-50 dark:bg-blue-900/20 border-blue-200"
        : latestResult.percentage >= 50
        ? "text-yellow-600 bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200"
        : "text-red-600 bg-red-50 dark:bg-red-900/20 border-red-200";

    const accentColor = themeColor.split(" ")[0]; // Extract text color for icons

    return (
      <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-950 font-sans text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <Navbar currentPage="Test Results" />

        <div className="flex-1 flex items-center  mt-16 justify-center p-4 sm:p-6 animate-fade-in-up">
          <div className="w-full max-w-md bg-white dark:bg-gray-900 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800 overflow-hidden">
            {/* Header Section */}
            <div className="pt-4 pb-6 px-8 text-center">
              <div
                className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4 ${themeColor
                  .split(" ")
                  .slice(1)
                  .join(" ")}`}
              >
                {isExcellent ? (
                  <Trophy className={`w-8 h-8 ${accentColor}`} />
                ) : (
                  <CheckCircle2 className={`w-8 h-8 ${accentColor}`} />
                )}
              </div>
              <h1 className="text-2xl font-bold tracking-tight mb-1">
                {isExcellent ? "Outstanding Job!" : "Test Completed"}
              </h1>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                You finished Test #{latestResult.testNumber}
              </p>
            </div>

            {/* Score Display */}
            <div className="px-8 pb-8 text-center border-b border-gray-100 dark:border-gray-800">
              <div className="relative inline-flex flex-col items-center">
                <span
                  className={`text-6xl font-black tracking-tighter ${accentColor}`}
                >
                  {latestResult.percentage}%
                </span>
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mt-2 ${themeColor}`}
                >
                  {getPerformanceMessage(latestResult.percentage)}
                </span>
                <p className="mt-3 text-sm font-medium text-gray-500 dark:text-gray-400">
                  {latestResult.score} out of {latestResult.totalQuestions}{" "}
                  Correct
                </p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 divide-x divide-gray-100 dark:divide-gray-800 bg-gray-50/50 dark:bg-gray-800/20">
              <div className="p-4 flex flex-col items-center text-center">
                <BookOpen className="w-4 h-4 text-gray-400 mb-1" />
                <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">
                  Subject
                </span>
                <span
                  className="text-sm font-semibold truncate w-full"
                  title={latestResult.subject}
                >
                  {latestResult.subject.length > 10
                    ? latestResult.subject.substring(0, 10) + ".."
                    : latestResult.subject}
                </span>
              </div>
              <div className="p-4 flex flex-col items-center text-center">
                <Clock className="w-4 h-4 text-gray-400 mb-1" />
                <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">
                  Time
                </span>
                <span className="text-sm font-semibold">
                  {latestResult.timeTaken
                    ? formatTime(latestResult.timeTaken)
                    : "--:--"}
                </span>
              </div>
              <div className="p-4 flex flex-col items-center text-center">
                <Calendar className="w-4 h-4 text-gray-400 mb-1" />
                <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">
                  Date
                </span>
                <span className="text-sm font-semibold whitespace-nowrap">
                  {latestResult.date}
                </span>
              </div>
            </div>

            {/* Actions Footer */}
            <div className="p-6 space-y-3 bg-white dark:bg-gray-900">
              {state.currentTest < getTotalTests() ? (
                <button
                  onClick={() => {
                    playSend();
                    startTest(state.currentTest);
                  }}
                  className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold h-12 rounded-xl transition-all transform active:scale-[0.98] shadow-md shadow-indigo-200 dark:shadow-none"
                >
                  Start Next Test <Play className="w-4 h-4" />
                </button>
              ) : (
                <div className="w-full h-12 flex items-center justify-center text-gray-400 font-medium bg-gray-100 dark:bg-gray-800 rounded-xl cursor-not-allowed">
                  All Tests Completed
                </div>
              )}

              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => {
                    playSend();
                    setGameState("home");
                  }}
                  className="w-full flex items-center justify-center gap-2 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 font-medium h-10 rounded-xl transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" /> Home
                </button>

                {state.testResults.length > 1 && (
                  <button
                    onClick={() => {
                      playSend();
                      navigate("/results");
                    }}
                    className="w-full flex items-center justify-center gap-2 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 font-medium h-10 rounded-xl transition-colors"
                  >
                    <Trophy className="w-4 h-4" /> History
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Fallback return
  return null;
};

export default QuizApp;
