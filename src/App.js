import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="bg-slate-600 h-screen">
      <div className="bg-slate-500 p-10">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="text-3xl  underline">Hello world!</h1>
      </div>
    </div>
  );
}

export default App;
