import React from "react";

export const UseStateExplanation: React.FC = () => {
  return (
    <div className="explanation-container">
      <h1>Understanding useState in React - A Simple Guide</h1>

      <section>
        <h2>What is useState? 🤔</h2>
        <p>
          Think of useState as a special storage box in React that helps us
          remember and update information in our components. Just like how you
          use variables to store data, useState lets us store data that can
          change over time and automatically updates our webpage when that data
          changes!
        </p>
      </section>

      <section>
        <h2>Why Do We Need useState? 🎯</h2>
        <p>
          Imagine you're building a counter app or a form - you need to keep
          track of numbers that change or text that users type. That's exactly
          what useState is for! It helps us:
        </p>
        <ul className="feature-list">
          <li>Store changing data (like form inputs, counters, toggles)</li>
          <li>Update the screen automatically when data changes</li>
          <li>Keep track of component's state between renders</li>
        </ul>
      </section>

      <section>
        <h2>When Was useState Born? 📅</h2>
        <p>
          useState was introduced in React 16.8 (February 2019). Before this,
          developers had to write more complex class components to manage state.
          Now with useState, we can write simpler, cleaner code using functional
          components!
        </p>
      </section>

      <section>
        <h2>The Evolution: Before vs After useState 🔄</h2>
        <div className="comparison-container">
          <div className="before-card">
            <h3>Before: Complex Class Components 😓</h3>
            <code>
              {`class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>+1</button>
      </div>
    );
  }
}`}
            </code>
          </div>

          <div className="after-card">
            <h3>After: Simple useState Hook 😊</h3>
            <code>
              {`function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        +1
      </button>
    </div>
  );
}`}
            </code>
          </div>
        </div>
      </section>

      <section>
        <h2>Real-World Examples 🌟</h2>

        <div className="example-container">
          <h3>1. Simple Counter</h3>
          <code>
            {`function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <button onClick={() => setCount(count + 1)}>
      Clicked {count} times
    </button>
  );
}`}
          </code>

          <h3>2. Form Input</h3>
          <code>
            {`function NameForm() {
  const [name, setName] = useState("");
  
  return (
    <input 
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder="Enter your name"
    />
  );
}`}
          </code>

          <h3>3. Toggle Switch</h3>
          <code>
            {`function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  
  return (
    <button onClick={() => setIsDark(!isDark)}>
      Switch to {isDark ? "Light" : "Dark"} mode
    </button>
  );
}`}
          </code>
        </div>
      </section>

      <section>
        <h2>Smart Usage Tips 🧠</h2>
        <div className="tips-container">
          <div className="tip">
            <h3>✅ Do's</h3>
            <ul>
              <li>Use separate useState for unrelated data</li>
              <li>
                Use functional updates for state that depends on previous value
              </li>
              <li>Keep state as simple as possible</li>
              <li>Initialize with appropriate default values</li>
            </ul>
          </div>

          <div className="tip">
            <h3>❌ Don'ts</h3>
            <ul>
              <li>Don't call useState inside loops or conditions</li>
              <li>Don't modify state directly without setState function</li>
              <li>Don't use single state object for unrelated data</li>
              <li>Don't ignore the previous state when you need it</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};
