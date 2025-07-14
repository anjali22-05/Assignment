
import React from 'react';
import { User, Users } from 'lucide-react';

interface TeamCardProps {
  teamName: string;
  technology: string;
  progress: number;
  timeLeft: string;
  taskStats: {
    completed: number;
    total: number;
  };
  members: number;
  color: string;
  isHighlighted?: boolean;
}

const TeamCard: React.FC<TeamCardProps> = ({ 
  teamName, 
  technology, 
  progress, 
  timeLeft, 
  taskStats, 
  members, 
  color,
  isHighlighted = false 
}) => {
  return (
    <div className={`bg-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-all ${
      isHighlighted ? 'border-2 border-dashed border-blue-300' : ''
    }`}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <div className={`w-3 h-3 rounded-full ${color}`} />
          <h3 className="font-semibold text-gray-800">{teamName}</h3>
        </div>
        <button className="text-gray-400 hover:text-gray-600">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
          </svg>
        </button>
      </div>
      
      <p className="text-sm text-gray-500 mb-4">{technology}</p>
      
      <div className="flex items-center space-x-2 mb-4">
        {[...Array(members)].map((_, i) => (
          <div key={i} className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
            <User className="w-4 h-4 text-gray-600" />
          </div>
        ))}
        <div className="w-8 h-8 border-2 border-dashed border-gray-300 rounded-full flex items-center justify-center">
          <span className="text-xs text-gray-400">+</span>
        </div>
      </div>
      
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-gray-700">Progress</span>
          <span className="text-sm font-semibold text-gray-800">{progress}%</span>
        </div>
        
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className={`h-2 rounded-full transition-all duration-500 ${color.replace('bg-', 'bg-')}`}
            style={{ width: `${progress}%` }}
          />
        </div>
        
        <div className="flex justify-between items-center text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full" />
            <span className="text-gray-600">{timeLeft}</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full" />
            <span className="text-gray-600">{taskStats.completed}</span>
            <div className="w-2 h-2 bg-orange-400 rounded-full" />
            <span className="text-gray-600">{taskStats.total}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;