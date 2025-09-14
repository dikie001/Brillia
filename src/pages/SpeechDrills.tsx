import React, { useState, useEffect, useRef, useCallback } from "react";

// --- 1. DATA AND TYPES ---

type WordItem = {
  word: string;
  phonetic: string;
};

type WordList = {
  [key: string]: WordItem[];
};

type TwisterList = {
  [key: string]: string[];
};

type SentenceList = {
  [key: string]: string[];
};

const wordLists: WordList = {
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

const tongueTwisters: TwisterList = {
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

const sentences: SentenceList = {
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

const speedTexts: string[] = [
  "The art of public speaking requires practice, confidence, and clear articulation of ideas.",
  "Effective communication involves not just speaking clearly, but also listening actively and responding thoughtfully.",
];

// --- 2. UTILITY COMPONENTS (Reusable styled elements) ---

// Maps original CSS styles to Tailwind classes and implements the background gradient
const Card: React.FC<{
  title: string;
  icon: string;
  children: React.ReactNode;
}> = ({ title, icon, children }) => (
  <div className="bg-white/95 backdrop-blur-sm rounded-[20px] p-8 shadow-xl transition-all duration-300 hover:translate-y-[-5px] hover:shadow-2xl border border-white/20">
    <div className="flex items-center mb-5">
      <div className="text-3xl mr-4">{icon}</div>
      <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
    </div>
    {children}
  </div>
);

// Maps original CSS styles to Tailwind classes for buttons
const Button: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    secondary?: boolean;
    success?: boolean;
  }
> = ({ children, secondary, success, className, ...props }) => {
  const baseClasses =
    "text-white border-none py-3 px-6 rounded-full cursor-pointer text-base font-medium transition-all duration-300 shadow-lg hover:translate-y-[-2px] hover:shadow-xl active:translate-y-0 active:shadow-md";
  let styleClasses =
    "bg-gradient-to-r from-indigo-500 to-purple-600 shadow-indigo-500/50"; // Default

  if (secondary) {
    styleClasses =
      "bg-gradient-to-r from-orange-100 to-pink-200 text-gray-800 shadow-pink-300/50";
  } else if (success) {
    styleClasses =
      "bg-gradient-to-r from-teal-200 to-pink-100 text-gray-800 shadow-teal-300/50";
  }

  return (
    <button
      className={`${baseClasses} ${styleClasses} ${className || ""}`}
      {...props}
    >
      {children}
    </button>
  );
};

// --- 3. MAIN COMPONENT LOGIC ---

const SpeechDrills: React.FC = () => {
  // --- State for Word Practice ---
  const [wordDifficulty, setWordDifficulty] = useState<
    "easy" | "medium" | "hard"
  >("easy");
  const [currentWord, setCurrentWord] = useState<WordItem | null>(null);
  const [isWordRecording, setIsWordRecording] = useState(false);
  const [wordsAttempted, setWordsAttempted] = useState(0);
  const [correctPronunciations, setCorrectPronunciations] = useState(0);
  const [wordFeedback, setWordFeedback] = useState<{
    message: string;
    type: "success" | "warning";
  } | null>(null);

  // --- State for Tongue Twister ---
  const [twisterDifficulty, setTwisterDifficulty] = useState<
    "easy" | "medium" | "hard"
  >("easy");
  const [currentTwister, setCurrentTwister] = useState<string>("");
  const [isTwisterRecording, setIsTwisterRecording] = useState(false);
  const [twisterFeedback, setTwisterFeedback] = useState<string | null>(null);

  // --- State for Sentence Fluency ---
  const [sentenceDifficulty, setSentenceDifficulty] = useState<
    "short" | "medium" | "long"
  >("short");
  const [currentSentence, setCurrentSentence] = useState<string>("");
  const [isSentenceRecording, setIsSentenceRecording] = useState(false);
  const [sentencesPracticed, setSentencesPracticed] = useState(0);
  const [fluencyScore, setFluencyScore] = useState(0);

  // --- State for Speed Challenge ---
  const [currentSpeedTextIndex, setCurrentSpeedTextIndex] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [bestTime, setBestTime] = useState<number | null>(null);
  const [avgWPM, setAvgWPM] = useState(0);
  const timerRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(0);

  // --- Initializers and Effects ---

  // Function to get a random item from a list
  const getRandomItem = <T,>(list: T[]): T =>
    list[Math.floor(Math.random() * list.length)];

  // Initialize content
  useEffect(() => {
    setCurrentWord(getRandomItem(wordLists[wordDifficulty]));
    setCurrentTwister(getRandomItem(tongueTwisters[twisterDifficulty]));
    setCurrentSentence(getRandomItem(sentences[sentenceDifficulty]));
    // Load best time from storage (optional, simplifying to 0 for this example)
    setBestTime(null);
  }, [wordDifficulty, twisterDifficulty, sentenceDifficulty]);

  // --- Speech Synthesis Mock ---
  const speak = (text: string, rate: number = 1) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = rate;
      window.speechSynthesis.speak(utterance);
    } else {
      console.log(`TTS Mock: Speaking "${text}" at rate ${rate}`);
    }
  };

  // --- Word Practice Handlers ---

  const nextWord = () => {
    setCurrentWord(getRandomItem(wordLists[wordDifficulty]));
    setWordsAttempted((prev) => prev + 1);
    setWordFeedback(null);
  };

  const playWord = () => {
    if (currentWord) speak(currentWord.word, 0.7);
  };

  const recordWord = () => {
    if (!currentWord) return;
    setIsWordRecording(true);
    // Simulate recording and result
    setTimeout(() => {
      setIsWordRecording(false);
      const isCorrect = Math.random() > 0.3; // 70% chance of correct
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

  const wordProgress =
    wordsAttempted === 0 ? 0 : (correctPronunciations / wordsAttempted) * 100;

  // --- Tongue Twister Handlers ---

  const nextTwister = () => {
    setCurrentTwister(getRandomItem(tongueTwisters[twisterDifficulty]));
    setTwisterFeedback(null);
  };

  const playTwister = () => {
    if (currentTwister) speak(currentTwister, 0.6);
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

  // --- Sentence Fluency Handlers ---

  const nextSentence = () => {
    setCurrentSentence(getRandomItem(sentences[sentenceDifficulty]));
  };

  const playSentence = () => {
    if (currentSentence) speak(currentSentence, 0.8);
  };

  const recordSentence = () => {
    if (!currentSentence) return;
    setIsSentenceRecording(true);
    setTimeout(() => {
      setIsSentenceRecording(false);
      setSentencesPracticed((prev) => prev + 1);
      const newFluencyScore = Math.min((sentencesPracticed + 1) * 5, 100);
      setFluencyScore(newFluencyScore);
    }, 3000);
  };

  // --- Speed Challenge Handlers ---

  const updateTimer = useCallback(() => {
    const elapsed = Date.now() - startTimeRef.current;
    setTimeElapsed(elapsed);
  }, []);

  const stopTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    setIsTimerRunning(false);

    const text = speedTexts[currentSpeedTextIndex];
    const wordCount = text.split(" ").length;
    const minutes = timeElapsed / 60000;
    const wpm = minutes > 0 ? Math.round(wordCount / minutes) : 0;

    // Update best time
    if (bestTime === null || timeElapsed < bestTime) {
      setBestTime(timeElapsed);
    }

    // Update average WPM (simplified: rolling average)
    setAvgWPM((prev) => (prev === 0 ? wpm : Math.round((prev + wpm) / 2)));
  }, [currentSpeedTextIndex, timeElapsed, bestTime]);

  const startStopChallenge = () => {
    if (isTimerRunning) {
      stopTimer();
    } else {
      startTimeRef.current = Date.now();
      setTimeElapsed(0);
      setIsTimerRunning(true);
      timerRef.current = window.setInterval(updateTimer, 10);
    }
  };

  const newSpeedText = () => {
    setCurrentSpeedTextIndex((prev) => (prev + 1) % speedTexts.length);
  };

  // Formatting for display
  const formatTime = (ms: number | null) => {
    if (ms === null) return "--:--";
    const seconds = Math.floor((ms / 1000) % 60);
    const centiseconds = Math.floor((ms % 1000) / 10);
    return `${seconds.toString().padStart(2, "0")}:${centiseconds
      .toString()
      .padStart(2, "0")}`;
  };

  // --- JSX Rendering ---

  const RecordingIndicator: React.FC<{ isRecording: boolean }> = ({
    isRecording,
  }) => (
    <div
      className={`flex items-center gap-2 my-2 text-red-600 font-bold ${
        isRecording ? "block" : "hidden"
      }`}
    >
      <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse"></div>
      <span>Recording...</span>
    </div>
  );

  const Controls: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="flex gap-2.5 my-4 flex-wrap">{children}</div>
  );

  const WordDisplay: React.FC<{ primary: string; secondary?: string }> = ({
    primary,
    secondary,
  }) => (
    <div className="bg-gradient-to-r from-pink-400 to-red-400 p-5 rounded-xl text-center my-5 text-white font-bold text-2xl md:text-3xl shadow-lg">
      <div>{primary}</div>
      {secondary && (
        <div className="text-xl opacity-90 italic mt-1">{secondary}</div>
      )}
    </div>
  );

  const StatsGrid: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center mt-4">
      {children}
    </div>
  );

  const StatItem: React.FC<{ number: string | number; label: string }> = ({
    number,
    label,
  }) => (
    <div className="bg-white/20 p-2 rounded-lg">
      <div className="text-2xl font-bold text-indigo-400">{number}</div>
      <div className="text-xs">{label}</div>
    </div>
  );

  const Select: React.FC<React.SelectHTMLAttributes<HTMLSelectElement>> = (
    props
  ) => (
    <div className="my-4">
      <select
        className="bg-white border-2 border-gray-300 p-2.5 rounded-lg text-base w-full focus:ring-indigo-500 focus:border-indigo-500"
        {...props}
      >
        {props.children}
      </select>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-700 text-gray-800">
      <div className="max-w-7xl mx-auto p-5 md:p-10">
        <header className="text-center mb-10 text-white">
          <h1 className="text-5xl font-extrabold mb-2 text-shadow-lg drop-shadow-lg">
            🗣️ Pronunciation & Fluency Master
          </h1>
          <p className="text-xl opacity-90">
            Practice speaking with confidence and clarity
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {/* --- Word Pronunciation Practice --- */}
          <Card title="Word Practice" icon="📝">
            <Select
              value={wordDifficulty}
              onChange={(e) => setWordDifficulty(e.target.value as any)}
            >
              <option value="easy">Easy Words</option>
              <option value="medium">Medium Words</option>
              <option value="hard">Hard Words</option>
            </Select>

            <WordDisplay
              primary={currentWord?.word || 'Click "Next Word" to start'}
              secondary={currentWord?.phonetic}
            />

            <Controls>
              <Button onClick={nextWord}>Next Word</Button>
              <Button secondary onClick={playWord}>
                🔊 Listen
              </Button>
              <Button
                success
                onClick={recordWord}
                disabled={isWordRecording || !currentWord}
              >
                🎤 {isWordRecording ? "...Recording" : "Record"}
              </Button>
            </Controls>

            <RecordingIndicator isRecording={isWordRecording} />

            {wordFeedback && (
              <div
                className={`mt-4 p-2.5 rounded-lg text-center font-bold ${
                  wordFeedback.type === "success"
                    ? "bg-green-200 text-green-700"
                    : "bg-yellow-200 text-yellow-700"
                }`}
              >
                {wordFeedback.message}
              </div>
            )}

            <div className="bg-white/30 h-2 rounded-full my-4 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-indigo-500 to-purple-600 transition-all duration-300"
                style={{ width: `${wordProgress}%` }}
              ></div>
            </div>

            <StatsGrid>
              <StatItem number={wordsAttempted} label="Words" />
              <StatItem number={correctPronunciations} label="Correct" />
            </StatsGrid>
          </Card>

          {/* --- Tongue Twisters --- */}
          <Card title="Tongue Twisters" icon="🌪️">
            <Select
              value={twisterDifficulty}
              onChange={(e) => setTwisterDifficulty(e.target.value as any)}
            >
              <option value="easy">Beginner</option>
              <option value="medium">Intermediate</option>
              <option value="hard">Advanced</option>
            </Select>

            <div className="bg-white/10 p-4 rounded-lg my-4 border-l-4 border-indigo-500 italic text-gray-700">
              {currentTwister || 'Click "Next Twister" for a challenge!'}
            </div>

            <Controls>
              <Button onClick={nextTwister}>Next Twister</Button>
              <Button secondary onClick={playTwister}>
                🔊 Listen
              </Button>
              <Button
                success
                onClick={recordTwister}
                disabled={isTwisterRecording || !currentTwister}
              >
                🎤 {isTwisterRecording ? "...Practicing" : "Practice"}
              </Button>
            </Controls>

            <RecordingIndicator isRecording={isTwisterRecording} />

            {twisterFeedback && (
              <div className="mt-4 p-2.5 rounded-lg text-center font-bold bg-green-200 text-green-700">
                {twisterFeedback}
              </div>
            )}
          </Card>

          {/* --- Sentence Fluency --- */}
          <Card title="Sentence Fluency" icon="💬">
            <Select
              value={sentenceDifficulty}
              onChange={(e) => setSentenceDifficulty(e.target.value as any)}
            >
              <option value="short">Short Sentences</option>
              <option value="medium">Medium Sentences</option>
              <option value="long">Long Sentences</option>
            </Select>

            <WordDisplay
              primary={currentSentence || "Ready to practice fluency?"}
            />

            <Controls>
              <Button onClick={nextSentence}>Next Sentence</Button>
              <Button secondary onClick={playSentence}>
                🔊 Listen
              </Button>
              <Button
                success
                onClick={recordSentence}
                disabled={isSentenceRecording || !currentSentence}
              >
                🎤 {isSentenceRecording ? "...Recording" : "Repeat"}
              </Button>
            </Controls>

            <RecordingIndicator isRecording={isSentenceRecording} />

            <StatsGrid>
              <StatItem number={sentencesPracticed} label="Sentences" />
              <StatItem number={`${fluencyScore}%`} label="Fluency" />
            </StatsGrid>
          </Card>

          {/* --- Speed & Clarity --- */}
          <Card title="Speed & Clarity" icon="⚡">
            <WordDisplay primary={speedTexts[currentSpeedTextIndex]} />

            <Controls>
              <Button onClick={startStopChallenge}>
                {isTimerRunning ? "Stop" : "Start Challenge"}
              </Button>
              <Button
                secondary
                onClick={newSpeedText}
                disabled={isTimerRunning}
              >
                New Text
              </Button>
            </Controls>

            <div className="text-center text-4xl my-5 font-bold text-indigo-600">
              {formatTime(timeElapsed)}
            </div>

            <StatsGrid>
              <StatItem number={formatTime(bestTime)} label="Best Time" />
              <StatItem number={avgWPM} label="Avg WPM" />
            </StatsGrid>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SpeechDrills;
