import React from 'react';
import { 
  Activity, 
  Wifi, 
  Cpu, 
  ThermometerSnowflake, 
  Database,
  Camera,
  ArrowRight,
  BatteryCharging,
  Zap,
  Sun,
  Snowflake,
  TrendingUp
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const temperatureData = [
  { time: '00:00', c1: 8.5, c2: 7.2, c3: 10.1 },
  { time: '04:00', c1: 8.4, c2: 7.1, c3: 10.0 },
  { time: '08:00', c1: 8.6, c2: 7.3, c3: 10.2 },
  { time: '12:00', c1: 9.1, c2: 7.5, c3: 10.5 },
  { time: '16:00', c1: 8.9, c2: 7.4, c3: 10.3 },
  { time: '20:00', c1: 8.6, c2: 7.2, c3: 10.1 },
  { time: '24:00', c1: 8.5, c2: 7.2, c3: 10.0 },
];

export default function TechnicalDashboard() {
  return (
    <div className="px-4 sm:px-0 flex flex-col gap-6 max-w-6xl mx-auto pb-12">
      
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">System Diagnostics</h1>
          <p className="text-sm text-gray-500">Real-time technical metrics and energy routing</p>
        </div>
        <div className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-lg border border-green-200">
          <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></div>
          <span className="text-green-700 font-semibold text-sm tracking-wide">SYSTEM ONLINE</span>
        </div>
      </div>

      {/* 1. Core Subsystems */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex flex-col items-center justify-center text-center gap-2">
          <Cpu className="text-gray-400" size={24} />
          <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Controller</span>
          <span className="text-sm font-bold text-green-600 flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-green-500"></div> Online</span>
        </div>
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex flex-col items-center justify-center text-center gap-2">
          <Database className="text-gray-400" size={24} />
          <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Sensors</span>
          <span className="text-sm font-bold text-green-600 flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-green-500"></div> Healthy</span>
        </div>
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex flex-col items-center justify-center text-center gap-2">
          <ThermometerSnowflake className="text-gray-400" size={24} />
          <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Refrigeration</span>
          <span className="text-sm font-bold text-blue-600 flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Running</span>
        </div>
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex flex-col items-center justify-center text-center gap-2">
          <Wifi className="text-gray-400" size={24} />
          <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Network</span>
          <span className="text-sm font-bold text-green-600 flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-green-500"></div> Stable</span>
        </div>
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex flex-col items-center justify-center text-center gap-2 col-span-2 md:col-span-1">
          <Camera className="text-gray-400" size={24} />
          <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Camera</span>
          <span className="text-sm font-bold text-green-600 flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-green-500"></div> Online</span>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        
        {/* Left Column: Chambers & Charts */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
              <h3 className="font-bold text-gray-900 flex items-center gap-2">
                <ThermometerSnowflake size={18} className="text-blue-500" />
                Technical Chamber Monitoring
              </h3>
            </div>
            
            <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
              
              {/* C1 */}
              <div className="p-6">
                <h4 className="text-sm font-bold text-gray-900 mb-4 bg-gray-100 px-3 py-1.5 rounded inline-block">Compartment 1</h4>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-medium mb-1">Temperature</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-gray-900">8.6°C</span>
                      <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded">Target: 8–10°C</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-medium mb-1">Humidity</p>
                    <p className="text-lg font-bold text-gray-900">91%</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-medium mb-1">Product Temp</p>
                    <p className="text-lg font-bold text-gray-900">9.0°C</p>
                  </div>
                  <div className="pt-2 border-t border-gray-100">
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-green-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div> Normal
                    </span>
                  </div>
                </div>
              </div>

              {/* C2 */}
              <div className="p-6">
                <h4 className="text-sm font-bold text-gray-900 mb-4 bg-gray-100 px-3 py-1.5 rounded inline-block">Compartment 2</h4>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-medium mb-1">Temperature</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-gray-900">7.2°C</span>
                      <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded">Target: 6–8°C</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-medium mb-1">Humidity</p>
                    <p className="text-lg font-bold text-gray-900">90%</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-medium mb-1">Product Temp</p>
                    <p className="text-lg font-bold text-gray-900">7.4°C</p>
                  </div>
                  <div className="pt-2 border-t border-gray-100">
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-green-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div> Normal
                    </span>
                  </div>
                </div>
              </div>

              {/* C3 */}
              <div className="p-6">
                <h4 className="text-sm font-bold text-gray-900 mb-4 bg-gray-100 px-3 py-1.5 rounded inline-block">Compartment 3</h4>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-medium mb-1">Temperature</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-gray-900">10.0°C</span>
                      <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded">Target: 9–11°C</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-medium mb-1">Humidity</p>
                    <p className="text-lg font-bold text-gray-900">88%</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-medium mb-1">Product Temp</p>
                    <p className="text-lg font-bold text-gray-900">10.2°C</p>
                  </div>
                  <div className="pt-2 border-t border-gray-100">
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-green-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div> Normal
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Charts */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-gray-900 flex items-center gap-2">
                <TrendingUp size={18} className="text-gray-500" />
                Temperature Trends (24h)
              </h3>
              <div className="flex gap-2">
                <span className="text-xs font-medium bg-gray-100 text-gray-600 px-2 py-1 rounded cursor-pointer">24h</span>
                <span className="text-xs font-medium text-gray-500 px-2 py-1 cursor-pointer hover:bg-gray-50 rounded">7d</span>
                <span className="text-xs font-medium text-gray-500 px-2 py-1 cursor-pointer hover:bg-gray-50 rounded">30d</span>
              </div>
            </div>
            
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={temperatureData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} dx={-10} domain={['dataMin - 1', 'dataMax + 1']} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  />
                  <Line type="monotone" dataKey="c1" name="Comp 1" stroke="#ef4444" strokeWidth={2} dot={{ r: 3, strokeWidth: 2 }} activeDot={{ r: 5 }} />
                  <Line type="monotone" dataKey="c2" name="Comp 2" stroke="#3b82f6" strokeWidth={2} dot={{ r: 3, strokeWidth: 2 }} activeDot={{ r: 5 }} />
                  <Line type="monotone" dataKey="c3" name="Comp 3" stroke="#f59e0b" strokeWidth={2} dot={{ r: 3, strokeWidth: 2 }} activeDot={{ r: 5 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center gap-6 mt-4">
              <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-[#ef4444]"></div><span className="text-xs text-gray-600 font-medium">C1 (8-10°C)</span></div>
              <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-[#3b82f6]"></div><span className="text-xs text-gray-600 font-medium">C2 (6-8°C)</span></div>
              <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-[#f59e0b]"></div><span className="text-xs text-gray-600 font-medium">C3 (9-11°C)</span></div>
            </div>
          </div>

        </div>

        {/* Right Column: Energy */}
        <div className="flex flex-col gap-6">
          
          {/* Energy Flow Diagram */}
          <div className="bg-gray-900 rounded-2xl p-6 text-white shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>
            
            <h3 className="font-bold text-white mb-6 flex items-center gap-2 relative z-10">
              <Zap size={18} className="text-amber-400" />
              Real-time Energy Flow
            </h3>

            <div className="relative h-48 w-full flex items-center justify-center z-10">
              {/* Nodes */}
              <div className="absolute top-0 bg-gray-800 border border-gray-700 p-2 rounded-lg flex flex-col items-center min-w-[80px]">
                <Sun size={20} className="text-amber-400 mb-1" />
                <span className="text-xs font-bold">SOLAR PV</span>
                <span className="text-[10px] text-gray-400">1.2 kW</span>
              </div>

              <div className="absolute bottom-0 left-0 bg-gray-800 border border-gray-700 p-2 rounded-lg flex flex-col items-center min-w-[80px]">
                <Zap size={20} className="text-blue-400 mb-1" />
                <span className="text-xs font-bold">LOAD</span>
                <span className="text-[10px] text-gray-400">0.9 kW</span>
              </div>

              <div className="absolute bottom-0 right-0 bg-gray-800 border border-gray-700 p-2 rounded-lg flex flex-col items-center min-w-[80px]">
                <BatteryCharging size={20} className="text-green-400 mb-1" />
                <span className="text-xs font-bold">BATTERY</span>
                <span className="text-[10px] text-gray-400">Charging</span>
              </div>

              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white p-2 rounded shadow-[0_0_15px_rgba(37,99,235,0.5)] font-bold text-xs">
                EMS
              </div>

              {/* Flow Arrows (Simplified CSS representations) */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: -1 }}>
                <path d="M 50% 20% L 50% 40%" stroke="#fcd34d" strokeWidth="2" strokeDasharray="4 4" className="animate-[dash_1s_linear_infinite]" fill="none" />
                <path d="M 40% 60% L 20% 80%" stroke="#60a5fa" strokeWidth="2" strokeDasharray="4 4" className="animate-[dash_1s_linear_infinite]" fill="none" />
                <path d="M 60% 60% L 80% 80%" stroke="#4ade80" strokeWidth="2" strokeDasharray="4 4" className="animate-[dash_1s_linear_infinite]" fill="none" />
              </svg>
            </div>
            
            <div className="mt-4 bg-gray-800/50 rounded-lg p-3 border border-gray-700/50">
              <div className="text-xs text-gray-400 mb-1 font-medium">CURRENT ROUTING</div>
              <div className="text-sm font-bold text-white flex items-center gap-2">
                PV <ArrowRight size={14} className="text-amber-400" /> Load + Battery
              </div>
            </div>
          </div>

          {/* Today's Energy Stats */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
            <h3 className="font-bold text-gray-900 mb-4">Today's Energy</h3>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600 font-medium">PV Generation</span>
                <span className="font-bold text-gray-900">1.4 kWh</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600 font-medium">Load Consumed</span>
                <span className="font-bold text-gray-900">1.3 kWh</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600 font-medium">Battery</span>
                <span className="font-bold text-green-600">Charging (87%)</span>
              </div>
              <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                <span className="text-sm text-gray-600 font-medium">Grid Usage</span>
                <span className="font-bold text-gray-900">0.0 kWh</span>
              </div>
            </div>
          </div>

          {/* PCM Thermal Storage */}
          <div className="bg-white rounded-2xl border border-blue-200 shadow-sm p-6 relative overflow-hidden">
            <div className="absolute right-0 top-0 p-4 opacity-10">
              <Snowflake size={64} className="text-blue-500" />
            </div>
            <h3 className="font-bold text-gray-900 mb-4 relative z-10">PCM Thermal Storage</h3>
            
            <div className="space-y-4 relative z-10">
              <div className="flex items-center gap-2">
                <span className="px-2 py-1 rounded bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">Charging</span>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-gray-500 uppercase font-medium mb-1">PCM Temp</p>
                  <p className="font-bold text-gray-900">-2.4°C</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-medium mb-1">Est. Backup</p>
                  <p className="font-bold text-gray-900">~6.5 hrs</p>
                </div>
              </div>
              
              <div className="w-full bg-gray-100 rounded-full h-2 mb-1 mt-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '85%' }}></div>
              </div>
              <p className="text-xs text-gray-500 text-right font-medium">85% Capacity</p>
            </div>
          </div>

        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes dash {
          to {
            stroke-dashoffset: -8;
          }
        }
      `}} />
    </div>
  );
}
