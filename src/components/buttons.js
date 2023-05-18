import React from "react";

const CalculatorButtons = () => {
    const buttonClickHandler = (e) => {
        console.log(e.target.value)
    }

    return (
        <div>
        <div className="bg-green-400/50 grid grid-cols-4 gap-3">
        {/* <button key={1} value={1} onClick={buttonClickHandler} className="py-2 w-10 flex justify-center bg-green-500">1</button> */}
            <button key={1} value={1} onClick={buttonClickHandler} className="py-2 flex justify-center bg-green-500">1</button>
            <button key={2} value={2} onClick={buttonClickHandler} className="py-2 flex justify-center bg-green-500">2</button>
            <button key={3} value={3} onClick={buttonClickHandler} className="py-2 flex justify-center bg-green-500">3</button>
            <button key={"/"} value={"/"} onClick={buttonClickHandler} className="py-2 flex justify-center bg-green-500">/</button>
            <button key={4} value={4} onClick={buttonClickHandler} className="py-2 flex justify-center bg-green-500">4</button>
            <button key={5} value={5} onClick={buttonClickHandler} className="py-2 flex justify-center bg-green-500">5</button>
            <button key={6} value={6} onClick={buttonClickHandler} className="py-2 flex justify-center bg-green-500">6</button>
            <button key={"x"} value={"x"} onClick={buttonClickHandler} className="py-2 flex justify-center bg-green-500">x</button>
            <button key={7} value={7} onClick={buttonClickHandler} className="py-2 flex justify-center bg-green-500">7</button>
            <button key={8} value={8} onClick={buttonClickHandler} className="py-2 flex justify-center bg-green-500">8</button>
            <button key={9} value={9} onClick={buttonClickHandler} className="py-2 flex justify-center bg-green-500">9</button>
            <button key={"-"} value={"-"} onClick={buttonClickHandler} className="py-2 flex justify-center bg-green-500">-</button>
            <button key={"."} value={"."} onClick={buttonClickHandler} className="py-2 flex justify-center bg-green-500">.</button>
            <button key={0} value={0} onClick={buttonClickHandler} className="py-2 flex justify-center bg-green-500">0</button>
            <button key={"="} value={"="} onClick={buttonClickHandler} className="py-2 flex justify-center bg-green-500">=</button>
            <button key={"+"} value={"+"} onClick={buttonClickHandler} className="py-2 flex justify-center bg-green-500">+</button>
        </div>
        </div>
    );
};

export default CalculatorButtons;
