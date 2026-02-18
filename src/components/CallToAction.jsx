import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const CallToAction = () => {
  return (
    <section className="relative bg-white py-20 px-6 overflow-hidden">
      
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 flex justify-center">
        <div className="bg-blue-100 rounded-full blur-3xl opacity-40 -z-10"></div>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-5xl mx-auto text-center text-blue-500 relative"
      >
        
        {/* Heading */}
        <motion.h2
          variants={item}
          className="text-3xl sm:text-4xl font-bold"
        >
          Ready to build something <br className="hidden sm:block" />
          extraordinary?
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={item}
          className="mt-5 text-gray-500 max-w-2xl mx-auto"
        >
          Let’s turn your ideas into scalable, impactful digital products.
          Partner with GoDharma to build solutions that truly matter.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={item}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          
          {/* Primary CTA */}
          <motion.div
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link
              to="/contact"
              className="px-8 py-3 bg-blue-500 text-white rounded-full font-semibold
              hover:bg-blue-600 transition-colors duration-300"
            >
              Let’s Talk
            </Link>
          </motion.div>

          {/* Secondary CTA */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link
              to="/services"
              className="px-8 py-3 border border-blue-500 rounded-full font-semibold
              hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              View Services
            </Link>
          </motion.div>

        </motion.div>
      </motion.div>
    </section>
  );
};

export default CallToAction;
