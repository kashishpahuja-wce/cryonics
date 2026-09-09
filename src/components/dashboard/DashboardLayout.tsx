import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Bell, User, Menu, X } from 'lucide-react';

export default function DashboardLayout() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'My Produce', href: '#' },
    { name: 'Buyer Requests', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'System', href: '/dashboard/technical' },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAF7]">
      {/* Top Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <Link to="/" className="flex flex-col">
                  <span className="text-xl font-bold text-green-800">Cryonics</span>
                  <span className="text-xs text-gray-500 font-medium">Smart Cold Storage</span>
                </Link>
              </div>
              <div className="hidden sm:ml-10 sm:flex sm:space-x-8">
                {navigation.map((item) => {
                  const isActive = item.href === '/dashboard' 
                    ? location.pathname === '/dashboard' 
                    : location.pathname.startsWith(item.href);
                  
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`${
                        isActive
                          ? 'border-green-600 text-green-900'
                          : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                      } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </div>
            
            <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-4">
              <div className="text-sm border border-gray-200 rounded-md px-2 py-1 text-gray-600 cursor-pointer hover:bg-gray-50">
                English
              </div>
              <button type="button" className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 relative">
                <span className="sr-only">View notifications</span>
                <Bell className="h-6 w-6" aria-hidden="true" />
                <span className="absolute top-1 right-1 block h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-white" />
              </button>

              <div className="flex items-center ml-3 gap-3">
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">Piyush Farmer</p>
                  <p className="text-xs text-gray-500">Green Valley FPO</p>
                </div>
                <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-800 font-bold">
                  PF
                </div>
              </div>
            </div>

            <div className="-mr-2 flex items-center sm:hidden">
              {/* Mobile menu button */}
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <span className="sr-only">Open main menu</span>
                {isMobileMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {navigation.map((item) => {
                const isActive = item.href === '/dashboard' 
                  ? location.pathname === '/dashboard' 
                  : location.pathname.startsWith(item.href);
                  
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`${
                      isActive
                        ? 'bg-green-50 border-green-500 text-green-700'
                        : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
                    } block pl-3 pr-4 py-2 border-l-4 text-base font-medium`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center px-4">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-800 font-bold">
                    PF
                  </div>
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-gray-800">Piyush Farmer</div>
                  <div className="text-sm font-medium text-gray-500">Green Valley FPO</div>
                </div>
                <button
                  type="button"
                  className="ml-auto bg-white flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 relative"
                >
                  <span className="sr-only">View notifications</span>
                  <Bell className="h-6 w-6" aria-hidden="true" />
                  <span className="absolute top-1 right-1 block h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-white" />
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <Outlet />
      </main>
    </div>
  );
}
