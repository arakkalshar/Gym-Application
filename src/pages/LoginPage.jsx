// LoginPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill all fields.");
      return;
    }

    if (email === "owner@gym.com" && password === "password123") {
      navigate("/home");
    } else {
      alert("Invalid credentials.");
    }
  };

  return (
    <div style={styles.wrapper}> 

      {/* LEFT SIDE WORKOUT IMAGE */}
      <div style={styles.leftImage}>
        <div style={styles.imageOverlay} />
        <h1 style={styles.sideTitle}>TRAIN HARD</h1>
        <h3 style={styles.sideSubtitle}>Aurelius Performance Gym</h3>
      </div>

      {/* RIGHT SIDE LOGIN CARD */}
      <div style={styles.rightSide}>
        <h1 style={styles.gymName}>Aurelius Performance</h1>

        <div style={styles.card}>
          <h2 style={styles.title}>Login</h2>

          <form onSubmit={handleLogin} style={styles.form}>
            <label style={styles.label}>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              style={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label style={styles.label}>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              style={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit" style={styles.button}>
              Login
            </button>

            <p style={styles.forgot}>Forgot password?</p>
          </form>
        </div>
      </div>

    </div>
  );
};

const styles = {
  wrapper: {
    display: "flex",
    height: "100vh",
    width: "100vw",
    backgroundColor: "#000",
    fontFamily: "'Poppins', sans-serif",
  },

  // LEFT IMAGE AREA
  leftImage: {
    flex: 1,
    backgroundImage:
      "url('https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1600')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
  },

  imageOverlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.9))",
  },

  sideTitle: {
    position: "absolute",
    bottom: "150px",
    left: "40px",
    color: "gold",
    fontSize: "3rem",
    fontWeight: "800",
    letterSpacing: "3px",
  },

  sideSubtitle: {
    position: "absolute",
    bottom: "120px",
    left: "40px",
    color: "rgba(255,255,255,0.8)",
    fontSize: "1.2rem",
  },

  // RIGHT LOGIN AREA
  rightSide: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    padding: "20px",
  },

  gymName: {
    position: "absolute",
    top: "10%",
    fontSize: "2.5rem",
    fontWeight: 700,
    color: "rgba(255, 215, 0, 0.3)",
    textTransform: "uppercase",
    letterSpacing: "4px",
  },

  card: {
    zIndex: 2,
    backgroundColor: "rgba(20,20,20,0.85)",
    padding: "40px",
    borderRadius: "15px",
    border: "1px solid rgba(255,215,0,0.4)",
    width: "380px",
    boxShadow: "0 0 20px rgba(255,215,0,0.15)",
  },

  title: {
    color: "gold",
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "1.8rem",
  },

  form: {
    display: "flex",
    flexDirection: "column",
  },

  label: {
    color: "white",
    marginBottom: "5px",
  },

  input: {
    padding: "12px",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "1px solid rgba(255,215,0,0.4)",
    backgroundColor: "rgba(0,0,0,0.6)",
    color: "white",
  },

  button: {
    padding: "12px",
    backgroundColor: "gold",
    color: "black",
    fontWeight: "600",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },

  forgot: {
    textAlign: "center",
    marginTop: "15px",
    color: "rgba(255,255,255,0.6)",
  },
};

export default LoginPage;
