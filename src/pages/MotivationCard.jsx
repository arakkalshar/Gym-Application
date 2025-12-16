// src/components/MotivationCard.jsx
import React, { useEffect, useState } from "react";

export default function MotivationCard({ initialQuotes } = {}) {
  const defaultQuotes = [
    "Push yourself, because no one else will.",
    "Success starts with self-discipline.",
    "One workout at a time.",
    "Stronger than yesterday.",
    "Wake up. Work out. Look good. Repeat.",
    "Small steps every day lead to big changes.",
    "Consistency beats intensity — keep going."
  ];

  const quotes = initialQuotes && initialQuotes.length ? initialQuotes : defaultQuotes;
  const [quote, setQuote] = useState("");

  useEffect(() => {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }, [quotes]);

  return (
    <div style={styles.card}>
      <div style={styles.headerStrip}>
        <h3 style={styles.headerTitle}>Daily Motivation</h3>
      </div>

      <div style={styles.body}>
        <p style={styles.quote}>“{quote}”</p>

        <div style={styles.controls}>
          <button
            style={styles.primaryBtn}
            onClick={() => setQuote(quotes[Math.floor(Math.random() * quotes.length)])}
          >
            New Quote
          </button>

          <button
            style={styles.ghostBtn}
            onClick={() => {
              if (navigator.clipboard) navigator.clipboard.writeText(quote);
              else alert("Quote copied: " + quote);
            }}
            title="Copy quote"
          >
            Copy
          </button>
        </div>
      </div>
    </div>
  );
}

/* local styles (keeps black & gold theme consistent) */
const styles = {
  card: {
    background:
      "linear-gradient(145deg, rgba(15,15,15,0.95), rgba(35,35,35,0.95))",
    borderRadius: 14,
    overflow: "hidden",
    border: "1px solid rgba(255,215,0,0.12)",
    boxShadow: "0 8px 20px rgba(0,0,0,0.6)",
    color: "#fff",
  },
  headerStrip: {
    padding: 12,
    background: "linear-gradient(90deg, rgba(255,215,0,0.06), rgba(0,0,0,0.06))",
    display: "flex",
    alignItems: "center",
  },
  headerTitle: {
    margin: 0,
    color: "gold",
    fontSize: "1rem",
    letterSpacing: 1,
  },
  body: {
    padding: 16,
  },
  quote: {
    margin: 0,
    fontStyle: "italic",
    color: "rgba(255,255,255,0.9)",
    fontSize: 16,
    lineHeight: 1.4,
  },
  controls: {
    marginTop: 12,
    display: "flex",
    gap: 8,
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
