import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function ActivityChart({ activityData }) {
  return (
    <div className="activity-chart">
      <h2>Aktivite Grafiği</h2>
      <LineChart width={600} height={300} data={activityData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <XAxis dataKey="date" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="hours" stroke="#8884d8" />
        <Line type="monotone" dataKey="lessons_taken" stroke="#82ca9d" />
        <Line type="monotone" dataKey="exams_completed" stroke="#ffc658" />
      </LineChart>
    </div>
  );
}

export default ActivityChart;
