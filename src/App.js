import "./App.css";
import Header from "./components/header.js";
import React from "react";
import { useState } from "react";
import ButtonHandler from "./components/ButtonHandler.js";

function App() {
  // Value & Operators useState
  const [firstValue, setFirstValue] = useState(null);
  const [operatorValue, setOperatorValue] = useState(null);
  const [secondValue, setSecondValue] = useState(null);
  const [totalValue, setTotalValue] = useState(null);
  const [displayValue, setDisplayValue] = useState(0);

  return (
    <div className="bg-black h-screen">
      <Header />

      {/* Display Screen */}
      <div className="">
        <div className="w-[300px] mx-auto">
          <label className="flex justify-end pr-6 h-30 w-50 mb-5 text-6xl bg-gray-700/20 rounded-xl py-3 text-white">
            {displayValue}
          </label>
        </div>

        {/* Buttons */}
        <ButtonHandler
          operatorValue={operatorValue}
          setOperatorValue={setOperatorValue}
          firstValue={firstValue}
          setFirstValue={setFirstValue}
          secondValue={secondValue}
          setSecondValue={setSecondValue}
          totalValue={totalValue}
          setTotalValue={setTotalValue}
          displayValue={displayValue}
          setDisplayValue={setDisplayValue}
        />

      </div>
    </div>
  );
}

export default App;
