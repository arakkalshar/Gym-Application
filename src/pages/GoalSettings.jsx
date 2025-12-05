import React, { useState, useEffect } from "react";

// Theme Colors
const colors = {
  bg: "#0B0B0B",
  card: "#111111",
  border: "#2D2D2D",
  gold: "#C5A034",
  white: "#F5F5F5",
};

// Styles
const styles = {
  app: {
    minHeight: "100vh",
    background: colors.bg,
    color: colors.white,
    fontFamily: "'Poppins', sans-serif",
    padding: "40px 60px",
  },
  title: {
    fontFamily: "'Playfair Display', serif",
    fontWeight: 800,
    fontSize: "36px",
    color: colors.gold,
    textAlign: "center",
    marginBottom: "30px",
  },
  formCard: {
    background: colors.card,
    border: `1px solid ${colors.border}`,
    padding: "20px",
    borderRadius: "12px",
    display: "flex",
    gap: "14px",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 35px auto",
    maxWidth: "900px",
  },
  input: {
    flex: 1,
    minWidth: "160px",
    padding: "12px",
    background: "#161616",
    border: `1px solid ${colors.border}`,
    borderRadius: "8px",
    color: colors.white,
    fontSize: "14px",
  },
  button: {
    background: colors.gold,
    border: "none",
    padding: "12px 22px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "700",
    color: "#000",
    fontSize: "14px",
  },
  cardWrapper: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  goalCard: {
    width: "100%",
    maxWidth: "900px",
    background: colors.card,
    border: `1px solid ${colors.border}`,
    borderRadius: "12px",
    padding: "24px",
    marginBottom: "22px",
    position: "relative",
  },
  deleteBtn: {
    position: "absolute",
    top: "10px",
    right: "12px",
    background: "transparent",
    border: "none",
    color: colors.gold,
    fontWeight: "900",
    fontSize: "18px",
    cursor: "pointer",
  },
  progressBar: {
    marginTop: "14px",
    height: "8px",
    background: "#222",
    borderRadius: "4px",
    width: "100%",
  },
  progressFill: (p) => ({
    width: `${p}%`,
    height: "100%",
    background: colors.gold,
  }),
};

const GoalSettings = () => {
  const [goals, setGoals] = useState(() => {
    const saved = localStorage.getItem("goals");
    return saved ? JSON.parse(saved) : [];
  });

  const [form, setForm] = useState({
    id: null,
    title: "",
    target: "",
    deadline: "",
  });

  const [editing, setEditing] = useState(false);

  useEffect(() => {
    localStorage.setItem("goals", JSON.stringify(goals));
  }, [goals]);

  const calculateProgress = (goal) => {
    const current = Math.min(Math.floor(Math.random() * goal.target), goal.target);
    return Math.floor((current / goal.target) * 100);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.target || !form.deadline) return;

    if (editing) {
      setGoals(goals.map((g) => (g.id === form.id ? { ...form } : g)));
    } else {
      setGoals([...goals, { ...form, id: Date.now() }]);
    }

    setForm({ id: null, title: "", target: "", deadline: "" });
    setEditing(false);
  };

  const removeGoal = (id) => {
    setGoals(goals.filter((g) => g.id !== id));
  };

  return (
    <div style={styles.app}>
      <h2 style={styles.title}>Goal Dashboard</h2>

      <form style={styles.formCard} onSubmit={handleSubmit}>
        <input
          name="title"
          placeholder="Goal Title"
          style={styles.input}
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
        <input
          name="target"
          placeholder="Target"
          type="number"
          style={styles.input}
          value={form.target}
          onChange={(e) => setForm({ ...form, target: e.target.value })}
        />
        <input
          name="deadline"
          type="date"
          style={styles.input}
          value={form.deadline}
          onChange={(e) => setForm({ ...form, deadline: e.target.value })}
        />
        <button type="submit" style={styles.button}>
          {editing ? "Update" : "Add"}
        </button>
      </form>

      {goals.length > 0 &&
        goals.map((goal) => {
          const progress = calculateProgress(goal);
          return (
            <div key={goal.id} style={styles.cardWrapper}>
              <div style={styles.goalCard}>
                <button style={styles.deleteBtn} onClick={() => removeGoal(goal.id)}>
                  ✕
                </button>

                <h4 style={{ marginBottom: "8px" }}>{goal.title}</h4>
                <p>🎯 {goal.target}</p>
                <p>📅 {goal.deadline}</p>

                <div style={styles.progressBar}>
                  <div style={styles.progressFill(progress)}></div>
                </div>

                <p style={{ marginTop: "6px" }}>{progress}% Complete</p>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default GoalSettings;
