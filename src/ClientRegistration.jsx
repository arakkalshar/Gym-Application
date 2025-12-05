import React, { useState, useEffect } from "react";

export default function ClientRegistration() {
  const [form, setForm] = useState({
    name: "",
    age: "",
    injuries: "",
    goals: ""
  });

  const [message, setMessage] = useState("");
  const [clients, setClients] = useState([]);

  // Load previously saved clients from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("clients")) || [];
    setClients(saved);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newClient = { id: Date.now(), ...form };
    const updatedClients = [...clients, newClient];

    // Save to localStorage
    localStorage.setItem("clients", JSON.stringify(updatedClients));

    setClients(updatedClients);
    setMessage("Client registered successfully!");

    // Reset form
    setForm({ name: "", age: "", injuries: "", goals: "" });

    // Remove message after 2 seconds
    setTimeout(() => setMessage(""), 2000);
  };

  return (
    <div style={{ maxWidth: "500px", margin: "auto", padding: "20px" }}>
      <h2>Client Registration</h2>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <input
          name="name"
          placeholder="Client Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          name="age"
          placeholder="Age"
          type="number"
          value={form.age}
          onChange={handleChange}
          required
        />

        <input
          name="injuries"
          placeholder="Injuries (optional)"
          value={form.injuries}
          onChange={handleChange}
        />

        <input
          name="goals"
          placeholder="Fitness Goals"
          value={form.goals}
          onChange={handleChange}
          required
        />

        <button type="submit">Register Client</button>
      </form>

      {message && <p style={{ color: "green" }}>{message}</p>}

      <h3>Registered Clients</h3>
      <ul>
        {clients.map((c) => (
          <li key={c.id}>
            <strong>{c.name}</strong> — Goals: {c.goals}
          </li>
        ))}
      </ul>
    </div>
  );
}

