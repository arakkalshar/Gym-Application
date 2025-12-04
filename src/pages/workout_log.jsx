import React, { useState } from "react";
import "../App.css"; // or another css file where you’ll paste the styles below

const WorkoutLog = () => {
  // --- form state ---
  const [exercise, setExercise] = useState("");
  const [sets, setSets] = useState("");
  const [reps, setReps] = useState("");
  const [weight, setWeight] = useState("");
  const [duration, setDuration] = useState("");

  // --- list of logged workouts (in memory for now; later you can connect SQL) ---
  const [workouts, setWorkouts] = useState([]);

  const resetForm = () => {
    setExercise("");
    setSets("");
    setReps("");
    setWeight("");
    setDuration("");
  };

  const handleSave = (e) => {
    e.preventDefault();

    // simple validation – acceptance criteria “correct user enters data”
    if (!exercise || !sets || !reps) {
      alert("Please fill in exercise, sets and reps.");
      return;
    }

    const newWorkout = {
      id: Date.now(),
      exercise,
      sets: Number(sets),
      reps: Number(reps),
      weight: weight ? Number(weight) : null,
      duration: duration ? Number(duration) : null,
      date: new Date().toLocaleDateString(),
    };

    setWorkouts((prev) => [...prev, newWorkout]);
    resetForm();
  };

  // --- summary (helps client see progress) ---
  const totalWorkouts = workouts.length;
  const totalSets = workouts.reduce((sum, w) => sum + (w.sets || 0), 0);
  const totalReps = workouts.reduce((sum, w) => sum + (w.sets || 0) * (w.reps || 0), 0);

  return (
    <div className="workout-page">
      <div className="workout-card">
        <h1 className="workout-title">Workout Log</h1>
        <p className="workout-subtitle">
          Log your sets, reps, weight and duration for each session to monitor your
          progress over time.
        </p>

        {/* FORM */}
        <form className="workout-form" onSubmit={handleSave}>
          <div className="field">
            <label>Exercise</label>
            <input
              type="text"
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
                min="1"
                value={sets}
                onChange={(e) => setSets(e.target.value)}
                placeholder="3"
              />
            </div>

            <div className="field">
              <label>Reps</label>
              <input
                type="number"
                min="1"
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
                min="0"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="135"
              />
            </div>

            <div className="field">
              <label>Duration (min)</label>
              <input
                type="number"
                min="0"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                placeholder="45"
              />
            </div>
          </div>

          <button type="submit" className="primary-btn">
            Save Workout
          </button>
        </form>
      </div>

      {/* SUMMARY + LIST */}
      <div className="workout-card workout-list-card">
        <h2 className="section-title">Summary</h2>
        {totalWorkouts === 0 ? (
          <p className="empty-state">
            No workouts logged yet. Add your first session above 💪
          </p>
        ) : (
          <div className="summary-row">
            <div>
              <span className="summary-label">Total workouts:</span>
              <span className="summary-value">{totalWorkouts}</span>
            </div>
            <div>
              <span className="summary-label">Total sets:</span>
              <span className="summary-value">{totalSets}</span>
            </div>
            <div>
              <span className="summary-label">Estimated total reps:</span>
              <span className="summary-value">{totalReps}</span>
            </div>
          </div>
        )}

        <h2 className="section-title" style={{ marginTop: "24px" }}>
          Previous Workouts
        </h2>

        <ul className="workout-list">
          {workouts.map((w) => (
            <li key={w.id} className="workout-item">
              <div className="workout-item-header">
                <span className="workout-exercise">{w.exercise}</span>
                <span className="workout-date">{w.date}</span>
              </div>
              <div className="workout-details">
                <span>
                  {w.sets} sets × {w.reps} reps
                </span>
                {w.weight !== null && <span>{w.weight} lbs</span>}
                {w.duration !== null && <span>{w.duration} min</span>}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WorkoutLog;
