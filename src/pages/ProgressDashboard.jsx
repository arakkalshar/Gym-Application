// dashboard.jsx
import { useEffect, useState } from "react";
import { Card, CardContent, Typography, Box, MenuItem, Select } from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

// Importing multi-client JSON
import workoutData from "../DashboardJson/DashboardJson.json";

export default function ProgressDashboard() {
  const [clients, setClients] = useState([]);
  const [selectedClientId, setSelectedClientId] = useState(null);

  useEffect(() => {
    setClients(workoutData);

    // Auto-select first client
    if (workoutData.length > 0) {
      setSelectedClientId(workoutData[0].client_id);
    }
  }, []);

  // Find selected client object
  const selectedClient = clients.find(c => c.client_id === selectedClientId);

  if (!selectedClient) {
    return (
      <Card sx={{ maxWidth: 900, margin: "2rem auto", boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h5">Loading client workout data...</Typography>
        </CardContent>
      </Card>
    );
  }

  // Convert client workouts → chart format
  const chartData = selectedClient.workouts.map(entry => {
    const point = { date: entry.date };
    entry.exercises.forEach(ex => {
      point[ex.name] = ex.weight;
    });
    return point;
  });

  // Get exercise names dynamically
  const allExerciseNames = [
    ...new Set(
      selectedClient.workouts.flatMap(w => w.exercises.map(ex => ex.name))
    )
  ];

  // Bar colors
  const colors = ["#3f51b5", "#f44336", "#4caf50", "#ff9800", "#9c27b0"];

  return (
    <Card sx={{ maxWidth: 900, margin: "2rem auto", boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Client Workout Progress
        </Typography>

        {/* Client Selector */}
        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle1" sx={{ mb: 1 }}>
            Select Client:
          </Typography>

          <Select
            value={selectedClientId}
            onChange={e => setSelectedClientId(e.target.value)}
            sx={{ width: 250 }}
          >
            {clients.map(client => (
              <MenuItem key={client.client_id} value={client.client_id}>
                {client.name}
              </MenuItem>
            ))}
          </Select>
        </Box>

        {/* Chart */}
        <Box sx={{ height: 400 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis
                label={{
                  value: "Weight (lbs)",
                  angle: -90,
                  position: "insideLeft"
                }}
              />
              <Tooltip />
              <Legend />

              {allExerciseNames.map((name, index) => (
                <Bar
                  key={name}
                  dataKey={name}
                  fill={colors[index % colors.length]}
                />
              ))}
            </BarChart>
          </ResponsiveContainer>
        </Box>
      </CardContent>
    </Card>
  );
}
