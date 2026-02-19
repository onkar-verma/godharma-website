import { motion } from "framer-motion";
import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import Founder from "../assets/founder.jpg";

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

const sideItem = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0 },
};

const scaleItem = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1 },
};

/* ================= MAIN ================= */

const About = () => {
  return (
    <main className="bg-white overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="min-h-screen flex items-center justify-center px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-3xl sm:text-5xl font-bold leading-tight">
            Building Technology with <br className="hidden sm:block" />
            <span className="text-blue-500">
              Purpose, Ethics & Impact
            </span>
          </h1>

          <p className="mt-6 text-gray-500 max-w-3xl mx-auto text-sm sm:text-base">
            GoDharma is not just a software company.
            We are building a technology-driven ecosystem focused on long-term
            value, ethical engineering, and meaningful digital solutions.
          </p>
        </motion.div>
      </section>

      {/* ================= JOURNEY ================= */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-2 items-center">

          {/* Left Text */}
          <motion.div
            variants={sideItem}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900">
              Our Journey
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              GoDharma started with a simple observation — most software today
              is built for speed, not sustainability.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              We began with a clear intention: to build software that is
              thoughtfully designed, technically strong, and aligned with
              real business needs.
            </p>
          </motion.div>

          {/* Right Card */}
          <motion.div
            initial={{ opacity: 0, rotate: 4, y: 40 }}
            whileInView={{ opacity: 1, rotate: 2, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-2xl border-l-8 border-blue-500 w-full max-w-md transform rotate-2 hover:rotate-0 transition-transform duration-500"
          >
            <ul className="space-y-6">
              <li>
                <span className="font-semibold text-gray-900">
                  Founded with intent
                </span>
                <p className="text-sm text-gray-600 mt-1">
                  Not driven by hype, but by purpose.
                </p>
              </li>
              <li className="h-px bg-gray-100" />
              <li>
                <span className="font-semibold text-gray-900">
                  Problem-first mindset
                </span>
                <p className="text-sm text-gray-600 mt-1">
                  Understanding before building.
                </p>
              </li>
              <li className="h-px bg-gray-100" />
              <li>
                <span className="font-semibold text-gray-900">
                  Long-term thinking
                </span>
                <p className="text-sm text-gray-600 mt-1">
                  Systems that scale with time.
                </p>
              </li>
            </ul>
          </motion.div>

        </div>
      </section>

      {/* ================= VISION + MISSION ================= */}
      <section className="px-6 py-20 bg-gray-50">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2"
        >

          {/* Vision */}
          <motion.div
            variants={scaleItem}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl"
          >
            <h2 className="text-2xl font-bold text-gray-800">
              Our Vision
            </h2>

            <ul className="mt-6 space-y-4">
              {[
                "Redefine how software is built with responsibility and clarity.",
                "Empower businesses without compromising ethics or quality.",
                "Be a long-term technology partner for sustainable growth.",
              ].map((text, i) => (
                <motion.li
                  key={i}
                  variants={slideItem}
                  className="flex gap-3"
                >
                  <FaCheckCircle className="text-green-500 mt-1" />
                  <p className="text-gray-600 text-sm">{text}</p>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Mission */}
          <motion.div
            variants={scaleItem}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl"
          >
            <h2 className="text-2xl font-bold text-gray-800">
              Our Mission
            </h2>

            <ul className="mt-6 space-y-4">
              {[
                "Build secure, scalable, maintainable systems.",
                "Understand problems deeply before coding.",
                "Enable long-term business growth.",
              ].map((text, i) => (
                <motion.li
                  key={i}
                  variants={slideItem}
                  className="flex gap-3"
                >
                  <FaCheckCircle className="text-green-500 mt-1" />
                  <p className="text-gray-600 text-sm">{text}</p>
                </motion.li>
              ))}
            </ul>
          </motion.div>

        </motion.div>
      </section>

      {/* ================= FOUNDER ================= */}
      <section className="px-6 py-24 bg-gray-100">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-md hover:-translate-y-1 hover:shadow-lg transition"
        >
          <h2 className="text-3xl font-bold text-center mb-10">
            Meet the Founder
          </h2>

          <div className="grid gap-10 lg:grid-cols-2 items-center">

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden">
                <img
                  src={Founder}
                  alt="Founder of GoDharma"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <h3 className="text-2xl font-semibold">
                ONKAR VERMA
              </h3>

              <p className="text-sm text-gray-400">
                Founder & Software Engineer
              </p>

              <p className="mt-5 text-gray-500 text-sm leading-relaxed">
                GoDharma was founded with a belief that technology should be built
                with responsibility, clarity, and long-term vision.
              </p>

              <div className="mt-6 flex justify-center lg:justify-start gap-4">
                {[
                  {
                    icon: FaLinkedinIn,
                    url: "https://linkedin.com/in/onkarverma",
                    hoverBg: "hover:bg-[#0A66C2]",
                  },
                  {
                    icon: FaInstagram,
                    url: "https://instagram.com/unsaidonkar",
                    hoverBg: "hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-pink-500 hover:to-purple-600",
                  },
                  {
                    icon: FaGithub,
                    url: "https://github.com/onkar-verma",
                    hoverBg: "hover:bg-[#181717]",
                  },
                ].map(({ icon: Icon, url, hoverBg }, i) => (
                  <motion.a
                    key={i}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center
      text-gray-700 transition duration-200 hover:text-white ${hoverBg}`}
                  >
                    <Icon size={18} />
                  </motion.a>
                ))}
              </div>



            </motion.div>

          </div>
        </motion.div>
      </section>

    </main>
  );
};

export default About;
