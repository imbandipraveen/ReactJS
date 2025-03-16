import React from "react";
import { useRef, useState } from "react";
import { UseRefExplanation } from "./Components/UseRefExplanation";
export const UseRef: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = (): void => {
    timerRef.current = setInterval(() => {
      setCount((prevState) => prevState + 1);
      console.log("incremented");
    }, 1000);
  };

  const stopTimer = (): void => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  return (
    <div>
      <UseRefExplanation />
      <h1>useRef</h1>
      <button className="button button-input">{count}</button>
      <button className="button" onClick={startTimer}>
        start
      </button>
      <button className="button" onClick={stopTimer}>
        stop
      </button>
    </div>
  );
};
