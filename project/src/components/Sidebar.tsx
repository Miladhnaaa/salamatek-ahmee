import React from 'react';
import { 
  Shield, 
  Smartphone, 
  Clock, 
  Filter, 
  MapPin, 
  BarChart3, 
  Settings, 
  Download,
  Users,
  Bell
} from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'apk-generator', label: 'APK Generator', icon: Download },
    { id: 'devices', label: 'Devices', icon: Smartphone },
    { id: 'content-filter', label: 'Content Filter', icon: Filter },
    { id: 'time-control', label: 'Time Control', icon: Clock },
    { id: 'location', label: 'Location', icon: MapPin },
    { id: 'users', label: 'Users', icon: Users },
    { id: 'alerts', label: 'Alerts', icon: Bell },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="w-64 bg-slate-900/95 backdrop-blur-sm border-r border-slate-700/50 min-h-screen">
      <div className="p-6">
        <div className="flex items-center space-x-3 mb-8">
          <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">ParentGuard</h1>
            <p className="text-sm text-slate-400">Admin Panel</p>
          </div>
        </div>
        
        <nav className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white border border-blue-500/30'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;