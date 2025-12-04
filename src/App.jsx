import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import LoginPage from "./pages/LoginPage";
import OwnerHome from "./pages/OwnerHome";
import ProgressDashboard from "./pages/ProgressDashboard";
import WorkoutLog from "./pages/workout_log";
import HRVRecovery from "./pages/hrv_recovery";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<OwnerHome />} />
        <Route path="/progress" element={<ProgressDashboard />} />
        <Route path="/hrv-recovery" element={<HRVRecovery />} />
      </Routes>
    </Router>
  );
}
