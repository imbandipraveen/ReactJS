import React from "react";
import "./useCallbackExplanation.scss";
export const UseCallbackExplanation: React.FC = () => {
  return (
    <div className="callback-explanation">
      <section className="intro">
        <h1>🎯 Understanding useCallback Hook</h1>
        <div className="definition">
          <p>
            <code>useCallback</code> is a React Hook that lets you cache a
            function definition between re-renders. It returns a memoized
            version of the callback that only changes if one of the dependencies
            has changed.
          </p>
        </div>
      </section>

      <section className="birth-story">
        <h2>🎂 When Was useCallback Born?</h2>
        <p>
          useCallback was introduced in React 16.8 (February 2019) alongside
          other Hooks like useState and useEffect. It was part of React's
          mission to provide better performance optimization tools for
          functional components.
        </p>
      </section>

      <section className="why-need">
        <h2>🤔 Why Do We Need useCallback?</h2>
        <div className="need-points">
          <div className="point">
            <h3>🔄 Prevents Unnecessary Re-renders</h3>
            <p>
              When passing callbacks to optimized child components that rely on
              reference equality to prevent unnecessary renders, useCallback is
              your best friend!
            </p>
          </div>
          <div className="point">
            <h3>⚡ Performance Optimization</h3>
            <p>
              It helps in memoizing functions that would otherwise be recreated
              on every render.
            </p>
          </div>
        </div>
      </section>

      <section className="challenges">
        <h2>🚧 Challenges & Solutions</h2>
        <div className="challenge-container">
          <div className="challenge">
            <h3>Before useCallback:</h3>
            <ul>
              <li>Functions were recreated on every render</li>
              <li>Child components would re-render unnecessarily</li>
              <li>Performance issues in large applications</li>
            </ul>
          </div>
          <div className="solution">
            <h3>After useCallback:</h3>
            <ul>
              <li>Stable function references between renders</li>
              <li>Optimized child component rendering</li>
              <li>Better memory management</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="examples">
        <h2>💡 Real-World Examples</h2>

        <div className="example">
          <h3>1. Event Handler Optimization</h3>
          <code>{`
const MemoizedComponent = React.memo(({ onSubmit }) => {
  return <button onClick={onSubmit}>Submit</button>
});

const Parent = () => {
  const [count, setCount] = useState(0);
  
  const handleSubmit = useCallback(() => {
    // handle submission logic
  }, []); // Empty deps array if no dependencies

  return (
    <>
      <MemoizedComponent onSubmit={handleSubmit} />
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
    </>
  );
}`}</code>
        </div>

        <div className="example">
          <h3>2. Data Fetching</h3>
          <code>{`
const DataFetcher = () => {
  const [data, setData] = useState(null);
  
  const fetchData = useCallback(async () => {
    const response = await fetch('api/data');
    const result = await response.json();
    setData(result);
  }, []); // Stable fetch function

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return <div>{/* render data */}</div>;
}`}</code>
        </div>
      </section>

      <section className="smart-tips">
        <h2>🧠 Smart Usage Tips</h2>
        <div className="tips-container">
          <div className="do-tips">
            <h3>✅ Do's</h3>
            <ul>
              <li>Use when passing callbacks to optimized child components</li>
              <li>Include all required dependencies in the dependency array</li>
              <li>Combine with React.memo() for optimal performance</li>
              <li>Use when the callback is used in useEffect dependencies</li>
            </ul>
          </div>

          <div className="dont-tips">
            <h3>❌ Don'ts</h3>
            <ul>
              <li>Don't use for every function in your component</li>
              <li>Don't forget dependencies in the dependency array</li>
              <li>Don't wrap simple callbacks that don't need memoization</li>
              <li>Don't use when the function is only used during render</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UseCallbackExplanation;
