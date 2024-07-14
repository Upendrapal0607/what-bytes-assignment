// components/SyllabusAnalysis.js
import React from 'react';

const syllabusData = [
  { name: 'HTML Tools, Forms, History', percentage: 80, color: 'blue' },
  { name: 'Tags & References in HTML', percentage: 60, color: 'orange' },
  { name: 'Tables & References in HTML', percentage: 24, color: 'red' },
  { name: 'Tables & CSS Basics', percentage: 96, color: 'green' },
];

const colorClasses = {
  blue: 'bg-blue-500 text-blue-700',
  orange: 'bg-orange-500 text-orange-700',
  red: 'bg-red-500 text-red-700',
  green: 'bg-green-500 text-green-700',
};

const SyllabusAnalysis = () => {
  return (
  <div>
    <div className="p-4 mb-4">
      <h2 className="font-bold text-xl mb-4">Syllabus Wise Analysis</h2>
      {syllabusData.map((item, index) => (
        <div key={index} className="flex items-center mb-2">
          <div className="flex-grow">
            <div className="text-gray-700 mb-6">{item.name}</div>
            <div className="relative w-full h-2 bg-gray-200 rounded-full mt-1">
              <div
                className={`absolute h-full rounded-full ${colorClasses[item.color].split(' ')[0]}`}
                style={{ width: `${item.percentage}%` }}
              ></div>
            </div>
          </div>
          <div className={`ml-4 font-semibold ${colorClasses[item.color].split(' ')[1]}`}>{item.percentage}%</div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default SyllabusAnalysis;
