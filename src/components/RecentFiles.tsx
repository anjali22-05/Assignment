import React from 'react';
import { FileText, Image, Music, Film, Database, File } from 'lucide-react';

const RecentFiles = () => {
  const files = [
    { name: 'Xd File', date: '01-03-2021', size: '3.5mb', icon: Image, color: 'bg-pink-500' },
    { name: 'Figma File', date: '27-02-2021', size: '19mb', icon: FileText, color: 'bg-purple-500' },
    { name: 'Documents', date: '23-02-2021', size: '15mb', icon: FileText, color: 'bg-red-500' },
    { name: 'Sound File', date: '21-02-2021', size: '40mb', icon: Music, color: 'bg-orange-500' },
    { name: 'Media', date: '23-02-2021', size: '15mb', icon: Film, color: 'bg-yellow-500' },
    { name: 'Sals PDF', date: '21-02-2021', size: '9mb', icon: FileText, color: 'bg-green-500' },
    { name: 'Excel File', date: '23-02-2021', size: '11mb', icon: Database, color: 'bg-blue-500' },
  ];

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-800">Recent Order</h3>
        <button className="text-sm text-blue-600 hover:text-blue-700">See more</button>
      </div>
      
      <div className="space-y-4">
        <div className="grid grid-cols-4 gap-4 text-xs font-medium text-gray-500 pb-2 border-b">
          <span>File Name</span>
          <span>Date</span>
          <span>Size</span>
          <span></span>
        </div>
        
        {files.map((file, index) => (
          <div key={index} className="grid grid-cols-4 gap-4 items-center py-3 hover:bg-gray-50 rounded-lg px-2 transition-colors">
            <div className="flex items-center space-x-3">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${file.color}`}>
                <file.icon className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-medium text-gray-700">{file.name}</span>
            </div>
            <span className="text-sm text-gray-500">{file.date}</span>
            <span className="text-sm text-gray-500">{file.size}</span>
            <button className="text-gray-400 hover:text-gray-600 justify-self-end">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentFiles;