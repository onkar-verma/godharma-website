import { motion } from "framer-motion";
import {
  FaCode,
  FaPalette,
  FaCloud,
  FaCogs,
  FaShieldAlt,
  FaChartLine,
} from "react-icons/fa";

/* ================= ANIMATION CONFIG ================= */

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const slideItem = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const scaleItem = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1 },
};

/* ================= MAIN PAGE ================= */

const Services = () => {
  return (
    <main className="bg-white overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto text-center"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black leading-tight">
            Services Built for <br className="hidden sm:block" />
            <span className="text-blue-500">Scale, Clarity & Impact</span>
          </h1>

          <p className="mt-6 text-gray-500 max-w-3xl mx-auto">
            We design and build software systems that are reliable today and
            scalable tomorrow. Every service we offer is rooted in strong
            engineering and long-term thinking.
          </p>
        </motion.div>
      </section>

      {/* ================= CORE SERVICES ================= */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 text-center"
          >
            Our Core Services
          </motion.h2>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >

            <ServiceCard
              icon={<FaPalette />}
              title="UI/UX Design"
              description="Intuitive, user-centered design focused on usability, clarity, and experience."
              points={[
                "User research & wireframing",
                "Design systems & prototypes",
                "Usability-focused interfaces",
              ]}
            />

            <ServiceCard
              icon={<FaCode />}
              title="Web & App Development"
              description="Robust, scalable applications built with modern technologies."
              points={[
                "Frontend & backend development",
                "Clean architecture & APIs",
                "Performance & scalability",
              ]}
            />

            <ServiceCard
              icon={<FaCloud />}
              title="Cloud & Infrastructure"
              description="Reliable cloud architecture designed for growth and stability."
              points={[
                "Cloud setup & optimization",
                "Scalable deployment strategies",
                "Monitoring & maintenance",
              ]}
            />

            <ServiceCard
              icon={<FaCogs />}
              title="System Architecture"
              description="Strong technical foundations that prevent future bottlenecks."
              points={[
                "Architecture planning",
                "Tech stack selection",
                "Scalability reviews",
              ]}
            />

            <ServiceCard
              icon={<FaShieldAlt />}
              title="Security & Reliability"
              description="Security-first development with stability and compliance in mind."
              points={[
                "Secure coding practices",
                "Testing & audits",
                "Risk mitigation",
              ]}
            />

            <ServiceCard
              icon={<FaChartLine />}
              title="Technology Consulting"
              description="Strategic guidance to make better technology decisions."
              points={[
                "Product strategy",
                "Technical reviews",
                "Long-term planning",
              ]}
            />

          </motion.div>
        </div>
      </section>

      {/* ================= VALUE DELIVERY ================= */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto text-center">

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900"
          >
            How We Deliver Value
          </motion.h2>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
          >
            <ValueBox
              title="Clarity First"
              text="We understand the problem before proposing solutions."
            />
            <ValueBox
              title="Strong Foundations"
              text="We focus on architecture and long-term stability."
            />
            <ValueBox
              title="Quality Driven"
              text="Testing, security, and performance are never optional."
            />
            <ValueBox
              title="Sustainable Growth"
              text="Solutions designed to evolve with your business."
            />
          </motion.div>

        </div>
      </section>

      {/* ================= WHAT WE DO ================= */}
      <section className="px-6 py-20 bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900">
            What We Do
          </h2>

          <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
            GoDharma partners with startups and growing businesses to transform
            ideas into scalable digital products. We focus on clarity,
            maintainability, and real business value — not just shipping code.
          </p>
        </motion.div>
      </section>

    </main>
  );
};

export default Services;

/* ================= COMPONENTS ================= */

const ServiceCard = ({ icon, title, description, points }) => {
  return (
    <motion.div
      variants={slideItem}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="bg-white rounded-xl p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300"
    >
      <motion.div
        whileHover={{ rotate: 6, scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="text-blue-600 text-3xl"
      >
        {icon}
      </motion.div>

      <h3 className="mt-5 text-xl font-semibold text-gray-900">
        {title}
      </h3>

      <p className="mt-3 text-gray-600 text-sm leading-relaxed">
        {description}
      </p>

      <ul className="mt-5 space-y-2 text-sm text-gray-600 list-disc list-inside">
        {points.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    </motion.div>
  );
};

const ValueBox = ({ title, text }) => {
  return (
    <motion.div
      variants={scaleItem}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 250 }}
      className="p-6 rounded-xl bg-gray-50 border border-gray-100 hover:shadow-lg transition-shadow duration-300"
    >
      <h4 className="font-semibold text-gray-900">
        {title}
      </h4>
      <p className="mt-2 text-sm text-gray-600">
        {text}
      </p>
    </motion.div>
  );
};
