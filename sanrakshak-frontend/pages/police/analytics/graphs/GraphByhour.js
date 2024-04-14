  import React from 'react';
  import { Bar, Line } from 'react-chartjs-2';
  import { Chart, Ticks, registerables } from 'chart.js';
  import { CategoryScale } from 'chart.js'; // Import the CategoryScale

  Chart.register(...registerables);
  Chart.register(CategoryScale);

  const GraphByhour = () => {
    const crimeData = {
      "crime_data": [
        { hour: "00:00", num_crimes: 3 },
        { hour: "01:00", num_crimes: 6 },
        { hour: "02:00", num_crimes: 5 },
        { hour: "03:00", num_crimes: 8 },
        { hour: "04:00", num_crimes: 10 },
        { hour: "05:00", num_crimes: 9 },
        { hour: "06:00", num_crimes: 12 },
        { hour: "07:00", num_crimes: 14 },
        { hour: "08:00", num_crimes: 13 },
        { hour: "09:00", num_crimes: 11 },
        { hour: "10:00", num_crimes: 7 },
        { hour: "11:00", num_crimes: 9 },
        { hour: "12:00", num_crimes: 15 },
        { hour: "13:00", num_crimes: 18 },
        { hour: "14:00", num_crimes: 17 },
        { hour: "15:00", num_crimes: 19 },
        { hour: "16:00", num_crimes: 22 },
        { hour: "17:00", num_crimes: null },
        { hour: "18:00", num_crimes: null },
        { hour: "19:00", num_crimes: null },
        { hour: "20:00", num_crimes: null },
        { hour: "21:00", num_crimes: null },
        { hour: "22:00", num_crimes: null },
        { hour: "23:00", num_crimes: null },
      ],
    };

    const casesByHour = crimeData.crime_data.map((item) => item.hour);
    const totalCasesByHour = crimeData.crime_data.map((item) => item.num_crimes);

    const chartData = {
      type: 'Line',
      labels: casesByHour,
      datasets: [
        {
          label: '',

          fill: false,
          lineTension: 0.5,
          backgroundColor: 'rgba(75, 192, 192, 0.8)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 2,
          pointRadius: 2,
          data: totalCasesByHour,

        },
      ],

    };

    const options = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,

        }
      },
      

      scales: {
        x:
        {
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Hour of the Day',
          },
          ticks: {
            color: "#AEB9E1", // this here
          },
        },
        y: {
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Total Cases Registered',
          },
          ticks: {
            color: "#AEB9E1", // this here
          },
        },
      },  
      animations: {
        radius: {
          duration: 2000,
          easing: "easeOutCubic",
          from: 2,
          to: 4 ,
          loop: true,
        },
        numbers: { duration: 0 },
        colors: {
          type: "color",
          duration: 3000,
          loop: true,
        },
      },
      transitions: {},
      elements: {
        point: {
          radius: 1,
        },
      },

      
    };

    return (
      <div className="chart-container">
        <Line data={chartData} options={options} />
        
      </div>
      
    );
    
  };

  export default GraphByhour;
