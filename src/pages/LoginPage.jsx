import React, { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill all fields.");
      return;
    }

    // Mock navigation for PB1
    alert("Login successful (mock). PB1 completed!");
  };

  return (
    <div style={styles.container}>
      <div style={styles.overlay} />

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

          <button type="submit" style={styles.button}>Login</button>

          <p style={styles.forgot}>Forgot password?</p>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    width: "100vw",
    backgroundColor: "#000",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    fontFamily: "'Poppins', sans-serif",
  },

  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    background:
      "radial-gradient(circle at top, rgba(255,215,0,0.15), rgba(0,0,0,0.95))",
    zIndex: 1,
  },

  gymName: {
    position: "absolute",
    top: "10%",
    width: "100%",
    textAlign: "center",
    fontSize: "3rem",
    fontWeight: "700",
    color: "rgba(255, 215, 0, 0.08)",
    letterSpacing: "3px",
    textTransform: "uppercase",
    zIndex: 1,
  },

  card: {
    zIndex: 2,
    backgroundColor: "rgba(20,20,20,0.85)",
    padding: "40px",
    borderRadius: "15px",
    border: "1px solid rgba(255,215,0,0.4)",
    width: "350px",
    boxShadow: "0 0 20px rgba(255,215,0,0.1)",
  },

  title: {
    color: "gold",
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "1.8rem",
    fontWeight: "600",
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
    border: "1px solid rgba(255,215,0,0.3)",
    backgroundColor: "rgba(0,0,0,0.6)",
    color: "white",
    outline: "none",
  },

  button: {
    padding: "12px",
    backgroundColor: "gold",
    color: "black",
    fontWeight: "600",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    marginTop: "10px",
  },

  forgot: {
    color: "rgba(255,255,255,0.6)",
    textAlign: "center",
    marginTop: "15px",
    fontSize: "14px",
  },
};

export default LoginPage;
