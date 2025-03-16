import React from "react";
import {
  SimpleStateCounter,
  ObjectState,
  ArrayState,
  ClassCounter,
  UseStateExplanation,
} from "./Components";

const UseState: React.FC = () => {
  return (
    <div className="use-state-container">
      <UseStateExplanation />

      <section className="state-section counter-section">
        <h2 className="section-title">Counter Implementation</h2>

        <div className="implementation-container">
          <div className="implementation-box">
            <h3 className="implementation-title">Class Component Approach</h3>
            <div className="implementation-content">
              <ClassCounter />
            </div>
          </div>

          <div className="implementation-box">
            <h3 className="implementation-title">
              Functional Component with Hooks
            </h3>
            <div className="implementation-content">
              <SimpleStateCounter />
            </div>
          </div>
        </div>
      </section>

      <section className="state-section complex-types">
        <h2 className="section-title">Complex Data Types using Hooks</h2>

        <div className="implementation-container">
          <div className="implementation-box">
            <h3 className="implementation-title">Object State Management</h3>
            <div className="implementation-content">
              <ObjectState />
            </div>
          </div>

          <div className="implementation-box">
            <h3 className="implementation-title">Array State Management</h3>
            <div className="implementation-content">
              <ArrayState />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UseState;
