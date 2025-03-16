import React from "react";
import { buyCake, addCake } from "../../../redux";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

interface CakeState {
  numOfCakes: number;
}

interface RootState {
  cake: CakeState;
}

interface NumberState {
  number1: number;
  number2: number;
}

export const CakeContainer: React.FC = () => {
  const { numOfCakes } = useSelector((state: RootState) => state.cake);
  const dispatch = useDispatch();
  const [numbers, setNumbers] = useState<NumberState>({
    number1: 1,
    number2: 1,
  });

  const handleNumberChange =
    (field: keyof NumberState) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setNumbers((prev) => ({
        ...prev,
        [field]: parseInt(e.target.value) || 0,
      }));
    };

  const handleBuyCake = () => {
    dispatch(buyCake(numbers.number1));
  };

  const handleAddCake = () => {
    dispatch(addCake(numbers.number2));
  };

  return (
    <div className="cake-container">
      <h4>
        Number of cakes:{" "}
        <button className="button button-input">{numOfCakes}</button>
      </h4>

      <div className="cake-controls">
        <div className="control-group">
          <input
            type="number"
            min="1"
            value={numbers.number1}
            onChange={handleNumberChange("number1")}
          />
          <button className="button" onClick={handleBuyCake}>
            Buy {numbers.number1} {numbers.number1 > 1 ? "cakes" : "cake"}
          </button>
        </div>

        <div className="control-group">
          <input
            type="number"
            min="1"
            value={numbers.number2}
            onChange={handleNumberChange("number2")}
          />
          <button className="button" onClick={handleAddCake}>
            Add {numbers.number2} {numbers.number2 > 1 ? "cakes" : "cake"}
          </button>
        </div>
      </div>
    </div>
  );
};
