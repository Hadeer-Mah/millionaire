import { useEffect, useState } from "react";

export default function Timer({ setTimerStop, questionNum }) {
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    if (timer === 0) return setTimerStop(true);
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer, setTimerStop]);

  useEffect(() => {
    setTimer(30);
  }, [questionNum]);
  return timer;
}