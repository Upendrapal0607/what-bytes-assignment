"use client";
import { TbTargetArrow } from "react-icons/tb";
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ correct, total }) => {
  const data = {
    labels: ['Correct', 'Incorrect'],
    datasets: [
      {
        label: 'Questions',
        data: [correct, total - correct],
        backgroundColor: ['#3b82f6', '#e5e7eb'], // Tailwind blue-500 and gray-200
        hoverBackgroundColor: ['#1e40af', '#d1d5db'], // Tailwind blue-900 and gray-300
      },
    ],
  };

  const options = {
    cutout: '70%', // Makes it a doughnut chart
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="relative flex items-center justify-center">
      <Doughnut data={data} options={options} />
      <TbTargetArrow className="absolute text-4xl text-red-700" />
    </div>
  );
};

export default PieChart;
