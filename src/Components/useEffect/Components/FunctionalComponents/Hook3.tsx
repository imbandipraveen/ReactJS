import React from "react";
import { useState, useEffect } from "react";

export const Hook3: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  useEffect((): (() => void) => {
    const interval: NodeJS.Timeout = setInterval((): void => {
      setCount((prevState: number): number => prevState + 1);
    }, 1000);

    setTimeout((): void => {
      clearInterval(interval);
    }, 5000);

    return (): void => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <button className="button button-count">{count}</button>
    </div>
  );
};
