import React, { useState } from "react";
import "./hrv_recovery.jsx"; // styles are in the next section

// Helper: decide recovery status + suggested intensity from score
function evaluateRecovery(score) {
  if (score >= 80) {
    return {
      status: "Good",
      color: "green",
      suggestedIntensity: "High intensity",
      message: "Your recovery looks strong. You can push harder today."
    };
  }
  if (score >= 50) {
    return {
      status: "Moderate",
      color: "yellow",
      suggestedIntensity: "Moderate intensity",
      message: "You are ok to train, but avoid going all–out."
    };
  }
  return {
    status: "Low",
    color: "red",
    suggestedIntensity: "Low intensity / recovery day",
    message: "Your recovery is low. Focus on light work or active recovery."
  };
}

const HRVRecovery = () => {
  // --- connection state ---
  const [isConnected, setIsConnected] = useState(false);
  const [deviceName, setDeviceName] = useState("No device connected");
  const [lastSync, setLastSync] = useState(null);

  // --- HRV & recovery metrics ---
  const [hrvMs, setHrvMs] = useState(null);          // HRV in milliseconds
  const [recoveryScore, setRecoveryScore] = useState(null); // 0 – 100

  // derived info based on score
  const [recoveryStatus, setRecoveryStatus] = useState(null);
  const [indicatorColor, setIndicatorColor] = useState("gray");
  const [suggestedIntensity, setSuggestedIntensity] = useState(null);

  // manual override of workout intensity
  const [manualIntensity, setManualIntensity] = useState("");

  // Simulated "pair tracker" / connect handler
  const handleConnectTracker = () => {
    // In a real app, here you would:
    // 1. Call your backend or tracker SDK
    // 2. Read HRV & recovery values from the device
    // For class/demo we just simulate values.
    const simulatedDevice = "Simulated Tracker (Whoop / Garmin / Apple)";
    const simulatedHRV = 83;          // ms
    const simulatedRecovery = 85;     // /100

    const evaluation = evaluateRecovery(simulatedRecovery);

    setIsConnected(true);
    setDeviceName(simulatedDevice);
    setLastSync(new Date().toLocaleTimeString());

    setHrvMs(simulatedHRV);
    setRecoveryScore(simulatedRecovery);
    setRecoveryStatus(evaluation.status);
    setIndicatorColor(evaluation.color);
    setSuggestedIntensity(evaluation.suggestedIntensity);

    // reset any manual override when new data comes in
    setManualIntensity("");
  };

  const plannedIntensity = manualIntensity || suggestedIntensity || "Not set";

  return (
    <div className="hrv-page">
      <div className="hrv-card">
        <h1 className="hrv-title">HRV &amp; Recovery Integration</h1>
        <p className="hrv-subtitle">
          Connect your fitness tracker to view today&apos;s recovery and adjust
          your workout pace.
        </p>

        {/* --- CONNECT TRACKER --- */}
        <div className="hrv-connect-row">
          <button className="primary-btn" onClick={handleConnectTracker}>
            {isConnected ? "Reconnect Tracker" : "Connect Tracker"}
          </button>

          <div className="connection">
            <span className="connection-label">
              {isConnected ? "Device connected" : "No device connected"}
            </span>
            <span className="connection-device">{deviceName}</span>
            {lastSync && (
              <span className="connection-sync">Last sync: {lastSync}</span>
            )}
          </div>
        </div>

        {/* --- RECOVERY METRICS --- */}
        <div className="hrv-grid">
          <div className="metric">
            <span className="metric-label">HRV</span>
            <span className="metric-value">
              {hrvMs !== null ? `${hrvMs} ms` : "--"}
            </span>
          </div>

          <div className="metric">
            <span className="metric-label">Recovery score</span>
            <span className="metric-value">
              {recoveryScore !== null ? `${recoveryScore} / 100` : "--"}
            </span>
          </div>

          <div className="metric">
            <span className="metric-label">Recovery status</span>
            <span className="metric-value">
              {recoveryStatus || "--"}
            </span>
          </div>

          <div className="metric">
            <span className="metric-label">Status indicator</span>
            <span className={`indicator indicator-${indicatorColor}`}>
              {recoveryStatus ? recoveryStatus : "No data"}
            </span>
          </div>
        </div>

        {/* --- SUGGESTED INTENSITY --- */}
        <section className="hrv-section">
          <h2 className="section-title">Suggested intensity</h2>
          {suggestedIntensity ? (
            <>
              <p className="intensity-main">{suggestedIntensity}</p>
              <p className="intensity-note">
                This suggestion is based on your current recovery score and HRV.
              </p>
            </>
          ) : (
            <p className="intensity-note">
              Connect your tracker to see today&apos;s suggested intensity.
            </p>
          )}
        </section>

        {/* --- MANUAL OVERRIDE --- */}
        <section className="hrv-section">
          <h2 className="section-title">Adjust workout manually</h2>
          <p className="intensity-note">
            If you feel different today, you can override the suggested pace.
          </p>

          <div className="manual-row">
            <select
              className="intensity-select"
              value={manualIntensity}
              onChange={(e) => setManualIntensity(e.target.value)}
            >
              <option value="">Use suggested intensity</option>
              <option value="Low intensity / recovery day">
                Low intensity / recovery day
              </option>
              <option value="Moderate intensity">
                Moderate intensity
              </option>
              <option value="High intensity">High intensity</option>
            </select>

            <div className="manual-summary">
              <span className="summary-label">Planned workout intensity: </span>
              <span className="summary-value">{plannedIntensity}</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HRVRecovery;
