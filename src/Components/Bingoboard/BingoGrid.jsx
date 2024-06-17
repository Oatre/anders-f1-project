import React from "react";
import BingoTile from "../BingoTile/BingoTile.jsx";
import "./bingogrid.scss";
const BingoGrid = () => {
  return (
    // The grid houses the bingotiles. Filled an array with 25 tiles, that makes up a bingoboard.
    <div className="bingo-grid">
      {Array(25)
        .fill()
        .map((_, i) => (
          <BingoTile key={i} />
        ))}
    </div>
  );
};

export default BingoGrid;
