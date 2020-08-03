import React, { useState } from "react";

// Styling
import "../../style.css";
import "../../Modal.css";

//Component
import BrewingMethodModal from "../BrewingMethodModal/index";

const BrewMethodItem = ({ brewingMethod }) => {
  const [modalState, setModalState] = useState(false);

  const handleToggle = () => {
    setModalState(!modalState);
  };

  return (
    <div onClick={handleToggle}>
      <h3 className="font-weight-medium text-center text-lg-left mt-4 mb-0">
        {brewingMethod.name}
      </h3>
      <hr className="mt-2 mb-5" />
      <div className="row text-center text-lg-left">
        <div className="box">
          <img
            className="img-fluid img-thumbnail"
            src={brewingMethod.imageUrl}
            alt={brewingMethod.name}
            style={{ height: 160, width: 170 }}
          />
          <div>
            <button
              id="#btn"
              type="button"
              className="btn"
              data-toggle="modal"
              data-target="#brewingModal"
            >
              Brew
            </button>
          </div>
          <BrewingMethodModal
            handleToggle={handleToggle}
            brewingMethod={brewingMethod}
            modalState={modalState}
          />
        </div>
      </div>
    </div>
  );
};
export default BrewMethodItem;
