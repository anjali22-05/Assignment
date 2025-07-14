
import React from 'react';
import { Bell, Check, X, Clock, User, FileText, Package } from 'lucide-react';

const Notification = () => {
  const notifications = [
    {
      id: 1,
      type: 'success',
      icon: <Check className="w-5 h-5" />,
      title: 'Document uploaded successfully',
      message: 'Your file "Project_Report.pdf" has been uploaded to Documents folder.',
      time: '2 minutes ago',
      read: false
    },
    {
      id: 2,
      type: 'info',
      icon: <User className="w-5 h-5" />,
      title: 'New team member added',
      message: 'John Doe has been added to the Backend Team.',
      time: '1 hour ago',
      read: false
    },
    {
      id: 3,
      type: 'warning',
      icon: <Clock className="w-5 h-5" />,
      title: 'Task deadline approaching',
      message: 'Dashboard Design task is due in 2 days.',
      time: '3 hours ago',
      read: true
    },
    {
      id: 4,
      type: 'info',
      icon: <Package className="w-5 h-5" />,
      title: 'Shipment delivered',
      message: 'Package #SP9876543210 has been delivered to Watford.',
      time: '5 hours ago',
      read: true
    },
    {
      id: 5,
      type: 'success',
      icon: <FileText className="w-5 h-5" />,
      title: 'Report generated',
      message: 'Monthly analytics report has been generated successfully.',
      time: '1 day ago',
      read: true
    }
  ];

  const getNotificationStyle = (type: string) => {
    switch (type) {
      case 'success':
        return 'bg-green-100 text-green-600';
      case 'warning':
        return 'bg-yellow-100 text-yellow-600';
      case 'error':
        return 'bg-red-100 text-red-600';
      default:
        return 'bg-blue-100 text-blue-600';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Notifications</h1>
        <div className="flex space-x-2">
          <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg text-sm transition-colors">
            Mark all as read
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-sm transition-colors">
            Settings
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Bell className="w-6 h-6 text-blue-600" />
            </div>
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Total</h3>
          <p className="text-3xl font-bold text-gray-900">24</p>
          <p className="text-sm text-gray-500">All notifications</p>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-sm border">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            </div>
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Unread</h3>
          <p className="text-3xl font-bold text-gray-900">2</p>
          <p className="text-sm text-gray-500">Require attention</p>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-sm border">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <Check className="w-6 h-6 text-green-600" />
            </div>
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Read</h3>
          <p className="text-3xl font-bold text-gray-900">22</p>
          <p className="text-sm text-gray-500">Already viewed</p>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-sm border">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              <Clock className="w-6 h-6 text-yellow-600" />
            </div>
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Today</h3>
          <p className="text-3xl font-bold text-gray-900">5</p>
          <p className="text-sm text-gray-500">Recent notifications</p>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm border">
        <div className="p-6 border-b">
          <h3 className="text-lg font-semibold text-gray-800">Recent Notifications</h3>
        </div>
        <div className="divide-y divide-gray-200">
          {notifications.map((notification) => (
            <div key={notification.id} className={`p-6 hover:bg-gray-50 transition-colors ${!notification.read ? 'bg-blue-50/30' : ''}`}>
              <div className="flex items-start space-x-4">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${getNotificationStyle(notification.type)}`}>
                  {notification.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-semibold text-gray-900">{notification.title}</h4>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs text-gray-500">{notification.time}</span>
                      {!notification.read && (
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      )}
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                </div>
                <button className="text-gray-400 hover:text-gray-600 p-1">
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notification;
