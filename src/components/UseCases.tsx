import React from 'react';
import { Store, Activity, Fish, FlaskConical, Stethoscope, UtensilsCrossed, Wine, Drumstick } from 'lucide-react';

export default function UseCases() {
  const cases = [
    { icon: <Store size={32} />, title: "Supermarkets & Darkstores" },
    { icon: <Activity size={32} />, title: "Healthcare Facilities" },
    { icon: <Fish size={32} />, title: "Fish and Seafood Markets" },
    { icon: <FlaskConical size={32} />, title: "Pharmaceutical and Biotech" },
    { icon: <Stethoscope size={32} />, title: "Dye and Cosmetics Industry" },
    { icon: <UtensilsCrossed size={32} />, title: "Restaurants and Food Services" },
    { icon: <Wine size={32} />, title: "Breweries & Wineries" },
    { icon: <Drumstick size={32} />, title: "Meat & Poultry Industry" },
  ];

  return (
    <section className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="h-1.5 w-12 bg-teal-400 rounded-full mr-2"></div>
            <div className="h-1.5 w-12 bg-orange-500 rounded-full"></div>
          </div>
          <h2 className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-3">USE CASES</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Applications and Use Cases of :<br />
            <span className="text-orange-500 text-2xl md:text-3xl block mt-2">Cold Storage Monitoring Across Various Industries</span>
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-6">
            Cold storage monitoring is essential across a wide range of industries that rely on precise temperature control to ensure the quality, safety, and longevity of perishable goods.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cases.map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl aspect-[4/3] flex flex-col items-center justify-center p-6 text-center border border-gray-200 hover:border-orange-500 hover:shadow-lg transition-all duration-300 group cursor-pointer">
              <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 group-hover:bg-orange-50 group-hover:text-orange-500 text-gray-600 transition-all duration-300">
                {item.icon}
              </div>
              <h4 className="font-semibold text-gray-900 group-hover:text-orange-500 transition-colors text-sm md:text-base">{item.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
