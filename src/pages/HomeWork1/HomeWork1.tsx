import { useState } from "react";
import "./Dise.css";

const SIDES = [
  { x: 0, y: 0 },
  { x: 90, y: 180 },
  { x: 0, y: 90 },
  { x: 0, y: 270 },
  { x: 90, y: 0 },
  { x: 360, y: 180 },
];

export const HomeWork1 = () => {
  const [roll, setRoll] = useState(0);
  const [isRolling, setIsRolling] = useState(false);

  const handleClick = () => {
    setIsRolling(true);
    setRoll(Math.floor(Math.random() * SIDES.length));
    setTimeout(() => {
      setIsRolling(false);
    }, 1000);
  };

  return (
    <div className="roll">
      <div
        className="cube"
        style={{
          transform: `rotateY(${SIDES[roll].y}deg) rotateX(${SIDES[roll].x}deg)`,
        }}
      >
        {SIDES.map((_, index) => (
          <div key={index} className={`side side-${index + 1}`}></div>
        ))}
      </div>
      <button
        className="roll_btn"
        onClick={handleClick}
        type="button"
        disabled={isRolling}
      >
        Крутить
      </button>
    </div>
  );
};
