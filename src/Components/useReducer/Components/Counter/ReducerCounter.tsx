import React from "react";
import { useReducer } from "react";
import "./reducerCounter.scss";
type Action =
  | { type: "increment"; payload: number }
  | { type: "decrement"; payload: number }
  | { type: "reset" };

export const ReducerCounter: React.FC = () => {
  const initialState = 0;

  const reducer = (state: number, action: Action): number => {
    switch (action.type) {
      case "increment":
        return state + action.payload;
      case "decrement":
        return state - action.payload;
      case "reset":
        return initialState;
      default:
        return state;
    }
  };

  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="counter-container">
      <div className="count-display">
        <span className="count">{count}</span>
      </div>

      <div className="button-group">
        <button
          className="button increment"
          onClick={() => dispatch({ type: "increment", payload: 5 })}
        >
          +5
        </button>

        <button
          className="button decrement"
          onClick={() => dispatch({ type: "decrement", payload: 5 })}
        >
          -5
        </button>

        <button
          className="button reset"
          onClick={() => dispatch({ type: "reset" })}
        >
          Reset
        </button>
      </div>
    </div>
  );
};
