import React from "react";

export default function ExerciseDetail({ exercise, onBack }) {
  return (
    <div>
      <button className="back-btn" onClick={onBack}>
        ⬅ Back to Workout
      </button>

      <h2>{exercise.name}</h2>
      <p>{exercise.description}</p>

      {/* Renders the image directly since all exercises are now photos */}
      <img
        src={exercise.media}
        alt={exercise.name}
        className="exercise-media"
      />
    </div>
  );
}