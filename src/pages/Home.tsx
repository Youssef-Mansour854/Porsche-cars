import React from 'react';
import { motion } from 'framer-motion';

function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1611859266238-4b98091d9d9b?auto=format&fit=crop&q=80"
            alt="Porsche 911 GT"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                PORSCHE 911 GT
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8">
                Experience Pure Performance
              </p>
              <button className="bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-700 transition-colors">
                Discover More
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h3 className="text-2xl font-bold text-white mb-4">640 HP</h3>
              <p className="text-gray-400">Twin-Turbo Engine</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <h3 className="text-2xl font-bold text-white mb-4">2.7s</h3>
              <p className="text-gray-400">0-60 mph</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center"
            >
              <h3 className="text-2xl font-bold text-white mb-4">205 MPH</h3>
              <p className="text-gray-400">Top Speed</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home