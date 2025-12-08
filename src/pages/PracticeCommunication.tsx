import React, { useCallback, useEffect, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mic, Square, Volume2, Clock, RotateCcw, ChevronRight, Copy, Sparkles } from "lucide-react";

const TOPICS = [
  "Morning routines", "Your ideal weekend", "Your favorite childhood memory", "A movie you recently watched",
  "A problem you solved this week", "A book you want to read", "A food you love or hate", "Your dream travel destination",
  "A skill you want to learn", "Your most productive time of day", "Your biggest pet peeve", "A friend who inspires you",
  "A song stuck in your head", "A gadget you want to buy", "Your favorite app and why", "A habit you’re trying to build",
  "Social media you use most", "A goal you’re chasing this month", "Your favorite holiday", "A funny mistake you made",
  "A trend you think is overrated", "A moment you felt proud", "Your go-to relaxation method", "A hobby you want to start",
  "A city you want to live in", "A skill you admire in others", "Your workout routine (or lack of it)", "Something you recently learned",
  "Your relationship with money", "Your biggest distraction", "What motivates you daily", "Something that annoys you",
  "Your favorite tech tool", "Your best memory from school", "A food you want to try", "Your dream job",
  "A funny story from campus", "A fear you're overcoming", "Your favorite series", "Something you bought recently",
  "A moment you felt confident", "A person you want to meet", "Your favorite quote", "A mistake you learned from",
  "Something you want to improve", "A place you go to think", "A challenge you’re facing now", "A habit you dropped",
  "A compliment you received", "What success means to you",
];

export default function RandomTopics() {
  // State
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

  // --- Logic: Picker ---
  const pickNewTopic = useCallback(() => {
    const random = TOPICS[Math.floor(Math.random() * TOPICS.length)];
    setCurrentTopic(random);
    setHistory(prev => [random, ...prev].slice(0, 10)); // Keep last 10
    
    // Reset tools
    setAudioUrl(null);
    setTimer(0);
    setIsTimerRunning(false);
    if (timerRef.current) clearInterval(timerRef.current);
  }, []);

  // --- Logic: Timer ---
  useEffect(() => {
    if (isTimerRunning) {
      timerRef.current = setInterval(() => setTimer(t => t + 1), 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
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
      setIsTimerRunning(false); 
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
          stream.getTracks().forEach(track => track.stop()); // Stop mic
        };

        mediaRecorder.start();
        setIsRecording(true);
        setTimer(0);
        setIsTimerRunning(true);
      } catch (err) {
        alert("Microphone access denied.");
        console.log(err)
      }
    }
  };

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

  // Shortcuts
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
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground p-4 font-sans">
      <div className="w-full max-w-xl space-y-6">
        
        <Card className="shadow-2xl border-muted relative overflow-hidden">
           {isRecording && (
            <div className="absolute top-0 left-0 w-full h-1 bg-red-500 animate-pulse z-10" />
          )}

          <CardHeader className="text-center pb-2">
            <CardTitle className="text-2xl font-bold flex items-center justify-center gap-2">
              <Sparkles className="w-5 h-5 text-yellow-500" />
              Impromptu Flow
            </CardTitle>
            <CardDescription>Daily Random Practice</CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Topic Display */}
            <div className="bg-secondary/20 border border-border rounded-xl p-10 min-h-[200px] flex flex-col items-center justify-center text-center relative group transition-all hover:bg-secondary/30">
              <p className="text-3xl md:text-4xl font-semibold leading-tight tracking-tight text-foreground">
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
            <div className="flex flex-col gap-4">
              
              {/* Timer & Recorder Row */}
              <div className="flex items-center justify-between bg-muted/30 p-2 rounded-lg border">
                 <div className="flex items-center gap-3 pl-2">
                    <Clock className={`h-4 w-4 ${isTimerRunning ? 'text-primary animate-pulse' : 'text-muted-foreground'}`} />
                    <span className="font-mono text-xl font-medium w-16 tabular-nums">{formatTime(timer)}</span>
                 </div>

                 <div className="flex items-center gap-2">
                    {audioUrl && !isRecording && (
                      <audio src={audioUrl} controls className="h-8 w-32 md:w-40" />
                    )}
                    
                    <Button 
                      onClick={toggleRecording} 
                      size="sm"
                      variant={isRecording ? "destructive" : "secondary"}
                      className="gap-2 min-w-[100px]"
                    >
                      {isRecording ? <><Square className="h-3 w-3 fill-current"/> Stop</> : <><Mic className="h-3 w-3"/> Record</>}
                    </Button>
                 </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-4 gap-2">
                 <Button onClick={speak} variant="outline" className="col-span-1" title="Read Topic">
                   <Volume2 className="h-4 w-4" />
                 </Button>
                 <Button onClick={pickNewTopic} size="lg" className="col-span-3 text-lg font-medium shadow-md">
                   Next Topic <ChevronRight className="ml-2 h-5 w-5" />
                 </Button>
              </div>

            </div>
          </CardContent>

          <CardFooter className="bg-muted/10 py-3 text-xs text-muted-foreground flex justify-between">
            <span className="flex items-center gap-1">Press <Badge variant="outline" className="text-[10px] h-5 px-1">Space</Badge> for Next</span>
            <span className="flex items-center gap-1">Press <Badge variant="outline" className="text-[10px] h-5 px-1">R</Badge> to Record</span>
          </CardFooter>
        </Card>

        {/* Simple History */}
        {history.length > 0 && (
          <div className="bg-card rounded-lg border p-4 shadow-sm">
            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground mb-3">
              <RotateCcw className="h-3 w-3" /> Recent History
            </div>
            <div className="flex flex-wrap gap-2">
              {history.map((topic, i) => (
                <Badge 
                  key={i} 
                  variant="secondary" 
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors py-1 px-3 text-sm font-normal"
                  onClick={() => setCurrentTopic(topic)}
                >
                  {topic}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}