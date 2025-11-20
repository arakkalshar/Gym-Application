import React from "react";

export default function ExerciseList({ exercises, onSelect }) {
  return (
    <div>
      <h2>Your Workout</h2>

      <ul className="exercise-list">
        {exercises.map((exercise) => (
          <li
            key={exercise.id}
            className="exercise-item"
            onClick={() => onSelect(exercise)}
          >
            {exercise.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
