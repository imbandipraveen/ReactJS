import React from "react";
import { useState, useEffect } from "react";

export const Hook1: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const increment = (): void => {
    setCount((prevState: number): number => prevState + 1);
  };

  useEffect((): void => {
    //componentDidMount
    document.title = `clicked ${count} times`;
  }, []);

  useEffect((): void => {
    //componentDidUpdate
    document.title = `clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <button className="button button-count">{count}</button>
      <button className="button" onClick={increment}>
        increment
      </button>
    </div>
  );
};
