import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <div className="pt-20">
      <section className="py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">ABOUT THE LEGEND</h2>
            <div className="w-20 h-1 bg-red-600 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80"
                alt="Porsche 911 GT"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-gray-300"
            >
              <h3 className="text-2xl font-bold text-white mb-6">A Legacy of Excellence</h3>
              <p className="mb-6">
                The Porsche 911 GT represents the pinnacle of automotive engineering,
                combining raw power with precision handling. Born from decades of racing
                heritage, each 911 GT is crafted to deliver an unparalleled driving
                experience.
              </p>
              <p className="mb-6">
                With its iconic silhouette and cutting-edge technology, the 911 GT
                continues to set the standard for high-performance sports cars,
                embodying Porsche's commitment to excellence and innovation.
              </p>
              <button className="bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition-colors">
                Learn More
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About