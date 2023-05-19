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
      {/* button components */}
      <button value="1" onClick={buttonHandler} className="p-5 bg-white mr-2">
        1
      </button>
      <button value="2" onClick={buttonHandler} className="p-5 bg-white mr-2">
        2
      </button>
      <button value="3" onClick={buttonHandler} className="p-5 bg-white mr-2">
        3
      </button>
      <button value="4" onClick={buttonHandler} className="p-5 bg-white mr-2">
        4
      </button>
      <button value="5" onClick={buttonHandler} className="p-5 bg-white mr-2">
        5
      </button>
      <button value="6" onClick={buttonHandler} className="p-5 bg-white mr-2">
        6
      </button>
      <button value="7" onClick={buttonHandler} className="p-5 bg-white mr-2">
        7
      </button>
      <button value="8" onClick={buttonHandler} className="p-5 bg-white mr-2">
        8
      </button>
      <button value="9" onClick={buttonHandler} className="p-5 bg-white mr-2">
        9
      </button>
      <button value="0" onClick={buttonHandler} className="p-5 bg-white mr-2">
        0
      </button>
      <button value="+" onClick={buttonHandler} className="p-5 bg-yellow-300 mr-2">
        +
      </button>
      <button value="-" onClick={buttonHandler} className="p-5 bg-yellow-300 mr-2">
        -
      </button>
      <button value="*" onClick={buttonHandler} className="p-5 bg-yellow-300 mr-2">
        *
      </button>
      <button value="/" onClick={buttonHandler} className="p-5 bg-yellow-300 mr-2">
        /
      </button>
      <button value="=" onClick={buttonHandler} className="p-5 bg-yellow-300 mr-2">
        =
      </button>
      <button value="C" onClick={buttonHandler} className="p-5 bg-yellow-300 mr-2">
        C
      </button>
    </>
  );
};

export default ButtonHandler;
