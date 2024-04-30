import React from 'react';
import Plot from 'react-plotly.js';

const PlotComponent: React.FC = () => {
  const months = Array.from({ length: 12 }, (_, i) => 
    new Date(2024, 5 + i).toLocaleString('default', { month: 'short', year: 'numeric' })
  );

  // Costs calculation
  const constantCost = Array(24).fill(2000);
  const s3Standard = months.map((_, i) => 8.39 + i * 942.88);
  const s3StandardIA = months.map((_, i) => i * 524.46);
  const glacierInstant = months.map((_, i) => i * 169.15);

  const data = [
    {
      type: 'scatter',
      mode: 'lines+markers',
      name: 'Constant Cost',
      x: months,
      y: constantCost,
      line: { color: '#1f77b4' },
    },
    {
      type: 'scatter',
      mode: 'lines+markers',
      name: 'S3 Standard',
      x: months,
      y: s3Standard,
      line: { color: '#ff7f0e' },
    },
    {
      type: 'scatter',
      mode: 'lines+markers',
      name: 'S3 Standard - IA',
      x: months,
      y: s3StandardIA,
      line: { color: '#2ca02c' },
    },
    {
      type: 'scatter',
      mode: 'lines+markers',
      name: 'Glacier Instant Retrieval',
      x: months,
      y: glacierInstant,
      line: { color: '#d62728' },
    }
  ];

  return (
    <Plot
      data={data}
      layout={{
        width: 920, 
        height: 500, 
        title: 'Cost Over Time',
        xaxis: {
          title: 'Month'
        },
        yaxis: {
          title: 'Cost ($)'
        }
      }}
    />
  );
};

export default PlotComponent;
