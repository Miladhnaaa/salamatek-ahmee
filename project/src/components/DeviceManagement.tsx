import React, { useState } from 'react';
import { 
  Smartphone, 
  Tablet, 
  Monitor, 
  Wifi, 
  Battery, 
  MapPin,
  Shield,
  AlertTriangle,
  CheckCircle,
  Clock,
  MoreVertical
} from 'lucide-react';

const DeviceManagement: React.FC = () => {
  const [selectedDevice, setSelectedDevice] = useState<string | null>(null);

  const devices = [
    {
      id: '1',
      name: 'Sarah\'s iPhone',
      type: 'phone',
      user: 'Sarah Johnson',
      status: 'online',
      battery: 78,
      location: 'Home',
      lastSeen: '2 min ago',
      screenTime: '3.2h',
      violations: 2,
      apps: 47,
      icon: Smartphone
    },
    {
      id: '2',
      name: 'Mike\'s Android',
      type: 'phone',
      user: 'Mike Johnson',
      status: 'online',
      battery: 45,
      location: 'School',
      lastSeen: '5 min ago',
      screenTime: '2.8h',
      violations: 0,
      apps: 32,
      icon: Smartphone
    },
    {
      id: '3',
      name: 'Family iPad',
      type: 'tablet',
      user: 'Emma Johnson',
      status: 'offline',
      battery: 92,
      location: 'Home',
      lastSeen: '1 hour ago',
      screenTime: '1.5h',
      violations: 1,
      apps: 23,
      icon: Tablet
    },
    {
      id: '4',
      name: 'Living Room PC',
      type: 'desktop',
      user: 'Jake Johnson',
      status: 'online',
      battery: null,
      location: 'Home',
      lastSeen: 'Active now',
      screenTime: '4.1h',
      violations: 3,
      apps: 15,
      icon: Monitor
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online': return 'bg-emerald-500';
      case 'offline': return 'bg-slate-500';
      default: return 'bg-yellow-500';
    }
  };

  const getViolationColor = (violations: number) => {
    if (violations === 0) return 'text-emerald-400';
    if (violations <= 2) return 'text-yellow-400';
    return 'text-red-400';
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">Device Management</h2>
          <p className="text-slate-400">Monitor and control connected devices</p>
        </div>
        <div className="flex space-x-3">
          <button className="px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors">
            Refresh All
          </button>
          <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200">
            Add Device
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {devices.map((device) => {
          const Icon = device.icon;
          
          return (
            <div
              key={device.id}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-200 cursor-pointer"
              onClick={() => setSelectedDevice(device.id)}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">{device.name}</h3>
                    <p className="text-slate-400 text-sm">{device.user}</p>
                  </div>
                </div>
                <button className="p-2 hover:bg-slate-700 rounded-lg transition-colors">
                  <MoreVertical className="w-4 h-4 text-slate-400" />
                </button>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 text-sm">Status</span>
                  <div className="flex items-center space-x-2">
                    <div className={`w-2 h-2 rounded-full ${getStatusColor(device.status)}`}></div>
                    <span className="text-white text-sm capitalize">{device.status}</span>
                  </div>
                </div>

                {device.battery !== null && (
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 text-sm">Battery</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-16 h-2 bg-slate-700 rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${
                            device.battery > 50 ? 'bg-emerald-500' :
                            device.battery > 20 ? 'bg-yellow-500' : 'bg-red-500'
                          }`}
                          style={{ width: `${device.battery}%` }}
                        ></div>
                      </div>
                      <span className="text-white text-sm">{device.battery}%</span>
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <span className="text-slate-400 text-sm">Location</span>
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-3 h-3 text-slate-400" />
                    <span className="text-white text-sm">{device.location}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-slate-400 text-sm">Screen Time</span>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3 h-3 text-slate-400" />
                    <span className="text-white text-sm">{device.screenTime}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-slate-400 text-sm">Violations</span>
                  <div className="flex items-center space-x-1">
                    {device.violations === 0 ? (
                      <CheckCircle className="w-3 h-3 text-emerald-400" />
                    ) : (
                      <AlertTriangle className="w-3 h-3 text-yellow-400" />
                    )}
                    <span className={`text-sm font-medium ${getViolationColor(device.violations)}`}>
                      {device.violations}
                    </span>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-700">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400">Last seen: {device.lastSeen}</span>
                    <span className="text-slate-400">{device.apps} apps</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
        <h3 className="text-xl font-bold text-white mb-6">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <button className="p-4 bg-slate-700/50 hover:bg-slate-700 rounded-lg transition-colors flex items-center space-x-3">
            <Shield className="w-5 h-5 text-blue-400" />
            <span className="text-white">Lock All Devices</span>
          </button>
          <button className="p-4 bg-slate-700/50 hover:bg-slate-700 rounded-lg transition-colors flex items-center space-x-3">
            <Wifi className="w-5 h-5 text-emerald-400" />
            <span className="text-white">Network Status</span>
          </button>
          <button className="p-4 bg-slate-700/50 hover:bg-slate-700 rounded-lg transition-colors flex items-center space-x-3">
            <MapPin className="w-5 h-5 text-purple-400" />
            <span className="text-white">Locate Devices</span>
          </button>
          <button className="p-4 bg-slate-700/50 hover:bg-slate-700 rounded-lg transition-colors flex items-center space-x-3">
            <AlertTriangle className="w-5 h-5 text-red-400" />
            <span className="text-white">Emergency Mode</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeviceManagement;