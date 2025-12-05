import React, { useState } from "react";

import ExerciseList from "./ExerciseList.jsx";
import ExerciseDetail from "./ExerciseDetail.jsx";
import ClientRegistration from "./ClientRegistration.jsx";   // ✅ Added

import "./styles.css";

import pushup from "./media/pushup.jpg";
import squat from "./media/squat.jpg";
import plank from "./media/plank.jpg";

export default function App() {
  const [page, setPage] = useState("exercises"); 
  const [selectedExercise, setSelectedExercise] = useState(null);

  const exercises = [
    {
      id: 1,
      name: "Push-Up",
      type: "photo",
      media: pushup,
      description: "A basic chest and tricep exercise."
    },
    {
      id: 2,
      name: "Squat",
      type: "photo",
      media: squat,
      description: "A lower-body movement for legs and glutes."
    },
    {
      id: 3,
      name: "Plank",
      type: "photo",
      media: plank,
      description: "A core exercise for stability."
    }
  ];

  return (
    <div className="container">

      {/* ----------- NAV BAR ----------- */}
      <div className="navbar">
        <button onClick={() => { setPage("exercises"); setSelectedExercise(null); }}>
          Exercises
        </button>

        <button onClick={() => setPage("clients")}>
          Register Clients
        </button>
      </div>
      {/* -------------------------------- */}

      {/* ----------- PAGE ROUTING ----------- */}
      {page === "clients" ? (
        <ClientRegistration />
      ) : !selectedExercise ? (
        <ExerciseList exercises={exercises} onSelect={setSelectedExercise} />
      ) : (
        <ExerciseDetail 
          exercise={selectedExercise} 
          onBack={() => setSelectedExercise(null)} 
        />
      )}
      {/* ------------------------------------ */}

    </div>
  );
}
