import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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

const Hero = () => {
    return (
        <main className="min-h-screen bg-white flex items-center justify-center px-6 overflow-hidden">
            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="max-w-4xl text-center"
            >
                {/* Heading */}
                <motion.h1
                    variants={item}
                    className="text-4xl sm:text-5xl md:text-6xl font-bold text-black leading-tight"
                >
                    Empowering Your Business with <br />
                    <span className="text-blue-500">
                        Innovative Software & IT Solutions
                    </span>
                </motion.h1>

                {/* Sub text */}
                <motion.p
                    variants={item}
                    className="mt-6 text-gray-400 text-base sm:text-lg max-w-2xl mx-auto"
                >
                    We provide cutting-edge technology services to help your business grow
                    and succeed in the digital era.
                </motion.p>

                {/* CTA */}
                <motion.div
                    variants={item}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="mt-10 inline-block"
                >
                    <Link
                        to="/contact"
                        className="px-8 py-3 rounded-full bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-colors duration-300 cursor-pointer"
                    >
                        Get Started
                    </Link>
                </motion.div>
            </motion.div>
        </main>
    );
};

export default Hero;
