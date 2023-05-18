import "./App.css";
import Header from "./components/header.js";
import React from "react";
import CalculatorButtons from "./components/buttons";

function App() {
  return (
    <div className="bg-slate-600 h-screen">
      <Header />
      <CalculatorButtons />
    </div>
  );
}

export default App;
