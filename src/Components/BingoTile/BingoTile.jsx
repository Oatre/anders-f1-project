import React, { useState } from "react";
import "./bingotile.scss";

const BingoTile = () => {
  const [inputValue, setInputValue] = useState("");
  const [isInputFinal, setIsInputFinal] = useState(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  // This event finalizes the input. If input field is selected, and unfocuses, regardless if anything is typed
  // the input field is finalized, and you cant type anything
  const handleInputBlur = () => {
    if (inputValue === "") {
      setIsInputFinal(false);
    } else {
      setIsInputFinal(true);
    }
  };

  //This function makes sure that the user can also press Enter (Keycode 13) to finalize the input field
  const handleEnterKey = (event) => {
    if (inputValue === "") {
      setIsInputFinal(false);
    } else if (event.keyCode === 13) {
      setIsInputFinal(true);
    }
  };

  return (
    <div className="BingoTile">
      {isInputFinal ? (
        <p onClick={() => setIsInputFinal(false)}>{inputValue}</p>
      ) : (
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          onKeyDown={handleEnterKey}
          placeholder="Fill"
        /> // Want to fix that fill and card are on seperate lines later, for now leave as is
          // Having just 'fill' for now 
      )}
    </div>
  );

};
export default BingoTile;