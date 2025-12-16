// src/pages/OwnerHome.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import MotivationCard from "../pages/MotivationCard";
import WorkoutSuggestionCard from "../pages/WorkoutSuggestionCard";

const OwnerHome = () => {
  const navigate = useNavigate();

  // sample handler when Assign is clicked — replace with real logic later
  const handleAssign = (suggestion) => {
    // you can show a modal to pick client or call API
    alert(`Assigned '${suggestion.title}' (hook this to your assign flow).`);
  };

  return (
    <div style={styles.container}>
      <div style={styles.overlay} />

      <header style={styles.header}>
        <h1 style={styles.logo}>Aurelius Performance</h1>
        <p style={styles.subtitle}>Owner Dashboard</p>
      </header>

      <main style={styles.grid}>
        {/* Left column: Hero cards */}
        <div style={{ display: "grid", gap: 24 }}>
          <div
            style={{ ...styles.card, ...styles.clickable }}
            onClick={() => navigate("/progress")}
            title="Go to Progress Dashboard"
          >
            <div
              style={{
                ...styles.image,
                backgroundImage:
                  "url('https://images.pexels.com/photos/1552103/pexels-photo-1552103.jpeg?auto=compress&cs=tinysrgb&w=1200')",
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

          <div style={styles.card}>
            <div
              style={{
                ...styles.image,
                backgroundImage:
                  "url('https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg?auto=compress&cs=tinysrgb&w=1200')",
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
        </div>

        {/* Right column: separate component cards */}
        <aside style={{ display: "grid", gap: 24 }}>
          <MotivationCard />
          <WorkoutSuggestionCard onAssign={handleAssign} />
          <div style={styles.card}>
            <div
              style={{
                ...styles.image,
                backgroundImage:
                  "url('https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1200')",
              }}
            />
            <div style={styles.cardBody}>
              <h2 style={styles.cardTitle}>Quick Admin</h2>
              <p style={styles.cardText}>
                Add a client, post an announcement, or check today’s class
                attendance. (Hook these to your admin flows.)
              </p>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
};

/* styling (keeps your existing theme) */
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
      "radial-gradient(circle at top, rgba(255,215,0,0.06), rgba(0,0,0,0.98))",
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
    gridTemplateColumns: "1fr 360px",
    gap: "24px",
    alignItems: "start",
  },
  card: {
    background:
      "linear-gradient(145deg, rgba(15,15,15,0.95), rgba(35,35,35,0.95))",
    borderRadius: "14px",
    overflow: "hidden",
    border: "1px solid rgba(255,215,0,0.18)",
    boxShadow: "0 8px 30px rgba(0,0,0,0.6)",
    display: "flex",
    flexDirection: "column",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  },
  clickable: {
    cursor: "pointer",
  },
  image: {
    height: "180px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    filter: "saturate(0.95) contrast(1.02)",
  },
  cardBody: {
    padding: "16px 18px",
  },
  cardTitle: {
    margin: 0,
    marginBottom: "6px",
    fontSize: "1.2rem",
    color: "gold",
  },
  cardText: {
    margin: 0,
    fontSize: "0.95rem",
    color: "rgba(255,255,255,0.78)",
    lineHeight: 1.45,
  }
};

export default OwnerHome;
