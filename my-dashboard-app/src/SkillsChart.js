import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function SkillsChart({ skillsData }) {
  return (
    <div className="skills-chart">
      <h2>Yetenekler Grafiği</h2>
      <BarChart width={600} height={300} data={skillsData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="skill" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="employees" fill="#8884d8" />
      </BarChart>
    </div>
  );
}

export default SkillsChart;
