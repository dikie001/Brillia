import { useRef, useEffect, useMemo } from "react";
import success from "/sounds/success.mp3";
import error from "/sounds/error.mp3";
import finish from "/sounds/finish.mp3";
import send from "/sounds/send.mp3";

const useSound = () => {
  const soundMap = useMemo(
    () => ({
      success: { src: success, volume: 1 },
      error: { src: error, volume: 1 },
      finish: { src: finish, volume: 1 },
      send: { src: send, volume: 1 },

    }),
    []
  );

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
    const soundsEnabled = localStorage.getItem("soundsEnabled") !== "false"; // Default to true if not set
    if (!soundsEnabled) return;

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

  };
};

export default useSound;
