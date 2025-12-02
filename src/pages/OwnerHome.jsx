// src/pages/OwnerHome.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const OwnerHome = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <div style={styles.overlay} />

      <header style={styles.header}>
        <h1 style={styles.logo}>Aurelius Performance</h1>
        <p style={styles.subtitle}>Owner Dashboard</p>
      </header>

      <main style={styles.grid}>
        {/* Card 1: Progress Tracking */}
        <div
          style={{ ...styles.card, ...styles.clickable }}
          onClick={() => navigate("/progress")}
        >
          <div
            style={{
              ...styles.image,
              backgroundImage:
                "url('https://images.pexels.com/photos/1552103/pexels-photo-1552103.jpeg?auto=compress&cs=tinysrgb&w=800')",
            }}
          />
          <div style={styles.cardBody}>
            <h2 style={styles.cardTitle}>Progress Tracking</h2>
            <p style={styles.cardText}>
              View client performance, track workouts over time, and monitor
              consistency with visual dashboards.
            </p>
          </div>
        </div>

        {/* Card 2: Workout Models */}
        <div style={styles.card}>
          <div
            style={{
              ...styles.image,
              backgroundImage:
                "url('https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg?auto=compress&cs=tinysrgb&w=800')",
            }}
          />
          <div style={styles.cardBody}>
            <h2 style={styles.cardTitle}>Workout Models</h2>
            <p style={styles.cardText}>
              Create, edit, and assign structured workout templates tailored to
              different goals and training phases.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    width: "100vw",
    backgroundColor: "#000",
    color: "#fff",
    padding: "40px 20px",
    boxSizing: "border-box",
    position: "relative",
    fontFamily: "'Poppins', sans-serif",
  },
  overlay: {
    position: "absolute",
    inset: 0,
    background:
      "radial-gradient(circle at top, rgba(255,215,0,0.12), rgba(0,0,0,0.98))",
    zIndex: 0,
  },
  header: {
    position: "relative",
    zIndex: 1,
    maxWidth: "1100px",
    margin: "0 auto 30px auto",
  },
  logo: {
    fontSize: "2.4rem",
    fontWeight: 700,
    letterSpacing: "4px",
    textTransform: "uppercase",
    color: "gold",
    margin: 0,
  },
  subtitle: {
    marginTop: "6px",
    color: "rgba(255,255,255,0.7)",
    fontSize: "0.95rem",
  },
  grid: {
    position: "relative",
    zIndex: 1,
    maxWidth: "1100px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "24px",
  },
  card: {
    background:
      "linear-gradient(145deg, rgba(15,15,15,0.95), rgba(35,35,35,0.95))",
    borderRadius: "18px",
    overflow: "hidden",
    border: "1px solid rgba(255,215,0,0.5)",
    boxShadow: "0 0 25px rgba(0,0,0,0.7)",
    display: "flex",
    flexDirection: "column",
    transition: "transform 0.2s ease, boxShadow 0.2s ease",
  },
  clickable: {
    cursor: "pointer",
  },
  image: {
    height: "180px",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  cardBody: {
    padding: "18px 20px 22px 20px",
  },
  cardTitle: {
    margin: 0,
    marginBottom: "8px",
    fontSize: "1.2rem",
    color: "gold",
  },
  cardText: {
    margin: 0,
    fontSize: "0.95rem",
    color: "rgba(255,255,255,0.75)",
    lineHeight: 1.5,
  },
};

export default OwnerHome;
