import React, { useEffect, useState } from "react";

export const UseEffectExplanation: React.FC = () => {
  return (
    <div className="explanation-container">
      <h1>Understanding useEffect in React - A Complete Guide</h1>

      <section>
        <h2>What is useEffect? 🤔</h2>
        <p>
          Think of useEffect as React's way of handling "side effects" in your
          components. Side effects are operations that happen outside of React's
          normal render flow, like:
        </p>
        <ul className="feature-list">
          <li>Fetching data from an API</li>
          <li>Directly manipulating the DOM</li>
          <li>Setting up subscriptions or timers</li>
          <li>Logging to console</li>
          <li>Integrating with third-party libraries</li>
        </ul>
      </section>

      <section>
        <h2>Why Do We Need useEffect? 🎯</h2>
        <p>Imagine building a chat application that needs to:</p>
        <ul className="feature-list">
          <li>Connect to a WebSocket when the component loads</li>
          <li>Update the title when new messages arrive</li>
          <li>Clean up connections when the user leaves</li>
        </ul>
        <p>
          useEffect helps manage all these operations that need to happen at
          specific times during a component's lifecycle!
        </p>
      </section>

      <section>
        <h2>When Was useEffect Born? 📅</h2>
        <p>
          useEffect was introduced alongside other Hooks in React 16.8 (February
          2019). It revolutionized how we handle side effects in React, moving
          away from the more complex lifecycle methods in class components to a
          more intuitive approach in functional components.
        </p>
      </section>

      <section>
        <h2>The Evolution: Class Components vs useEffect 🔄</h2>
        <div className="comparison-container">
          <div className="before-card">
            <h3>Before: Complex Lifecycle Methods 😓</h3>
            <code>
              {`class DataFetcher extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: null };
  }

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.id !== this.props.id) {
      this.fetchData();
    }
  }

  componentWillUnmount() {
    // Cleanup code here
  }

  fetchData = async () => {
    const data = await fetch(\`/api/data/\${this.props.id}\`);
    this.setState({ data });
  }
}`}
            </code>
          </div>

          <div className="after-card">
            <h3>After: Clean useEffect Hook 😊</h3>
            <code>
              {`function DataFetcher({ id }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(\`/api/data/\${id}\`);
      setData(result);
    };
    
    fetchData();
    
    return () => {
      // Cleanup code here
    };
  }, [id]); // Only re-run when id changes
}`}
            </code>
          </div>
        </div>
      </section>

      <section>
        <h2>Understanding the Dependency Array 🎯</h2>
        <div className="example-container">
          <h3>1. Empty Array - ComponentDidMount</h3>
          <code>
            {`useEffect(() => {
  console.log('Runs only on mount');
}, []); // Empty dependency array`}
          </code>

          <h3>2. With Dependencies - ComponentDidUpdate</h3>
          <code>
            {`useEffect(() => {
  console.log('Runs when count changes');
}, [count]); // Runs when count updates`}
          </code>

          <h3>3. No Array - Every Render</h3>
          <code>
            {`useEffect(() => {
  console.log('Runs on every render');
}); // No dependency array`}
          </code>

          <h3>4. Cleanup - ComponentWillUnmount</h3>
          <code>
            {`useEffect(() => {
  const subscription = api.subscribe();
  return () => {
    // Cleanup function
    subscription.unsubscribe();
  };
}, []); // Cleanup runs before unmount`}
          </code>
        </div>
      </section>

      <section>
        <h2>Smart Usage Tips 🧠</h2>
        <div className="tips-container">
          <div className="tip">
            <h3>✅ Do's</h3>
            <ul>
              <li>Keep effects focused on one concern</li>
              <li>Include all dependencies in the dependency array</li>
              <li>Use cleanup functions when needed</li>
              <li>Handle async operations properly</li>
            </ul>
          </div>

          <div className="tip">
            <h3>❌ Don'ts</h3>
            <ul>
              <li>Don't ignore the exhaustive-deps ESLint rule</li>
              <li>Don't mutate state in cleanup functions</li>
              <li>
                Don't use effects for data that can be computed during render
              </li>
              <li>Don't create infinite loops with incorrect dependencies</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2>Real-World Examples 🌟</h2>
        <div className="example-container">
          <h3>1. API Data Fetching</h3>
          <code>
            {`function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchUser() {
      try {
        const response = await fetch(\`/api/users/\${userId}\`);
        const data = await response.json();
        if (isMounted) setUser(data);
      } catch (err) {
        if (isMounted) setError(err);
      }
    }

    fetchUser();
    return () => { isMounted = false };
  }, [userId]);
}`}
          </code>

          <h3>2. Window Event Listener</h3>
          <code>
            {`function WindowSizeTracker() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty array = run once on mount
}`}
          </code>

          <h3>3. Timer Management</h3>
          <code>
            {`function Timer() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
    
    return () => clearInterval(timer);
  }, []); // Cleanup prevents memory leaks
}`}
          </code>
        </div>
      </section>

      <section>
        <h2>Best Practices for useEffect</h2>
        <ul className="best-practices">
          <li>
            <strong>Use Multiple Effects for Separate Concerns:</strong>
            <p>
              Split different side effects into separate useEffect calls instead
              of combining them
            </p>
          </li>
          <li>
            <strong>Dependency Array Management:</strong>
            <p>
              Include all values from component scope that the effect uses and
              can change
            </p>
          </li>
          <li>
            <strong>Cleanup is Important:</strong>
            <p>
              Always clean up subscriptions, intervals, and listeners to prevent
              memory leaks
            </p>
          </li>
          <li>
            <strong>Avoid Infinite Loops:</strong>
            <p>
              Be careful with dependency arrays and state updates inside effects
            </p>
          </li>
        </ul>
      </section>

      <section>
        <h2>Common Use Cases</h2>
        <div className="use-cases">
          <div className="case">
            <h3>API Integration</h3>
            <p>Fetching and syncing data with backend services</p>
          </div>
          <div className="case">
            <h3>Browser APIs</h3>
            <p>Interacting with DOM, localStorage, or media APIs</p>
          </div>
          <div className="case">
            <h3>Subscriptions</h3>
            <p>Managing WebSocket connections or external event listeners</p>
          </div>
          <div className="case">
            <h3>Animations</h3>
            <p>Controlling and cleaning up animations</p>
          </div>
        </div>
      </section>
    </div>
  );
};
