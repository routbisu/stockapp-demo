import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

const StockLineChart = props => {
  const [lineData, setLineData] = useState(null);

  useEffect(() => {
    const { data: allData } = props;

    setLineData({
      labels: allData.map(record => record.date),
      datasets: [
        {
          label: 'Open',
          borderColor: 'orange',
          borderWidth: 2,
          data: allData.map(record => record.open),
        },
        {
          label: 'Close',
          borderColor: 'green',
          borderWidth: 2,
          data: allData.map(record => record.close),
        },
      ],
    });
  });

  return lineData ? <Line data={lineData} /> : null;
};

export default StockLineChart;
