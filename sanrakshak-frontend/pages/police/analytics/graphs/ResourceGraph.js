import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';

const ResourceGraph = ({graphType}) => {
  const [data, setData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    const policeResourcesData = {
      PC: {
        available: 18,
        unavailable: 6,
        assigned: 23,
      },
      HC: {
        available: 10,
        unavailable: 1,
        assigned: 20,
      },
      ASI: {
        available: 6,
        unavailable: 1,
        assigned: 4,
      },
      SI: {
        available: 3,
        unavailable: 0,
        assigned: 2,
      },
      PI: {
        available: 1,
        unavailable: 0,
        assigned: 2,
      },
    };
    

    const personnelTypes = Object.keys(policeResourcesData);
    const resourceCategories = ['Available', 'Unavailable', 'Assigned']; // Predefined labels

    var ctx = document.getElementById("chart").getContext("2d")

    let gradientAvailable = ctx.createLinearGradient(0, 0, 0, 400);
    gradientAvailable.addColorStop(0, 'rgba(20, 29, 53, 1)'); 
    gradientAvailable.addColorStop(1, 'rgba(140, 140, 154, 0.11)');
    
    let gradientUnavailable = ctx.createLinearGradient(0, 0, 0, 400);
    gradientUnavailable.addColorStop(0, 'rgba(255, 0, 0, 1)'); 
    gradientUnavailable.addColorStop(1, 'rgba(255, 0, 0, 0.1)');
    
    let gradientAssigned = ctx.createLinearGradient(0, 0, 0, 400);
    gradientAssigned.addColorStop(0, 'rgba(187, 128, 12, 1)'); 
    gradientAssigned.addColorStop(1, 'rgba(187, 128, 12, 0.1)');

    const datasets = personnelTypes.map((type) => ({
      label: type, // Resource type as label (optional)
      data: [
        policeResourcesData[type].available,
        policeResourcesData[type].unavailable,
        policeResourcesData[type].assigned,
      ],
      backgroundColor: resourceCategories.map((category) => {
        // Map colors based on category
        switch (category) {
          case 'Available':
            return gradientAvailable
          case 'Unavailable':
            return gradientUnavailable; // Light red
          case 'Assigned':
            return gradientAssigned; // Light yellow
          default:
            return 'grey'; // Default color
        }
      }),
      borderColor: '#ADB8E0', // White border
      borderWidth: 1, // Border width
    }));
    

    setData({ labels: resourceCategories, datasets });
  }, []);
  
    const options = {
      // No need for separate y-axes configurations
      plugins: {
        legend: {
            display:true ,
            position: 'bottom',
            fullSize: false,
            align: 'start',
            
        }}
        

  };

  

  return (
    <div>
      <Pie data={data} id='chart' className='' options={options} />
    </div>
  );
};

export default ResourceGraph;
