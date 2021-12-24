import React, { useState } from "react";
import './App.css';

function App() {
  const [result, setResult] = useState("hi");
  return (
    <div className="container">
      <form>
        <input value={result} type="text"/>
        <div className="keypad">
          
        </div>
      </form>
    </div>
  );
}

export default App;
