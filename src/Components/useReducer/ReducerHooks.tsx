import React from "react";
import {
  ReducerCounter,
  ReducerDoubleCounter,
  ReducerObjectCounter,
  UseReducerExplanation,
} from "./Components";
import "./reducerHook.scss";

const ReducerHooks: React.FC = () => {
  return (
    <div className="reducer-hooks-container">
      <UseReducerExplanation />
      <div className="explanation-container">
        <h2>⚡ Live Example</h2>
        <div className="demo-box">
          <div className="box-content">
            <h2 className="section-heading">Basic Counter with useReducer</h2>
            <p className="section-description">
              Simple implementation showing increment, decrement and reset
              functionality
            </p>
            <div className="demo-container">
              <ReducerCounter />
            </div>
          </div>

          <div className="box-content">
            <h2 className="section-heading">
              Multiple Counters with useReducer
            </h2>
            <p className="section-description">
              Managing multiple independent counters using separate dispatchers
            </p>
            <div className="demo-container">
              <ReducerDoubleCounter />
            </div>
          </div>

          <div className="box-content">
            <h2 className="section-heading">Complex State Management</h2>
            <p className="section-description">
              Using useReducer with objects to handle complex state logic
            </p>
            <div className="demo-container">
              <ReducerObjectCounter />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReducerHooks;
