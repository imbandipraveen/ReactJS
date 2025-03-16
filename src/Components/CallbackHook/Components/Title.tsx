import React from "react";

export const Title: React.FC = React.memo(() => {
  console.log(`rendering title`);
  return (
    <div>
      <h3>title</h3>
    </div>
  );
});
