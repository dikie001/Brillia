import { useRef, useEffect, useMemo } from "react";
import success from "/sounds/success.mp3";
import error from "/sounds/error.mp3";
import finish from "/sounds/finish.mp3";
import send from "/sounds/send.mp3";
import correct from '/sounds/correct.mp3'
import wrong from '/sounds/wrong.mp3'

const useSound = () => {
  const soundMap = useMemo(() => ({
    success: { src: success, volume: 0.8 },
    error: { src: error, volume: 1 },
    finish: { src: finish, volume: 1 },
    send: { src: send, volume: 0.4 },
    correct: { src: correct, volume: 1 },
    wrong: { src: wrong, volume: 1 },
  }), []);

  const audioRefs = useRef<Record<string, HTMLAudioElement>>({});

  useEffect(() => {
    Object.entries(soundMap).forEach(([key, { src, volume }]) => {
      const audio = new Audio(src);
      audio.preload = "auto";
      audio.volume = volume;
      audio.load();
      audioRefs.current[key] = audio;
    });
  }, [soundMap]);

  const playSound = (key: keyof typeof soundMap) => {
    const audio = audioRefs.current[key];
    if (audio) {
      try {
        audio.pause(); // stop any current play
        audio.currentTime = 0;
        audio.play().catch(console.warn);
      } catch (err) {
        console.warn(`Error playing ${key}:`, err);
      }
    }
  };

  return {
    playSuccess: () => playSound("success"),
    playError: () => playSound("error"),
    playFinish: () => playSound("finish"),
    playSend: () => playSound("send"),
    playWrong: ()=>playSound("wrong"),
    playCorrect:()=>playSound("correct")
  };
};

export default useSound;
