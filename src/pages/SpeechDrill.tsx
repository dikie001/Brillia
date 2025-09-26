import Navbar from "@/components/app/Navbar";
import {
  Mic,
  Play,
  Volume2,
  CheckCircle,
  Star,
  MessageSquare,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";
import { speechDrills } from "@/jsons/speechDrills";
import type { SpeechDrill } from "@/types";
import { useSound } from "@/hooks/useSound";

const difficultyColors = {
  Easy: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  Medium: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
  Hard: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
};

const categoryIcons = {
  "Tongue Twister": Zap,
  "Pronunciation Exercise": Mic,
  "Communication Tip": MessageSquare,
};

const COMPLETED_DRILLS = "completed-speech-drills";

export default function SpeechDrill() {
  const [completedDrills, setCompletedDrills] = useState<Set<number>>(new Set());
  const [displayedDrills, setDisplayedDrills] = useState<SpeechDrill[]>([]);
  const [currentDrillIndex, setCurrentDrillIndex] = useState(0);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const playSuccess = useSound("success");

  useEffect(() => {
    setDisplayedDrills(speechDrills);
    const savedData = localStorage.getItem(COMPLETED_DRILLS);
    const completed: Set<number> = savedData
      ? new Set(JSON.parse(savedData))
      : new Set();
    setCompletedDrills(completed);
  }, []);

  const markAsCompleted = (id: number) => {
    const newCompleted = new Set(completedDrills);
    if (newCompleted.has(id)) {
      newCompleted.delete(id);
    } else {
      newCompleted.add(id);
      playSuccess();
    }
    setCompletedDrills(newCompleted);
    localStorage.setItem(COMPLETED_DRILLS, JSON.stringify(Array.from(newCompleted)));
  };

  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      if (isSpeaking) {
        speechSynthesis.cancel();
        setIsSpeaking(false);
      } else {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 0.8; // Slower for practice
        utterance.onstart = () => setIsSpeaking(true);
        utterance.onend = () => setIsSpeaking(false);
        speechSynthesis.speak(utterance);
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDrillIndex((prev) => (prev + 1) % speechDrills.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const featuredDrill = speechDrills[currentDrillIndex];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 dark:from-gray-900 dark:via-slate-800 dark:to-blue-900 text-gray-900 dark:text-gray-100 p-6">
      <div className="relative z-10 max-w-7xl mx-auto">
        <Navbar currentPage="Speech Drills" />
        <header className="text-center mb-6">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="relative mt-12">
              <Mic className="w-16 h-16 text-blue-500 dark:text-blue-400" />
              <div className="absolute -top-1 -right-1 w-8 h-8">
                <Volume2 className="w-6 h-6 text-blue-500 animate-pulse" />
              </div>
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
            Speech Drills
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Improve your speech and communication skills with fun exercises and tongue twisters
          </p>
        </header>

        <div className="mb-16 relative">
          <div className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 p-8 rounded-3xl shadow-2xl text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <Star className="w-8 h-8 text-yellow-300" />
                <h2 className="text-2xl font-bold">Featured Drill</h2>
              </div>
              <p className="text-lg leading-relaxed mb-6">{featuredDrill.text}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      difficultyColors[featuredDrill.difficulty]
                    }`}
                  >
                    {featuredDrill.difficulty}
                  </span>
                  <span className="text-sm opacity-80">
                    {featuredDrill.category}
                  </span>
                </div>
                <button
                  onClick={() => speakText(featuredDrill.text)}
                  className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full flex items-center gap-2 transition-all"
                >
                  <Play className="w-5 h-5" />
                  {isSpeaking ? "Stop" : "Listen"}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-4 lg:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {displayedDrills.map((drill, index) => {
            const CategoryIcon = categoryIcons[drill.category];
            const isCompleted = completedDrills.has(drill.id);

            return (
              <div
                key={drill.id}
                className="group bg-white/90 dark:bg-gray-800/90 rounded-3xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 hover:scale-103 border border-white/30 cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <CategoryIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold ${
                        difficultyColors[drill.difficulty]
                      }`}
                    >
                      {drill.difficulty}
                    </span>
                  </div>
                  {isCompleted && (
                    <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 p-1 rounded-full">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                  )}
                </div>

                <p className="text-gray-800 dark:text-gray-200 leading-relaxed mb-4">
                  {drill.text}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {drill.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 rounded-full text-xs font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-gray-200 dark:border-gray-700">
                  <button
                    onClick={() => speakText(drill.text)}
                    className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 hover:text-blue-600 transition-all flex items-center gap-2"
                  >
                    <Volume2 className="w-5 h-5" />
                    {isSpeaking ? "Stop" : "Play"}
                  </button>
                  <button
                    onClick={() => markAsCompleted(drill.id)}
                    className={`p-2 rounded-full transition-all ${
                      isCompleted
                        ? "text-blue-500 bg-blue-100 dark:bg-blue-900/30 scale-110"
                        : "text-gray-400 hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                    }`}
                  >
                    <CheckCircle
                      className={`w-4 h-4 ${isCompleted ? "fill-current" : ""}`}
                    />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
            Master Your Speech
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/70 dark:bg-gray-800/70 rounded-2xl p-6">
              <Mic className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Clear Pronunciation</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Practice articulating sounds and words with precision.
              </p>
            </div>
            <div className="bg-white/70 dark:bg-gray-800/70 rounded-2xl p-6">
              <MessageSquare className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Communication Skills</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Learn tips and techniques for effective verbal communication.
              </p>
            </div>
            <div className="bg-white/70 dark:bg-gray-800/70 rounded-2xl p-6">
              <Zap className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Fun Challenges</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Enjoy tongue twisters and exercises that make learning engaging.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
