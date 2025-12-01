import { useTheme } from "@/hooks/useHook";
import {
  BarChart3,
  BookOpen,
  Calendar,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  ClipboardCheck,
  Clock,
  Crown,
  Hash,
  Lightbulb,
  Play,
  RotateCcw,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  Trophy,
  XCircle,
} from "lucide-react";
import React, { useEffect, useState } from "react";

import Footer from "@/components/app/Footer";
import Navbar from "@/components/app/Navbar";
import { STORAGE_KEYS } from "@/constants";
import quizData from "@/jsons/quizData";
import ResetModal from "@/modals/Delete";
import { toast } from "sonner";
import useSound from "../hooks/useSound";
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
  difficulty?: string;
}

interface QuizProgress {
  currentTest: number;
  currentQuestion: number;
  score: number;
  startTime?: number;
  selectedAnswers: string[];
  isActive: boolean;
}

type GameState = "home" | "quiz" | "results" | "allResults";

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
  const [openResetModal, setOpenResetModal] = useState(false);
  const { theme } = useTheme();
  useEffect(() => {
    console.log(theme);
  }, []);

  const QUESTIONS_PER_TEST = 20;

  const { playError, playSuccess, playFinish, playSend } = useSound();

  // Initialize app
  useEffect(() => {
    const initializeApp = async (): Promise<void> => {
      try {
        // Try to load quiz data from  or show error
        let loadedQuizData: QuizType[] = quizData;

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
    details && setUser(JSON.parse(details));
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
      // difficulty: getCurrentTestDifficulty(),
    };

    const updatedResults = [...state.testResults, testResult];
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
              contains valid quiz questions.
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
  <Navbar currentPage="Quiz Quest" />
  
  {openResetModal && (
    <ResetModal open={openResetModal} setOpen={setOpenResetModal} />
  )}

  <main className="flex-1 flex flex-col  justify-center w-full max-w-5xl mx-auto px-4 sm:px-6 py-20 sm:py-24 relative z-10">
    
    {/* Header Section */}
    <div className="text-center mb-10 sm:mb-12 space-y-4 animate-in fade-in slide-in-from-top-4 duration-700">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100/50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 text-indigo-700 dark:text-indigo-300 text-sm font-medium">
        <Sparkles className="w-3.5 h-3.5" />
        <span>Grade 9 Quiz Master</span>
      </div>
      
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white">
        Welcome back, <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">{user.name}</span>
      </h1>
      
      <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
        Track your progress, challenge yourself, and master new topics today.
      </p>
    </div>

    {/* Stats Grid - Enhanced with Lift and Glow */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-10 sm:mb-12">
      {[
        {
          icon: <BookOpen className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />,
          label: "Questions",
          value: state.quizData.length,
          sub: "Quizes available",
        },
        {
          icon: <Target className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
          label: "Tests",
          value: getTotalTests(),
          sub: "Tests ready",
        },
        {
          icon: <Trophy className="w-5 h-5 text-amber-600 dark:text-amber-400" />,
          label: "Completed",
          value: state.testResults.length,
          sub: "Tests Done",
        },
        {
          icon: <TrendingUp className="w-5 h-5 text-rose-600 dark:text-rose-400" />,
          label: "Success Rate",
          value: state.testResults.length > 0
              ? Math.round(state.testResults.reduce((acc, r) => acc + r.percentage, 0) / state.testResults.length)
              : 0,
          sub: "Average Score",
          isPercent: true,
        },
      ].map((stat, i) => (
        <div
          key={i}
          className="bg-white/60 dark:bg-gray-800/40 backdrop-blur-md rounded-2xl p-5 border border-gray-200/50 dark:border-gray-700/50 shadow-sm flex flex-col items-center text-center justify-center group transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/10 hover:border-indigo-200/50 dark:hover:border-indigo-500/30"
        >
          <div className="mb-3 p-2.5 rounded-xl bg-gray-50 dark:bg-gray-800 group-hover:scale-110 group-hover:bg-white dark:group-hover:bg-gray-700 transition-all duration-300 ring-1 ring-transparent group-hover:ring-indigo-100 dark:group-hover:ring-indigo-500/20">
            {stat.icon}
          </div>
          <div className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white tracking-tight">
            {stat.value}{stat.isPercent && <span className="text-lg align-top opacity-60">%</span>}
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
          className="group relative w-full overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 p-1 shadow-xl transition-all duration-300 hover:scale-[1.01] hover:shadow-indigo-500/25"
        >
          <div className="relative flex items-center justify-between rounded-[14px] bg-indigo-600/10 px-6 py-5 sm:px-8 sm:py-6 transition-colors group-hover:bg-indigo-600/0">
            <div className="flex flex-col text-left">
              <span className="text-xs font-semibold uppercase tracking-wider text-indigo-200">
                {state.testResults.length === 0 ? "Get Started" : "Up Next"}
              </span>
              <span className="text-2xl sm:text-3xl font-bold text-white mt-1">
                {state.testResults.length === 0 ? "Start First Quiz" : `Continue Test ${state.currentTest + 1}`}
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
              setGameState("allResults");
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
          <Navbar currentPage="Quiz Quest" />
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
      <div className="min-h-screen  bg-gradient-to-br from-indigo-50 via-indigo-100 to-indigo-200 dark:bg-gray-900 dark:from-transparent dark:via-transparent dark:to-transparent p-4 transition-colors duration-300">
        <Navbar currentPage="Quiz Quest" />
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
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white leading-relaxed mb-4">
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
                  "w-full p-3 rounded-2xl text-start font-medium transition-all duration-300 transform hover:scale-[1.02] border-2 flex items-center";

                if (!state.showFeedback) {
                  base +=
                    state.selectedAnswer === key
                      ? " bg-indigo-500 border-indigo-500 text-white shadow-md"
                      : " bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 hover:bg-indigo-50 dark:hover:bg-indigo-900 hover:border-indigo-400";
                } else {
                  if (key === currentQ.correctAnswer) {
                    base +=
                      " bg-green-600/40 border-green-500 text-white shadow-md";
                  } else if (
                    key === state.selectedAnswer &&
                    key !== currentQ.correctAnswer
                  ) {
                    base +=
                      " bg-red-600/40 border-red-600 text-white shadow-md";
                  } else {
                    base +=
                      " bg-gray-100 dark:bg-gray-700/80 border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400";
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
                      <CheckCircle className="w-6 h-6 text-green-400" />
                    )}
                    {state.showFeedback &&
                      key === state.selectedAnswer &&
                      key !== currentQ.correctAnswer && (
                        <XCircle className="w-6 h-6 text-red-400" />
                      )}
                  </button>
                );
              })}
            </div>

            {/* Feedback */}
            {state.showFeedback && (
              <div className="p-4  mt-4 bg-gray-100 dark:bg-gray-700 rounded-2xl border border-indigo-500 dark:border-indigo-600 shadow-md transition-colors duration-300">
                <div className="flex items-start gap-3">
                  {state.selectedAnswer === currentQ.correctAnswer ? (
                    <CheckCircle className="w-6 h-6 text-gren-400 mt-1 flex-shrink-0" />
                  ) : (
                    <XCircle className="w-6 h-6 text-red-400 mt-1 flex-shrink-0" />
                  )}
                  <div className="flex-1">
                    <p
                      className={`font-semibold text-lg mb-1 ${
                        state.selectedAnswer === currentQ.correctAnswer
                          ? "text-green-400"
                          : "text-red-400"
                      }`}
                    >
                      {state.selectedAnswer === currentQ.correctAnswer
                        ? "Correct!"
                        : "Incorrect"}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-1">
                      {currentQ.explanation}
                    </p>
                    {state.selectedAnswer !== currentQ.correctAnswer && (
                      <p className="text-sm text-green-600 dark:text-green-400 font-medium">
                        Correct answer:{" "}
                        <strong>{currentQ.correctAnswer}</strong> –{" "}
                        {currentQ.options[currentQ.correctAnswer]}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Next Button */}
            {state.showFeedback && (
              <button
                onClick={handleNext}
                className="w-full mt-6 bg-gradient-to-r from-indigo-600 to-indigo-700 dark:from-indigo-700 dark:to-indigo-800 text-white font-bold py-4 rounded-2xl transition-all duration-300 transform hover:scale-[1.03] shadow-lg shadow-indigo-200/20 dark:shadow-indigo-900/40 flex items-center justify-center gap-2"
              >
                {state.currentQuestion < currentQuestions.length - 1
                  ? "Next Question"
                  : "Complete Test"}
                <ChevronRight className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Single Test Results Screen: Displays the outcome of the just completed test
  if (state.gameState === "results") {
    const latestResult = state.testResults[state.testResults.length - 1];

    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-indigo-100 to-indigo-200 dark:bg-gray-900 dark:from-transparent dark:via-transparent dark:to-transparent p-4 sm:p-6 transition-all duration-500">
        <Navbar currentPage="Test Results" />
        <div className="max-w-4xl mx-auto pt-16">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
              Test Results
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto mb-4"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Quiz Completed {latestResult.testNumber}!
            </p>
          </div>

          {/* Results Card */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl border border-white/50 dark:border-gray-700/50 shadow-2xl p-6 sm:p-8 mb-8">
            {/* Score Display */}
            <div className="text-center ">
              <div className="relative inline-block">
                <div
                  className={`text-5xl font-black mb-2  ${
                    latestResult.percentage >= 90
                      ? "bg-gradient-to-r from-green-400 to-emerald-500"
                      : latestResult.percentage >= 80
                      ? "bg-gradient-to-r from-blue-400 to-indigo-500"
                      : latestResult.percentage >= 70
                      ? "bg-gradient-to-r from-yellow-400 to-orange-500"
                      : "bg-gradient-to-r from-red-400 to-red-500"
                  } bg-clip-text text-transparent`}
                >
                  {latestResult.percentage}%
                </div>
                <div className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {latestResult.score}/{latestResult.totalQuestions} Correct
                </div>
                <div
                  className={`inline-flex fixed top-4 left-4 items-center px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider ${
                    latestResult.percentage >= 90
                      ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
                      : latestResult.percentage >= 80
                      ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                      : latestResult.percentage >= 70
                      ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300"
                      : "bg-red-100 text-red-700 dark:bg-red-600/40 dark:text-red-300"
                  }`}
                >
                  {latestResult.percentage >= 90
                    ? "🏆 Outstanding"
                    : latestResult.percentage >= 80
                    ? "⭐ Excellent"
                    : latestResult.percentage >= 70
                    ? "👍 Good"
                    : latestResult.percentage >= 60
                    ? "Keep going"
                    : "📚 Needs Work"}
                </div>
              </div>
            </div>

            {/* Performance Message */}
            <div className="text-center mb-4">
              <p className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {getPerformanceMessage(latestResult.percentage)}
              </p>
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
              <div className="bg-gray-50 dark:bg-gray-700/50 shadow rounded-2xl p-4 text-center">
                <BookOpen className="w-8 h-8 text-indigo-500 mx-auto mb-2" />
                <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                  Subjects
                </p>
                <p className="text-lg font-bold text-gray-900 dark:text-white">
                  {latestResult.subject.substring(0, 74)}...
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700/50 shadow rounded-2xl p-4 text-center">
                <Calendar className="w-8 h-8 text-green-500 mx-auto mb-2" />
                <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                  Date
                </p>
                <p className="text-lg font-bold text-gray-900 dark:text-white">
                  {latestResult.date}
                </p>
              </div>
              {latestResult.timeTaken && (
                <div className="bg-gray-50 dark:bg-gray-700/50 shadow rounded-2xl p-4 text-center">
                  <Clock className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                    Time Taken
                  </p>
                  <p className="text-lg font-bold text-gray-900 dark:text-white">
                    {formatTime(latestResult.timeTaken)}
                  </p>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <div className="flex gap-4">
                {" "}
                <button
                  onClick={() => {
                    playSend();
                    setGameState("home");
                  }}
                  className="w-full bg-gradient-to-r from-indigo-700 to-indigo-600 text-white font-bold py-4 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg  flex items-center justify-center gap-2"
                >
                  <ChevronLeft className="w-5 h-5" />
                  Back to Home
                </button>
                {state.currentTest < getTotalTests() && (
                  <button
                    onClick={() => {
                      playSend();
                      startTest(state.currentTest);
                    }}
                    className="w-full bg-gradient-to-r from-indigo-700 to-indigo-600 text-white font-bold py-4 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg  flex items-center justify-center gap-2"
                  >
                    <Play className="w-5 h-5" />
                    Start Next Test
                  </button>
                )}
              </div>

              {state.testResults.length > 1 && (
                <button
                  onClick={() => {
                    playSend();
                    setGameState("allResults");
                  }}
                  className="w-full bg-white/20 dark:bg-gray-800/50 backdrop-blur-xl text-gray-900 dark:text-white font-semibold py-4 rounded-2xl transition-all duration-300 border border-indigo-400/30 hover:border-indigo-500 shadow-xl hover:shadow-indigo-500/20 hover:scale-[1.01] flex items-center justify-center gap-2"
                >
                  <Trophy className="w-5 h-5" />
                  View All Results
                </button>
              )}
            </div>
          </div>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    );
  }

  // All Results Screen: Displays the outcome of the completed test with score, message, and navigation options
  if (state.gameState === "allResults") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900 p-4 sm:p-6 transition-all duration-500">
        <Navbar currentPage="Quiz Results" />
        <div className="max-w-6xl mx-auto pt-16">
          {/* Header with enhanced styling */}
          <div className="flex items-center justify-between mb-12">
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
              <h1 className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                Quiz Results
              </h1>
              <div className="h-1 w-24 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto"></div>
            </div>
            <div className="w-20"></div>
          </div>

          {/* Enhanced empty state */}
          {state.testResults.length === 0 ? (
            <div className="text-center py-16">
              <div className="relative bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg rounded-3xl p-12 shadow-2xl border border-indigo-200/30 dark:border-indigo-700/30 max-w-md mx-auto">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <div className="p-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl shadow-xl">
                    <BookOpen className="w-12 h-12 text-white" />
                  </div>
                </div>
                <div className="mt-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    No Results Yet
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    Your quiz journey starts here! Complete your first test to
                    unlock detailed insights and track your progress.
                  </p>
                  <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl font-semibold shadow-lg animate-pulse">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Ready to Begin?
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <>
              {/* Enhanced results grid */}
              <div className="space-y-6 mb-8 grid grid-cols-2 lg:grid-cols-3 gap-4">
                {state.testResults
                  .slice()
                  .reverse()
                  .map((result, index) => (
                    <div
                      key={index}
                      className="group flex relative  bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl border border-white/50 dark:border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:border-indigo-300/50 dark:hover:border-indigo-600/50"
                    >
                      {/* Gradient overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                      <div className="relative p-4">
                        <div className="flex items-center justify-between flex-col lg:flex-row gap-6">
                          <div className="flex-1 text-center lg:text-left">
                            {/* Test header with badge */}
                            <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                              <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-full">
                                <Hash className="w-4 h-4 text-indigo-600 dark:text-indigo-400 mr-1" />
                                <span className="text-sm font-semibold text-indigo-700 dark:text-indigo-300">
                                  Test {result.testNumber}
                                </span>
                              </div>
                            </div>

                            {/* Subject with enhanced styling */}
                            <h3 className="md:text-lg lg:text-xl font-bold text-gray-900 dark:text-white mb-4">
                              {result.subject.substring(0, 40)}...
                            </h3>

                            {/* Enhanced metadata */}
                            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 text-gray-600 dark:text-gray-400">
                              <div className="flex items-center gap-2 bg-gray-100/50 dark:bg-gray-700/30 px-3 py-1.5 rounded-lg">
                                <Calendar className="w-4 h-4 text-indigo-500" />
                                <span className="text-xs md:text-sm font-medium">
                                  {result.date}
                                </span>
                              </div>
                              {result.timeTaken && (
                                <div className="flex items-center gap-2 bg-gray-100/50 dark:bg-gray-700/30 px-3 py-1.5 rounded-lg">
                                  <Clock className="w-4 h-4 text-green-500" />
                                  <span className="text-xs md:text-sm font-medium">
                                    {formatTime(result.timeTaken)}
                                  </span>
                                </div>
                              )}
                            </div>
                          </div>
                          {result.percentage >= 90 && (
                            <div className="flex absolute -top-4  -right-2 p-1.5 justify-center shadow items-center bg-gradient-to-r from-yellow-100 to-yellow-200 dark:from-yellow-900/30 dark:to-yellow-800/30 rounded-full">
                              <Crown
                                className=" text-yellow-600 dark:text-yellow-400 "
                                size={20}
                              />
                            </div>
                          )}
                          {/* Enhanced score display */}
                          <div className="text-center">
                            <div
                              className={`text-4xl sm:text-5xl font-black mb-2 ${
                                result.percentage >= 90
                                  ? "bg-gradient-to-r from-green-400 to-emerald-500"
                                  : result.percentage >= 80
                                  ? "bg-gradient-to-r from-blue-400 to-indigo-500"
                                  : result.percentage >= 70
                                  ? "bg-gradient-to-r from-yellow-400 to-orange-500"
                                  : " bg-red-500"
                              } bg-clip-text text-transparent`}
                            >
                              {result.percentage}%
                            </div>
                            <div
                              className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                                result.percentage >= 90
                                  ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
                                  : result.percentage >= 80
                                  ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                                  : result.percentage >= 70
                                  ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300"
                                  : "bg-red-100 text-red-700 dark:bg-red-600/40 dark:text-red-300"
                              }`}
                            >
                              {result.percentage >= 90
                                ? "🏆 Outstanding"
                                : result.percentage >= 80
                                ? "⭐ Excellent"
                                : result.percentage >= 70
                                ? "👍 Good"
                                : "📚 Needs Work"}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>

              {/* Enhanced overall stats */}
              <div className="bg-white/80 dark:bg-gray-800/80 rounded-3xl border border-white/50 dark:border-gray-700/50 shadow-2xl overflow-hidden">
                <div className="bg-gradient-to-r from-indigo-600/50 to-indigo-700/50 p-6 sm:p-8 border-b border-indigo-200/30 dark:border-indigo-700/30">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-3xl font-black text-gray-900 dark:text-white">
                      Performance Analytics
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-lg">
                    Your learning journey at a glance ✨
                  </p>
                </div>

                <div className="p-6 sm:p-8">
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Enhanced stat cards */}
                    <div className="group relative overflow-hidden bg-gradient-to-br from-indigo-50 to-indigo-100/80 dark:from-indigo-900/40 dark:to-indigo-800/20 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border border-indigo-200/50 dark:border-indigo-700/30">
                      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative text-center">
                        <div className="inline-flex items-center justify-center w-14 h-14 bg-indigo-500/15 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                          <BarChart3 className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />
                        </div>
                        <div className="text-3xl font-black text-indigo-700 dark:text-indigo-400 mb-1">
                          {Math.round(
                            state.testResults.reduce(
                              (acc, r) => acc + r.percentage,
                              0
                            ) / state.testResults.length
                          )}
                          %
                        </div>
                        <p className="text-sm font-bold text-indigo-600 dark:text-indigo-300 uppercase tracking-wide">
                          Average Score
                        </p>
                      </div>
                    </div>

                    <div className="group relative overflow-hidden bg-gradient-to-br from-emerald-50 to-emerald-100/80 dark:from-emerald-900/40 dark:to-emerald-800/20 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border border-emerald-200/50 dark:border-emerald-700/30">
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative text-center">
                        <div className="inline-flex items-center justify-center w-14 h-14 bg-emerald-500/15 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                          <Trophy className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />
                        </div>
                        <div className="text-3xl font-black text-emerald-700 dark:text-emerald-400 mb-1">
                          {Math.max(
                            ...state.testResults.map((r) => r.percentage)
                          )}
                          %
                        </div>
                        <p className="text-sm font-bold text-emerald-600 dark:text-emerald-300 uppercase tracking-wide">
                          Best Score
                        </p>
                      </div>
                    </div>

                    <div className="group relative overflow-hidden bg-gradient-to-br from-amber-50 to-amber-100/80 dark:from-amber-900/40 dark:to-amber-800/20 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border border-amber-200/50 dark:border-amber-700/30">
                      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative text-center">
                        <div className="inline-flex items-center justify-center w-14 h-14 bg-amber-500/15 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                          <ClipboardCheck className="w-7 h-7 text-amber-600 dark:text-amber-400" />
                        </div>
                        <div className="text-3xl font-black text-amber-700 dark:text-amber-400 mb-1">
                          {state.testResults.length}
                        </div>
                        <p className="text-sm font-bold text-amber-600 dark:text-amber-300 uppercase tracking-wide">
                          Tests Completed
                        </p>
                      </div>
                    </div>

                    <div className="group relative overflow-hidden bg-gradient-to-br from-violet-50 to-violet-100/80 dark:from-violet-900/40 dark:to-violet-800/20 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border border-violet-200/50 dark:border-violet-700/30">
                      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative text-center">
                        <div className="inline-flex items-center justify-center w-14 h-14 bg-violet-500/15 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                          <Star className="w-7 h-7 text-violet-600 dark:text-violet-400" />
                        </div>
                        <div className="text-3xl font-black text-violet-700 dark:text-violet-400 mb-1">
                          {
                            state.testResults.filter((r) => r.percentage >= 80)
                              .length
                          }
                        </div>
                        <p className="text-sm font-bold text-violet-600 dark:text-violet-300 uppercase tracking-wide">
                          Excellent Scores
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Progress insights */}
                  <div className="mt-8 p-6 bg-gradient-to-r from-gray-50 to-gray-100/50 dark:from-gray-800/50 dark:to-gray-700/30 rounded-2xl border border-gray-200/50 dark:border-gray-600/30">
                    <div className="flex items-center gap-3 mb-4">
                      <Lightbulb className="w-5 h-5 text-yellow-500" />
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                        Quick Insights
                      </h4>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-gray-700 dark:text-gray-300">
                          {Math.round(
                            (state.testResults.filter((r) => r.percentage >= 80)
                              .length /
                              state.testResults.length) *
                              100
                          )}
                          % of tests scored 80%+
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-700 dark:text-gray-300">
                          Consistent performance across{" "}
                          {
                            new Set(state.testResults.map((r) => r.subject))
                              .size
                          }{" "}
                          subjects
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Footer */}
          <Footer />
        </div>
      </div>
    );
  }

  // Fallback return
  return null;
};

export default QuizApp;
