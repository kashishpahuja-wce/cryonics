import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter, Youtube, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <h4 className="text-xl font-bold text-white mb-6 uppercase tracking-wider">Contact us</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0">
                  <Mail size={18} className="text-orange-500" />
                </div>
                <a href="mailto:contact@cryonics.io" className="hover:text-white transition font-medium">contact@cryonics.io</a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0">
                  <Phone size={18} className="text-orange-500" />
                </div>
                <span className="font-medium">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0 mt-1">
                  <MapPin size={18} className="text-orange-500" />
                </div>
                <span className="leading-relaxed">Our Locations <br/> San Francisco | New York</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold text-white mb-6 uppercase tracking-wider">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-white hover:pl-2 transition-all duration-300 inline-block">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white hover:pl-2 transition-all duration-300 inline-block">Copyright</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white hover:pl-2 transition-all duration-300 inline-block">Terms of Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white hover:pl-2 transition-all duration-300 inline-block">Cookie Use Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold text-white mb-6 uppercase tracking-wider">Resources</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-white hover:pl-2 transition-all duration-300 inline-block">Security</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white hover:pl-2 transition-all duration-300 inline-block">Case Studies</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white hover:pl-2 transition-all duration-300 inline-block">About us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white hover:pl-2 transition-all duration-300 inline-block">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white hover:pl-2 transition-all duration-300 inline-block">Become Partner</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold text-white mb-6 uppercase tracking-wider">Follow Us</h4>
            <h5 className="text-lg font-semibold mb-4 text-white">Cryonics Inc.</h5>
            <div className="flex flex-wrap gap-3">
              <a href="#" className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#0077b5] hover:text-white transition-all duration-300 hover:-translate-y-1">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#1877f2] hover:text-white transition-all duration-300 hover:-translate-y-1">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#1da1f2] hover:text-white transition-all duration-300 hover:-translate-y-1">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#ff0000] hover:text-white transition-all duration-300 hover:-translate-y-1">
                <Youtube size={20} />
              </a>
              <a href="#" className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-red-500 hover:to-purple-500 hover:text-white transition-all duration-300 hover:-translate-y-1">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm order-2 md:order-1 text-center md:text-left">
            Copyright 2025-26 | Cryonics Inc. | All rights reserved
          </p>
          <div className="text-3xl font-extrabold text-white tracking-tight order-1 md:order-2 opacity-20 hover:opacity-100 transition-opacity duration-300 cursor-default">
            CRYONICS
          </div>
        </div>
      </div>
    </footer>
  );
}
