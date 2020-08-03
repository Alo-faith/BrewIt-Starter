import React, { useState } from "react";

//Style
import "./App.css";

//Data
import allBrewMethods from "./data";

//Components
import BrewingList from "./Components/BrewingList";
import AboutPage from "./Components/AboutPage";
import NavBar from "./Components/NavBar";

function App() {
  const [showHome, setShowHome] = useState(true);
  const [brewingMethods] = useState(allBrewMethods);

  return (
    <>
      <NavBar setShowHome={setShowHome} />
      <div className="App my-5">
        <div className="container">
          {showHome ? (
            <BrewingList brewingMethods={brewingMethods} />
          ) : (
            <AboutPage />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
