import { useContext } from "react";
import { CounterContext } from "./CounterContext";

export const Counter: React.FC = () => {
  const { count, setCount } = useContext(CounterContext);
  return (
    <div>
      <h1>Counter: {count}</h1>

      <button className="button" onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button className="button" onClick={() => setCount(count - 1)}>
        Decrement
      </button>
    </div>
  );
};
