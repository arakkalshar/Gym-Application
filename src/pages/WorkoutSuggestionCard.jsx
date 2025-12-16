// src/components/WorkoutSuggestionCard.jsx
import React, { useEffect, useState } from "react";

const SUGGESTIONS = [
  {
    id: "full_body",
    title: "Full Body Strength",
    desc: "Compound focused — squat, press, row. 45–60 min.",
    img: "https://images.pexels.com/photos/2261485/pexels-photo-2261485.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },
  {
    id: "upper",
    title: "Upper Body Strength",
    desc: "Chest / Back / Shoulders emphasis. 40 min.",
    img: "https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },
  {
    id: "lower",
    title: "Lower Body Power",
    desc: "Squat & deadlift variants. 45 min.",
    img: "https://images.pexels.com/photos/669576/pexels-photo-669576.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },
  {
    id: "hiit",
    title: "HIIT Circuit",
    desc: "20 min high-intensity circuit — great for fat loss.",
    img: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },
  {
    id: "recovery",
    title: "Active Recovery",
    desc: "Mobility & light cardio. 20–30 min.",
    img: "https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&w=1200"
  }
];

export default function WorkoutSuggestionCard({ onAssign }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(Math.floor(Math.random() * SUGGESTIONS.length));
  }, []);

  const s = SUGGESTIONS[index];

  return (
    <div style={styles.card}>
      <div
        style={{
          height: 140,
          backgroundImage:
            `linear-gradient(180deg, rgba(0,0,0,0.18), rgba(0,0,0,0.55)), url('${s.img}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderTopLeftRadius: 14,
          borderTopRightRadius: 14,
        }}
      />

      <div style={styles.body}>
        <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
          <div style={{ flex: 1 }}>
            <h3 style={styles.title}>{s.title}</h3>
            <p style={styles.desc}>{s.desc}</p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <button
              style={styles.primaryBtn}
              onClick={() => {
                if (typeof onAssign === "function") onAssign(s);
                else alert(`Assigning: ${s.title}`);
              }}
            >
              Assign
            </button>

            <button style={styles.ghostBtn} onClick={() => setIndex((p) => (p + 1) % SUGGESTIONS.length)}>
              Shuffle
            </button>
          </div>
        </div>

        <small style={{ color: "rgba(255,255,255,0.62)", marginTop: 10, display: "block" }}>
          Suggested by Smart Recommender — quick template.
        </small>
      </div>
    </div>
  );
}

/* styles */
const styles = {
  card: {
    background:
      "linear-gradient(145deg, rgba(15,15,15,0.96), rgba(35,35,35,0.96))",
    borderRadius: 14,
    overflow: "hidden",
    border: "1px solid rgba(255,215,0,0.12)",
    boxShadow: "0 8px 20px rgba(0,0,0,0.6)",
    color: "#fff",
  },
  body: {
    padding: 14,
  },
  title: {
    margin: 0,
    color: "gold",
    fontSize: "1.05rem",
  },
  desc: {
    margin: "8px 0 0 0",
    fontSize: 0.95 + "rem",
    color: "rgba(255,255,255,0.82)",
    lineHeight: 1.4,
  },
  primaryBtn: {
    background:
      "linear-gradient(90deg, rgba(255,215,0,0.98), rgba(220,180,0,0.9))",
    border: "none",
    color: "#000",
    padding: "8px 12px",
    borderRadius: 8,
    fontWeight: 600,
    cursor: "pointer",
  },
  ghostBtn: {
    background: "transparent",
    border: "1px solid rgba(255,255,255,0.08)",
    color: "rgba(255,255,255,0.9)",
    padding: "8px 10px",
    borderRadius: 8,
    cursor: "pointer",
    fontWeight: 600,
  }
};
