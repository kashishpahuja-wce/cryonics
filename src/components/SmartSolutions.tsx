import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function SmartSolutions() {
  const solutions = [
    { title: "Smart Products:", desc: "Seamlessly transforming your existing product line into smart, interconnected systems that enhance efficiency, and open new avenues for innovation." },
    { title: "Additional Revenue:", desc: "Unlock additional revenue streams by enhancing cold room functionalities, enabling smart monitoring, preventive maintenance, and energy optimization." },
    { title: "White-Label Platform:", desc: "Offer your own branded IoT monitoring system, enabling your customers to monitor and control their cold rooms via a web or mobile app." },
    { title: "Market Leadership:", desc: "Offer cutting-edge technology that differentiates your cold rooms from competitors, helping you capture a larger share of the market." },
    { title: "Plug-and-Play Sensors:", desc: "Our IoT sensors are easy to install and configure, making it simple for manufacturers to add smart features to their existing product lines." },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 bg-gray-100 rounded-3xl p-8 aspect-[4/3] flex items-center justify-center border border-gray-200 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200"></div>
            <div className="relative z-10 text-center">
              <div className="text-6xl mb-6 bg-white p-6 rounded-full shadow-md inline-block">🏭</div>
              <p className="font-semibold text-xl text-gray-700">OEM Solutions Preview</p>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="flex mb-6">
              <div className="h-1.5 w-12 bg-teal-400 rounded-full mr-2"></div>
              <div className="h-1.5 w-12 bg-orange-500 rounded-full"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Smart Solutions for Cold Room
            </h2>
            <h3 className="text-2xl text-orange-500 font-semibold mb-6">
              Manufacturers: Empowering Market Leadership
            </h3>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Our IoT-powered smart solutions enable cold room manufacturers to incorporate intelligent features that ensure precise environmental control, energy efficiency, and real-time data analytics.
            </p>
            
            <ul className="space-y-6">
              {solutions.map((item, idx) => (
                <li key={idx} className="flex items-start group">
                  <CheckCircle2 className="text-teal-500 mt-1 mr-4 flex-shrink-0 group-hover:scale-110 transition-transform" size={24} />
                  <div>
                    <span className="font-bold text-gray-900">{item.title}</span> <span className="text-gray-600">{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
