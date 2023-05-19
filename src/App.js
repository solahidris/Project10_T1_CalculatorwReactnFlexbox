import "./App.css";
import Header from "./components/header.js";
import React from "react";
import { useState } from "react";
import ButtonHandler from "./components/ButtonHandler.js";

function App() {
  // value & operators useState
  const [firstValue, setFirstValue] = useState(null);
  const [operatorValue, setOperatorValue] = useState(null);
  const [secondValue, setSecondValue] = useState(null);
  const [totalValue, setTotalValue] = useState(null);
  const [displayValue, setDisplayValue] = useState(0);

  return (
    <div className="bg-black h-screen">
      <Header />

      {/* actual display needed */}
      <div className="">
        <div className="w-[300px] mx-auto">
          <label className="flex justify-end pr-6 h-30 w-50 mb-5 text-6xl bg-gray-700/20 rounded-xl py-3 text-white">
            {displayValue}
          </label>
        </div>

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

        {/* value checker (not needed for production) */}
        <div className="mt-5a p-2 bg-red-500">
          <label className="flex justify-center p-2 bg-blue-500 text-white">
            {firstValue}
          </label>
          <label className="flex justify-center p-2 bg-green-500 text-black">
            {secondValue}
          </label>
          <label className="flex justify-center p-2 bg-yellow-500 text-black">
            {totalValue}
          </label>
          <div className="flex justify-center mt-5">
            <label className="p-5 bg-blue-500 text-blue">
              1V) {firstValue}
            </label>
            <label className="p-5 bg-red-500 text-black">
              OV) {operatorValue}
            </label>
            <label className="p-5 bg-green-500 text-black">
              2V) {secondValue}
            </label>
            <label className="p-5 bg-yellow-500 text-black">
              TV) {totalValue}
            </label>
          </div>
        </div>
        {/* value checker (not needed for production) */}

      </div>
    </div>
  );
}

export default App;
