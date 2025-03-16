import React from "react";
import { useState } from "react";
import "./simpleStateCounter.scss";
export const SimpleStateCounter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const increment = (): void => {
    setCount((prevState: number): number => {
      return prevState + 1;
    });
  };

  const decrement = (): void => {
    setCount((prevState: number): number => {
      return prevState - 1;
    });
  };

  const reset = (): void => {
    setCount(0);
  };

  return (
    <div className="counter-container">
      <div className="count-display">{count}</div>
      <div className="controls">
        <button className="increment" onClick={increment}>
          Increment
        </button>
        <button className="decrement" onClick={decrement}>
          Decrement
        </button>
        <button className="reset" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};
