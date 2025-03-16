import React from "react";

interface CountProps {
  text: string;
  count: number;
}

export const Count: React.FC<CountProps> = React.memo(({ text, count }) => {
  console.log(`rendering ${text}`);
  return (
    <div>
      <button className="button button-count">{count}</button>
    </div>
  );
});
