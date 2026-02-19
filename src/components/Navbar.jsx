import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../assets/logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef(null);

  const toggleNavbar = () => setIsOpen((prev) => !prev);

  /* ================= Scroll Shrink ================= */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      setIsOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ================= Click Outside ================= */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <motion.nav
      ref={navRef}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={`fixed z-50 left-1/2 -translate-x-1/2
        ${isScrolled ? "top-3 w-[65%]" : "top-6 w-[70%]"}
        max-w-7xl bg-white text-blue-600
        rounded-full shadow-lg transition-all duration-300`}
    >
      <div
        className={`flex items-center justify-between px-4
        ${isScrolled ? "py-2" : "py-3"}
        transition-all duration-300`}
      >
        {/* Logo */}
        <div className="flex items-center">
          <motion.div
            animate={{ scale: isScrolled ? 1.1 : 1 }}
            transition={{ duration: 0.3 }}
            className={`${isScrolled ? "w-8 h-8" : "w-10 h-10"}
            rounded-full flex items-center justify-center`}
          >
            <img src={Logo} alt="Logo" className="w-full h-full object-contain" />
          </motion.div>

          <motion.span
            animate={{
              opacity: isScrolled ? 0 : 1,
              x: isScrolled ? -10 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="ml-2 font-bold text-lg whitespace-nowrap"
          >
            GoDharma
          </motion.span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-8 font-medium">
          {[
            { label: "Home", path: "/" },
            { label: "Services", path: "/services" },
            { label: "About", path: "/about" },
            { label: "Contact", path: "/contact" },
          ].map(({ label, path }) => (
            <li key={label} className="relative group">
              <Link to={path} className="transition-colors duration-300">
                {label}
              </Link>

              {/* Animated Underline */}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Right Section */}
        <div className="flex items-center gap-2">

          {/* CTA Button */}
          <motion.div
            className="hidden lg:block"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/contact"
              className="px-6 py-2 bg-blue-500 text-white rounded-full font-semibold
    hover:bg-blue-600 transition-colors duration-300"
            >
              Let’s Talk
            </Link>
          </motion.div>


          {/* Mobile Toggle */}
          <button
            onClick={toggleNavbar}
            className="lg:hidden p-2 cursor-pointer"
            aria-label="Toggle menu"
          >
            <div className="space-y-1">
              <motion.span
                animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="block w-6 h-0.5 bg-black"
              />
              <motion.span
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block w-6 h-0.5 bg-black"
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="block w-6 h-0.5 bg-black"
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-white
            rounded-3xl shadow-lg overflow-hidden"
          >
            {[
              { label: "Home", path: "/" },
              { label: "Services", path: "/services" },
              { label: "About", path: "/about" },
              { label: "Contact", path: "/contact" },
            ].map(({ label, path }) => (
              <li key={label}>
                <Link
                  to={path}
                  onClick={closeMenu}
                  className="block py-4 text-center hover:bg-gray-100 transition"
                >
                  {label}
                </Link>
              </li>
            ))}
            <li className="px-6 py-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-full"
              >
                <Link
                  to="/contact"
                  onClick={closeMenu}
                  className="block w-full text-center px-6 py-3 bg-blue-500 text-white rounded-full font-semibold
      hover:bg-blue-600 transition-colors duration-300"
                >
                  Let’s Talk
                </Link>
              </motion.div>
            </li>


          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
