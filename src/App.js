import "./App.css";
import Header from "./components/header.js";
import React from "react";
import { useState } from "react";


function App() {

  const [firstValue,setFirstValue] = useState(null);
  const [operatorValue, setOperatorValue] = useState(null);
  const [secondValue,setSecondValue] = useState(null);
  const [totalValue,setTotalValue] = useState(null);
  const [displayValue, setDisplayValue] = useState(null);

  const buttonHandler = (e) => {
    const value = e.target.value;
    if (!isNaN(value) && operatorValue === null) {
      setFirstValue(value);
      setDisplayValue(value);
    } else if (firstValue !== null && isNaN(value) && value !== "=" && secondValue === null) {
      setOperatorValue(value);
    } else if (!isNaN(value) && firstValue !== null && operatorValue !== null) {
      setSecondValue(value);
      setDisplayValue(value);
    } else if ((value === "=") && (secondValue !== null)) {
      let result;
      if (operatorValue === "+") {
        result = parseInt(firstValue) + parseInt(secondValue);
      } else if (operatorValue === "-") {
        result = parseInt(firstValue) - parseInt(secondValue);
      } else if (operatorValue === "*") {
        result = parseInt(firstValue) * parseInt(secondValue);
      } else if (operatorValue === "/") {
        result = parseInt(firstValue) / parseInt(secondValue);
      }
      setTotalValue(result);
      setFirstValue(result); // Allow continue calculation
      setDisplayValue(result);
      setOperatorValue(null);
      setSecondValue(null);
    }
  };

  return (
    <div className="bg-slate-600 h-screen">

      <Header />

      <div className="my-5 mx-5">
        <div>
            <label className="flex justify-center p-2 mb-5 bg-black text-white">{displayValue}</label>
        </div>
        
        <label className="flex justify-center p-2 bg-blue-500 text-white">{firstValue}</label>
        <label className="flex justify-center p-2 bg-green-500 text-black">{secondValue}</label>
        <label className="flex justify-center p-2 bg-yellow-500 text-black">{totalValue}</label>
      </div>
      
      <div className="mx-5">
        <button value="1" onClick={buttonHandler} className="p-5 bg-white mr-2">1</button>
        <button value="2" onClick={buttonHandler} className="p-5 bg-white mr-2">2</button>
        <button value="3" onClick={buttonHandler} className="p-5 bg-white mr-2">3</button>

        <button value="+" onClick={buttonHandler} className="p-5 bg-yellow-300 mr-2">+</button>
        <button value="-" onClick={buttonHandler} className="p-5 bg-yellow-300 mr-2">-</button>
        <button value="*" onClick={buttonHandler} className="p-5 bg-yellow-300 mr-2">*</button>
        <button value="/" onClick={buttonHandler} className="p-5 bg-yellow-300 mr-2">/</button>
        <button value="=" onClick={buttonHandler} className="p-5 bg-yellow-300 mr-2">=</button>
      </div>

      <div className="flex justify-center mt-5">
        <label className="p-5 bg-blue-500 text-blue">1V) {firstValue}</label>
        <label className="p-5 bg-red-500 text-black">OV) {operatorValue}</label>
        <label className="p-5 bg-green-500 text-black">2V) {secondValue}</label>
        <label className="p-5 bg-yellow-500 text-black">TV) {totalValue}</label>
      </div>

    </div>
  );
}

export default App;
