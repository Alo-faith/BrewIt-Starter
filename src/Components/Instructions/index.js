import React from "react";

//Styling
import "../../style.css";

const Instructions = ({ brewingMethod }) => {
  const instructions = brewingMethod.instructions;
  let count = 0;

  const instructionList = instructions.map((inst) => {
    if (count === 0) {
      count += 1;

      return (
        <div className="carousel-item active">
          Step: {count} <br />
          <br />
          {instructions[0]}
        </div>
      );
    } else {
      count += 1;
      return (
        <div className="carousel-item">
          Step: {count} <br />
          <br />
          {inst}
        </div>
      );
    }
  });
  return (
    <div
      id="carouselControls"
      className="carousel slide"
      data-ride="carousel"
      data-interval="false"
    >
      <div className="carousel-inner">
        <div className="card-body">
          <p className="card-text">{instructionList}</p>
        </div>
      </div>

      <button
        className="carousel-control-next"
        href="#carouselControls"
        role="button"
        data-slide="next"
        style={{
          height: "165px",
          width: "15px",
          color: "black",
        }}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </button>
    </div>
  );
};
export default Instructions;
