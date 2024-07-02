import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const HorizontalRange= () => {
  // Sample data for multi-range bar chart
  const data = [
    { name: 'Category 1', min: 10, avg: 15, max: 20 },
    { name: 'Category 2', min: 12, avg: 18, max: 25 },
    { name: 'Category 3', min: 8, avg: 14, max: 18 },
    // Add more data as needed
  ];

  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" />
          <Tooltip />
          <Legend />

          <Bar dataKey="min" stackId="a" fill="#8884d8" />
          <Bar dataKey="avg" stackId="a" fill="#82ca9d" />
          <Bar dataKey="max" stackId="a" fill="#ffc658" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default HorizontalRange;



{/*import React from 'react'

const HorizontalRange = () => {
  return (
    <div>
      vasudev
    </div>
  )
}

export default HorizontalRange
*/}