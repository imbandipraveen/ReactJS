import React from "react";
import { useState } from "react";
import { useCallback } from "react";

import { Title, Button, Count, UseCallbackExplanation } from "./Components";

export const CallbackHook: React.FC = () => {
  const [age, setAge] = useState<number>(25);
  const [salary, setSalary] = useState<number>(50000);

  const incrementAge = useCallback((): void => {
    setAge((prevState) => prevState + 1);
  }, []);

  const incrementSalary = useCallback((): void => {
    setSalary((prevState) => prevState + 1000);
  }, []);

  return (
    <div className="callback-hook">
      <UseCallbackExplanation />
      <div className="explanation-container">
        <h2>Example</h2>

        <Title />
        <Count text="age" count={age} />
        <Button handleClick={incrementAge}>increment age</Button>
      </div>
    </div>
  );
};
