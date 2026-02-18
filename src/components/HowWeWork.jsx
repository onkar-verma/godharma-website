import { motion } from "framer-motion";

/* ================= DATA ================= */

const steps = [
  {
    tag: "DISCOVERY",
    title: "Understanding the Problem",
    description:
      "We deeply analyze your business goals, challenges, and requirements before writing a single line of code.",
    color: "border-blue-500",
  },
  {
    tag: "PLANNING",
    title: "Strategy & Roadmap",
    description:
      "We define a clear execution plan, technology stack, and milestones aligned with long-term growth.",
    color: "border-red-500",
  },
  {
    tag: "DESIGN",
    title: "UI/UX & Architecture",
    description:
      "We design intuitive user experiences and robust system architecture for scalability.",
    color: "border-green-500",
  },
  {
    tag: "DEVELOPMENT",
    title: "Building the Solution",
    description:
      "Our engineers build secure, scalable, and high-performance solutions using modern tech.",
    color: "border-yellow-500",
  },
  {
    tag: "TESTING",
    title: "Quality & Reliability",
    description:
      "We rigorously test performance, security, and usability to ensure a stable product.",
    color: "border-indigo-500",
  },
  {
    tag: "DEPLOYMENT",
    title: "Launch & Support",
    description:
      "We deploy, monitor, and continuously improve the product with long-term support.",
    color: "border-teal-500",
  },
];

/* ================= ANIMATION CONFIG ================= */

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const slideUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const slideDown = {
  hidden: { opacity: 0, y: -40 },
  show: { opacity: 1, y: 0 },
};

/* ================= COMPONENT ================= */

const HowWeWork = () => {
  return (
    <section className="bg-gray-100 px-6 py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            How We Work
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto pb-12">
            A transparent process designed to deliver clarity, quality, and scalable results.
          </p>
        </motion.div>

        {/* ================= MOBILE ================= */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="lg:hidden relative pl-8"
        >
          <div className="absolute left-3 top-0 bottom-0 w-px bg-gray-300" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={slideUp}
                className="relative flex gap-6"
              >

                {/* Dot */}
                <motion.div
                  whileInView={{ scale: [0.8, 1.1, 1] }}
                  transition={{ duration: 0.4 }}
                  className="relative z-10"
                >
                  <div className="w-6 h-6 rounded-full bg-white border-4 border-blue-500 flex items-center justify-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  </div>
                </motion.div>

                {/* Card */}
                <div
                  className={`bg-white rounded-xl shadow-md p-6 border-l-4 ${step.color}`}
                >
                  <span className="text-xs font-semibold text-blue-600">
                    {String(index + 1).padStart(2, "0")} · {step.tag}
                  </span>

                  <h3 className="mt-2 text-lg font-bold text-gray-900">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm text-gray-600">
                    {step.description}
                  </p>
                </div>

              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ================= DESKTOP ================= */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="hidden lg:block relative"
        >

          <div className="absolute left-0 right-0 top-1/2 h-1 bg-gray-200" />

          <div className="grid grid-cols-6 gap-24">
            {steps.map((step, index) => {
              const isTop = index % 2 === 0;

              return (
                <div key={index} className="relative flex justify-center min-h-96">

                  {/* Dot */}
                  <motion.div
                    whileInView={{ scale: [0.8, 1.2, 1] }}
                    transition={{ duration: 0.4 }}
                    className="absolute top-1/2 -translate-y-1/2 z-20"
                  >
                    <div className="w-6 h-6 rounded-full bg-white border-4 border-blue-500 shadow-xl flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-blue-500" />
                    </div>
                  </motion.div>

                  {/* Connector */}
                  <div
                    className={`absolute left-1/2 -translate-x-1/2 w-0.5 bg-gray-300
                    ${isTop ? "top-[calc(50%-140px)] h-36" : "top-1/2 h-36"}`}
                  />

                  {/* Card */}
                  <motion.div
                    variants={isTop ? slideDown : slideUp}
                    whileHover={{ y: isTop ? -10 : 10 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className={`w-64 bg-white rounded-xl shadow-md hover:shadow-xl p-6 border-l-4
                    transition-shadow duration-300 ${step.color}
                    absolute left-1/2 -translate-x-1/2
                    ${isTop ? "-translate-y-20" : "translate-y-64"}`}
                  >
                    <span className="text-xs font-semibold text-blue-600">
                      {step.tag}
                    </span>

                    <h3 className="mt-2 text-lg font-bold text-gray-900">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-sm text-gray-600">
                      {step.description}
                    </p>
                  </motion.div>

                  {/* Step Number */}
                  <span
                    className={`absolute text-sm font-semibold text-gray-500
                    ${isTop ? "top-[calc(50%+4.5rem)]" : "top-[calc(50%-5.5rem)]"}`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                </div>
              );
            })}
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default HowWeWork;
