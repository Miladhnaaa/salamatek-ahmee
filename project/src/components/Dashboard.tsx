import React from 'react';
import { 
  Smartphone, 
  Shield, 
  Clock, 
  AlertTriangle,
  TrendingUp,
  Users,
  Activity,
  Download
} from 'lucide-react';

const Dashboard: React.FC = () => {
  const stats = [
    {
      title: 'Active Devices',
      value: '12',
      change: '+2',
      icon: Smartphone,
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Protected Users',
      value: '8',
      change: '+1',
      icon: Users,
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      title: 'Blocked Attempts',
      value: '47',
      change: '+12',
      icon: Shield,
      color: 'from-red-500 to-red-600'
    },
    {
      title: 'Screen Time Today',
      value: '6.2h',
      change: '-0.8h',
      icon: Clock,
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const recentActivity = [
    { user: 'Sarah', action: 'Blocked social media', time: '2 min ago', type: 'warning' },
    { user: 'Mike', action: 'Screen time limit reached', time: '15 min ago', type: 'info' },
    { user: 'Emma', action: 'Location update', time: '1 hour ago', type: 'success' },
    { user: 'Jake', action: 'App installation blocked', time: '2 hours ago', type: 'warning' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">Dashboard</h2>
          <p className="text-slate-400">Monitor and control your family's digital activities</p>
        </div>
        <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 flex items-center space-x-2">
          <Download className="w-5 h-5" />
          <span>Generate APK</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-200">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 bg-gradient-to-br ${stat.color} rounded-lg`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <span className={`text-sm px-2 py-1 rounded-full ${
                  stat.change.startsWith('+') ? 'bg-emerald-500/20 text-emerald-400' : 'bg-red-500/20 text-red-400'
                }`}>
                  {stat.change}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">{stat.value}</h3>
              <p className="text-slate-400 text-sm">{stat.title}</p>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center">
            <Activity className="w-5 h-5 mr-2" />
            Recent Activity
          </h3>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center space-x-4 p-3 bg-slate-700/30 rounded-lg">
                <div className={`w-3 h-3 rounded-full ${
                  activity.type === 'warning' ? 'bg-yellow-500' :
                  activity.type === 'success' ? 'bg-emerald-500' : 'bg-blue-500'
                }`}></div>
                <div className="flex-1">
                  <p className="text-white font-medium">{activity.user}</p>
                  <p className="text-slate-400 text-sm">{activity.action}</p>
                </div>
                <span className="text-slate-500 text-sm">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center">
            <TrendingUp className="w-5 h-5 mr-2" />
            Usage Trends
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-slate-300">Social Media</span>
              <div className="flex items-center space-x-2">
                <div className="w-24 h-2 bg-slate-700 rounded-full overflow-hidden">
                  <div className="w-3/4 h-full bg-gradient-to-r from-red-500 to-red-600"></div>
                </div>
                <span className="text-slate-400 text-sm">75%</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-300">Gaming</span>
              <div className="flex items-center space-x-2">
                <div className="w-24 h-2 bg-slate-700 rounded-full overflow-hidden">
                  <div className="w-1/2 h-full bg-gradient-to-r from-yellow-500 to-yellow-600"></div>
                </div>
                <span className="text-slate-400 text-sm">50%</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-300">Educational</span>
              <div className="flex items-center space-x-2">
                <div className="w-24 h-2 bg-slate-700 rounded-full overflow-hidden">
                  <div className="w-1/3 h-full bg-gradient-to-r from-emerald-500 to-emerald-600"></div>
                </div>
                <span className="text-slate-400 text-sm">33%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;