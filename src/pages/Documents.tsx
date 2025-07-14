import React from 'react';
import { Plus, Folder, HardDrive, Cloud,  } from 'lucide-react';
import StorageCard from '../components/StorageCard';
import StorageChart from '../components/StorageChart';
import RecentFiles from '../components/RecentFiles';

const Documents = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">My Files</h1>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center space-x-2">
          <Plus className="w-5 h-5" />
          <span>Add New</span>
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StorageCard
          title="Documents"
          fileCount="1,328 Files"
          size="1.3GB"
          icon={<Folder className="w-6 h-6 text-white" />}
          color="bg-blue-500"
        />
        <StorageCard
          title="Google Drive"
          fileCount="2,328 Files"
          size="2.9GB"
          icon={<HardDrive className="w-6 h-6 text-white" />}
          color="bg-orange-500"
        />
        <StorageCard
          title="One Drive"
          fileCount="1,908 Files"
          size="1.2GB"
          icon={<Cloud className="w-6 h-6 text-white" />}
          color="bg-blue-600"
        />
        {/* <StorageCard
          title="Dropbox"
          fileCount="Frame 10.png"
          size="1.1GB"
          // icon={<Dropbox className="w-6 h-6 text-white" />}
          color="bg-sky-500"
        /> */}
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RecentFiles />
        </div>
        <div className="lg:col-span-1">
          <StorageChart />
        </div>
      </div>
    </div>
  );
};

export default Documents;
