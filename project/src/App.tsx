import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import APKGenerator from './components/APKGenerator';
import DeviceManagement from './components/DeviceManagement';
import ContentFilter from './components/ContentFilter';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'apk-generator':
        return <APKGenerator />;
      case 'devices':
        return <DeviceManagement />;
      case 'content-filter':
        return <ContentFilter />;
      case 'time-control':
        return (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold text-white mb-4">Time Control</h2>
            <p className="text-slate-400">Time management features coming soon...</p>
          </div>
        );
      case 'location':
        return (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold text-white mb-4">Location Tracking</h2>
            <p className="text-slate-400">Location tracking features coming soon...</p>
          </div>
        );
      case 'users':
        return (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold text-white mb-4">User Management</h2>
            <p className="text-slate-400">User management features coming soon...</p>
          </div>
        );
      case 'alerts':
        return (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold text-white mb-4">Alerts & Notifications</h2>
            <p className="text-slate-400">Alert system coming soon...</p>
          </div>
        );
      case 'settings':
        return (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold text-white mb-4">Settings</h2>
            <p className="text-slate-400">Settings panel coming soon...</p>
          </div>
        );
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="flex">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <main className="flex-1 p-8">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

export default App;