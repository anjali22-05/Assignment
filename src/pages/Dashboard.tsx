
import React from 'react';
import TeamCard from '../components/TeamCard';
import ShippingCard from '../components/ShippingCard';
import { Truck, Package, Clock, Calendar } from 'lucide-react';

const Dashboard = () => {
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

  const shippingData = [
    {
      title: 'In Transit Order',
      value: '486',
      change: '20.76%',
      isPositive: true,
      icon: <Truck className="w-6 h-6 text-teal-600" />
    },
    {
      title: 'Shipped Order',
      value: '324',
      change: '9.23%',
      isPositive: false,
      icon: <Package className="w-6 h-6 text-teal-600" />
    },
    {
      title: 'Pending Order',
      value: '10',
      change: '18.76%',
      isPositive: true,
      icon: <Clock className="w-6 h-6 text-teal-600" />
    }
  ];

  return (
    <div className="space-y-8">
      {/* Team Dashboard Section */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Calendar className="w-6 h-6 text-blue-600" />
            <span className="text-lg font-semibold text-gray-800">11 July, 2022</span>
          </div>
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
      </div>

      {/* Project Timeline Section */}
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

      {/* Shipping Dashboard Section */}
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-gray-900">Shipping Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {shippingData.map((item, index) => (
            <ShippingCard key={index} {...item} />
          ))}
        </div>
      </div>

      {/* Live Tracking Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-800">Live Shipment Tracking</h3>
            <button className="text-gray-400 hover:text-gray-600">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
              </svg>
            </button>
          </div>
          
          <div className="bg-gray-100 rounded-lg h-48 mb-4 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-2">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <p className="text-gray-600">Interactive Map View</p>
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Shipping ID:</span>
              <span className="text-sm font-medium text-blue-600">#SP9876543210</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Origin:</span>
              <span className="text-sm font-medium">London</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Destination:</span>
              <span className="text-sm font-medium">Watford</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Status:</span>
              <span className="text-sm font-medium bg-blue-100 text-blue-800 px-2 py-1 rounded">In Transit</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border">
          <h3 className="text-lg font-semibold text-gray-800 mb-6">Average Shipping Cost</h3>
          <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-800 mb-2">$245</div>
              <div className="text-sm text-gray-600">July 2023</div>
              <div className="mt-4 text-sm text-gray-500">Interactive Chart View</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
