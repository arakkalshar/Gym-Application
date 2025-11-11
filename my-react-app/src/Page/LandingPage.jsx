import React from "react";

const LandingPage = () => {
  const styles = {
    body: {
      margin: 0,
      fontFamily: "Arial, Helvetica, sans-serif",
      backgroundColor: "#000",
      color: "#fff",
    },
    header: {
      backgroundColor: "#111",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "15px 30px",
      flexWrap: "wrap",
    },
    logo: {
      height: "50px",
    },
    nav: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
      gap: "15px",
    },
    navLink: {
      color: "#fff",
      textDecoration: "none",
      fontWeight: "bold",
    },
    buttons: {
      display: "flex",
      gap: "10px",
    },
    hero: {
      position: "relative",
      backgroundImage:
        "url('https://images.unsplash.com/photo-1571019613578-2b193e8d04d5?auto=format&fit=crop&w=1400&q=80')",
      backgroundPosition: "center",
      backgroundSize: "cover",
      height: "90vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
    },
    heroContent: {
      backgroundColor: "rgba(0,0,0,0.6)",
      padding: "40px",
      borderRadius: "10px",
      maxWidth: "700px",
    },
    heroTitle: {
      fontSize: "3rem",
      marginBottom: "10px",
    },
    heroText: {
      fontSize: "1.2rem",
      marginBottom: "30px",
    },
    btn: {
      backgroundColor: "#ffd700",
      color: "#000",
      padding: "12px 25px",
      textDecoration: "none",
      borderRadius: "5px",
      fontWeight: "bold",
      border: "none",
      cursor: "pointer",
    },
    btnSecondary: {
      backgroundColor: "transparent",
      border: "2px solid #ffd700",
      color: "#ffd700",
    },
    location: {
      backgroundColor: "#222",
      textAlign: "center",
      padding: "20px",
      fontSize: "1.1rem",
    },
    footer: {
      backgroundColor: "#111",
      textAlign: "center",
      padding: "15px",
      color: "#888",
    },
  };

  return (
    <div style={styles.body}>
      <header style={styles.header}>
        <img
          src="https://upload.wikimedia.org/wikipedia/en/6/60/Gold%27s_Gym_logo.png"
          alt="Gold's Gym Logo"
          style={styles.logo}
        />
        <nav style={styles.nav}>
          <a href="#" style={styles.navLink}>Find a Gym</a>
          <a href="#" style={styles.navLink}>Overview</a>
          <a href="#" style={styles.navLink}>Amenities</a>
          <a href="#" style={styles.navLink}>Photos</a>
          <a href="#" style={styles.navLink}>FAQ</a>
          <a href="#" style={styles.navLink}>Shop</a>
        </nav>
        <div style={styles.buttons}>
          <button style={{ ...styles.btn, ...styles.btnSecondary }}>Free Pass</button>
          <button style={styles.btn}>Join Now</button>
        </div>
      </header>

      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Gold’s Gym Richmond</h1>
          <p style={styles.heroText}>
            Transform your body. Empower your mind. Join the community that inspires strength.
          </p>
          <div style={styles.buttons}>
            <button style={styles.btn}>Join Now</button>
            <button style={{ ...styles.btn, ...styles.btnSecondary }}>Learn More</button>
          </div>
        </div>
      </section>

      <section style={styles.location}>
        📍 8904 West Broad Street, Richmond, VA 23294
      </section>

      <footer style={styles.footer}>
        © 2025 Gold's Gym Richmond. All rights reserved.
      </footer>
    </div>
  );
};

export default LandingPage;
