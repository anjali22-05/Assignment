
import React from 'react';
import TeamCard from '../components/TeamCard';

const Task = () => {
  const teamData = [
    {
      teamName: 'Backend Team',
      technology: 'Python',
      progress: 80,
      timeLeft: '1 Week Left',
      taskStats: { completed: 12, total: 7 },
      members: 4,
      color: 'bg-green-500',
      isHighlighted: true
    },
    {
      teamName: 'UX UI Team',
      technology: 'Figma',
      progress: 90,
      timeLeft: '5 Days Left',
      taskStats: { completed: 14, total: 4 },
      members: 4,
      color: 'bg-blue-500'
    },
    {
      teamName: 'Front End Team',
      technology: 'Sencha Ext JS',
      progress: 70,
      timeLeft: '2 Weeks Left',
      taskStats: { completed: 6, total: 6 },
      members: 5,
      color: 'bg-yellow-500'
    },
    {
      teamName: 'Marketing Team',
      technology: 'Google',
      progress: 40,
      timeLeft: '1 Week Left',
      taskStats: { completed: 19, total: 10 },
      members: 3,
      color: 'bg-orange-500'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Team Tasks</h1>
        <div className="flex space-x-2">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm">Daily</button>
          <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg text-sm">Weekly</button>
          <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg text-sm">Monthly</button>
          <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg text-sm">Yearly</button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamData.map((team, index) => (
          <TeamCard key={index} {...team} />
        ))}
      </div>
      
      <div className="bg-white rounded-xl p-6 shadow-sm border">
        <h3 className="text-lg font-semibold text-gray-800 mb-6">Project Timeline</h3>
        <div className="space-y-4">
          {['Dashboard Design', 'Mobile App', 'Landing Page', 'Prototyping', 'Meeting'].map((project, index) => (
            <div key={index} className="flex items-center justify-between py-3 hover:bg-gray-50 rounded-lg px-4 transition-colors">
              <span className="text-gray-700 font-medium">{project}</span>
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <span>09:00 AM</span>
                <span>10:00 AM</span>
                <span>11:00 AM</span>
                <span>12:00 PM</span>
                <span>01:00 PM</span>
                <span>02:00 PM</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Task;
