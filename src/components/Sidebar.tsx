import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  FileText, 
  Users, 
  Package, 
  BarChart3, 
  Settings, 
  Bell, 
  Store,
  CreditCard,
  LogOut
} from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { icon: BarChart3, label: 'Dashboard', path: '/' },
    { icon: FileText, label: 'Documents', path: '/documents' },
    { icon: CreditCard, label: 'Transaction', path: '/transaction' },
    { icon: Users, label: 'Task', path: '/task' },
    { icon: Store, label: 'Store', path: '/store' },
    { icon: Bell, label: 'Notification', path: '/notification' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];

  return (
    <div className="w-64 bg-white h-screen shadow-lg flex flex-col">
      <div className="p-6 border-b">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
            <Store className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-gray-800">Shop</span>
        </div>
      </div>
      
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`
                }
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="p-4 border-t">
        <button className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors w-full">
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Log Out</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;