import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import LoginPage from "./pages/LoginPage";
import OwnerHome from "./pages/OwnerHome";
import ProgressDashboard from "./pages/ProgressDashboard";
import WorkoutLog from "./pages/workout_log";
import GoalSettings from "./pages/GoalSettings"


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<OwnerHome />} />
        <Route path="/progress" element={<ProgressDashboard />} />
        <Route path="/workout-log" element={<WorkoutLog />} />
        <Route path="/goal-settings" element={<GoalSettings />} />
      </Routes>
    </Router>
  );
}
