import React, { useState } from 'react';
import { 
  Filter, 
  Globe, 
  Shield, 
  AlertTriangle, 
  CheckCircle, 
  Plus,
  Trash2,
  Search,
  Eye,
  EyeOff
} from 'lucide-react';

const ContentFilter: React.FC = () => {
  const [activeTab, setActiveTab] = useState('websites');
  const [newRule, setNewRule] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);

  const blockedWebsites = [
    { id: 1, url: 'facebook.com', category: 'Social Media', status: 'active', violations: 12 },
    { id: 2, url: 'youtube.com', category: 'Video', status: 'active', violations: 8 },
    { id: 3, url: 'tiktok.com', category: 'Social Media', status: 'active', violations: 23 },
    { id: 4, url: 'instagram.com', category: 'Social Media', status: 'paused', violations: 5 },
  ];

  const categories = [
    { name: 'Adult Content', blocked: 1245, color: 'from-red-500 to-red-600', enabled: true },
    { name: 'Social Media', blocked: 89, color: 'from-blue-500 to-blue-600', enabled: true },
    { name: 'Gaming', blocked: 34, color: 'from-purple-500 to-purple-600', enabled: false },
    { name: 'Violence', blocked: 67, color: 'from-orange-500 to-orange-600', enabled: true },
    { name: 'Gambling', blocked: 12, color: 'from-yellow-500 to-yellow-600', enabled: true },
    { name: 'Drugs', blocked: 8, color: 'from-pink-500 to-pink-600', enabled: true },
  ];

  const keywords = [
    { id: 1, keyword: 'violence', category: 'Violence', matches: 45, status: 'active' },
    { id: 2, keyword: 'inappropriate', category: 'General', matches: 23, status: 'active' },
    { id: 3, keyword: 'gambling', category: 'Gambling', matches: 12, status: 'active' },
    { id: 4, keyword: 'drugs', category: 'Drugs', matches: 8, status: 'paused' },
  ];

  const tabs = [
    { id: 'websites', label: 'Websites', icon: Globe },
    { id: 'categories', label: 'Categories', icon: Filter },
    { id: 'keywords', label: 'Keywords', icon: Search },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">Content Filter</h2>
          <p className="text-slate-400">Manage blocked content and filtering rules</p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2 bg-slate-800 rounded-lg p-1">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-md transition-all duration-200 flex items-center space-x-2 ${
                    activeTab === tab.id
                      ? 'bg-blue-500 text-white'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {activeTab === 'websites' && (
        <div className="space-y-6">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white">Blocked Websites</h3>
              <button
                onClick={() => setShowAddForm(!showAddForm)}
                className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 flex items-center space-x-2"
              >
                <Plus className="w-4 h-4" />
                <span>Add Website</span>
              </button>
            </div>

            {showAddForm && (
              <div className="mb-6 p-4 bg-slate-700/30 rounded-lg">
                <div className="flex space-x-3">
                  <input
                    type="text"
                    value={newRule}
                    onChange={(e) => setNewRule(e.target.value)}
                    placeholder="Enter website URL or domain"
                    className="flex-1 px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button className="px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors">
                    Add
                  </button>
                  <button
                    onClick={() => setShowAddForm(false)}
                    className="px-4 py-2 bg-slate-600 text-white rounded-lg hover:bg-slate-500 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="pb-3 text-slate-300 font-medium">Website</th>
                    <th className="pb-3 text-slate-300 font-medium">Category</th>
                    <th className="pb-3 text-slate-300 font-medium">Status</th>
                    <th className="pb-3 text-slate-300 font-medium">Violations</th>
                    <th className="pb-3 text-slate-300 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700">
                  {blockedWebsites.map((website) => (
                    <tr key={website.id} className="hover:bg-slate-700/30">
                      <td className="py-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-slate-600 rounded-lg flex items-center justify-center">
                            <Globe className="w-4 h-4 text-slate-400" />
                          </div>
                          <span className="text-white font-medium">{website.url}</span>
                        </div>
                      </td>
                      <td className="py-4">
                        <span className="px-2 py-1 bg-slate-700 text-slate-300 rounded-full text-sm">
                          {website.category}
                        </span>
                      </td>
                      <td className="py-4">
                        <div className="flex items-center space-x-2">
                          {website.status === 'active' ? (
                            <>
                              <CheckCircle className="w-4 h-4 text-emerald-400" />
                              <span className="text-emerald-400">Active</span>
                            </>
                          ) : (
                            <>
                              <Eye className="w-4 h-4 text-yellow-400" />
                              <span className="text-yellow-400">Paused</span>
                            </>
                          )}
                        </div>
                      </td>
                      <td className="py-4">
                        <span className="text-red-400 font-medium">{website.violations}</span>
                      </td>
                      <td className="py-4">
                        <div className="flex items-center space-x-2">
                          <button className="p-1 hover:bg-slate-600 rounded">
                            {website.status === 'active' ? (
                              <EyeOff className="w-4 h-4 text-slate-400" />
                            ) : (
                              <Eye className="w-4 h-4 text-slate-400" />
                            )}
                          </button>
                          <button className="p-1 hover:bg-slate-600 rounded">
                            <Trash2 className="w-4 h-4 text-red-400" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'categories' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 bg-gradient-to-br ${category.color} rounded-lg`}>
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={category.enabled}
                    className="sr-only peer"
                    onChange={() => {}}
                  />
                  <div className="w-11 h-6 bg-slate-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                </label>
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{category.name}</h3>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Blocked today</span>
                <span className="text-white font-bold">{category.blocked}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'keywords' && (
        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-white">Keyword Filters</h3>
            <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 flex items-center space-x-2">
              <Plus className="w-4 h-4" />
              <span>Add Keyword</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {keywords.map((keyword) => (
              <div key={keyword.id} className="p-4 bg-slate-700/30 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium">"{keyword.keyword}"</span>
                  <div className="flex items-center space-x-2">
                    {keyword.status === 'active' ? (
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <AlertTriangle className="w-4 h-4 text-yellow-400" />
                    )}
                    <button className="p-1 hover:bg-slate-600 rounded">
                      <Trash2 className="w-4 h-4 text-red-400" />
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">{keyword.category}</span>
                  <span className="text-slate-300">{keyword.matches} matches</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ContentFilter;