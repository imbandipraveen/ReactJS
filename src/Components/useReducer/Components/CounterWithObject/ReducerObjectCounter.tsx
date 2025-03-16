import React from "react";
import { useReducer } from "react";
import "./reducerObjectCounter.scss";
interface State {
  firstCounter: number;
  secondCounter: number;
}

type Action =
  | { type: "increment1" | "increment2"; payload: number }
  | { type: "decrement1" | "decrement2"; payload: number }
  | { type: "reset1" | "reset2" };

export const ReducerObjectCounter: React.FC = () => {
  const initialState: State = {
    firstCounter: 0,
    secondCounter: 0,
  };

  const reducer = (state: State, action: Action): State => {
    switch (action.type) {
      case "increment1":
        return {
          ...state,
          firstCounter: state.firstCounter + action.payload,
        };
      case "decrement1":
        return {
          ...state,
          firstCounter: state.firstCounter - action.payload,
        };
      case "reset1":
        return {
          ...state,
          firstCounter: initialState.firstCounter,
        };
      case "increment2":
        return {
          ...state,
          secondCounter: state.secondCounter + action.payload,
        };
      case "decrement2":
        return {
          ...state,
          secondCounter: state.secondCounter - action.payload,
        };
      case "reset2":
        return {
          ...state,
          secondCounter: initialState.secondCounter,
        };
      default:
        return state;
    }
  };

  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="object-counter-container">
      <div className="counter-section">
        <div className="count-display">
          <span className="count">{count.firstCounter}</span>
        </div>
        <div className="button-group">
          <button
            className="button increment"
            onClick={() => dispatch({ type: "increment1", payload: 1 })}
          >
            Increment
          </button>
          <button
            className="button decrement"
            onClick={() => dispatch({ type: "decrement1", payload: 1 })}
          >
            Decrement
          </button>
          <button
            className="button reset"
            onClick={() => dispatch({ type: "reset1" })}
          >
            Reset
          </button>
        </div>
      </div>

      <div className="counter-section">
        <div className="count-display">
          <span className="count">{count.secondCounter}</span>
        </div>
        <div className="button-group">
          <button
            className="button increment"
            onClick={() => dispatch({ type: "increment2", payload: 1 })}
          >
            Increment
          </button>
          <button
            className="button decrement"
            onClick={() => dispatch({ type: "decrement2", payload: 1 })}
          >
            Decrement
          </button>
          <button
            className="button reset"
            onClick={() => dispatch({ type: "reset2" })}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};
