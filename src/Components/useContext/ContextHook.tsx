import { CounterProvider } from "./CounterContext";
import { Counter } from "./Counter";
import { ContextHookExplanation } from "./Explanation";

function ContextHook() {
  return (
    <CounterProvider>
      <ContextHookExplanation />
      <Counter />
    </CounterProvider>
  );
}

export default ContextHook;
