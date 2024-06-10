import React, { useState } from "react";
import "./bingotile.scss";

const BingoTile = () => {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <div className="BingoTile">
           <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="yoyo" />
        </div>
    );
};
export default BingoTile;