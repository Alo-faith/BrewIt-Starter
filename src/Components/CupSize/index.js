import React from "react";

//Styling
import "../../style.css";
import "../../Modal.css";

const CupSize = ({ handleChange, selectedOption, setSelectedOption }) => {
  const handleChoice = (e) => {
    setSelectedOption(e);
    handleChange(selectedOption);
  };
  return (
    <div className="wrapper-details">
      <h5 className="text-center mt-4">Cup Size:</h5>
      <button className="cup-box" onClick={() => handleChoice(227)}>
        8oz
      </button>
      <button className="cup-box" onClick={() => handleChoice(240)}>
        12oz
      </button>
      <button className="cup-box" onClick={() => handleChoice(454)}>
        16oz
      </button>
    </div>
  );
};
export default CupSize;
