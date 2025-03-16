import React from "react";

interface ButtonProps {
  handleClick: () => void;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = React.memo(
  ({ handleClick, children }) => {
    console.log(`rendering ${children}`);
    return (
      <div>
        <button onClick={handleClick}>{children}</button>
      </div>
    );
  }
);
