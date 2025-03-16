import React, { ChangeEvent, KeyboardEvent } from "react";
import useArrayState from "./useArrayState";
import "./arrayState.scss";
export const ArrayState: React.FC = () => {
  const {
    values,
    inputValue,
    addValue,
    removeItem,
    handleInputChange,
    handleKeyPress,
  } = useArrayState();

  return (
    <div className="array-container">
      <div className="array-display">
        {values ? (
          values.map((item: number | string, index: number) => (
            <div key={index} className="array-item">
              {item}
              <button
                className="remove-button"
                onClick={() => removeItem(index)}
              >
                ×
              </button>
            </div>
          ))
        ) : (
          <div className="empty-message">No items added yet</div>
        )}
      </div>

      <div className="input-section">
        <input
          className="array-input"
          placeholder="Enter anything here..."
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
          value={inputValue}
        />
        <button className="add-button" onClick={addValue}>
          Add
        </button>
      </div>
    </div>
  );
};
