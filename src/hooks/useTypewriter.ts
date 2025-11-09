import { useState, useEffect } from "react";

/**
 * A custom hook for a typewriter effect.
 * @param text The text to be typed.
 * @param speed The typing speed in milliseconds.
 * @param start A boolean to control when the animation starts.
 * @returns An object with the displayText and a flag indicating if the animation is finished.
 */
const useTypewriter = (
  text: string,
  speed: number = 100,
  start: boolean = true
) => {
  const [displayText, setDisplayText] = useState("");
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (!start) {
      setDisplayText("");
      setIsFinished(false);
      return;
    }

    setIsFinished(false);
    setDisplayText("");

    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
        setIsFinished(true);
      }
    }, speed);

    return () => {
      clearInterval(typingInterval);
    };
  }, [text, speed, start]);

  return { displayText, isFinished };
};

export default useTypewriter;
