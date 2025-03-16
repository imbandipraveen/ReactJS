import React, { useMemo, useState } from "react";

export const MemoHookExplanation: React.FC = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const isEven = useMemo(() => {
    var i = 0;
    while (i <= 20000) {
      console.log("keerthi");
      i++;
    }
    return count2 % 2 === 0;
  }, [count2]);

  return (
    <div className="memo-explanation">
      <h1 className="title">🧠 Understanding useMemo in React</h1>

      <section className="section">
        <h2>🤔 What is useMemo?</h2>
        <p>
          useMemo is a React Hook that lets you cache the result of a
          calculation between re-renders. Think of it as a way to remember
          expensive computations so they don't need to be recalculated
          unnecessarily!
        </p>
      </section>

      <section className="section">
        <h2>🎯 Why Do We Need useMemo?</h2>
        <p>
          Imagine calculating the average of 1 million numbers on every render -
          that would be slow! useMemo helps by:
        </p>
        <ul>
          <li>🚀 Improving performance by avoiding expensive calculations</li>
          <li>💾 Caching values between renders</li>
          <li>🎮 Preventing unnecessary re-renders</li>
        </ul>
      </section>

      <section className="section">
        <h2>⚡ Live Example</h2>
        <div className="demo-box">
          <button
            className="button button-count"
            onClick={() => setCount1((prevState) => prevState + 1)}
          >
            {count1}
          </button>
          <button
            className="button button-count"
            onClick={() => setCount2((prevState) => prevState + 1)}
          >
            {count2}
          </button>
          <button className="button button-input">
            {isEven ? "even" : "odd"}
          </button>
        </div>
        <p>
          In this example, clicking the second button triggers an expensive
          calculation to check if the number is even. The calculation is
          memoized, so it only runs when count2 changes. Try clicking the first
          button - notice how it's instant!
        </p>
      </section>

      <section className="section">
        <h2>📚 Smart Usage Tips</h2>
        <ul>
          <li>Only memoize expensive calculations</li>
          <li>Don't overuse - memoization itself has a cost</li>
          <li>Always include proper dependencies in the dependency array</li>
        </ul>
      </section>

      <section className="section">
        <h2>🎨 Common Use Cases</h2>
        <div className="use-cases">
          <div className="use-case">
            <h3>1. Complex Data Transformations</h3>
            <code>
              {`const transformedData = useMemo(() => {
  return expensiveTransformation(data);
}, [data]);`}
            </code>
          </div>

          <div className="use-case">
            <h3>2. Preventing Re-renders in Child Components</h3>
            <code>
              {`const memoizedValue = useMemo(() => ({
  id: props.id,
  name: props.name
}), [props.id, props.name]);`}
            </code>
          </div>
        </div>
      </section>
    </div>
  );
};
