import React, { useState } from 'react';
import { 
  Thermometer, 
  Droplets, 
  Wind, 
  Search, 
  ChevronDown, 
  ChevronUp, 
  MapPin, 
  QrCode, 
  Truck, 
  CheckCircle2,
  X
} from 'lucide-react';

// Mock data for the Vendor Dashboard
const facilityStatus = [
  { chamber: "Chamber 1", temp: "6.2°C", targetTemp: "6.0°C", rh: "96%", status: "Cooling", color: "text-blue-500", bg: "bg-blue-50", border: "border-blue-200" },
  { chamber: "Chamber 2", temp: "8.5°C", targetTemp: "8.5°C", rh: "90%", status: "Idle", color: "text-green-500", bg: "bg-green-50", border: "border-green-200" },
  { chamber: "Chamber 3", temp: "2.1°C", targetTemp: "2.0°C", rh: "85%", status: "Cooling", color: "text-blue-500", bg: "bg-blue-50", border: "border-blue-200" },
];

const farmersDatabase = [
  {
    id: "F-1029",
    name: "Ramesh Kumar",
    village: "Green Valley",
    totalStored: "32.5 kg",
    activeBatches: 2,
    batches: [
      {
        batchId: "FB-2026-00127",
        crop: "French Beans",
        quantity: "18.5 kg",
        location: "📍 Chamber 1 → Rack 2 → Bin B03",
        temp: "6.2°C",
        rh: "96%",
        status: "SAFE",
        statusColor: "text-green-600 bg-green-100",
        estimatedLife: "~8 days",
        harvestDate: "10 Sep 2026",
        storedDate: "10 Sep 2026 14:32",
        targetTemp: "5–7.5°C",
        targetRh: "95–100%",
        compartment: "C1",
        rack: "R2",
        position: "B03"
      },
      {
        batchId: "TM-2026-0084",
        crop: "Tomatoes",
        quantity: "14.0 kg",
        location: "📍 Chamber 2 → Rack 1 → Bin A01",
        temp: "8.5°C",
        rh: "90%",
        status: "ATTENTION",
        statusColor: "text-amber-600 bg-amber-100",
        estimatedLife: "~3 days",
        harvestDate: "05 Sep 2026",
        storedDate: "06 Sep 2026 09:15",
        targetTemp: "8–10°C",
        targetRh: "90–95%",
        compartment: "C2",
        rack: "R1",
        position: "A01"
      }
    ]
  },
  {
    id: "F-1030",
    name: "Suresh Patel",
    village: "Riverwood FPO",
    totalStored: "45.0 kg",
    activeBatches: 1,
    batches: [
      {
        batchId: "CH-2026-0045",
        crop: "Green Chilli",
        quantity: "45.0 kg",
        location: "📍 Chamber 2 → Rack 3 → Bin C12",
        temp: "8.5°C",
        rh: "90%",
        status: "SAFE",
        statusColor: "text-green-600 bg-green-100",
        estimatedLife: "~12 days",
        harvestDate: "08 Sep 2026",
        storedDate: "09 Sep 2026 11:00",
        targetTemp: "7–9°C",
        targetRh: "90–95%",
        compartment: "C2",
        rack: "R3",
        position: "C12"
      }
    ]
  }
];

export default function VendorDashboard() {
  const [expandedFarmer, setExpandedFarmer] = useState<string | null>(null);
  const [qrModalOpen, setQrModalOpen] = useState(false);
  const [selectedBatch, setSelectedBatch] = useState<any>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleFarmer = (farmerId: string) => {
    if (expandedFarmer === farmerId) {
      setExpandedFarmer(null);
    } else {
      setExpandedFarmer(farmerId);
    }
  };

  const handleViewQR = (batch: any, farmerName: string) => {
    setSelectedBatch({ ...batch, farmerName });
    setQrModalOpen(true);
  };

  const filteredFarmers = farmersDatabase.filter(f => 
    f.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    f.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="px-4 sm:px-0 flex flex-col gap-8 max-w-6xl mx-auto pb-12">
      
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Vendor Facility Portal</h1>
        <p className="text-sm text-gray-500">Monitor overall cooling conditions and manage farmer storage databases.</p>
      </div>

      {/* 1. Overall Cooling Conditions (Facility Health) */}
      <section>
        <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Wind size={20} className="text-gray-500" />
          Current Cooling Conditions
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          {facilityStatus.map((chamber, idx) => (
            <div key={idx} className={`bg-white rounded-2xl p-5 border ${chamber.border} shadow-sm relative overflow-hidden`}>
              <div className={`absolute top-0 right-0 w-24 h-24 rounded-full ${chamber.bg} -mr-8 -mt-8 opacity-50`}></div>
              <h3 className="font-bold text-gray-900 mb-4 relative z-10">{chamber.chamber}</h3>
              
              <div className="grid grid-cols-2 gap-4 relative z-10">
                <div>
                  <div className="flex items-center gap-1.5 text-gray-500 text-xs uppercase font-semibold mb-1">
                    <Thermometer size={14} /> Temp
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{chamber.temp}</div>
                  <div className="text-xs text-gray-400 mt-1">Target: {chamber.targetTemp}</div>
                </div>
                <div>
                  <div className="flex items-center gap-1.5 text-gray-500 text-xs uppercase font-semibold mb-1">
                    <Droplets size={14} /> Humidity
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{chamber.rh}</div>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between relative z-10">
                <span className="text-sm text-gray-500 font-medium">Status</span>
                <span className={`text-sm font-bold flex items-center gap-1.5 ${chamber.color}`}>
                  <div className={`w-2 h-2 rounded-full ${chamber.bg.replace('bg-', 'bg-').replace('50', '500')}`}></div>
                  {chamber.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Farmer Database Table */}
      <section>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
          <h2 className="text-lg font-bold text-gray-900">Farmer Storage Database</h2>
          <div className="relative w-full sm:w-72">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={16} className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search farmers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-orange-500 focus:border-orange-500 sm:text-sm transition-colors shadow-sm"
            />
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-12 gap-4 p-4 bg-gray-50 border-b border-gray-200 text-xs font-semibold text-gray-500 uppercase tracking-wider hidden sm:grid">
            <div className="col-span-3">Farmer Name</div>
            <div className="col-span-3">Village / FPO</div>
            <div className="col-span-2">Active Batches</div>
            <div className="col-span-2">Total Stored</div>
            <div className="col-span-2 text-right">Actions</div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-gray-100">
            {filteredFarmers.map((farmer) => (
              <div key={farmer.id} className="flex flex-col">
                {/* Farmer Row */}
                <div 
                  className={`grid grid-cols-1 sm:grid-cols-12 gap-4 p-4 items-center cursor-pointer hover:bg-gray-50 transition-colors ${expandedFarmer === farmer.id ? 'bg-orange-50/30' : ''}`}
                  onClick={() => toggleFarmer(farmer.id)}
                >
                  <div className="sm:col-span-3 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center font-bold text-xs flex-shrink-0">
                      {farmer.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">{farmer.name}</div>
                      <div className="text-xs text-gray-500">{farmer.id}</div>
                    </div>
                  </div>
                  <div className="sm:col-span-3 text-sm text-gray-600 hidden sm:block">{farmer.village}</div>
                  <div className="sm:col-span-2 text-sm font-medium text-gray-900 hidden sm:block">{farmer.activeBatches}</div>
                  <div className="sm:col-span-2 text-sm font-medium text-gray-900 hidden sm:block">{farmer.totalStored}</div>
                  <div className="sm:col-span-2 flex justify-between sm:justify-end items-center text-sm text-gray-500">
                    <span className="sm:hidden font-medium text-gray-900">{farmer.activeBatches} batches • {farmer.totalStored}</span>
                    {expandedFarmer === farmer.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                </div>

                {/* Expanded Batches Details */}
                {expandedFarmer === farmer.id && (
                  <div className="bg-gray-50/50 p-4 sm:p-6 border-t border-gray-100">
                    <div className="grid gap-4 lg:grid-cols-2">
                      {farmer.batches.map((batch, bIdx) => (
                        <div key={bIdx} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                          <div className="flex justify-between items-start mb-3">
                            <div>
                              <span className="text-xs font-semibold text-gray-500 tracking-wider">BATCH {batch.batchId}</span>
                              <h4 className="text-lg font-bold text-gray-900 mt-1">{batch.crop}</h4>
                            </div>
                            <span className={`px-2.5 py-1 rounded-md text-xs font-bold ${batch.statusColor} flex items-center gap-1.5`}>
                              {batch.status === 'SAFE' ? <CheckCircle2 size={14} /> : <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>}
                              {batch.status}
                            </span>
                          </div>

                          <div className="text-2xl font-bold text-gray-900 mb-4">{batch.quantity}</div>
                          
                          <div className="space-y-2 mb-6">
                            <p className="text-sm text-gray-600 flex items-center gap-2">
                              <MapPin size={16} className="text-gray-400" />
                              {batch.location}
                            </p>
                            <p className="text-sm text-gray-600 flex items-center gap-2 font-medium">
                              <Thermometer size={16} className="text-gray-400" /> {batch.temp}
                              <span className="text-gray-300 mx-1">|</span>
                              <Droplets size={16} className="text-gray-400" /> {batch.rh}
                            </p>
                          </div>

                          <div className="bg-gray-50 rounded-lg p-3 mb-5 border border-gray-100">
                            <p className="text-xs text-gray-500 uppercase font-medium">Estimated remaining storage life:</p>
                            <p className="text-lg font-bold text-gray-900">{batch.estimatedLife}</p>
                          </div>

                          <div className="flex gap-3">
                            <button 
                              onClick={() => handleViewQR(batch, farmer.name)}
                              className="flex-1 py-2.5 bg-white border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 shadow-sm"
                            >
                              <QrCode size={18} />
                              View QR
                            </button>
                            <button className="flex-1 py-2.5 bg-[#166534] border border-[#166534] text-white rounded-lg font-semibold hover:bg-green-800 transition-colors flex items-center justify-center gap-2 shadow-sm">
                              <Truck size={18} />
                              Dispatch
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            {filteredFarmers.length === 0 && (
              <div className="p-8 text-center text-gray-500">
                No farmers found matching your search.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 3. QR Code Document Modal */}
      {qrModalOpen && selectedBatch && (
        <div className="fixed inset-0 bg-gray-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-100 flex justify-between items-center">
              <h3 className="font-bold text-gray-900 flex items-center gap-2">
                <QrCode size={20} className="text-orange-500" />
                QR Code Scanned by Farmer
              </h3>
              <button 
                onClick={() => setQrModalOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Plain Text Receipt */}
            <div className="p-6">
              <div className="bg-gray-50 p-5 rounded-xl border border-gray-200 font-mono text-sm text-gray-800 whitespace-pre-wrap leading-relaxed shadow-inner">
                {`Farmer: ${selectedBatch.farmerName}
Crop: ${selectedBatch.crop}
Batch: ${selectedBatch.batchId}
Quantity: ${selectedBatch.quantity}
Harvest: ${selectedBatch.harvestDate}
Stored: ${selectedBatch.storedDate}
Compartment: ${selectedBatch.compartment}
Rack: ${selectedBatch.rack}
Position: ${selectedBatch.position}
Target: ${selectedBatch.targetTemp}
Target RH: ${selectedBatch.targetRh}
Status: ${selectedBatch.status}
Estimated remaining life: ${selectedBatch.estimatedLife.replace('~', '')}`}
              </div>

              <div className="mt-6 flex justify-end">
                <button 
                  onClick={() => setQrModalOpen(false)}
                  className="px-6 py-2.5 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
