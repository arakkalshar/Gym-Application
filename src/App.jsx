import React, { useState } from "react";
import ExerciseList from "./ExerciseList.jsx";
import ExerciseDetail from "./ExerciseDetail.jsx";
import "./styles.css";

// REMOVED IMAGE IMPORTS:
import pushup from "./media/pushup.jpg";
import squat from "./media/squat.jpg";
import plank from "./media/plank.jpg";

export default function App() {
  const [selectedExercise, setSelectedExercise] = useState(null);

  const exercises = [
    {
      id: 1,
      name: "Push-Up",
      // Set media to the direct path (relative to App.jsx -> ../ for parent folder)
      media: pushup, 
      description: "A basic chest and tricep exercise."
    },
    {
      id: 2,
      name: "Squat",
      media: squat,
      description: "A lower-body movement for legs and glutes."
    },
    {
      id: 3,
      name: "Plank",
      media: plank,
      description: "A core exercise for stability."
    }
  ];

  return (
    <div className="container">
      {!selectedExercise ? (
        <ExerciseList
          exercises={exercises}
          onSelect={setSelectedExercise}
        />
      ) : (
        <ExerciseDetail
          exercise={selectedExercise}
          onBack={() => setSelectedExercise(null)}
        />
      )}
    </div>
  );
}