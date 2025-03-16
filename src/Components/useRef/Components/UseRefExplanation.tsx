import React from "react";
import "./useRefExplanation.scss";

export const UseRefExplanation: React.FC = () => {
  return (
    <div className="ref-explanation">
      <section className="intro">
        <h1>🎯 Understanding useRef Hook</h1>
        <div className="definition">
          <p>
            <code>useRef</code> is like a magical box in React that can hold any
            value and persists between renders. Think of it as a special
            container that doesn't trigger re-renders when its content changes.
            It's your direct line to DOM elements and values that need to stay
            stable!
          </p>
        </div>
      </section>

      <section className="birth-story">
        <h2>🎂 When Was useRef Born?</h2>
        <p>
          useRef made its debut alongside other React Hooks in version 16.8
          (February 2019). It was introduced to solve the persistent reference
          problem in functional components, replacing the need for class
          component instance properties.
        </p>
      </section>

      <section className="why-need">
        <h2>🤔 Why Do We Need useRef?</h2>
        <div className="need-points">
          <div className="point">
            <h3>🎯 Direct DOM Access</h3>
            <p>
              When you need to directly interact with DOM elements (like
              focusing an input), useRef provides a clean way to do it.
            </p>
          </div>
          <div className="point">
            <h3>⏱️ Persistent Values</h3>
            <p>
              Store values that should persist between renders without causing
              re-renders (like intervals, timeouts, or previous state values).
            </p>
          </div>
        </div>
      </section>

      <section className="comparison">
        <h2>🔄 useRef vs useState</h2>
        <div className="compare-table">
          <div className="compare-item">
            <h3>useState</h3>
            <ul>
              <li>Triggers re-renders</li>
              <li>For reactive data</li>
              <li>Updates are synchronous</li>
              <li>Used for UI state</li>
            </ul>
          </div>
          <div className="compare-item">
            <h3>useRef</h3>
            <ul>
              <li>No re-renders</li>
              <li>For persistent references</li>
              <li>Updates are mutable</li>
              <li>Used for DOM refs & values</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="challenges">
        <h2>🚧 Common Challenges & Solutions</h2>
        <div className="challenge-container">
          <div className="challenge">
            <h3>Challenge: Stale Closures</h3>
            <p>
              useRef helps solve the classic "stale closure" problem in event
              handlers and timeouts by providing a stable reference to current
              values.
            </p>
          </div>
          <div className="challenge">
            <h3>Challenge: DOM Measurements</h3>
            <p>
              Getting accurate DOM measurements was tricky before, but useRef
              makes it straightforward by providing stable element references.
            </p>
          </div>
        </div>
      </section>

      <section className="smart-usage">
        <h2>🧠 Smart Usage Tips</h2>
        <div className="tips">
          <div className="tip">
            <h3>🎯 Use for Non-Reactive Data</h3>
            <p>Perfect for values that don't need to trigger re-renders</p>
          </div>
          <div className="tip">
            <h3>⚡ Performance Optimization</h3>
            <p>Use to store previous values without causing extra renders</p>
          </div>
          <div className="tip">
            <h3>🔍 DOM References</h3>
            <p>Ideal for managing focus, text selection, or animations</p>
          </div>
        </div>
      </section>

      <section className="examples">
        <h2>💡 Real-World Examples</h2>
        <div className="examples">
          <div className="example">
            <h3>Timer Control</h3>
            <pre>
              <code>{`
const timerRef = useRef();
const startTimer = () => {
  timerRef.current = setInterval(() => {
    // do something
  }, 1000);
};
const stopTimer = () => {
  clearInterval(timerRef.current);
};
              `}</code>
            </pre>
          </div>
          <div className="example">
            <h3>Form Focus</h3>
            <pre>
              <code>{`
const inputRef = useRef();
const focusInput = () => {
  inputRef.current.focus();
};
              `}</code>
            </pre>
          </div>
        </div>
      </section>
    </div>
  );
};
