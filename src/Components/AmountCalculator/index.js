import React, { useState } from "react";

//Components
import Slider from "@material-ui/core/Slider";
import BrewingMethodDetails from "../BrewingMethodDetails";
import CupSize from "../CupSize";
import Timer from "../Timer";
//Styling
import "../../style.css";

const AmountCalculator = ({ brewingMethod }) => {
  const [amount, setAmount] = useState();
  const [grams, setGrams] = useState();
  const [water, setWater] = useState();
  const [selectedOption, setSelectedOption] = useState(227);

  const marks = [
    {
      value: 12,
      label: "12",
    },
    {
      value: 13,
      label: "13",
    },
    {
      value: 14,
      label: "14",
    },
    {
      value: 15,
      label: "15",
    },
  ];

  const handleChange = () => {
    setGrams(parseInt(selectedOption / amount));
    setWater(parseInt(grams * 15));
  };

  const handleRatio = (value) => {
    setAmount(value);
    handleChange();
    return JSON.stringify(value);
  };

  return (
    <div>
      <div className="wrapper-details-input">
        <div>
          <h5 className="text-center">Coffee to Water Ratio: </h5>
        </div>
        <div>
          <h6 className="text-center">stronger</h6>
        </div>
        <Slider
          orientation="horizontal"
          defaultValue={15}
          min={12}
          max={15}
          getAriaValueText={handleRatio}
          step={1}
          marks={marks}
          valueLabelDisplay="on"
          style={{
            width: "200px",
            color: "#8cb9fd",
          }}
        />
        <div>
          <h6 className="text-center">lighter</h6>
        </div>
      </div>
      <hr className="mt-2 mb-4" />
      <CupSize
        handleChange={handleChange}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
      <hr className="mt-2 mb-4" />

      <BrewingMethodDetails
        brewingMethod={brewingMethod}
        grams={grams}
        water={water}
      />
    </div>
  );
};
export default AmountCalculator;
