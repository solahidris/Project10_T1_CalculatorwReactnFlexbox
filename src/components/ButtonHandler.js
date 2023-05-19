import React from "react";

const ButtonHandler = ({
  operatorValue,
  setOperatorValue,
  firstValue,
  setFirstValue,
  secondValue,
  setSecondValue,
  totalValue,
  setTotalValue,
  displayValue,
  setDisplayValue,
}) => {
  const buttonHandler = (e) => {
    const value = e.target.value;

    // firstValue logic
    if (!isNaN(value) && operatorValue === null) {
      if (firstValue === null) {
        setFirstValue(value);
        setDisplayValue(value);
      } else {
        const newValue = firstValue + value;
        setFirstValue(newValue);
        setDisplayValue(newValue);
      }
      // operatorValue logic
    } else if (firstValue !== null && isNaN(value) && value !== "=" && secondValue === null && value !== "C") {
      setOperatorValue(value);
      // secondValue logic
    } else if (!isNaN(value) && firstValue !== null && operatorValue !== null) {
      if (secondValue === null) {
        setSecondValue(value);
        setDisplayValue(value);
      } else {
        const newValue = secondValue + value;
        setSecondValue(newValue);
        setDisplayValue(newValue);
      }
      // totalValue logic
    } else if (value === "=" && secondValue !== null) {
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
    } else if (value === "C") {
      setTotalValue(null);
      setFirstValue(null);
      setDisplayValue(0);
      setOperatorValue(null);
      setSecondValue(null);
    }
  };

  return (
    <>
    <div className="flex justify-center min-w-max">
    <div className="grid grid-cols-4 gap-3">


      {/* button components */}
      <div className="flex justify-center items-center">
      <button value="1" onClick={buttonHandler} className="box-border h-16 w-16 p-4 border-4 border-gray-800/20 bg-gray-700 text-white font-mono rounded-full">
        1
      </button>
      </div>
      <div className="flex justify-center items-center">
      <button value="2" onClick={buttonHandler} className="box-border h-16 w-16 p-4 border-4 border-gray-800/20 bg-gray-700 text-white font-mono rounded-full">
        2
      </button>
      </div>
      <div className="flex justify-center items-center">
      <button value="3" onClick={buttonHandler} className="box-border h-16 w-16 p-4 border-4 border-gray-800/20 bg-gray-700 text-white font-mono rounded-full">
        3
      </button>
      </div>
      <div className="flex justify-center items-center">
      <button value="+" onClick={buttonHandler} className="box-border h-16 w-16 p-4 border-4 border-orange-500/20 bg-orange-400 text-white font-mono rounded-full">
        +
      </button>
      </div>
      <div className="flex justify-center items-center">
      <button value="4" onClick={buttonHandler} className="box-border h-16 w-16 p-4 border-4 border-gray-800/20 bg-gray-700 text-white font-mono rounded-full">
        4
      </button>
      </div>
      <div className="flex justify-center items-center">
      <button value="5" onClick={buttonHandler} className="box-border h-16 w-16 p-4 border-4 border-gray-800/20 bg-gray-700 text-white font-mono rounded-full">
        5
      </button>
      </div>
      <div className="flex justify-center items-center">
      <button value="6" onClick={buttonHandler} className="box-border h-16 w-16 p-4 border-4 border-gray-800/20 bg-gray-700 text-white font-mono rounded-full">
        6
      </button>
      </div>
      <div className="flex justify-center items-center">
      <button value="-" onClick={buttonHandler} className="box-border h-16 w-16 p-4 border-4 border-orange-500/20 bg-orange-400 text-white font-mono rounded-full">
        -
      </button>
      </div>
      <div className="flex justify-center items-center">
      <button value="7" onClick={buttonHandler} className="box-border h-16 w-16 p-4 border-4 border-gray-800/20 bg-gray-700 text-white font-mono rounded-full">
        7
      </button>
      </div>
      <div className="flex justify-center items-center">
      <button value="8" onClick={buttonHandler} className="box-border h-16 w-16 p-4 border-4 border-gray-800/20 bg-gray-700 text-white font-mono rounded-full">
        8
      </button>
      </div>
      <div className="flex justify-center items-center">
      <button value="9" onClick={buttonHandler} className="box-border h-16 w-16 p-4 border-4 border-gray-800/20 bg-gray-700 text-white font-mono rounded-full">
        9
      </button>
      </div>
      <div className="flex justify-center items-center">
      <button value="*" onClick={buttonHandler} className="box-border h-16 w-16 p-4 border-4 border-orange-500/20 bg-orange-400 text-white font-mono rounded-full">
        *
      </button>
      </div>
      <div className="flex justify-center items-center">
      <button value="C" onClick={buttonHandler} className="box-border h-16 w-16 p-4 border-4 border-slate-500/20 bg-slate-400/90 text-black font-mono rounded-full">
        C
      </button>
      </div>
      <div className="flex justify-center items-center">
      <button value="0" onClick={buttonHandler} className="box-border h-16 w-16 p-4 border-4 border-gray-800/20 bg-gray-700 text-white font-mono rounded-full">
        0
      </button>
      </div>
      <div className="flex justify-center items-center">
      <button value="=" onClick={buttonHandler} className="box-border h-16 w-16 p-4 border-4 border-orange-500/20 bg-orange-400 text-white font-mono rounded-full">
        =
      </button>
      </div>
      <div className="flex justify-center items-center">
      <button value="/" onClick={buttonHandler} className="box-border h-16 w-16 p-4 border-4 border-orange-500/20 bg-orange-400 text-white font-mono rounded-full">
        /
      </button>
      </div>


    </div>
    </div>
    </>
  );
};

export default ButtonHandler;
