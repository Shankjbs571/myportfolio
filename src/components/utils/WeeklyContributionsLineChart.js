// src/WeeklyContributionsLineChart.js
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const WeeklyContributionsLineChart = () => {
  // Dummy data for the current week's contributions
  const data = [
    { day: 'Sun', commits: 5 },
    { day: 'Mon', commits: 12 },
    { day: 'Tue', commits: 8 },
    { day: 'Wed', commits: 15 },
    { day: 'Thu', commits: 10 },
    { day: 'Fri', commits: 20 },
    { day: 'Sat', commits: 18 },
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}>
        <XAxis dataKey="day" />
        <Tooltip />
        <Line type="linear" dataKey="commits" stroke="#800080" strokeWidth={3} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default WeeklyContributionsLineChart;
