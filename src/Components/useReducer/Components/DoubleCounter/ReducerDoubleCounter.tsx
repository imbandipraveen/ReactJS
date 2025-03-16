import React from "react";
import { useReducer } from "react";
import "./reducerDoubleCounter.scss";

type Action =
  | { type: "increment"; payload: number }
  | { type: "decrement"; payload: number }
  | { type: "reset" };

export const ReducerDoubleCounter: React.FC = () => {
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

  const [count1, dispatch1] = useReducer(reducer, initialState);
  const [count2, dispatch2] = useReducer(reducer, initialState);

  return (
    <div className="double-counter-container">
      <div className="counter-section">
        <div className="count-display">
          <span className="count">{count1}</span>
        </div>
        <div className="button-group">
          <button
            className="button increment"
            onClick={() => dispatch1({ type: "increment", payload: 5 })}
          >
            +5
          </button>
          <button
            className="button decrement"
            onClick={() => dispatch1({ type: "decrement", payload: 5 })}
          >
            -5
          </button>
          <button
            className="button reset"
            onClick={() => dispatch1({ type: "reset" })}
          >
            Reset
          </button>
        </div>
      </div>

      <div className="counter-section">
        <div className="count-display">
          <span className="count">{count2}</span>
        </div>
        <div className="button-group">
          <button
            className="button increment"
            onClick={() => dispatch2({ type: "increment", payload: 5 })}
          >
            +5
          </button>
          <button
            className="button decrement"
            onClick={() => dispatch2({ type: "decrement", payload: 5 })}
          >
            -5
          </button>
          <button
            className="button reset"
            onClick={() => dispatch2({ type: "reset" })}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};
