import { useTheme } from "@/hooks/useHook";
import {
  BookOpen,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Clock,
  Home,
  Laptop2,
  Play,
  RotateCcw,
  Sparkles,
  Star,
  Target,
  Trophy,
  XCircle
} from "lucide-react";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

import finish from "../assets/images/finish.png";

import Navbar from "@/components/app/Navbar";
import quiz from "../assets/images/quiz.png";
import quizData1 from "../assets/jsons/Quiz.json";
import useSound from "../hooks/useSound";

// TypeScript interfaces
interface QuizQuestion {
  id: string;
  question: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  correctAnswer: "A" | "B" | "C" | "D";
  explanation: string;
  subject: string;
  difficulty?: "easy" | "medium" | "hard";
  category?: string;
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
  quizData: QuizQuestion[];
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
  const { theme } = useTheme();
  useEffect(() => {
    console.log(theme);
  }, []);

  const QUESTIONS_PER_TEST = 20;
  const STORAGE_KEYS = {
    TEST_RESULTS: "quiz_test_results",
    QUIZ_PROGRESS: "quiz_progress",
    CURRENT_TEST_INDEX: "quiz_current_test_index",
  };

  const { playError, playSuccess, playFinish, playSend } = useSound();

  // Initialize app
  useEffect(() => {
    const initializeApp = async (): Promise<void> => {
      try {
        // Try to load quiz data from  or show error
        let loadedQuizData: any = quizData1;

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

  // REset all data
  const resetAllData = (): void => {
    try {
      const password = window.prompt("Enter password");
      if (!password) return;
      if (password !== "14572") {
        toast.error("Incorrect password!", { id: "toasty" });
        return;
      }
      if (password === "14572") {
        const confirmation = window.confirm(
          "Are you sure you want to clear all data?"
        );
        if (confirmation) {
          localStorage.removeItem(STORAGE_KEYS.TEST_RESULTS);
          localStorage.removeItem(STORAGE_KEYS.QUIZ_PROGRESS);
          localStorage.removeItem(STORAGE_KEYS.CURRENT_TEST_INDEX);
          toast.success("Data cleared Successfully");
          window.location.reload();
        } else {
          toast("You have cancelled deletion!");
          return;
        }
      }

      setState((prev) => ({
        ...prev,
        testResults: [],
        currentTest: 0,
        currentQuestion: 0,
        score: 0,
        gameState: "home",
        selectedAnswer: "",
        showFeedback: false,
        startTime: undefined,
      }));
    } catch (error) {
      console.error("Error resetting data:", error);
    }
  };

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
  const getCurrentTestQuestions = (): QuizQuestion[] => {
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
      ...new Set(currentQuestions.map((q: QuizQuestion) => q.subject)),
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

  // Loading screen
  if (state.loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-purple-500 border-t-transparent mx-auto mb-4"></div>
          <p className="text-purple-300 text-lg">Loading Quiz Data...</p>
        </div>
      </div>
    );
  }

  // Error screen
  if (state.error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
        <div className="text-center max-w-md">
          <XCircle className="w-16 h-16 text-red-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-4">
            Error Loading Quiz
          </h2>
          <p className="text-gray-300 mb-6">{state.error}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
          >
            Retry Loading
          </button>
        </div>
      </div>
    );
  }

  // No data available
  if (!state.quizData || state.quizData.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
        <div className="text-center max-w-md">
          <BookOpen className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-4">
            No Quiz Data Available
          </h2>
          <p className="text-gray-300 mb-6">
            Please ensure your RandomQuiz.json file is properly imported and
            contains valid quiz questions.
          </p>
          <div className="bg-slate-800 rounded-lg p-4 text-left text-sm text-gray-300">
            <p className="mb-2">Expected format:</p>
            <code className="text-purple-300"></code>
          </div>
        </div>
      </div>
    );
  }

  // Home Screen
  if (state.gameState === "home") {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 p-3 sm:p-6 relative overflow-hidden transition-colors duration-300">
        <Navbar />

        <div className="max-w-4xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-6 sm:mb-8 pt-18">
            <div className="relative inline-block">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-2 relative">
                {user.name}
                <div className="absolute -top-1 -right-2 sm:-top-2 sm:-right-4">
                  <Sparkles className="w-4 h-4 sm:w-6 sm:h-6 text-green-500" />
                </div>
              </h1>
            </div>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-medium mb-2">
              Grade 9 Quiz Master
            </p>
            <div className="w-16 sm:w-24 h-1 bg-green-500 mx-auto rounded-full"></div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
            {/** Reusable Stats Card */}
            {[
              {
                icon: (
                  <BookOpen className="w-5 h-5 sm:w-7 sm:h-7 text-green-500" />
                ),
                label: "Questions",
                value: state.quizData.length,
                sub: "Total Available",
              },
              {
                icon: (
                  <Target className="w-5 h-5 sm:w-7 sm:h-7 text-green-500" />
                ),
                label: "Tests",
                value: getTotalTests(),
                sub: "Ready to Take",
              },
              {
                icon: <Star className="w-5 h-5 sm:w-7 sm:h-7 text-green-500" />,
                label: "Completed",
                value: state.testResults.length,
                sub: "Tests Done",
              },
              {
                icon: (
                  <Trophy className="w-5 h-5 sm:w-7 sm:h-7 text-green-500" />
                ),
                label: "Average",
                value:
                  state.testResults.length > 0
                    ? Math.round(
                        state.testResults.reduce(
                          (acc, r) => acc + r.percentage,
                          0
                        ) / state.testResults.length
                      )
                    : 0,
                sub: "Success Rate",
                isPercent: true,
              },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-white/20 shadow-lg dark:bg-gray-800/50 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-green-400/30 hover:border-green-500 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <div className="p-2 sm:p-3 bg-green-100/20 rounded-xl sm:rounded-2xl">
                    {stat.icon}
                  </div>
                  <div className="text-green-500 text-xs sm:text-sm font-medium absolute top-4 right-8">
                    {stat.label}
                  </div>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-1">
                  {stat.value}
                  {stat.isPercent && "%"}
                </h3>
                <p className="text-green-300 text-xs sm:text-sm">{stat.sub}</p>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="space-y-3 sm:space-y-4 max-w-2xl mx-auto">
            {state.currentTest < getTotalTests() && (
              <button
                onClick={() => {
                  playSend();
                  startTest(state.currentTest);
                }}
                className="w-full bg-green-500/80 hover:bg-green-600/80 text-white p-4 sm:p-6 rounded-2xl sm:rounded-3xl font-bold text-lg sm:text-2xl transition-all duration-300 transform hover:scale-[1.02] shadow-2xl hover:shadow-green-500/30 border border-green-400/20 relative overflow-hidden"
              >
                <div className="flex items-center justify-center">
                  <div className="p-2 sm:p-3 bg-white/10 rounded-xl sm:rounded-2xl mr-3 sm:mr-4">
                    <Play className="w-6 h-6 sm:w-8 sm:h-8 text-green-100" />
                  </div>
                  <div className="text-left">
                    <div className="text-lg sm:text-2xl font-bold">
                      {state.testResults.length === 0
                        ? "Start Your Journey"
                        : `Continue Test ${state.currentTest + 1}`}
                    </div>
                    <div className="text-gray-700 dark:text-gray-300 text-sm font-medium mt-1">
                      {state.testResults.length === 0
                        ? "Begin your first quiz adventure"
                        : "Keep building your knowledge"}
                    </div>
                  </div>
                </div>
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full"></div>
                </div>
              </button>
            )}

            {state.testResults.length > 0 && (
              <>
                <button
                  onClick={() => {
                    playSend();
                    setGameState("allResults");
                  }}
                  className="w-full bg-white/20 dark:bg-gray-800/50 backdrop-blur-xl text-gray-900 dark:text-white p-5 sm:p-6 rounded-2xl sm:rounded-3xl font-semibold text-base sm:text-lg transition-all duration-300 border border-green-400/30 hover:border-green-500 shadow-xl hover:shadow-green-500/20 hover:scale-[1.01]"
                >
                  <div className="flex items-center justify-center">
                    <div className="p-2 bg-white/10 rounded-xl mr-3">
                      <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
                    </div>
                    <span>View All Results & Analytics</span>
                  </div>
                </button>

                <button
                  onClick={resetAllData}
                  className="w-full bg-white/20 dark:bg-gray-800/50 hover:bg-white/30 dark:hover:bg-gray-700/50 text-green-500 hover:text-green-400 p-4 sm:p-5 rounded-2xl sm:rounded-3xl font-semibold transition-all duration-300 border border-green-400/30 hover:border-green-500 shadow-xl hover:shadow-green-500/20 hover:scale-[1.01]"
                >
                  <div className="flex items-center justify-center">
                    <div className="p-2 bg-green-100/20 rounded-xl mr-3">
                      <RotateCcw className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <span>Reset All Progress</span>
                  </div>
                </button>
              </>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-10 mb-2 flex  sm:flex-row gap-2 justify-center items-center text-center">
          <p className="text-gray-400 text-sm sm:text-base">
            from code to impact -{" "}
            <span className="text-green-400 dark:text-green-300 underline font-medium">
              <a
                href="https://dikie.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                dikie.dev
              </a>
            </span>
          </p>
          <Laptop2 className="text-green-400 dark:text-green-300 w-4 h-4 sm:w-5 sm:h-5" />
        </div>
      </div>
    );
  }

  // Quiz Screen
  if (state.gameState === "quiz") {
    const currentQuestions = getCurrentTestQuestions();
    const currentQ = currentQuestions[state.currentQuestion];

    if (!currentQ) {
      return (
        <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center transition-colors duration-300">
          <div className="text-center">
            <p className="text-gray-900 dark:text-white text-xl">
              No questions available for this test.
            </p>
            <button
              onClick={() => {
                playSend();
                setGameState("home");
              }}
              className="mt-4 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl shadow-md transition-all duration-300"
            >
              Go Home
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4 transition-colors duration-300">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-6 mt-1">
            <button
              onClick={() => {
                playSend();
                setGameState("home");
              }}
              className="flex items-center text-green-600 dark:text-green-400 hover:text-green-500 dark:hover:text-green-300 transition-colors font-semibold"
            >
              <ChevronLeft className="w-5 h-5 mr-2" />
              Home
            </button>

            <div className="text-center">
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Test {state.currentTest + 1}
                </h2>
                <img src={quiz} className="h-10" alt="quiz icon" />
              </div>
              <p className="text-green-600 dark:text-green-400 font-medium">
                {currentQ.subject}
              </p>
            </div>

            <div className="text-right">
              <p className="text-green-500 dark:text-green-400">
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
              className="bg-green-500 h-full transition-all duration-500 ease-out"
              style={{
                width: `${
                  ((state.currentQuestion + 1) / currentQuestions.length) * 100
                }%`,
              }}
            ></div>
          </div>

          {/* Question Card */}
          <div className="bg-white/80 dark:bg-gray-800/70 backdrop-blur-md rounded-3xl px-6 py-6 border border-green-300 dark:border-green-700 shadow-lg shadow-green-200/20 dark:shadow-green-900/40 transition-all duration-300">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white leading-relaxed flex-1">
                {currentQ.question}
              </h3>
              {currentQ.category && (
                <span className="ml-4 px-3 py-1 bg-green-100/30 dark:bg-green-700/30 text-green-600 dark:text-green-300 rounded-full text-sm font-medium">
                  {currentQ.category}
                </span>
              )}
            </div>

            {/* Options */}
            <div className="grid gap-3">
              {(
                Object.entries(currentQ.options) as [
                  keyof typeof currentQ.options,
                  string
                ][]
              ).map(([key, value]) => {
                let base =
                  "w-full p-3 rounded-2xl text-start font-medium text-gray-900 dark:text-gray-100 transition-all duration-300 transform hover:scale-[1.02] border-2 ";

                if (!state.showFeedback) {
                  base +=
                    state.selectedAnswer === key
                      ? "bg-green-500 border-green-500 text-white shadow-md"
                      : "bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 hover:bg-green-50 dark:hover:bg-green-900 hover:border-green-400";
                } else {
                  if (key === currentQ.correctAnswer) {
                    base +=
                      "bg-green-600/90 border-green-500 text-white shadow-md";
                  } else if (
                    key === state.selectedAnswer &&
                    key !== currentQ.correctAnswer
                  ) {
                    base += "bg-red-600/80 border-red-600 text-white shadow-md";
                  } else {
                    base +=
                      "bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400";
                  }
                }

                return (
                  <button
                    key={key}
                    onClick={() => handleAnswerSelect(key)}
                    className={base}
                    disabled={state.showFeedback}
                  >
                    <div className="flex items-center">
                      <span className="min-w-8 min-h-8 rounded-full bg-gray-300/20 dark:bg-gray-600/20 flex items-center justify-center mr-3 font-bold">
                        {key}
                      </span>
                      {value}
                      {state.showFeedback && key === currentQ.correctAnswer && (
                        <CheckCircle className="w-6 h-6 ml-auto text-green-400" />
                      )}
                      {state.showFeedback &&
                        key === state.selectedAnswer &&
                        key !== currentQ.correctAnswer && (
                          <XCircle className="w-6 h-6 ml-auto text-red-400" />
                        )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Feedback */}
            {state.showFeedback && (
              <div className="p-4 mt-4 bg-gray-100 dark:bg-gray-700 rounded-2xl border border-green-500 dark:border-green-600 shadow-md transition-colors duration-300">
                <div className="flex items-start gap-3">
                  {state.selectedAnswer === currentQ.correctAnswer ? (
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  ) : (
                    <XCircle className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                  )}
                  <div className="flex-1">
                    <p
                      className={`font-semibold text-lg mb-2 ${
                        state.selectedAnswer === currentQ.correctAnswer
                          ? "text-green-600"
                          : "text-red-500"
                      }`}
                    >
                      {state.selectedAnswer === currentQ.correctAnswer
                        ? "Correct!"
                        : "Incorrect"}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
                      {currentQ.explanation}
                    </p>
                    {state.selectedAnswer !== currentQ.correctAnswer && (
                      <p className="text-sm text-green-600 dark:text-green-400">
                        Correct answer:{" "}
                        <strong>{currentQ.correctAnswer}</strong> -{" "}
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
                className="w-full mt-6 bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-2xl transition-all duration-300 transform hover:scale-[1.03] shadow-lg shadow-green-200/20 dark:shadow-green-900/40 flex items-center justify-center gap-2"
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

  // Results Screen
  if (state.gameState === "results") {
    const latestResult = state.testResults[state.testResults.length - 1];

    if (!latestResult) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-slate-900 flex items-center justify-center">
          <div className="text-center">
            <p className="text-white text-xl">No results available.</p>
            <button
              onClick={() => {
                playSend();
                setGameState("home");
              }}
              className="mt-4 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-2xl shadow-lg transition-all duration-300"
            >
              Go Home
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4 sm:p-6 transition-colors duration-300">
        <div className="max-w-2xl mx-auto text-center">
          {/* Header */}
          <div className="mb-8 pt-8">
            <img src={finish} className="w-24 h-24 mx-auto mb-4" />
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-2">
              Test Complete!
            </h1>
            <p className="text-lg sm:text-xl text-green-500 dark:text-green-400">
              Great job, {user.name.split(" ")[0]}!
            </p>
          </div>

          {/* Score Card */}
          <div className="bg-white/80 dark:bg-gray-800/70 backdrop-blur-lg rounded-3xl p-8 sm:p-10 border border-green-300 dark:border-green-700 shadow-2xl shadow-green-200/20 dark:shadow-green-900/40 mb-8">
            <div className="mb-6">
              <div className="text-6xl sm:text-7xl font-extrabold bg-gradient-to-r from-green-400 via-green-500 to-green-600 bg-clip-text text-transparent mb-2">
                {latestResult.percentage}%
              </div>
              <p className="text-2xl sm:text-3xl text-gray-900 dark:text-white font-semibold">
                {latestResult.score} / {latestResult.totalQuestions}
              </p>
              <p className="text-green-600 dark:text-green-400 mt-2 text-sm sm:text-base">
                Test {latestResult.testNumber} - {latestResult.subject}
              </p>
              {latestResult.timeTaken && (
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Completed in {formatTime(latestResult.timeTaken)}
                </p>
              )}
              {latestResult.difficulty && (
                <p className="text-sm text-gray-400 capitalize mt-1">
                  {latestResult.difficulty} Level
                </p>
              )}
            </div>

            {/* Performance Message */}
            <div className="p-4 rounded-2xl bg-gray-100/60 dark:bg-gray-700/50 border border-green-300 dark:border-green-600 shadow-md transition-colors duration-300">
              <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg">
                {getPerformanceMessage(latestResult.percentage)}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4 sm:space-y-5">
            {state.currentTest < getTotalTests() && (
              <button
                onClick={() => {
                  playSend();
                  startTest(state.currentTest);
                }}
                className="w-full animate-pulse bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:from-green-600 hover:via-green-700 hover:to-green-800 text-white p-4 sm:p-5 rounded-2xl font-bold text-lg sm:text-xl transition-all duration-300 transform hover:scale-105 shadow-xl shadow-green-300/30"
              >
                <div className="flex items-center justify-center gap-2">
                  <Play className="w-5 h-5 sm:w-6 sm:h-6" />
                  Start Next Test
                </div>
              </button>
            )}

            <button
              onClick={() => {
                playSend();
                setGameState("allResults");
              }}
              className="w-full bg-white/20 dark:bg-gray-800/50 hover:bg-white/30 dark:hover:bg-gray-700/50 text-gray-900 dark:text-white p-4 sm:p-5 rounded-2xl font-semibold transition-all duration-300 border border-green-300 dark:border-green-600 shadow-lg hover:shadow-green-400/20 flex items-center justify-center gap-2"
            >
              <Trophy className="w-5 h-5 sm:w-6 sm:h-6" />
              View All Results
            </button>

            <button
              onClick={() => {
                playSend();
                setGameState("home");
              }}
              className="w-full bg-gray-200/40 dark:bg-gray-700/40 hover:bg-gray-300/50 dark:hover:bg-gray-600/50 text-green-600 dark:text-green-400 p-4 sm:p-5 rounded-2xl font-semibold transition-all duration-300 border border-gray-300 dark:border-gray-600 shadow-lg hover:shadow-green-300/20 flex items-center justify-center gap-2"
            >
              <Home className="w-5 h-5 sm:w-6 sm:h-6" />
              Back to Home
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-10 mb-2 flex flex-col sm:flex-row gap-2 justify-center items-center text-center">
          <p className="text-gray-400 text-sm sm:text-base">
            from code to impact -{" "}
            <span className="text-green-500 dark:text-green-400 underline font-medium">
              <a
                href="https://dikie.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                dikie.dev
              </a>
            </span>
          </p>
          <Laptop2 className="text-green-500 dark:text-green-400 w-4 h-4 sm:w-5 sm:h-5" />
        </div>
      </div>
    );
  }

  // Enhanced All Results Screen
  if (state.gameState === "allResults") {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4 sm:p-6 transition-colors duration-300">
        <Navbar />
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8 pt-20">
            <button
              onClick={() => {
                playSend();
                setGameState("home");
              }}
              className="flex items-center text-green-500 dark:text-green-400 hover:text-green-400 dark:hover:text-green-300 transition-colors font-semibold"
            >
              <ChevronLeft className="w-5 h-5 mr-2" />
              Home
            </button>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
              All Results
            </h1>
            <div></div>
          </div>

          {/* No results */}
          {state.testResults.length === 0 ? (
            <div className="text-center py-12">
              <BookOpen className="w-20 h-20 text-gray-400 dark:text-gray-500 mx-auto mb-4 animate-bounce" />
              <p className="text-xl text-gray-400 dark:text-gray-300">
                No tests completed yet.
              </p>
            </div>
          ) : (
            <div className="grid gap-4 sm:gap-5">
              {/* Individual Results */}
              {state.testResults
                .slice()
                .reverse()
                .map((result, index) => (
                  <div
                    key={index}
                    className="bg-white/30 dark:bg-gray-800/60 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-green-300 dark:border-green-700 shadow-lg hover:shadow-green-400/30 transition-shadow duration-300 transform hover:scale-[1.02]"
                  >
                    <div className="flex items-center justify-between flex-col sm:flex-row gap-4 sm:gap-0">
                      <div className="flex-1">
                        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                          Test {result.testNumber}
                        </h3>
                        <hr className="mb-2 border-green-300/40 dark:border-green-500/40" />
                        <p className="text-green-400 dark:text-green-300 text-sm sm:text-base mb-2">
                          {result.subject}
                        </p>
                        <div className="flex flex-wrap items-center gap-3 text-gray-500 dark:text-gray-400 text-sm sm:text-base font-medium">
                          <span>{result.date}</span>
                          {result.timeTaken && (
                            <div className="flex items-center gap-1">
                              <Clock size={14} />
                              <span>{formatTime(result.timeTaken)}</span>
                            </div>
                          )}
                          {result.difficulty && (
                            <span className="capitalize">
                              📊 {result.difficulty}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-green-400 via-green-500 to-green-600 bg-clip-text text-transparent">
                        {result.percentage}%
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          )}

          {/* Overall Stats */}
          {state.testResults.length > 0 && (
            <div className="mt-8 bg-white/30 dark:bg-gray-800/60 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-green-300 dark:border-green-700 shadow-lg">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Overall Performance
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                <div className="text-center p-3 bg-white/20 dark:bg-gray-700/40 rounded-2xl hover:bg-white/30 dark:hover:bg-gray-700/50 transition-colors duration-300">
                  <div className="text-2xl sm:text-3xl font-bold text-green-400">
                    {Math.round(
                      state.testResults.reduce(
                        (acc, r) => acc + r.percentage,
                        0
                      ) / state.testResults.length
                    )}
                    %
                  </div>
                  <p className="text-gray-500 dark:text-gray-300 text-sm sm:text-base mt-1">
                    Average Score
                  </p>
                </div>
                <div className="text-center p-3 bg-white/20 dark:bg-gray-700/40 rounded-2xl hover:bg-white/30 dark:hover:bg-gray-700/50 transition-colors duration-300">
                  <div className="text-2xl sm:text-3xl font-bold text-pink-400">
                    {Math.max(...state.testResults.map((r) => r.percentage))}%
                  </div>
                  <p className="text-gray-500 dark:text-gray-300 text-sm sm:text-base mt-1">
                    Best Score
                  </p>
                </div>
                <div className="text-center p-3 bg-white/20 dark:bg-gray-700/40 rounded-2xl hover:bg-white/30 dark:hover:bg-gray-700/50 transition-colors duration-300">
                  <div className="text-2xl sm:text-3xl font-bold text-yellow-400">
                    {state.testResults.length}
                  </div>
                  <p className="text-gray-500 dark:text-gray-300 text-sm sm:text-base mt-1">
                    Tests Completed
                  </p>
                </div>
                <div className="text-center p-3 bg-white/20 dark:bg-gray-700/40 rounded-2xl hover:bg-white/30 dark:hover:bg-gray-700/50 transition-colors duration-300">
                  <div className="text-2xl sm:text-3xl font-bold text-green-400">
                    {state.testResults.filter((r) => r.percentage >= 80).length}
                  </div>
                  <p className="text-gray-500 dark:text-gray-300 text-sm sm:text-base mt-1">
                    Excellent Scores
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Footer */}
          <div className="mt-10 mb-4 flex  sm:flex-row gap-2 justify-center items-center text-center">
            <p className="text-gray-400 text-sm sm:text-base">
              from code to impact -{" "}
              <span className="text-green-400 dark:text-green-300 underline font-medium">
                <a
                  href="https://dikie.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  dikie.dev
                </a>
              </span>
            </p>
            <Laptop2 className="text-green-400 dark:text-green-300 w-4 h-4 sm:w-5 sm:h-5" />
          </div>
        </div>
      </div>
    );
  }

  // Fallback return
  return null;
};

export default QuizApp;
