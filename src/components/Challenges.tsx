import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function Challenges() {
  const challenges = [
    {
      title: "Manual touchpoints:",
      desc: "Manual data entry introduces the risk of errors, such as typos, incorrect values, or missed entries."
    },
    {
      title: "Improper Storage of Perishable Goods:",
      desc: "Protect sensitive items with precise environmental controls to avoid mold and damage."
    },
    {
      title: "Energy Efficiency Monitoring:",
      desc: "Monitoring energy usage is necessary to reduce operational costs and minimize environmental impact."
    },
    {
      title: "Regulatory Compliance:",
      desc: "Rules are strict in cold storage. Meeting food safety standards is a hassle, with lots of paperwork and inspections."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="h-1.5 w-12 bg-teal-400 rounded-full mr-2"></div>
            <div className="h-1.5 w-12 bg-orange-500 rounded-full"></div>
          </div>
          <h2 className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-3">
            Avoid Costly Spoilage & Start Saving
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
            Cryonics Cold Storage Monitoring<br />
            <span className="text-orange-500">Protect Perishables with Real-Time & Alerts</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-gray-100 rounded-2xl p-8 aspect-square flex flex-col items-center justify-center border border-gray-200">
            <div className="text-gray-400 text-center flex flex-col items-center">
              <div className="text-6xl mb-6 bg-white p-6 rounded-full shadow-sm">📊</div>
              <p className="font-semibold text-xl text-gray-700">Warehousing Operations Visualization</p>
              <p className="text-sm mt-2">Interactive Dashboard Preview</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-3">Key Warehousing Challenges</h4>
            <h5 className="text-3xl font-bold text-gray-900 mb-6">
              Common Challenges <br />
              <span className="text-orange-500">in Warehouse Operations</span>
            </h5>
            <p className="text-gray-600 mb-8 text-lg">
              Warehousing operations face several challenges that can hinder efficiency and profitability. Our IoT monitoring system addresses these challenges head-on, providing enhanced visibility, control, and automation.
            </p>
            
            <ul className="space-y-6">
              {challenges.map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <CheckCircle2 className="text-teal-500 mt-1 mr-4 flex-shrink-0" size={24} />
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
