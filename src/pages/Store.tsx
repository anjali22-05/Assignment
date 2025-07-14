import React from 'react';
import ShippingCard from '../components/ShippingCard';
import { Truck, Package, Clock } from 'lucide-react';

const Store = () => {
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
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Store Management</h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {shippingData.map((item, index) => (
          <ShippingCard key={index} {...item} />
        ))}
      </div>

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

export default Store;
