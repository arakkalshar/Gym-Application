import React from "react";
import "./App.css";
import WorkoutLogUI from "./workout_logui.jsx";  // ⬅ no angle brackets here

function App() {
  return (
    <div className="App">   {/* ⬅ className must be a string */}
      <WorkoutLogUI />
    </div>
  );
}

export default App;
