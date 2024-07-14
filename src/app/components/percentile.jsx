import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend } from 'chart.js';

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend);

const PercentileGraph = ({percentile,previousPercentile,setPreviousPercentile}) => {

  const [percentileData ,setPercentileData]= useState([0, 20,70, 90, 50, 20,10,5,2,0]);
  useEffect(() => {
  console.log(percentileData,previousPercentile);
    const PreviouseData = [...percentileData];
    const Mapeddata = PreviouseData.map(data=>data== +previousPercentile?percentile:data)
    setPercentileData(Mapeddata);
    setPreviousPercentile(percentile)
  }, [percentile]);
  const data = {
    labels: percentileData,
    datasets: [
      {
        label: 'Percentile Distribution',
        data: percentileData,
        fill: false,
        borderColor: '#8d9797',
        tension: 0.5,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `Pecentage: ${context.raw}`;
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Percentile',
        },
        ticks: {
          callback: function (value) {
            if ([0, 25, 50, 75, 100].includes(value)) {
              return value;
            }
            return '';
          },
        },
        grid: {
          display: false, // This will remove the x-axis grid lines
        },
      },
      y: {
        display: false,
        title: {
          display: true,
          text: 'Number of Students',
        },
        grid: {
          display: false, // This will remove the y-axis grid lines
        },
      },
    },
  };

  return (
    <div className="relative w-full h-64">
      <Line data={data} options={options} />
      <div
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
        style={{
          left: `${percentile}%`,
        }}
      >
        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
        <div className="text-xs text-center">Your percentile</div>
      </div>
      {/* <div className="absolute right-0 top-0 text-xs text-gray-700">
        <p>90</p>
        <p>numberOfStudent: 4</p>
      </div> */}
    </div>
  );
};

export default PercentileGraph;
