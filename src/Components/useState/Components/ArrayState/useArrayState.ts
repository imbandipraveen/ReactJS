import { useState, ChangeEvent, KeyboardEvent } from "react";

/**
 * Interface defining the return type of the useArrayState hook
 */
interface IArrayStateReturn {
  /** Array containing numbers or strings */
  values: (number | string)[];
  /** Current input value */
  inputValue: string | number;
  /** Add current input value or random number to array */
  addValue: () => void;
  /** Remove item at specified index from array */
  removeItem: (index: number) => void;
  /** Handle input change */
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  /** Handle enter key press */
  handleKeyPress: (e: KeyboardEvent<HTMLInputElement>) => void;
}

/**
 * Custom hook to manage an array of numbers or strings with add/remove functionality
 */
const useArrayState = (): IArrayStateReturn => {
  // State for array of values
  const [values, setValues] = useState<(number | string)[]>([]);
  // State for current input value
  const [inputValue, setInputValue] = useState<string | number>("");

  /**
   * Add current input value to array, or random number if no input
   */
  const addValue = (): void => {
    if (inputValue) {
      setValues([...values, inputValue]);
    } else {
      const randomValue = Math.ceil(Math.random() * 10);
      setValues([...values, randomValue]);
    }
    setInputValue("");
  };

  /**
   * Remove item at specified index from array
   */
  const removeItem = (index: number): void => {
    const updatedValues = [...values];
    updatedValues.splice(index, 1);
    setValues(updatedValues);
  };

  /**
   * Handle input value changes
   */
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
  };

  /**
   * Handle enter key press to add value
   */
  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter" && inputValue) {
      setValues([...values, inputValue]);
      setInputValue("");
    }
  };

  return {
    values,
    inputValue,
    addValue,
    removeItem,
    handleInputChange,
    handleKeyPress,
  };
};

export default useArrayState;
