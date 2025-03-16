import React from "react";
import "./reduxExplnation.scss";
export const ReduxExplanation: React.FC = () => {
  return (
    <div className="redux-explanation">
      <h1 className="main-title">🚀 Redux: The Complete Guide</h1>

      <section className="section">
        <h2>🤔 What is Redux?</h2>
        <p>
          Redux is a predictable state container for JavaScript applications.
          Think of it as a central store that holds all your application's data
          in one place!
        </p>
      </section>

      <section className="section">
        <h2>🎯 Why Do We Need Redux?</h2>
        <div className="card">
          <h3>Problem: State Management Chaos</h3>
          <ul>
            <li>Complex state flows between components</li>
            <li>Prop drilling through multiple levels</li>
            <li>Unpredictable state updates</li>
          </ul>
          <h3>Solution: Redux Brings Order</h3>
          <ul>
            <li>Single source of truth</li>
            <li>Predictable state updates</li>
            <li>Powerful debugging capabilities</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <h2>📅 Redux Timeline</h2>
        <div className="timeline">
          <div className="timeline-item">
            <h3>2015</h3>
            <p>Redux was born at React Europe conference</p>
          </div>
          <div className="timeline-item">
            <h3>2018</h3>
            <p>Redux Toolkit (RTK) development begins</p>
          </div>
          <div className="timeline-item">
            <h3>2021</h3>
            <p>RTK Query released</p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>💡 Smart Usage Tips</h2>
        <div className="tips">
          <div className="tip">
            <h3>1. Use Redux Toolkit</h3>
            <p>It simplifies store setup and reduces boilerplate code</p>
          </div>
          <div className="tip">
            <h3>2. Normalize State Shape</h3>
            <p>Keep related data grouped together</p>
          </div>
          <div className="tip">
            <h3>3. Use Selectors</h3>
            <p>Memoize derived data calculations</p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>🔍 Live Example: Todo App</h2>
        <div className="code-example">
          <pre>
            {`// Modern Redux with RTK
import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    toggleTodo: (state, action) => {
      const todo = state.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    }
  }
});`}
          </pre>
        </div>
      </section>

      <section className="section">
        <h2>🔄 Before vs After RTK</h2>
        <div className="comparison">
          <div className="before">
            <h3>Before RTK</h3>
            <ul>
              <li>Lots of boilerplate code</li>
              <li>Manual immutability handling</li>
              <li>Separate action creators</li>
              <li>Complex store setup</li>
            </ul>
          </div>
          <div className="after">
            <h3>With RTK</h3>
            <ul>
              <li>Minimal boilerplate</li>
              <li>Built-in Immer for mutations</li>
              <li>Automatic action creators</li>
              <li>Simple store configuration</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};
