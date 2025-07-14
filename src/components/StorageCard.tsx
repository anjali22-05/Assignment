import React from 'react';
import { Cloud, Folder, FileText, HardDrive } from 'lucide-react';

interface StorageCardProps {
  title: string;
  fileCount: string;
  size: string;
  icon: React.ReactNode;
  color: string;
}

const StorageCard: React.FC<StorageCardProps> = ({ title, fileCount, size, icon, color }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${color}`}>
          {icon}
        </div>
        <button className="text-gray-400 hover:text-gray-600">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
          </svg>
        </button>
      </div>
      
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-sm text-gray-500 mb-1">{fileCount}</p>
      <p className="text-xs text-gray-400">{size}</p>
    </div>
  );
};

export default StorageCard;
