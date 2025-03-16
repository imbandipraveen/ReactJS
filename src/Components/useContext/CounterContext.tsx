import React, { createContext, useState } from "react";

interface CounterContextType {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

interface CounterProviderProps {
  children: React.ReactNode;
}

export const CounterContext = createContext<CounterContextType>({
  count: 0,
  setCount: () => {},
});

export const CounterProvider: React.FC<CounterProviderProps> = ({
  children,
}) => {
  const [count, setCount] = useState<number>(0);

  return (
    <CounterContext.Provider value={{ count, setCount }}>
      {children}
    </CounterContext.Provider>
  );
};
