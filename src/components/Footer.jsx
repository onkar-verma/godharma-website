import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

/* ================= ANIMATION CONFIG ================= */

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-gray-200 pt-20 px-6 overflow-hidden">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >

        {/* Top Section */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">

          {/* Brand */}
          <motion.div variants={item}>
            <h3 className="text-white text-xl font-bold">
              GoDharma
            </h3>
            <p className="mt-4 text-sm leading-relaxed">
              Building ethical, scalable, and impactful software solutions
              for businesses in the digital era.
            </p>
          </motion.div>

          {/* Company */}
          <motion.div variants={item}>
            <h4 className="text-white font-semibold mb-4">
              Company
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/services" className="hover:text-white transition">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Connect */}
          <motion.div variants={item}>
            <h4 className="text-white font-semibold mb-4">
              Connect
            </h4>
            <p className="text-sm mb-4">
              Let’s build something meaningful together.
            </p>

            <div className="flex items-center gap-4">
              {[FaTwitter, FaLinkedinIn, FaGithub].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -4 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center
                  hover:bg-blue-500 hover:text-white transition-colors duration-300"
                >
                  <Icon size={14} />
                </motion.a>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 border-t border-white/10 pt-6 flex flex-col sm:flex-row
          items-center justify-between gap-4 text-sm"
        >
          <p>
            © {new Date().getFullYear()} GoDharma. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-white transition">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white transition">
              Terms of Service
            </Link>
          </div>
        </motion.div>

      </motion.div>
    </footer>
  );
};

export default Footer;
