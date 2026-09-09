import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="text-3xl font-bold text-orange-500 tracking-tight">CRYONICS</a>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#platform" className="text-gray-700 hover:text-orange-500 font-medium flex items-center gap-1">Platform <ChevronDown size={16}/></a>
            <a href="#solutions" className="text-gray-700 hover:text-orange-500 font-medium flex items-center gap-1">IoT Solutions <ChevronDown size={16}/></a>
            <a href="#partners" className="text-gray-700 hover:text-orange-500 font-medium">Partners</a>
            <a href="#security" className="text-gray-700 hover:text-orange-500 font-medium">Security & Compliance</a>
            <a href="#resources" className="text-gray-700 hover:text-orange-500 font-medium flex items-center gap-1">Resources <ChevronDown size={16}/></a>
            <a href="#company" className="text-gray-700 hover:text-orange-500 font-medium flex items-center gap-1">Company <ChevronDown size={16}/></a>
          </nav>

          <div className="hidden md:flex items-center">
            <a href="#/dashboard" className="bg-gray-900 text-white px-6 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors">
              DASHBOARD
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-orange-500">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 shadow-lg absolute w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#platform" className="block px-3 py-2 text-gray-700 font-medium hover:bg-orange-50 hover:text-orange-500 rounded-md">Platform</a>
            <a href="#solutions" className="block px-3 py-2 text-gray-700 font-medium hover:bg-orange-50 hover:text-orange-500 rounded-md">IoT Solutions</a>
            <a href="#partners" className="block px-3 py-2 text-gray-700 font-medium hover:bg-orange-50 hover:text-orange-500 rounded-md">Partners</a>
            <a href="#security" className="block px-3 py-2 text-gray-700 font-medium hover:bg-orange-50 hover:text-orange-500 rounded-md">Security & Compliance</a>
            <a href="#resources" className="block px-3 py-2 text-gray-700 font-medium hover:bg-orange-50 hover:text-orange-500 rounded-md">Resources</a>
            <a href="#company" className="block px-3 py-2 text-gray-700 font-medium hover:bg-orange-50 hover:text-orange-500 rounded-md">Company</a>
            <div className="pt-2">
              <a href="#/dashboard" className="block w-full text-center bg-gray-900 text-white px-3 py-3 rounded-md font-medium">DASHBOARD</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
