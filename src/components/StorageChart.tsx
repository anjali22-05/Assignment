import React from 'react';

const StorageChart = () => {
  const storageData = [
    { name: 'Documents Files', size: '1.3GB', files: '1,328 Files', color: 'bg-blue-500' },
    { name: 'Media Files', size: '15.3GB', files: '1,328 Files', color: 'bg-cyan-500' },
    { name: 'Other Files', size: '12.7GB', files: '1,328 Files', color: 'bg-yellow-500' },
    { name: 'Unknown', size: '1.3GB', files: '429 Files', color: 'bg-red-500' },
  ];

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border">
      <h3 className="text-lg font-semibold text-gray-800 mb-6">Storage Details</h3>
      
      <div className="relative w-32 h-32 mx-auto mb-6">
        <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
          <circle
            cx="60"
            cy="60"
            r="50"
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="10"
          />
          <circle
            cx="60"
            cy="60"
            r="50"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="10"
            strokeDasharray="157"
            strokeDashoffset="40"
            className="transition-all duration-500"
          />
          <circle
            cx="60"
            cy="60"
            r="50"
            fill="none"
            stroke="#06b6d4"
            strokeWidth="10"
            strokeDasharray="78"
            strokeDashoffset="0"
            className="transition-all duration-500"
            transform="rotate(75 60 60)"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-bold text-gray-800">29.1</span>
          <span className="text-xs text-gray-500">Of 128GB</span>
        </div>
      </div>
      
      <div className="space-y-4">
        {storageData.map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className={`w-3 h-3 rounded-full ${item.color}`} />
              <div>
                <p className="text-sm font-medium text-gray-700">{item.name}</p>
                <p className="text-xs text-gray-500">{item.files}</p>
              </div>
            </div>
            <span className="text-sm font-semibold text-gray-800">{item.size}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StorageChart;