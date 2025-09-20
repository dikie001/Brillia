import React, { useState, useEffect, useRef, useCallback } from "react";

// --- DATA ---
const wordLists = {
  easy: [
    { word: "cat", phonetic: "/kæt/" },
    { word: "dog", phonetic: "/dɔːɡ/" },
    { word: "house", phonetic: "/haʊs/" },
    { word: "water", phonetic: "/ˈwɔːtər/" },
  ],
  medium: [
    { word: "beautiful", phonetic: "/ˈbjuːtɪfəl/" },
    { word: "important", phonetic: "/ɪmˈpɔːrtənt/" },
    { word: "pronunciation", phonetic: "/prəˌnʌnsiˈeɪʃən/" },
  ],
  hard: [
    { word: "chrysanthemum", phonetic: "/krɪˈsænθəməm/" },
    { word: "worcestershire", phonetic: "/ˈwʊstərʃər/" },
  ],
};

const tongueTwisters = {
  easy: ["Red lorry, yellow lorry", "She sells seashells by the seashore"],
  medium: [
    "Six sick slick slim sycamore saplings",
    "A proper copper coffee pot",
  ],
  hard: [
    "The sixth sick sheik's sixth sheep's sick",
    "Red leather, yellow leather, red leather, yellow leather",
  ],
};

const sentences = {
  short: [
    "The quick brown fox jumps over the lazy dog.",
    "I enjoy reading books on sunny afternoons.",
  ],
  medium: [
    "The technological advancement in artificial intelligence has revolutionized many industries.",
  ],
  long: [
    "The comprehensive research study conducted by international scientists over the past decade has conclusively demonstrated that climate change poses unprecedented challenges to global ecosystems.",
  ],
};

const speedTexts = [
  "The art of public speaking requires practice, confidence, and clear articulation of ideas.",
  "Effective communication involves not just speaking clearly, but also listening actively and responding thoughtfully.",
];

// --- COMPONENTS ---
const Card = ({ title, icon, children }) => (
  <div className="bg-gray-900/90 backdrop-blur-sm rounded-xl p-6 shadow-2xl border border-gray-700/50 hover:bg-gray-800/90 transition-all duration-300">
    <div className="flex items-center mb-4">
      <div className="text-2xl mr-3">{icon}</div>
      <h2 className="text-xl font-bold text-white">{title}</h2>
    </div>
    {children}
  </div>
);

const Button = ({ children, variant = "primary", ...props }) => {
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",
    secondary: "bg-gray-700 hover:bg-gray-600 text-gray-100",
    success: "bg-green-600 hover:bg-green-700 text-white",
  };

  return (
    <button
      className={`${variants[variant]} px-4 py-2 rounded-lg font-medium transition-colors duration-200 disabled:opacity-50`}
      {...props}
    >
      {children}
    </button>
  );
};

const WordDisplay = ({ primary, secondary }) => (
  <div className="bg-gradient-to-r from-purple-900 to-blue-900 p-4 rounded-lg text-center my-4 text-white">
    <div className="text-xl font-bold">{primary}</div>
    {secondary && (
      <div className="text-sm opacity-80 italic mt-1">{secondary}</div>
    )}
  </div>
);

const StatItem = ({ number, label }) => (
  <div className="bg-gray-800/50 p-3 rounded-lg text-center">
    <div className="text-lg font-bold text-blue-400">{number}</div>
    <div className="text-xs text-gray-400">{label}</div>
  </div>
);

// --- MAIN COMPONENT ---
const SpeechDrills = () => {
  // State
  const [wordDifficulty, setWordDifficulty] = useState("easy");
  const [currentWord, setCurrentWord] = useState(null);
  const [isWordRecording, setIsWordRecording] = useState(false);
  const [wordsAttempted, setWordsAttempted] = useState(0);
  const [correctPronunciations, setCorrectPronunciations] = useState(0);
  const [wordFeedback, setWordFeedback] = useState(null);

  const [twisterDifficulty, setTwisterDifficulty] = useState("easy");
  const [currentTwister, setCurrentTwister] = useState("");
  const [isTwisterRecording, setIsTwisterRecording] = useState(false);
  const [twisterFeedback, setTwisterFeedback] = useState(null);

  const [sentenceDifficulty, setSentenceDifficulty] = useState("short");
  const [currentSentence, setCurrentSentence] = useState("");
  const [isSentenceRecording, setIsSentenceRecording] = useState(false);
  const [sentencesPracticed, setSentencesPracticed] = useState(0);
  const [fluencyScore, setFluencyScore] = useState(0);

  const [currentSpeedTextIndex, setCurrentSpeedTextIndex] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [bestTime, setBestTime] = useState(null);
  const [avgWPM, setAvgWPM] = useState(0);

  const timerRef = useRef(null);
  const startTimeRef = useRef(0);

  // Utilities
  const getRandomItem = (list) => list[Math.floor(Math.random() * list.length)];

  const speak = (text, rate = 1) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = rate;
      window.speechSynthesis.speak(utterance);
    }
  };

  const formatTime = (ms) => {
    if (ms === null) return "--:--";
    const seconds = Math.floor((ms / 1000) % 60);
    const centiseconds = Math.floor((ms % 1000) / 10);
    return `${seconds.toString().padStart(2, "0")}:${centiseconds
      .toString()
      .padStart(2, "0")}`;
  };

  // Initialize content
  useEffect(() => {
    setCurrentWord(getRandomItem(wordLists[wordDifficulty]));
    setCurrentTwister(getRandomItem(tongueTwisters[twisterDifficulty]));
    setCurrentSentence(getRandomItem(sentences[sentenceDifficulty]));
  }, [wordDifficulty, twisterDifficulty, sentenceDifficulty]);

  // Word Practice Handlers
  const nextWord = () => {
    setCurrentWord(getRandomItem(wordLists[wordDifficulty]));
    setWordsAttempted((prev) => prev + 1);
    setWordFeedback(null);
  };

  const recordWord = () => {
    if (!currentWord) return;
    setIsWordRecording(true);
    setTimeout(() => {
      setIsWordRecording(false);
      const isCorrect = Math.random() > 0.3;
      if (isCorrect) {
        setCorrectPronunciations((prev) => prev + 1);
        setWordFeedback({ message: "Great pronunciation!", type: "success" });
      } else {
        setWordFeedback({
          message: "Try focusing on the vowel sound!",
          type: "warning",
        });
      }
    }, 2000);
  };

  // Tongue Twister Handlers
  const nextTwister = () => {
    setCurrentTwister(getRandomItem(tongueTwisters[twisterDifficulty]));
    setTwisterFeedback(null);
  };

  const recordTwister = () => {
    if (!currentTwister) return;
    setIsTwisterRecording(true);
    setTimeout(() => {
      setIsTwisterRecording(false);
      const feedbacks = [
        "Excellent articulation! Try it faster next time.",
        "Good effort! Focus on the 's' sounds.",
        "Well done! Your rhythm is improving.",
      ];
      setTwisterFeedback(getRandomItem(feedbacks));
    }, 3000);
  };

  // Sentence Handlers
  const nextSentence = () => {
    setCurrentSentence(getRandomItem(sentences[sentenceDifficulty]));
  };

  const recordSentence = () => {
    if (!currentSentence) return;
    setIsSentenceRecording(true);
    setTimeout(() => {
      setIsSentenceRecording(false);
      setSentencesPracticed((prev) => prev + 1);
      setFluencyScore((prev) => Math.min(prev + 5, 100));
    }, 3000);
  };

  // Speed Challenge Handlers
  const updateTimer = useCallback(() => {
    setTimeElapsed(Date.now() - startTimeRef.current);
  }, []);

  const startStopChallenge = () => {
    if (isTimerRunning) {
      clearInterval(timerRef.current);
      setIsTimerRunning(false);
      const text = speedTexts[currentSpeedTextIndex];
      const wordCount = text.split(" ").length;
      const minutes = timeElapsed / 60000;
      const wpm = minutes > 0 ? Math.round(wordCount / minutes) : 0;

      if (bestTime === null || timeElapsed < bestTime) {
        setBestTime(timeElapsed);
      }
      setAvgWPM((prev) => (prev === 0 ? wpm : Math.round((prev + wpm) / 2)));
    } else {
      startTimeRef.current = Date.now();
      setTimeElapsed(0);
      setIsTimerRunning(true);
      timerRef.current = setInterval(updateTimer, 10);
    }
  };

  const wordProgress =
    wordsAttempted === 0 ? 0 : (correctPronunciations / wordsAttempted) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-gray-100">
      <div className="max-w-7xl mx-auto p-6">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2 text-white">
            🗣️ Pronunciation & Fluency Master
          </h1>
          <p className="text-lg text-gray-300">
            Practice speaking with confidence and clarity
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          {/* Word Practice */}
          <Card title="Word Practice" icon="📝">
            <select
              className="bg-gray-800 border border-gray-600 text-white p-2 rounded w-full mb-4"
              value={wordDifficulty}
              onChange={(e) => setWordDifficulty(e.target.value)}
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>

            <WordDisplay
              primary={currentWord?.word || "Click Next Word"}
              secondary={currentWord?.phonetic}
            />

            <div className="flex gap-2 mb-4 flex-wrap">
              <Button onClick={nextWord}>Next</Button>
              <Button
                variant="secondary"
                onClick={() => speak(currentWord?.word, 0.7)}
              >
                🔊
              </Button>
              <Button
                variant="success"
                onClick={recordWord}
                disabled={isWordRecording}
              >
                🎤 {isWordRecording ? "..." : "Record"}
              </Button>
            </div>

            {isWordRecording && (
              <div className="flex items-center gap-2 text-red-400 mb-2">
                <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                <span>Recording...</span>
              </div>
            )}

            {wordFeedback && (
              <div
                className={`p-2 rounded mb-4 text-center ${
                  wordFeedback.type === "success"
                    ? "bg-green-900/50 text-green-400"
                    : "bg-yellow-900/50 text-yellow-400"
                }`}
              >
                {wordFeedback.message}
              </div>
            )}

            <div className="bg-gray-700 h-2 rounded mb-4">
              <div
                className="h-full bg-blue-500 rounded transition-all"
                style={{ width: `${wordProgress}%` }}
              ></div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <StatItem number={wordsAttempted} label="Words" />
              <StatItem number={correctPronunciations} label="Correct" />
            </div>
          </Card>

          {/* Tongue Twisters */}
          <Card title="Tongue Twisters" icon="🌪️">
            <select
              className="bg-gray-800 border border-gray-600 text-white p-2 rounded w-full mb-4"
              value={twisterDifficulty}
              onChange={(e) => setTwisterDifficulty(e.target.value)}
            >
              <option value="easy">Beginner</option>
              <option value="medium">Intermediate</option>
              <option value="hard">Advanced</option>
            </select>

            <div className="bg-gray-800/50 p-3 rounded mb-4 border-l-4 border-blue-500 italic text-gray-300">
              {currentTwister || "Click Next Twister"}
            </div>

            <div className="flex gap-2 mb-4 flex-wrap">
              <Button onClick={nextTwister}>Next</Button>
              <Button
                variant="secondary"
                onClick={() => speak(currentTwister, 0.6)}
              >
                🔊
              </Button>
              <Button
                variant="success"
                onClick={recordTwister}
                disabled={isTwisterRecording}
              >
                🎤 {isTwisterRecording ? "..." : "Practice"}
              </Button>
            </div>

            {isTwisterRecording && (
              <div className="flex items-center gap-2 text-red-400 mb-2">
                <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                <span>Recording...</span>
              </div>
            )}

            {twisterFeedback && (
              <div className="p-2 rounded bg-green-900/50 text-green-400 text-center">
                {twisterFeedback}
              </div>
            )}
          </Card>

          {/* Sentence Fluency */}
          <Card title="Sentence Fluency" icon="💬">
            <select
              className="bg-gray-800 border border-gray-600 text-white p-2 rounded w-full mb-4"
              value={sentenceDifficulty}
              onChange={(e) => setSentenceDifficulty(e.target.value)}
            >
              <option value="short">Short</option>
              <option value="medium">Medium</option>
              <option value="long">Long</option>
            </select>

            <WordDisplay primary={currentSentence || "Ready to practice?"} />

            <div className="flex gap-2 mb-4 flex-wrap">
              <Button onClick={nextSentence}>Next</Button>
              <Button
                variant="secondary"
                onClick={() => speak(currentSentence, 0.8)}
              >
                🔊
              </Button>
              <Button
                variant="success"
                onClick={recordSentence}
                disabled={isSentenceRecording}
              >
                🎤 {isSentenceRecording ? "..." : "Repeat"}
              </Button>
            </div>

            {isSentenceRecording && (
              <div className="flex items-center gap-2 text-red-400 mb-2">
                <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                <span>Recording...</span>
              </div>
            )}

            <div className="grid grid-cols-2 gap-2">
              <StatItem number={sentencesPracticed} label="Sentences" />
              <StatItem number={`${fluencyScore}%`} label="Fluency" />
            </div>
          </Card>

          {/* Speed Challenge */}
          <Card title="Speed Challenge" icon="⚡">
            <WordDisplay primary={speedTexts[currentSpeedTextIndex]} />

            <div className="flex gap-2 mb-4 flex-wrap">
              <Button onClick={startStopChallenge}>
                {isTimerRunning ? "Stop" : "Start"}
              </Button>
              <Button
                variant="secondary"
                onClick={() =>
                  setCurrentSpeedTextIndex(
                    (prev) => (prev + 1) % speedTexts.length
                  )
                }
                disabled={isTimerRunning}
              >
                New Text
              </Button>
            </div>

            <div className="text-center text-2xl font-mono font-bold text-blue-400 mb-4">
              {formatTime(timeElapsed)}
            </div>

            <div className="grid grid-cols-2 gap-2">
              <StatItem number={formatTime(bestTime)} label="Best Time" />
              <StatItem number={avgWPM} label="Avg WPM" />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SpeechDrills;
