import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-black/90 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-red-600 font-bold">PORSCHE</span>
            <span className="font-light ml-2">911 GT</span>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="hover:text-red-600 transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-red-600 transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="hover:text-red-600 transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:text-red-600 transition-colors">
              <Youtube size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Porsche 911 GT. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer