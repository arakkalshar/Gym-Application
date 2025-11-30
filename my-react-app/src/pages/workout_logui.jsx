import React, { useState, useEffect } from "react";

function WorkoutLogUI() {
  const [exercise, setExercise] = useState("");
  const [sets, setSets] = useState("");
  const [reps, setReps] = useState("");
  const [weight, setWeight] = useState("");
  const [duration, setDuration] = useState("");
  const [workouts, setWorkouts] = useState([]);

  // Load from localStorage on first render
  useEffect(() => {
    const storedWorkouts = localStorage.getItem("workouts");
    if (storedWorkouts) {
      setWorkouts(JSON.parse(storedWorkouts));
    }
  }, []);

  const handleSaveWorkout = () => {
    if (!exercise || !sets || !reps) {
      alert("Please fill in at least exercise, sets and reps.");
      return;
    }

    const newWorkout = {
      id: Date.now(),
      exercise,
      sets,
      reps,
      weight,
      duration,
      date: new Date().toLocaleDateString(),
    };

    const updatedList = [...workouts, newWorkout];
    setWorkouts(updatedList);
    localStorage.setItem("workouts", JSON.stringify(updatedList));

    setExercise("");
    setSets("");
    setReps("");
    setWeight("");
    setDuration("");
  };

  return (
    <div className="workout-page">
      <div className="workout-card">
        <h1 className="workout-title">Workout Log</h1>
        <p className="workout-subtitle">
          Track your sets, reps, weight and duration each session.
        </p>

        {/* FORM */}
        <div className="workout-form">
          <div className="field">
            <label>Exercise</label>
            <input
              value={exercise}
              onChange={(e) => setExercise(e.target.value)}
              placeholder="Bench Press"
            />
          </div>

          <div className="field-row">
            <div className="field">
              <label>Sets</label>
              <input
                type="number"
                value={sets}
                onChange={(e) => setSets(e.target.value)}
                placeholder="3"
              />
            </div>

            <div className="field">
              <label>Reps</label>
              <input
                type="number"
                value={reps}
                onChange={(e) => setReps(e.target.value)}
                placeholder="10"
              />
            </div>
          </div>

          <div className="field-row">
            <div className="field">
              <label>Weight (lbs)</label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="135"
              />
            </div>

            <div className="field">
              <label>Duration (min)</label>
              <input
                type="number"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                placeholder="45"
              />
            </div>
          </div>

          <button className="primary-btn" onClick={handleSaveWorkout}>
            Save Workout
          </button>
        </div>
      </div>

      {/* LIST */}
      <div className="workout-card workout-list-card">
        <h2 className="section-title">Previous Workouts</h2>

        {workouts.length === 0 && (
          <p className="empty-state">
            No workouts saved yet. Log your first session above 💪
          </p>
        )}

        <ul className="workout-list">
          {workouts.map((w) => (
            <li key={w.id} className="workout-item">
              <div className="workout-item-header">
                <span className="workout-exercise">{w.exercise}</span>
                <span className="workout-date">{w.date || "Saved"}</span>
              </div>
              <div className="workout-details">
                <span>
                  {w.sets} sets × {w.reps} reps
                </span>
                {w.weight && <span>{w.weight} lbs</span>}
                {w.duration && <span>{w.duration} min</span>}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default WorkoutLogUI;
