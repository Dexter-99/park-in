import React from "react";
import "./App.css";
import Parking from "./components/layouts/Parking";
function App() {
  return (
    <div className="App" style={{ background: "#333", height: "inherit" }}>
      <h1 className="bg-light text-success text-center">
        <i class="fas fa-car-side"></i>PARK-IN
      </h1>
      <Parking />
    </div>
  );
}

export default App;
