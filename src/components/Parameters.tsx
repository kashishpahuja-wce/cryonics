import React from 'react';
import { Thermometer, Zap, Cloud, Wind, DoorOpen, Activity } from 'lucide-react';

export default function Parameters() {
  const params = [
    {
      icon: <Thermometer size={40} className="text-orange-500" />,
      title: "Temperature and Humidity Monitoring",
      desc: "Maintaining stable temperature and humidity levels is crucial in cold storage to protect the quality and safety of perishable goods, preventing issues like mold, degradation, or drying."
    },
    {
      icon: <Zap size={40} className="text-orange-500" />,
      title: "Power Supply Monitoring",
      desc: "Keep track of solar and grid energy usage in your warehouse to ensure continuous operation and optimize energy efficiency."
    },
    {
      icon: <Cloud size={40} className="text-orange-500" />,
      title: "CO2 Levels",
      desc: "Especially in cold storage, monitoring carbon dioxide levels helps ensure worker safety and proper atmospheric conditions for certain products."
    },
    {
      icon: <Wind size={40} className="text-orange-500" />,
      title: "Ambient Monitoring",
      desc: "Track and manage the overall environmental conditions, including temperature, humidity, and air quality, ensuring a stable and safe storage atmosphere."
    },
    {
      icon: <DoorOpen size={40} className="text-orange-500" />,
      title: "Door Status",
      desc: "Frequent or prolonged door openings can lead to temperature spikes, so monitoring door activity helps reduce energy consumption and maintain conditions."
    },
    {
      icon: <Activity size={40} className="text-orange-500" />,
      title: "Power Consumption",
      desc: "Monitoring power ensures the consistent operation of refrigeration systems and alerts for any outages or irregularities."
    }
  ];

  return (
    <section className="py-24 bg-gray-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="h-1.5 w-12 bg-teal-400 rounded-full mr-2"></div>
            <div className="h-1.5 w-12 bg-orange-500 rounded-full"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Essential Parameters for Effective<br />
            <span className="text-orange-500 text-2xl md:text-3xl mt-2 block">Warehouse and Cold Storage Monitoring</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mt-6">
            Our IoT Remote Monitoring System tracks a wide range of parameters crucial for maintaining the optimal conditions in your warehouse and cold storage facilities. These parameters ensure the safety, efficiency, and reliability of your operations:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {params.map((param, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="mb-6 bg-orange-50 w-16 h-16 rounded-xl flex items-center justify-center">
                {param.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{param.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">{param.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
