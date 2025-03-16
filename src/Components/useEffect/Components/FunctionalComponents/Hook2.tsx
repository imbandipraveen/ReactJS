import React from "react";
import { useState, useEffect } from "react";

interface Position {
  x: number;
  y: number;
}

export const Hook2: React.FC = () => {
  const [x, setX] = useState<number>(0);
  const [y, setY] = useState<number>(0);
  const [positions, setPositions] = useState<Position>({ x: 0, y: 0 });

  const logMousePosition = (e: MouseEvent): void => {
    setX(e.clientX);
    setY(e.clientY);
    setPositions({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", logMousePosition);

    return () => {
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []);

  return (
    <div>
      <button className="button button-count">x-{positions.x}</button>
      <button className="button button-count">y-{positions.y}</button>
    </div>
  );
};
