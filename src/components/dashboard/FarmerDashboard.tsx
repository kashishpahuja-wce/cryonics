import React from 'react';
import { 
  CheckCircle2, 
  AlertCircle, 
  Sun, 
  Battery, 
  Box, 
  Camera, 
  ArrowRight,
  ShoppingCart,
  Thermometer,
  Bell
} from 'lucide-react';

export default function FarmerDashboard() {
  return (
    <div className="px-4 sm:px-0 flex flex-col gap-6 max-w-4xl mx-auto">
      
      {/* 1. Storage Status */}
      <div className="bg-white rounded-2xl p-6 border border-green-200 shadow-[0_2px_10px_-3px_rgba(0,0,0,0.05)] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1.5 h-full bg-green-500"></div>
        <div className="flex items-start gap-4">
          <div className="p-3 bg-green-50 rounded-full flex-shrink-0 mt-1">
            <CheckCircle2 className="w-8 h-8 text-green-500" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">Storage is healthy</h2>
            <p className="text-gray-600 text-base">All 3 compartments are within safe conditions</p>
            <p className="text-xs text-gray-400 mt-3 font-medium uppercase tracking-wider">Last updated 2 min ago</p>
          </div>
        </div>
      </div>

      {/* 2. Quick Status */}
      <div className="grid grid-cols-3 gap-3 sm:gap-4">
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-gray-100 shadow-[0_2px_8px_-3px_rgba(0,0,0,0.05)] text-center sm:text-left flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-3">
          <div className="text-orange-500 bg-orange-50 p-2 rounded-xl"><Box size={20} /></div>
          <div>
            <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-1">Stored</p>
            <p className="text-lg font-bold text-gray-900">41 <span className="text-sm font-normal text-gray-500">/ 50 kg</span></p>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-gray-100 shadow-[0_2px_8px_-3px_rgba(0,0,0,0.05)] text-center sm:text-left flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-3">
          <div className="text-amber-500 bg-amber-50 p-2 rounded-xl"><Sun size={20} /></div>
          <div>
            <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-1">Energy</p>
            <p className="text-sm font-bold text-gray-900">Solar Active</p>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-gray-100 shadow-[0_2px_8px_-3px_rgba(0,0,0,0.05)] text-center sm:text-left flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-3">
          <div className="text-blue-500 bg-blue-50 p-2 rounded-xl"><Bell size={20} /></div>
          <div>
            <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-1">Actions</p>
            <p className="text-lg font-bold text-gray-900">2 <span className="text-sm font-normal text-gray-500">pending</span></p>
          </div>
        </div>
      </div>

      {/* 3. Today's Actions */}
      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-3 ml-1">Today's Actions</h3>
        <div className="space-y-3">
          <div className="bg-white rounded-2xl p-5 border border-amber-200 shadow-sm flex items-center justify-between group cursor-pointer hover:border-amber-300 transition-colors">
            <div className="flex items-center gap-4">
              <div className="w-3 h-3 bg-amber-500 rounded-full flex-shrink-0 shadow-[0_0_0_4px_rgba(245,158,11,0.1)]"></div>
              <div>
                <h4 className="font-bold text-gray-900 text-lg">Dispatch tomatoes soon</h4>
                <p className="text-gray-600 text-sm mt-0.5">18 kg tomatoes — estimated ~3 days remaining</p>
              </div>
            </div>
            <div className="text-amber-600 font-medium text-sm flex items-center gap-1 opacity-0 md:opacity-100 group-hover:opacity-100 transition-opacity">
              View <ArrowRight size={16} />
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-5 border border-green-200 shadow-sm flex items-center justify-between group cursor-pointer hover:border-green-300 transition-colors">
            <div className="flex items-center gap-4">
              <div className="w-3 h-3 bg-green-500 rounded-full flex-shrink-0 shadow-[0_0_0_4px_rgba(34,197,94,0.1)]"></div>
              <div>
                <h4 className="font-bold text-gray-900 text-lg">Buyer wants 10 kg chilli</h4>
                <p className="text-gray-600 text-sm mt-0.5">Request received today • Nearby buyer</p>
              </div>
            </div>
            <div className="text-green-600 font-medium text-sm flex items-center gap-1 opacity-0 md:opacity-100 group-hover:opacity-100 transition-opacity">
              View <ArrowRight size={16} />
            </div>
          </div>
        </div>
      </div>

      {/* 4. Your Produce */}
      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-3 ml-1 mt-2">Your Produce</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          {/* Batch 1 */}
          <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm cursor-pointer hover:shadow-md transition-shadow relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                Sell soon
              </span>
            </div>
            <div className="text-4xl mb-3">🍅</div>
            <h4 className="text-xl font-bold text-gray-900 mb-1">Tomatoes</h4>
            <div className="flex items-center text-gray-500 text-sm mb-4">
              <span className="font-semibold text-gray-700">18 kg</span>
              <span className="mx-2">•</span>
              <span>Compartment 1</span>
            </div>
            <div className="bg-gray-50 rounded-xl p-3 mb-4">
              <p className="text-xs text-gray-500 uppercase font-medium mb-1">Estimated good for</p>
              <p className="text-2xl font-bold text-gray-900">~3 DAYS</p>
            </div>
            <p className="text-amber-600 text-sm font-medium flex items-center gap-1.5">
              <AlertCircle size={16} /> Plan dispatch soon
            </p>
          </div>

          {/* Batch 2 */}
          <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm cursor-pointer hover:shadow-md transition-shadow relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Good
              </span>
            </div>
            <div className="text-4xl mb-3">🫘</div>
            <h4 className="text-xl font-bold text-gray-900 mb-1">French Beans</h4>
            <div className="flex items-center text-gray-500 text-sm mb-4">
              <span className="font-semibold text-gray-700">14 kg</span>
              <span className="mx-2">•</span>
              <span>Compartment 2</span>
            </div>
            <div className="bg-gray-50 rounded-xl p-3 mb-4">
              <p className="text-xs text-gray-500 uppercase font-medium mb-1">Estimated good for</p>
              <p className="text-2xl font-bold text-gray-900">~5 DAYS</p>
            </div>
            <p className="text-green-600 text-sm font-medium flex items-center gap-1.5">
              <CheckCircle2 size={16} /> No action needed
            </p>
          </div>

          {/* Batch 3 */}
          <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm cursor-pointer hover:shadow-md transition-shadow relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Good
              </span>
            </div>
            <div className="text-4xl mb-3">🌶️</div>
            <h4 className="text-xl font-bold text-gray-900 mb-1">Chilli</h4>
            <div className="flex items-center text-gray-500 text-sm mb-4">
              <span className="font-semibold text-gray-700">9 kg</span>
              <span className="mx-2">•</span>
              <span>Compartment 3</span>
            </div>
            <div className="bg-gray-50 rounded-xl p-3 mb-4">
              <p className="text-xs text-gray-500 uppercase font-medium mb-1">Estimated good for</p>
              <p className="text-2xl font-bold text-gray-900">~4 DAYS</p>
            </div>
            <p className="text-green-600 text-sm font-medium flex items-center gap-1.5">
              <CheckCircle2 size={16} /> No action needed
            </p>
          </div>
        </div>
      </div>

      {/* 5. Buyer Requests */}
      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-3 ml-1 mt-2">Buyer Requests</h3>
        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-blue-50 rounded-xl text-blue-600 hidden sm:block">
              <ShoppingCart size={24} />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xl">🍅</span>
                <h4 className="font-bold text-gray-900 text-lg">Tomatoes</h4>
                <span className="font-bold text-gray-900 text-lg px-2 bg-gray-100 rounded-md">10 kg</span>
              </div>
              <p className="text-gray-600 text-sm mb-1">Needed by: <span className="font-medium text-gray-900">Tomorrow</span></p>
              <p className="text-gray-500 text-sm">Buyer: Nearby buyer</p>
            </div>
          </div>
          <div className="flex gap-3 mt-2 sm:mt-0">
            <button className="flex-1 sm:flex-none px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors">
              View
            </button>
            <button className="flex-1 sm:flex-none px-4 py-2 bg-[#166534] text-white rounded-lg font-medium hover:bg-green-800 transition-colors">
              Accept
            </button>
          </div>
        </div>
      </div>

      {/* 6 & 7. Bottom Row: Storage View & Energy */}
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        
        {/* Storage View */}
        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
              <Camera size={20} className="text-gray-500" />
              Storage View
            </h3>
            <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-md">8 min ago</span>
          </div>
          <div className="aspect-video bg-gray-100 rounded-xl mb-4 relative overflow-hidden flex items-center justify-center border border-gray-200">
            {/* Placeholder for actual image */}
            <div className="absolute inset-0 bg-gray-200 animate-pulse opacity-50"></div>
            <div className="text-center z-10">
              <span className="text-4xl opacity-50">🍅🫘🌶️</span>
              <p className="text-sm font-medium text-gray-500 mt-2">Chamber 1-3 View</p>
            </div>
          </div>
          <button className="w-full py-2.5 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors text-sm">
            Open Live View
          </button>
        </div>

        {/* Energy Status */}
        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Sun size={20} className="text-gray-500" />
              Energy
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center flex-shrink-0">
                  <Sun size={20} className="text-amber-500" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Solar powering storage</h4>
                  <p className="text-gray-500 text-sm mt-0.5">Primary source active</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0">
                  <Battery size={20} className="text-green-500" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Backup available</h4>
                  <p className="text-gray-500 text-sm mt-0.5">Thermal & battery storage ready</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
