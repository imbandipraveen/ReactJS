import React from "react";

export const UseReducerExplanation: React.FC = () => {
  return (
    <div className="explanation-container">
      <h1>🎯 Understanding useReducer in React</h1>

      <section className="explanation-section">
        <h2>🤔 What is useReducer?</h2>
        <p>
          useReducer is like a more powerful version of useState! It's a React
          Hook that helps manage complex state logic in your applications. Think
          of it as a state management system where you dispatch actions to
          update your state in a predictable way.
        </p>
      </section>

      <section className="explanation-section">
        <h2>🌟 Why Do We Need useReducer?</h2>
        <p>
          Imagine you're juggling multiple related state values or dealing with
          complex state updates. That's where useReducer shines! It helps you:
        </p>
        <ul>
          <li>✨ Manage complex state logic more efficiently</li>
          <li>🔄 Handle multiple related state transitions</li>
          <li>📦 Keep state updates predictable and maintainable</li>
          <li>🎮 Centralize state management logic</li>
        </ul>
      </section>

      <section className="explanation-section">
        <h2>⚖️ useState vs useReducer</h2>
        <div className="comparison-table">
          <div className="comparison-item">
            <h3>useState</h3>
            <ul>
              <li>Great for simple state</li>
              <li>Direct state updates</li>
              <li>Easier to learn</li>
              <li>Best for independent states</li>
            </ul>
          </div>
          <div className="comparison-item">
            <h3>useReducer</h3>
            <ul>
              <li>Perfect for complex state</li>
              <li>Action-based updates</li>
              <li>More scalable</li>
              <li>Better for related states</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="explanation-section">
        <h2>📅 Birth of useReducer</h2>
        <p>
          Introduced in React 16.8 alongside other Hooks, useReducer was
          inspired by Redux's pattern of state management. It brought the power
          of reducers directly into React components without needing external
          libraries!
        </p>
      </section>

      <section className="explanation-section">
        <h2>🚀 Challenges Solved by useReducer</h2>
        <div className="challenge-card">
          <h3>Before useReducer:</h3>
          <ul>
            <li>❌ Complex state updates were hard to track</li>
            <li>❌ Related state changes were scattered</li>
            <li>❌ State logic was often duplicated</li>
          </ul>
        </div>
        <div className="challenge-card">
          <h3>After useReducer:</h3>
          <ul>
            <li>✅ Centralized state logic</li>
            <li>✅ Predictable state updates</li>
            <li>✅ Easier testing and debugging</li>
          </ul>
        </div>
      </section>

      <section className="explanation-section">
        <h2>💡 Smart Usage Tips</h2>
        <div className="tips-container">
          <div className="tip">
            <h3>🎯 When to Use</h3>
            <p>
              Use useReducer when state logic is complex or when multiple state
              updates are related.
            </p>
          </div>
          <div className="tip">
            <h3>📝 Best Practices</h3>
            <p>
              Keep reducers pure, use action constants, and structure state
              carefully.
            </p>
          </div>
          <div className="tip">
            <h3>🔍 Testing</h3>
            <p>
              Reducers are pure functions, making them easy to test
              independently.
            </p>
          </div>
        </div>
      </section>

      <section className="explanation-section">
        <h2>📚 Use Cases & Examples</h2>
        <div className="example-container">
          <div className="example">
            <h3>🛒 Shopping Cart</h3>
            <pre>
              {`const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, action.item];
    case 'REMOVE_ITEM':
      return state.filter(item => item.id !== action.id);
    default:
      return state;
  }
}`}
            </pre>
          </div>

          <div className="example">
            <h3>👤 Form Management</h3>
            <pre>
              {`const formReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return { ...state, [action.field]: action.value };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}`}
            </pre>
          </div>
        </div>
      </section>
    </div>
  );
};
