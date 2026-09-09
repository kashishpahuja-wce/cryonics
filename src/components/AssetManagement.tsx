import React from 'react';
import { Settings, Sun, Grid, Zap, Battery, Snowflake } from 'lucide-react';

export default function AssetManagement() {
  const assets = [
    { icon: <Settings size={40} />, title: 'Compressors' },
    { icon: <Sun size={40} />, title: 'Solar Panels' },
    { icon: <Grid size={40} />, title: 'Grids' },
    { icon: <Zap size={40} />, title: 'Generators' },
    { icon: <Battery size={40} />, title: 'Energy' },
    { icon: <Snowflake size={40} />, title: 'Chillers' },
  ];

  return (
    <section className="py-20 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="h-1.5 w-12 bg-teal-400 rounded-full mr-2"></div>
            <div className="h-1.5 w-12 bg-orange-500 rounded-full"></div>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">COLD STORAGE ASSETS MANAGEMENT</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Ensure seamless operation with real-time monitoring of critical facility components.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {assets.map((asset, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 flex flex-col items-center justify-center hover:shadow-md hover:border-orange-200 transition-all duration-300 group cursor-pointer">
              <div className="text-orange-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                {asset.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 text-center">{asset.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
