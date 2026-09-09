import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-orange-50 via-white to-orange-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <span className="text-sm font-bold tracking-wider text-orange-600 uppercase mb-4 block">
            Cold Storage Monitoring | Rated #1
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-6 leading-tight">
            Maximize Cold Storage Operations <br className="hidden md:block" />
            <span className="text-orange-500">with Efficient, Cloud-Based Monitoring</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Optimize your cold storage warehouse with our advanced IoT-based cold storage monitoring solutions. Designed specifically for modern warehousing needs, our platform delivers real-time insights into critical parameters like temperature, humidity, energy usage, and more. Ensure optimal storage conditions, minimize product loss through loss prevention technology, and achieve streamlined operations for a more efficient and sustainable cold chain.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-orange-500 rounded-full hover:bg-orange-600 transition-colors duration-200 shadow-lg shadow-orange-500/30">
              Begin your free trial
              <ArrowRight className="ml-2" size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
