import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

const CrimeTrend = ({ setTrend }) => {
  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        lineTension: 0.2,
        label: 'This Week Cases',
        data: [],
        borderWidth: 2,
        borderColor: 'rgba(255, 99, 132, 1)', // Solid blue line by default
        backgroundColor: 'rgba(255, 99, 132, 0)', // Transparent background
      },
      {
        lineTension: 0.2,
        label: 'Past Week Cases',
        data: [],
        borderColor: 'rgba(54, 162, 235, 1)', // Dashed green line
        backgroundColor: 'rgba(54, 162, 235, 0)', // Transparent background
        borderDash: [5, 5],
        borderWidth: 1.5,
      },
    ],
  });

  useEffect(() => {
    const caseTrendData = {
      caseTrend: {
        thisWeek: [
          { day: 'Monday', cases: 200 },
          { day: 'Tuesday', cases: 160 },
          { day: 'Wednesday', cases: 220 },
          { day: 'Thursday', cases: null },
          { day: 'Friday', cases: null },
          { day: 'Saturday', cases: null },
          { day: 'Sunday', cases: null },
        ],
        pastWeek: [
          { day: 'Monday', cases: 180 },
          { day: 'Tuesday', cases: 175 },
          { day: 'Wednesday', cases: 190 },
          { day: 'Thursday', cases: 200 },
          { day: 'Friday', cases: 210 },
          { day: 'Saturday', cases: 200 },
          { day: 'Sunday', cases: 190 },
        ],
      },
    };

    const thisWeekData = caseTrendData.caseTrend.thisWeek.filter((day) => day.cases !== null);
    const todayIndex = thisWeekData.length - 1;

    const thisWeekTotal = caseTrendData.caseTrend.thisWeek
      .slice(0, todayIndex + 1)
      .filter((day) => day.cases !== null)
      .reduce((acc, curr) => acc + curr.cases, 0);

    const lastWeekTotal = caseTrendData.caseTrend.pastWeek
      .slice(0, todayIndex + 1)
      .filter((day) => day.cases !== null)
      .reduce((acc, curr) => acc + curr.cases, 0);

    const color = thisWeekTotal > lastWeekTotal ? 'rgba(255, 0, 0, 1)' : 'rgba(0, 255, 0, 1)'; // Red if more, green if less
    setTrend(thisWeekTotal > lastWeekTotal ? ': Rising' : ': Declining');

    setData({
      labels: caseTrendData.caseTrend.thisWeek.map((day) => day.day),
      datasets: [
        { ...data.datasets[0], data: caseTrendData.caseTrend.thisWeek.map((day) => day.cases), borderColor: color },
        { ...data.datasets[1], data: caseTrendData.caseTrend.pastWeek.map((day) => day.cases) },
      ],
    });
  }, []);

  const options = {
    plugins: {
      legend: {
        display: true,
        labels: {
          color: 'white', // Set label text color to white
        },
      },
    },
    scales: {
      x: { 
          
          ticks: {
            color: "#AEB9E1", // this here
          },
      },
      y: { 
        ticks: {
          color: "#AEB9E1", // this here
        },
    },
    
  }
  };

  return (
    <div>
      <Line data={data} id='trend'  options={options} />
    </div>
  );
};

export default CrimeTrend;
