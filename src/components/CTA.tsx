import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 bg-orange-50 border-t border-orange-100 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 -mt-32 -mr-32 w-96 h-96 rounded-full bg-orange-200/50 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -mb-32 -ml-32 w-96 h-96 rounded-full bg-teal-200/30 blur-3xl"></div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
          Don't Leave Without This! <br className="hidden md:block" />
          Protect Your Cold Storage Today.
        </h2>
        <h3 className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          Want to prevent spoilage, reduce energy costs, and get real-time alerts? Contact us to optimize your cold storage and warehouse with IoT monitoring.
        </h3>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <button className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white bg-orange-500 rounded-full hover:bg-orange-600 hover:-translate-y-1 transition-all duration-300 shadow-xl shadow-orange-500/25">
            Start a Free trial
            <ArrowRight className="ml-2" size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
