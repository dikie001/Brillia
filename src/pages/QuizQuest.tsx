import {
  ArrowLeft,
  BookOpen,
  CheckCircle,
  ChevronRight,
  Clock,
  Home,
  Laptop2,
  Play,
  RotateCcw,
  Star,
  Trophy,
  XCircle,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import available from "../assets/images/available.png";
import average from "../assets/images/average.png";

import finish from "../assets/images/finish.png";

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
        // Try to load quiz data from a mock or show error
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
      <div className="min-h-screen bg-gradient-to-br from-gray-950 via-purple-950 to-slate-900 p-4">
        <div className="max-w-3xl  mx-auto">
          <div className="text-white flex justify-between mb-2">
            {/* <img
              src={book2}
              className="h-8"
              alt="book image"
              onClick={() => {
                playSend();
                setShowStoriesPage(true);
              }}
            />
            <img src={m} className="h-8" /> */}
          </div>
          {/* Header */}
          <div className="text-center mb-4 pt-2">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-500 via-pink-600 to-gray-950 bg-clip-text text-transparent mb-1">
              Matilda Awino
            </h1>
            <p className="text-xl text-gray-300">Grade 5 Quiz Master</p>
          </div>

          {/* Enhanced Stats */}
          <div className="grid md:grid-cols-2 gap-3 mb-4">
            <div className="bg-gradient-to-r from-black/30 to-black/20 backdrop-blur-lg rounded-2xl p-4 border border-purple-500/40 shadow-xl">
              <img src={quiz} className="w-8 h-8 text-purple-400 mb-3" />
              <h3 className="text-2xl font-bold text-white">
                {state.quizData.length}
              </h3>
              <p className="text-gray-400">Total Questions</p>
            </div>
            <div className="bg-gradient-to-r from-black/30 to-black/20 backdrop-blur-lg rounded-2xl p-6 border border-pink-500/40 shadow-xl">
              <img src={available} className="w-8 h-8 text-pink-400 mb-3" />
              <h3 className="text-2xl font-bold text-white">
                {getTotalTests()}
              </h3>
              <p className="text-gray-400">Available Tests</p>
            </div>
            <div className="bg-gradient-to-r from-black/30 to-black/20 backdrop-blur-xl rounded-2xl p-6 border border-yellow-500/40 shadow-xl">
              <Star className="w-8 h-8 text-yellow-400 mb-3" />
              <h3 className="text-2xl font-bold text-white">
                {state.testResults.length}
              </h3>
              <p className="text-gray-400">Tests Completed</p>
            </div>
            <div className="bg-gradient-to-r from-black/30 to-black/20 backdrop-blur-lg rounded-2xl p-6 border border-green-500/40 shadow-xl">
              <img src={average} className="w-8 h-8 text-green-400 mb-3" />
              <h3 className="text-2xl font-bold text-white">
                {state.testResults.length > 0
                  ? Math.round(
                      state.testResults.reduce(
                        (acc, result) => acc + result.percentage,
                        0
                      ) / state.testResults.length
                    )
                  : 0}
                %
              </h3>
              <p className="text-gray-400">Average Score</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4">
            {state.currentTest < getTotalTests() && (
              <button
                onClick={() => {
                  playSend();
                  startTest(state.currentTest);
                }}
                className="w-full bg-gradient-to-r from-purple-700 to-pink-700 animate-pulse   text-white p-6 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                <div className="flex items-center justify-center">
                  <Play className="w-6 h-6 mr-3" />
                  {state.testResults.length === 0
                    ? "Start First Test"
                    : `Continue Test ${state.currentTest + 1}`}
                </div>
              </button>
            )}

            {state.testResults.length > 0 && (
              <button
                onClick={() => {
                  playSend();
                  setGameState("allResults");
                }}
                className="w-full bg-slate-700/50 hover:bg-slate-600/50 text-white p-4 rounded-2xl font-semibold transition-all duration-300 border border-purple-500/30 shadow-xl"
              >
                <div className="flex items-center justify-center">
                  <Trophy className="w-5 h-5 mr-2" />
                  View All Results
                </div>
              </button>
            )}

            {state.testResults.length > 0 && (
              <button
                onClick={resetAllData}
                className="w-full bg-red-600/20 hover:bg-red-600/30 text-red-400 p-4 rounded-2xl font-semibold transition-all duration-300 border border-red-500/30 shadow-xl"
              >
                <div className="flex items-center justify-center">
                  <RotateCcw className="w-5 h-5 mr-2" />
                  Reset All Progress
                </div>
              </button>
            )}
          </div>
        </div>
        <div className="mt-8 mb-2 flex gap-2 justify-center items-center">
          <p className="text-gray-400 text-sm text-center">
            from code to impact -{" "}
            <span className="text-pink-400 underline font-medium">
              <a
                href="https://dikie.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                dikie.dev
              </a>
            </span>
          </p>
          <Laptop2 className="text-pink-500" />
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
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-slate-900 flex items-center justify-center">
          <div className="text-center">
            <p className="text-white text-xl">
              No questions available for this test.
            </p>
            <button
              onClick={() => {
                playSend();
                setGameState("home");
              }}
              className="mt-4 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl"
            >
              Go Home
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-950 via-purple-900 to-slate-900 p-4">
        <div className="max-w-4xl mx-auto">
          {/* Enhanced Header */}
          <div className="flex items-center justify-between mb-6 mt-1">
            <button
              onClick={() => {
                playSend();
                setGameState("home");
              }}
              className="flex items-center text-purple-300 hover:text-purple-200 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Home
            </button>
            <div className="text-center">
              <div className="flex items-center  gap-2">
                <h2 className="text-2xl font-bold text-white">
                  Test {state.currentTest + 1}
                </h2>
                <img src={quiz} className="h-10" alt="quiz icon" />
              </div>
              <p className="text-purple-300">{currentQ.subject}</p>
              {/* {currentQ.difficulty && (
                <p className="text-sm text-gray-400 capitalize">
                  {currentQ.difficulty} Level
                </p>
              )} */}
            </div>
            <div className="text-right">
              <p className="text-purple-200">
                Question {state.currentQuestion + 1}/{currentQuestions.length}
              </p>
              {/* <p className="text-sm text-gray-400">Score: {state.score}</p> */}
              {state.startTime && (
                <p className="text-xs text-gray-300">
                  Time:{" "}
                  {formatTime(
                    Math.floor((Date.now() - state.startTime) / 1000)
                  )}
                </p>
              )}
            </div>
          </div>

          {/* Progress Bar */}
          <div className="bg-slate-800 rounded-xl h-3 mb-8 overflow-hidden">
            <div
              className="bg-gradient-to-r from-purple-500 via-cyan-400  to-pink-500 h-full transition-all duration-500 ease-out"
              style={{
                width: `${
                  ((state.currentQuestion + 1) / currentQuestions.length) * 100
                }%`,
              }}
            ></div>
          </div>

          {/* Question Card */}
          <div className="bg-slate-800/50 shadow-cyan-800 backdrop-blur-lg rounded-3xl px-4 py-6 border border-purple-500/20 shadow-lg mb-6">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-2xl font-bold text-white leading-relaxed flex-1">
                {currentQ.question}
              </h3>
              {currentQ.category && (
                <span className="ml-4 px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm">
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
                let buttonClass =
                  "w-full p-3 rounded-3xl text-start font-semibold text-lg transition-all duration-300 transform hover:scale-102 border-2 ";

                if (!state.showFeedback) {
                  buttonClass +=
                    state.selectedAnswer === key
                      ? "bg-purple-600 border-purple-400 text-white"
                      : "bg-slate-700/50 border-slate-600 text-gray-200 hover:bg-slate-600/50 hover:border-purple-500/50";
                } else {
                  if (key === currentQ.correctAnswer) {
                    buttonClass +=
                      "bg-gradient-to-r from-emerald-900 to-emerald-800 border-green-400 text-white";
                  } else if (
                    key === state.selectedAnswer &&
                    key !== currentQ.correctAnswer
                  ) {
                    buttonClass += "bg-red-600 border-red-400 text-white";
                  } else {
                    buttonClass +=
                      "bg-slate-700/30 border-slate-600/30 text-gray-400";
                  }
                }

                return (
                  <button
                    key={key}
                    onClick={() => handleAnswerSelect(key)}
                    className={buttonClass}
                    disabled={state.showFeedback}
                  >
                    <div className="flex items-center">
                      <span className="min-w-8 min-h-8 rounded-full  bg-gradient-to-r from-black/50 to-white/20 shadow-sm flex items-center justify-center mr-2 font-bold">
                        <p className="text-gray-200">{key} </p>
                      </span>
                      {value}
                      {state.showFeedback && key === currentQ.correctAnswer && (
                        <CheckCircle className="w-6 h-6 ml-auto text-green-300" />
                      )}
                      {state.showFeedback &&
                        key === state.selectedAnswer &&
                        key !== currentQ.correctAnswer && (
                          <XCircle className="w-6 h-6 ml-auto text-red-300" />
                        )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Enhanced Feedback */}
            {state.showFeedback && (
              <div className=" p-4 absolute left-0 right-0 top-0 bg-slate-900 rounded-3xl border border-purple-800">
                <div className="flex items-start">
                  {/* <button
                    onClick={() =>
                      setState((prev) => ({j
                        ...prev,

                        showFeedback: false,
                      }))
                    }
                    className="text-white absolute right-4 top-4 "
                  >
                    <X size={20} />
                  </button> */}
                  {state.selectedAnswer === currentQ.correctAnswer ? (
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                  ) : (
                    <XCircle className="w-6 h-6 text-red-400 mr-3 mt-1 flex-shrink-0" />
                  )}
                  <div className="flex-1">
                    <p
                      className={`font-semibold text-lg mb-2 ${
                        state.selectedAnswer === currentQ.correctAnswer
                          ? "text-green-300"
                          : "text-red-300"
                      }`}
                    >
                      {state.selectedAnswer === currentQ.correctAnswer
                        ? "Correct!"
                        : "Incorrect"}
                    </p>
                    <p className="text-gray-300 leading-relaxed mb-2">
                      {currentQ.explanation}
                    </p>
                    {state.selectedAnswer !== currentQ.correctAnswer && (
                      <p className="text-sm text-purple-300">
                        The correct answer was:{" "}
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
                className="w-full mt-6 bg-gradient-to-r from-purple-800 to-pink-800 hover:from-purple-700 hover:to-pink-700 text-white p-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center justify-center">
                  {state.currentQuestion < currentQuestions.length - 1
                    ? "Next Question"
                    : "Complete Test"}
                  <ChevronRight className="w-5 h-5 ml-2" />
                </div>
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
              className="mt-4 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl"
            >
              Go Home
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-slate-900 p-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8 pt-8">
            <img src={finish} className="w-20 h-20  mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-white mb-2">
              Test Complete!
            </h1>
            <p className="text-xl text-purple-300">Great job, Matilda!</p>
          </div>

          {/* Enhanced Score Card */}
          <div className="bg-slate-800/50 backdrop-blur-lg rounded-3xl p-8 border border-purple-500/20 shadow-2xl mb-8">
            <div className="mb-6">
              <div className="text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                {latestResult.percentage}%
              </div>
              <p className="text-2xl text-white font-semibold">
                {latestResult.score} out of {latestResult.totalQuestions}
              </p>
              <p className="text-purple-300 mt-2 text-sm">
                Test {latestResult.testNumber} - {latestResult.subject}
              </p>
              {latestResult.timeTaken && (
                <p className="text-xs text-gray-400 mt-1">
                  Completed in {formatTime(latestResult.timeTaken)}
                </p>
              )}
              {latestResult.difficulty && (
                <p className="text-sm text-gray-400 capitalize">
                  {latestResult.difficulty} Level
                </p>
              )}
            </div>

            {/* Performance Message */}
            <div className="p-4 rounded-2xl bg-slate-900/50 border border-purple-500/20">
              <p className="text-lg text-gray-300">
                {getPerformanceMessage(latestResult.percentage)}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4">
            {state.currentTest < getTotalTests() && (
              <button
                onClick={() => {
                  playSend();
                  startTest(state.currentTest);
                }}
                className="w-full animate-pulse bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white p-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center justify-center">
                  <Play className="w-5 h-5 mr-2" />
                  Start Next Test
                </div>
              </button>
            )}

            <button
              onClick={() => {
                playSend();
                setGameState("allResults");
              }}
              className="w-full bg-slate-700/50 hover:bg-slate-600/50 text-white p-4 rounded-2xl font-semibold transition-all duration-300 border border-purple-500/30"
            >
              <div className="flex items-center justify-center">
                <Trophy className="w-5 h-5 mr-2" />
                View All Results
              </div>
            </button>

            <button
              onClick={() => {
                playSend();
                setGameState("home");
              }}
              className="w-full bg-slate-800/50 hover:bg-slate-700/50 text-purple-300 p-4 rounded-2xl font-semibold transition-all duration-300 border border-slate-600/30"
            >
              <div className="flex items-center justify-center">
                <Home className="w-5 h-5 mr-2" />
                Back to Home
              </div>
            </button>
          </div>
        </div>
        <div className="mt-8 mb-2 flex gap-2 justify-center items-center">
          <p className="text-gray-400 text-sm text-center">
            from code to impact -{" "}
            <span className="text-pink-400 underline font-medium">
              <a
                href="https://dikie.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                dikie.dev
              </a>
            </span>
          </p>
          <Laptop2 className="text-pink-500" />
        </div>
      </div>
    );
  }

  // Enhanced All Results Screen
  if (state.gameState === "allResults") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-slate-900 p-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={() => {
                playSend();
                setGameState("home");
              }}
              className="flex items-center text-purple-300 hover:text-purple-200 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Home
            </button>
            <h1 className="text-3xl font-bold text-white">All Results</h1>
            <div></div>
          </div>

          {state.testResults.length === 0 ? (
            <div className="text-center py-12">
              <BookOpen className="w-16 h-16 text-gray-500 mx-auto mb-4" />
              <p className="text-xl text-gray-400">No tests completed yet.</p>
            </div>
          ) : (
            <div className="grid  gap-3">
              {state.testResults
                .slice()
                .reverse()
                .map((result, index) => (
                  <div
                    key={index}
                    className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/40 shadow-lg"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                          Test {result.testNumber}
                        </h3>
                        <hr className="mb-2 text-purple-500/40" />
                        <p className="text-purple-300 text-sm mb-2">
                          {result.subject}
                        </p>
                        <div className="flex  items-center gap-4 text-gray-400 font-medium text-sm">
                          <span>{result.date}</span>
                          {result.timeTaken && (
                            <div className="flex items-center gap-2 justify-center">
                              <Clock size={14} />
                              <span> {formatTime(result.timeTaken)}</span>
                            </div>
                          )}
                          {result.difficulty && (
                            <span className="capitalize">
                              📊 {result.difficulty}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="text-right fixed top-0 right-0  p-3  ">
                        <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                          {result.percentage}%
                        </div>
                        {/* <p className="text-gray-300 text-sm">
                        {result.score}/{result.totalQuestions}
                      </p> */}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          )}

          {/* Enhanced Overall Stats */}
          {state.testResults.length > 0 && (
            <div className="mt-8 bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/40 shadow-lg">
              <h3 className="text-xl font-bold text-white mb-4">
                Overall Performance
              </h3>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">
                    {Math.round(
                      state.testResults.reduce(
                        (acc, result) => acc + result.percentage,
                        0
                      ) / state.testResults.length
                    )}
                    %
                  </div>
                  <p className="text-gray-400 text-sm">Average Score</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-pink-400">
                    {Math.max(...state.testResults.map((r) => r.percentage))}%
                  </div>
                  <p className="text-gray-400 text-sm">Best Score</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">
                    {state.testResults.length}
                  </div>
                  <p className="text-gray-400 text-sm">Tests Completed</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">
                    {state.testResults.filter((r) => r.percentage >= 80).length}
                  </div>
                  <p className="text-gray-400 text-sm">Excellent Scores</p>
                </div>
              </div>
            </div>
          )}
          <div className="mt-8 mb-2 flex gap-2 justify-center items-center">
            <p className="text-gray-400 text-sm text-center">
              from code to impact -{" "}
              <span className="text-pink-400 underline font-medium">
                <a
                  href="https://dikie.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  dikie.dev
                </a>
              </span>
            </p>
            <Laptop2 className="text-pink-500" />
          </div>
        </div>
      </div>
    );
  }

  // Fallback return
  return null;
};

export default QuizApp;
