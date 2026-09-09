import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function Features() {
  return (
    <>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <div className="h-1.5 w-12 bg-teal-400 rounded-full mr-2"></div>
              <div className="h-1.5 w-12 bg-orange-500 rounded-full"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Comprehensive Monitoring Solutions<br />
              <span className="text-orange-500 text-2xl md:text-3xl mt-2 block">Section-Wise Monitoring for Optimal Cold Storage Conditions</span>
            </h2>
            <p className="mt-6 text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              In cold storage environments, maintaining precise temperature control is crucial to protect perishable goods and ensure quality. Our IoT-powered temperature monitoring system offers comprehensive, section-wise control, enabling you to oversee individual chambers and rooms within your warehouse with unmatched precision.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Customized Monitoring</h3>
              <h4 className="text-xl text-orange-500 font-semibold mb-6">for Different Chambers & Sections</h4>
              <p className="text-gray-600 mb-8 text-lg">
                Each cold storage facility has unique requirements, with various chambers dedicated to different products—whether it's pharmaceuticals, fresh produce, or frozen goods. Our intelligent temperature monitoring solution allows you to:
              </p>
              <ul className="space-y-6">
                {[
                  { title: "Segment Monitoring:", desc: "Track and control temperatures in individual chambers or rooms based on the specific needs of the products stored." },
                  { title: "Real-Time Data:", desc: "Analyze the relationship between door open times, temperature variations, and energy consumption." },
                  { title: "Machine and Chamber-Wise Monitoring:", desc: "Track every machine, asset, and chamber to ensure optimal performance and precise storage conditions." },
                  { title: "Automated Alerts:", desc: "Receive tailored alerts for each chamber, ensuring timely actions to prevent spoilage and wastage." }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle2 className="text-teal-500 mt-1 mr-4 flex-shrink-0" size={24} />
                    <div>
                      <span className="font-bold text-gray-900">{item.title}</span> <span className="text-gray-600">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-1 md:order-2 bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl p-8 aspect-square md:aspect-auto md:h-full flex items-center justify-center border border-orange-200">
              <div className="text-orange-400 text-8xl opacity-80 mix-blend-multiply">🌡️</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-orange-500/10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-teal-500/10 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex mb-6">
                <div className="h-1.5 w-12 bg-teal-400 rounded-full mr-2"></div>
                <div className="h-1.5 w-12 bg-orange-500 rounded-full"></div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-3 tracking-tight">Unified Dashboard</h2>
              <h3 className="text-2xl text-orange-400 mb-8 font-medium">for Complete Control</h3>
              <p className="text-gray-300 mb-10 text-lg leading-relaxed">
                Our dashboard gives you a clear view and control of all your warehouse operations, showing <strong className="text-white">temperature and humidity</strong> levels for every location. With one platform, you can easily keep track of all your cold rooms and warehouses, <strong className="text-white">region and territory-wise</strong>, no matter where they are.
              </p>
              <button className="bg-orange-500 text-white px-8 py-4 rounded-full font-bold hover:bg-orange-600 transition shadow-lg shadow-orange-500/25">
                GET STARTED WITH CRYONICS
              </button>
            </div>
            <div className="bg-gray-800 rounded-2xl p-4 shadow-2xl border border-gray-700 transform md:rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="aspect-[4/3] bg-gray-900 rounded-xl flex items-center justify-center border border-gray-700 shadow-inner overflow-hidden relative">
                <div className="absolute top-0 w-full h-10 bg-gray-800 border-b border-gray-700 flex items-center px-4 gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-center mt-10">
                  <div className="text-4xl mb-4">📈</div>
                  <span className="text-gray-400 text-lg font-medium">Dashboard Analytics Preview</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
