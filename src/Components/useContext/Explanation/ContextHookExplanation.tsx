import React from "react";

export const ContextHookExplanation: React.FC = () => {
  return (
    <div className="explanation-container">
      <h1>🎯 Let's Master the useContext Hook! 🚀</h1>

      <section className="intro-section">
        <h2>🤔 What is useContext?</h2>
        <p>
          Think of useContext as a magical tunnel that can beam data directly to
          any component in your React app! It's like having a universal TV
          remote that can control any TV in your house without walking to each
          room. Introduced in React 16.8 (February 2019), it's one of React's
          most powerful hooks.
        </p>
      </section>

      <section className="need-section">
        <h2>🌟 Why Do We Need useContext?</h2>
        <div className="problem-solution">
          <div className="problem-card">
            <h3>😫 The Old Way (Props Drilling)</h3>
            <p>
              Imagine passing a hot potato (data) through 10 people to reach the
              last person, even though only the last person needs it.
              Exhausting, right? That's prop drilling!
            </p>
            <div className="code-example">
              <code>
                {`// 😓 Prop Drilling Example
ParentComponent
  → Child (passes data)
    → GrandChild (passes data)
      → GreatGrandChild (finally uses data)`}
              </code>
            </div>
          </div>

          <div className="solution-card">
            <h3>✨ The useContext Way</h3>
            <p>
              Now imagine teleporting that hot potato directly to the last
              person! That's what useContext does - direct data delivery! 🎯
            </p>
            <div className="code-example">
              <code>
                {`// 🎉 Context Solution
<DataContext.Provider value={hotPotato}>
  <Child>
    <GrandChild>
      <GreatGrandChild /> {/* Gets data directly! */}
    </GrandChild>
  </Child>
</DataContext.Provider>`}
              </code>
            </div>
          </div>
        </div>
      </section>

      <section className="usage-section">
        <h2>🛠️ How to Use useContext Like a Pro</h2>
        <div className="steps-container">
          <div className="step-card">
            <h3>📦 Step 1: Create Your Context</h3>
            <code>{`const ThemeContext = createContext('light');`}</code>
          </div>

          <div className="step-card">
            <h3>🎁 Step 2: Wrap with Provider</h3>
            <code>
              {`<ThemeContext.Provider value={currentTheme}>
  <App />
</ThemeContext.Provider>`}
            </code>
          </div>

          <div className="step-card">
            <h3>🎨 Step 3: Use in Components</h3>
            <code>{`const theme = useContext(ThemeContext);`}</code>
          </div>
        </div>
      </section>

      <section className="tips-section">
        <h2>🎯 Smart Usage Tips</h2>
        <ul className="tips-list">
          <li>
            <span className="emoji">🎯</span>
            <strong>Keep it Simple:</strong> Use context for data that many
            components need (like themes, user data, language preferences)
          </li>
          <li>
            <span className="emoji">🔄</span>
            <strong>Split Contexts:</strong> Create separate contexts for
            different types of data
          </li>
          <li>
            <span className="emoji">⚡</span>
            <strong>Performance Matters:</strong> Remember, all components using
            a context will re-render when its value changes
          </li>
        </ul>
      </section>

      <section className="examples-section">
        <h2>🚀 Real-World Examples</h2>
        <div className="examples-grid">
          <div className="example-card">
            <h3>🎨 Theme Switcher</h3>
            <code>
              {`const ThemeContext = createContext('light');
const App = () => {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={theme}>
      <ThemedButton />
    </ThemeContext.Provider>
  );
}`}
            </code>
          </div>

          <div className="example-card">
            <h3>👤 User Authentication</h3>
            <code>
              {`const UserContext = createContext(null);
const App = () => {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Dashboard />
    </UserContext.Provider>
  );
}`}
            </code>
          </div>
        </div>
      </section>
    </div>
  );
};
