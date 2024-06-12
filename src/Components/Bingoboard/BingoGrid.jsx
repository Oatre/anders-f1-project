import React from "react";
import BingoTile from "../BingoTile/BingoTile.jsx";

const BingoGrid = () => {
  return (
    <div className="bingo-grid">
      <BingoTile />
      <BingoTile />
      <BingoTile />
    </div>
  );
};

export default BingoGrid;
