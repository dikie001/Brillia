import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight, Clock, Copy, Mic, RotateCcw, Square, Volume2 } from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

// Categorized Data
const TOPICS = {
  General: [
    "Morning routines", "Your ideal weekend", "A movie you recently watched",
    "A food you love or hate", "Your dream travel destination", "A gadget you want to buy",
    "Social media you use most", "Your favorite holiday", "Your go-to relaxation method",
  ],
  Deep: [
    "Your favorite childhood memory", "A fear you're overcoming", "Your relationship with money",
    "What success means to you", "A mistake you learned from", "A place you go to think",
    "A friend who inspires you", "A habit you dropped", "Your biggest pet peeve",
  ],
  Career: [
    "A problem you solved this week", "A skill you want to learn", "Your most productive time of day",
    "A goal you’re chasing this month", "A trend you think is overrated", "A skill you admire in others",
    "Your dream job", "Something you want to improve", "A challenge you’re facing now",
  ]
};

type Category = keyof typeof TOPICS | "All";

export default function RandomTopics() {
  // State
  const [category, setCategory] = useState<Category>("All");
  const [currentTopic, setCurrentTopic] = useState<string>("Press Next to start");
  const [history, setHistory] = useState<string[]>([]);
  
  // Audio State
  const [isRecording, setIsRecording] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  // Timer State
  const [timer, setTimer] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // flattened list for "All" mode
  const allTopics = useMemo(() => Object.values(TOPICS).flat(), []);

  // --- Logic: Picker ---
  const pickNewTopic = useCallback(() => {
    const pool = category === "All" ? allTopics : TOPICS[category];
    const random = pool[Math.floor(Math.random() * pool.length)];
    
    setCurrentTopic(random);
    setHistory(prev => [random, ...prev].slice(0, 10));
    
    // Reset tools on new topic
    setAudioUrl(null);
    setTimer(0);
    setIsTimerRunning(false);
    if (timerRef.current) clearInterval(timerRef.current);
  }, [category, allTopics]);

  // --- Logic: Timer ---
  useEffect(() => {
    if (isTimerRunning) {
      timerRef.current = setInterval(() => setTimer(t => t + 1), 1000);
    } else if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [isTimerRunning]);

  const formatTime = (s: number) => {
    const mins = Math.floor(s / 60);
    const secs = s % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  // --- Logic: Audio Recording ---
  const toggleRecording = async () => {
    if (isRecording) {
      mediaRecorderRef.current?.stop();
      setIsRecording(false);
      setIsTimerRunning(false); // Stop timer when recording stops
    } else {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const mediaRecorder = new MediaRecorder(stream);
        mediaRecorderRef.current = mediaRecorder;
        audioChunksRef.current = [];

        mediaRecorder.ondataavailable = (event) => {
          if (event.data.size > 0) audioChunksRef.current.push(event.data);
        };

        mediaRecorder.onstop = () => {
          const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
          const url = URL.createObjectURL(audioBlob);
          setAudioUrl(url);
          stream.getTracks().forEach(track => track.stop()); // Stop mic usage
        };

        mediaRecorder.start();
        setIsRecording(true);
        setTimer(0); // Reset timer
        setIsTimerRunning(true); // Auto-start timer
      } catch (err) {
        alert("Microphone access denied or not available.");
        console.log(err)
      }
    }
  };

  // --- Logic: Utilities ---
  const speak = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utter = new SpeechSynthesisUtterance(currentTopic);
      window.speechSynthesis.speak(utter);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(currentTopic);
  };

  // Keyboard Shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Space" && e.target === document.body) {
        e.preventDefault();
        pickNewTopic();
      }
      if (e.code === "KeyR" && !e.repeat && e.target === document.body) {
        toggleRecording();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [pickNewTopic, isRecording]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground p-4">
      <div className="w-full max-w-2xl space-y-4">
        
        {/* Main Card */}
        <Card className="shadow-xl border-muted/60 relative overflow-hidden">
          {isRecording && (
            <div className="absolute top-0 left-0 w-full h-1 bg-red-500 animate-pulse" />
          )}
          
          <CardHeader className="pb-2">
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="text-xl">Impromptu Speaker</CardTitle>
                <CardDescription>Topic generator with recording & timing.</CardDescription>
              </div>
              <div className="flex gap-1">
                {(["All", "General", "Deep", "Career"] as const).map((cat) => (
                  <Button 
                    key={cat} 
                    variant={category === cat ? "default" : "ghost"} 
                    size="sm" 
                    onClick={() => setCategory(cat)}
                    className="text-xs h-7"
                  >
                    {cat}
                  </Button>
                ))}
              </div>
            </div>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Topic Display */}
            <div className="bg-muted/30 border border-border rounded-xl p-8 min-h-[160px] flex flex-col items-center justify-center text-center relative group">
              <p className="text-2xl md:text-3xl font-medium leading-snug tracking-tight">
                {currentTopic}
              </p>
              <Button 
                variant="ghost" 
                size="icon" 
                className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={copyToClipboard}
              >
                <Copy className="h-4 w-4 text-muted-foreground" />
              </Button>
            </div>

            {/* Controls */}
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              
              {/* Left: Timer & Audio */}
              <div className="flex items-center gap-3 w-full md:w-auto justify-center md:justify-start">
                <div className={`flex items-center gap-2 px-3 py-2 rounded-md border ${isRecording ? 'border-red-200 bg-red-50 text-red-600' : 'bg-background'}`}>
                  <Clock className="h-4 w-4" />
                  <span className="font-mono font-medium min-w-[3rem]">{formatTime(timer)}</span>
                </div>

                <Button 
                  onClick={toggleRecording} 
                  variant={isRecording ? "destructive" : "outline"}
                  className="w-32 gap-2"
                >
                  {isRecording ? <><Square className="h-4 w-4 fill-current"/> Stop</> : <><Mic className="h-4 w-4"/> Record</>}
                </Button>

                {audioUrl && !isRecording && (
                  <audio src={audioUrl} controls className="h-10 w-32 md:w-48" />
                )}
              </div>

              {/* Right: Actions */}
              <div className="flex gap-2 w-full md:w-auto">
                 <Button onClick={speak} variant="ghost" size="icon" title="Read Aloud">
                   <Volume2 className="h-5 w-5" />
                 </Button>
                 <Button onClick={pickNewTopic} className="flex-1 md:flex-none gap-2 px-6">
                   Next Topic <ChevronRight className="h-4 w-4" />
                 </Button>
              </div>
            </div>
          </CardContent>

          {/* Footer Shortcuts */}
          <CardFooter className="bg-muted/20 py-3 text-xs text-muted-foreground flex justify-between">
            <span>Shortcuts: <b>Space</b> (Next), <b>R</b> (Record)</span>
            <span>{history.length} items in history</span>
          </CardFooter>
        </Card>

        {/* History Panel */}
        {history.length > 0 && (
          <div className="grid gap-2">
            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground px-1">
              <RotateCcw className="h-3 w-3" /> Recent History
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {history.map((topic, i) => (
                <div key={i} className="text-sm p-3 bg-card border rounded-lg hover:border-primary/50 transition-colors cursor-pointer truncate" onClick={() => setCurrentTopic(topic)}>
                  {topic}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}