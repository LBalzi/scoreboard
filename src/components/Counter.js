import React from "react";

const Counter = ({ id, score, changeScore }) => {
  return (
    <div className="counter">
      <button className="counter-action decrement" onClick={() => changeScore(id, -1)}> - </button>
      {/* Conditionally render score only if it's not 0 */}
      {score !== 0 && <span className="counter-score">{score}</span>}
      <button className="counter-action increment" onClick={() => changeScore(id, 1)}> + </button>
    </div>
  );
};

export default Counter;