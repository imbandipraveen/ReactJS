import React from "react";
import {
  Class1,
  Class2,
  Class3,
  Hook1,
  Hook2,
  Hook3,
  HookFetch,
  UseEffectExplanation,
} from "./Components";

const UseEffect: React.FC = () => {
  return (
    <div>
      <UseEffectExplanation />
      <div className="explanation-container">
        <div className="box">
          <h1>Counter Implementation</h1>
          <h3>Using Class Component Approach</h3>
          <Class1 />
          <h3>Using Functional Component Approach</h3>
          <Hook1 />
        </div>
        <div className="box">
          <h1>Log Mouse Position</h1>
          <h3>Using Class Component Approach</h3>
          <Class2 />
          <h3>Using Functional Component Approach</h3>
          <Hook2 />
        </div>
        <div className="box">
          <h1>Timer Function</h1>
          <h3>Using Class Component Approach</h3>
          <Class3 />
          <h3>Using Functional Component Approach</h3>
          <Hook3 />
        </div>
        <div className="box">
          <h1>Fetch Data</h1>
          <h3>Using Functional Component Approach</h3>
          <HookFetch />
        </div>
      </div>
    </div>
  );
};

export default UseEffect;
