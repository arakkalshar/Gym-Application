// dashboard.jsx
import { useEffect, useState } from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
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

// ✅ Correctly import JSON using Parcel's native support
import workoutData from "../DashboardJson/DashboardJson.json";

export default function ProgressDashboard() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    // Load JSON directly (no fetch needed)
    setWorkouts(workoutData);
  }, []);

  // If data has not loaded yet
  if (!workouts || workouts.length === 0) {
    return (
      <Card sx={{ maxWidth: 900, margin: "2rem auto", boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h5">Loading workout data...</Typography>
        </CardContent>
      </Card>
    );
  }

  // Convert workout array → chart friendly data
  const chartData = workouts.map(entry => {
    const point = { date: entry.date };
    entry.exercises.forEach(ex => {
      point[ex.name] = ex.weight;
    });
    return point;
  });

  // Get all exercise names dynamically
  const allExerciseNames = [
    ...new Set(workouts.flatMap(w => w.exercises.map(ex => ex.name)))
  ];

  // Color palette
  const colors = ["#3f51b5", "#f44336", "#4caf50", "#ff9800", "#9c27b0"];

  return (
    <Card sx={{ maxWidth: 900, margin: "2rem auto", boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Client Workout Progress (Multiple Exercises)
        </Typography>

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

              {/* Auto-create bars from JSON keys */}
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
