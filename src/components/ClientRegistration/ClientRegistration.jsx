import React, { useState } from "react";
import "./ClientRegistration.css";

const ClientRegistration = () => {
  const [client, setClient] = useState({
    name: "",
    age: "",
    injuries: "",
    goals: "",
    hrv: "",
  });

  const handleChange = (e) => {
    setClient({ ...client, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Client Registered:", client);
    alert("Client Registered Successfully!");
  };

  return (
    <div className="registration-container">
      <h2>Client Registration & Assessment</h2>

      <form onSubmit={handleSubmit} className="registration-form">
        <label>Name:</label>
        <input type="text" name="name" value={client.name} onChange={handleChange} required />

        <label>Age:</label>
        <input type="number" name="age" value={client.age} onChange={handleChange} required />

        <label>Injuries / Medical Conditions:</label>
        <input type="text" name="injuries" value={client.injuries} onChange={handleChange} />

        <label>Fitness Goals:</label>
        <input type="text" name="goals" value={client.goals} onChange={handleChange} required />

        <label>HRV Baseline (if available):</label>
        <input type="number" name="hrv" value={client.hrv} onChange={handleChange} />

        <button type="submit">Register Client</button>
      </form>
    </div>
  );
};

export default ClientRegistration;
