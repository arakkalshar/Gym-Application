import React, { useState, useEffect } from "react";

const CURRENT_USER_ID = "member1"; // pretend this is the logged-in user

function WorkoutLog() {
  const [exercise, setExercise] = useState("");
  const [sets, setSets] = useState("");
  const [reps, setReps] = useState("");
  const [weight, setWeight] = useState("");
  const [duration, setDuration] = useState("");
  const [workouts, setWorkouts] = useState([]);

  // 1) LOAD from localStorage when the component first shows
  useEffect(() => {
    const saved = localStorage.getItem("workouts");
    if (saved) {
      const parsed = JSON.parse(saved);
      // keep only workouts for this user
      const userWorkouts = parsed.filter(
        (w) => w.userId === CURRENT_USER_ID
      );
      setWorkouts(userWorkouts);
    }
  }, []);

  // helper: save full list back to localStorage
  const saveToStorage = (newList) => {
    // get everything in storage (all users)
    const saved = localStorage.getItem("workouts");
    let allWorkouts = [];
    if (saved) allWorkouts = JSON.parse(saved);

    // remove old entries for this user
    const others = allWorkouts.filter(
      (w) => w.userId !== CURRENT_USER_ID
    );

    // add the updated list for this user
    const updatedAll = [...others, ...newList];
    localStorage.setItem("workouts", JSON.stringify(updatedAll));
  };

  const handleSave = () => {
    if (!exercise || !sets || !reps) {
      alert("Please fill in at least exercise, sets, and reps.");
      return;
    }

    const newWorkout = {
      id: Date.now(),
      userId: CURRENT_USER_ID,
      date: new Date().toISOString().slice(0, 10), // YYYY-MM-DD
      exercise,
      sets: Number(sets),
      reps: Number(reps),
      weight: Number(weight),
      duration: Number(duration),
    };

    const updatedList = [...workouts, newWorkout];
    setWorkouts(updatedList);
    saveToStorage(updatedList); // 2) SAVE to localStorage

    // clear inputs
    setExercise("");
    setSets("");
    setReps("");
    setWeight("");
    setDuration("");
  };

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "0 auto" }}>
      <h2>Workout Log</h2>

      {/* INPUT FORM */}
      <div style={{ marginBottom: "20px" }}>
        <div>
          <label>Exercise: </label>
          <input
            value={exercise}
            onChange={(e) => setExercise(e.target.value)}
          />
        </div>

        <div>
          <label>Sets: </label>
          <input
            type="number"
            value={sets}
            onChange={(e) => setSets(e.target.value)}
          />
        </div>

        <div>
          <label>Reps: </label>
          <input
            type="number"
            value={reps}
            onChange={(e) => setReps(e.target.value)}
          />
        </div>

        <div>
          <label>Weight (lbs): </label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>

        <div>
          <label>Duration (min): </label>
          <input
            type="number"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
        </div>

        <button onClick={handleSave} style={{ marginTop: "10px" }}>
          Save Workout
        </button>
      </div>

      {/* SUMMARY LIST */}
      <h3>Previous Workouts</h3>
      {workouts.length === 0 && <p>No workouts saved yet.</p>}
      <ul>
        {workouts.map((w) => (
          <li key={w.id}>
            {w.date} – {w.exercise}: {w.sets} sets x {w.reps} reps @{" "}
            {w.weight} lbs, {w.duration} min
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WorkoutLog;
