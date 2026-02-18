import React from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaGlobe,
  FaPaintBrush,
  FaCloud,
  FaChartLine,
  FaWrench,
} from "react-icons/fa";

const services = [
  {
    title: "Custom Software Development",
    description:
      "Scalable, secure, and high-performance software tailored to your business needs.",
    icon: <FaCode size={22} />,
  },
  {
    title: "Web & App Development",
    description:
      "Modern, responsive web and mobile applications built for speed and usability.",
    icon: <FaGlobe size={22} />,
  },
  {
    title: "UI/UX Design",
    description:
      "User-centered design that improves engagement, usability, and conversion.",
    icon: <FaPaintBrush size={22} />,
  },
  {
    title: "Cloud & DevOps",
    description:
      "Reliable cloud infrastructure, CI/CD pipelines, and deployment automation.",
    icon: <FaCloud size={22} />,
  },
  {
    title: "IT Consulting",
    description:
      "Strategic technology consulting to help you make smarter business decisions.",
    icon: <FaChartLine size={22} />,
  },
  {
    title: "Maintenance & Support",
    description:
      "Continuous monitoring, updates, and support to keep your systems running.",
    icon: <FaWrench size={22} />,
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0 },
};

const OurServices = () => {
  return (
    <section className="py-20 px-6 bg-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ amount: 0.2 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-black">
            Our Services
          </h2>
          <p className="mt-4 text-gray-500">
            We deliver end-to-end technology solutions that help businesses
            innovate, scale, and stay ahead.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-500 text-white"
              >
                {service.icon}
              </motion.div>

              {/* Title */}
              <h3 className="mt-6 text-xl font-semibold text-black">
                {service.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-gray-500 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default OurServices;
