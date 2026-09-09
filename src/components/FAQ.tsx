import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      q: "What is cold storage monitoring?",
      a: "Cold storage monitoring involves continuously tracking temperature, humidity, and other environmental factors inside storage units to maintain product quality and safety."
    },
    {
      q: "Why is it important to monitor cold storage?",
      a: "Monitoring is crucial to prevent spoilage, maintain product efficacy, and comply with industry regulations. It ensures that storage conditions do not deviate from required temperature ranges, reducing financial losses and health risks."
    },
    {
      q: "What technologies are commonly used for monitoring cold storage?",
      a: "Modern monitoring systems utilize wireless temperature sensors, data loggers, automated alerts, and cloud-based dashboards to track and manage environmental conditions in real time."
    },
    {
      q: "What happens if temperature conditions are not maintained?",
      a: "Failure to maintain proper temperatures can lead to spoilage, reduced shelf life, compliance violations, and health risks. This is particularly critical for industries like healthcare and food, where temperature deviations can have serious consequences."
    },
    {
      q: "What key features should a monitoring system have?",
      a: "A robust monitoring system should provide real-time tracking, instant alert notifications for temperature fluctuations, remote access, historical data logging, and backup power in case of outages."
    },
    {
      q: "How is Cryonics different from other cold storage monitoring solutions?",
      a: "Cryonics offers a centralized, AI-powered cold storage monitoring platform with multi-site management, remote configuration of site and asset parameters, and real-time IoT integration. It provides smart alerts, error logs diagnostics, compliance assurance, and asset performance tracking to maximize efficiency, ensure regulatory compliance, and optimize ROI."
    }
  ];

  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="h-1.5 w-12 bg-teal-400 rounded-full mr-2"></div>
            <div className="h-1.5 w-12 bg-orange-500 rounded-full"></div>
          </div>
          <h2 className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-3">FAQs</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
            Got Questions? <br />
            <span className="text-orange-500 mt-2 block">Quick Answers to Common Questions!</span>
          </h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className={`border ${open === idx ? 'border-orange-500 shadow-md ring-1 ring-orange-500' : 'border-gray-200 hover:border-orange-200'} rounded-2xl overflow-hidden transition-all duration-200`}>
              <button 
                className="w-full px-6 py-5 text-left font-bold text-gray-900 flex justify-between items-center focus:outline-none"
                onClick={() => setOpen(open === idx ? null : idx)}
              >
                <span className="text-lg pr-8">{faq.q}</span>
                {open === idx ? 
                  <span className="w-8 h-8 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center flex-shrink-0 transition-transform"><Minus size={18} /></span> : 
                  <span className="w-8 h-8 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center flex-shrink-0 transition-transform"><Plus size={18} /></span>
                }
              </button>
              {open === idx && (
                <div className="px-6 pb-6 text-gray-600 leading-relaxed text-lg border-t border-gray-100 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
