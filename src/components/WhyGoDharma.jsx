import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaLightbulb,
  FaRocket,
  FaUsers,
} from "react-icons/fa";

const reasons = [
  {
    title: "Trust & Transparency",
    description:
      "We believe in honest communication, clear processes, and long-term partnerships. No hidden costs. No false promises.",
    icon: <FaShieldAlt size={24} />,
  },
  {
    title: "Innovation-Driven Approach",
    description:
      "We don’t just build software — we solve real problems using modern, scalable, and future-ready technologies.",
    icon: <FaLightbulb size={24} />,
  },
  {
    title: "Scalable & Growth-Focused",
    description:
      "Our solutions are designed to grow with your business, not limit it when you scale.",
    icon: <FaRocket size={24} />,
  },
  {
    title: "People Before Products",
    description:
      "We focus on user experience, business impact, and human-centered design — not just code.",
    icon: <FaUsers size={24} />,
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  show: { opacity: 1, scale: 1, y: 0 },
};

const WhyGoDharma = () => {
  return (
    <section className="py-20 px-6 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-14 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-black">
            Why GoDharma?
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            We combine technology, strategy, and ethics to build solutions
            that create real, measurable impact for businesses.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {reasons.map((itemData, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ scale: 1.04 }}
              transition={{ type: "spring", stiffness: 220 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100
              hover:shadow-xl hover:border-blue-200 transition-all duration-300"
            >
              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 8, scale: 1.15 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-12 h-12 rounded-xl bg-blue-500/10
                flex items-center justify-center text-blue-500"
              >
                {itemData.icon}
              </motion.div>

              {/* Title */}
              <h3 className="mt-6 text-lg font-semibold text-black">
                {itemData.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm text-gray-500 leading-relaxed">
                {itemData.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default WhyGoDharma;
