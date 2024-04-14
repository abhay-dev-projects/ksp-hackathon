import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';

const BeatWiseCrime = () => {
  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Number of Crimes',
        data: [],
        backgroundColor: [], // We will set the default color dynamically
        borderColor: '#ADB8E0',
      },
    ],
  });

  useEffect(() => {
    const beatData = {
      beatData: [
        { beatNumber: 1, numberOfCrimes: 25 },
        { beatNumber: 2, numberOfCrimes: 18 },
        { beatNumber: 3, numberOfCrimes: 30 },
        { beatNumber: 4, numberOfCrimes: 15 },
        { beatNumber: 5, numberOfCrimes: 20 },
        { beatNumber: 6, numberOfCrimes: 22 },
        { beatNumber: 7, numberOfCrimes: 28 },
      ],
    };

    const labels = beatData.beatData.map((beat) => `Beat ${beat.beatNumber}`);
    const crimes = beatData.beatData.map((beat) => beat.numberOfCrimes);

    var ctx = document.getElementById('bar').getContext('2d');
    let gradientHigh = ctx.createLinearGradient(0, 0, 0, 400);
    gradientHigh.addColorStop(0, 'rgba(255, 0, 0, 1)'); // Solid red at the top
    gradientHigh.addColorStop(0.6, 'rgba(0, 0, 0, .1)');

    let gradientLow = ctx.createLinearGradient(0, 0, 0, 400);
    gradientLow.addColorStop(0, 'rgba(22, 255, 56, 1)'); 
    gradientLow.addColorStop(.6, 'rgba(0, 0, 0, 0.1)');

    let gradientDefault = ctx.createLinearGradient(0, 0, 0, 400);
    gradientDefault.addColorStop(0, 'rgba(187, 128, 12, 1)'); 
    gradientDefault.addColorStop(.6, 'rgba(187, 128, 12, 0.1)');

    const maxCrimesEntry = beatData.beatData.reduce(
      (prev, current) => (current.numberOfCrimes > prev.numberOfCrimes ? current : prev),
      { numberOfCrimes: -Infinity }
    );

    const lowestCrimeEntry = beatData.beatData.reduce(
      (minEntry, currentEntry) =>
        currentEntry.numberOfCrimes < minEntry.numberOfCrimes ? currentEntry : minEntry,
      beatData.beatData[0]
    );



    // Set yellow as the default color for the rest of the entries
    const updatedBackgroundColors = beatData.beatData.map((beat) => {
      if (beat.beatNumber === maxCrimesEntry.beatNumber) {
        return gradientHigh; // Use gradientHigh for max crimes
      } else if (beat.beatNumber === lowestCrimeEntry.beatNumber) {
        return gradientLow; // Use green for min crimes
      } else {
        return gradientDefault; // Use yellow as default
      }
    });

    setData({
      ...data,
      labels: labels,
      datasets: [{ ...data.datasets[0], backgroundColor: updatedBackgroundColors, data: crimes }],
    });
  }, []);

  const options = {
    plugins: {
      legend: {
        display: false,
        position: 'bottom',
        fullSize: false,
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
    <div className=' pb-0 mb-0 flex justify-center'>
      <Bar data={data} id='bar' className='mt-2' options={options} />
    </div>
  );
};

export default BeatWiseCrime;
