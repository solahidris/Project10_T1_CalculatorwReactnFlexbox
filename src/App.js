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
  const [displayValue, setDisplayValue] = useState(null);

  return (
    <div className="bg-slate-600 h-screen">
      <Header />

      {/* actual display needed */}
      <div className="my-5 mx-5">
        <div>
          <label className="flex justify-center p-2 mb-5 bg-black text-white">
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

        {/* under the hood - testing display (not needed) */}
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
        <label className="p-5 bg-blue-500 text-blue">1V) {firstValue}</label>
        <label className="p-5 bg-red-500 text-black">OV) {operatorValue}</label>
        <label className="p-5 bg-green-500 text-black">2V) {secondValue}</label>
        <label className="p-5 bg-yellow-500 text-black">TV) {totalValue}</label>
      </div>
        </div>
      </div>

      {/* under the hood - value checker (not needed) */}
      
    </div>
  );
}

export default App;
