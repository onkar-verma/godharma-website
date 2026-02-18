import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import emailjs from "@emailjs/browser";

/* ================= ANIMATION CONFIG ================= */

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const slideLeft = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0 },
};

const slideUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

/* ================= MAIN ================= */

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        "service_f4c064b",
        "template_7uh85vb",
        form.current,
        "1_VaKKoLBPeWwCMsu"
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          form.current.reset();
        },
        () => {
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <main className="overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="min-h-screen bg-gray-50 px-6 pt-28 pb-16 flex flex-col lg:flex-row items-center gap-12 lg:p-52">

        {/* LEFT CONTENT */}
        <motion.section
          variants={container}
          initial="hidden"
          animate="show"
          className="w-full lg:w-1/2 flex flex-col gap-6"
        >

          <motion.div variants={slideLeft}>
            <h1 className="text-4xl sm:text-5xl font-extrabold">
              Let’s Build
            </h1>
            <h3 className="text-3xl sm:text-4xl text-gray-400 font-bold mt-2">
              Something Meaningful
            </h3>
          </motion.div>

          <motion.p
            variants={slideLeft}
            className="text-base sm:text-lg text-gray-500 max-w-xl"
          >
            Have a project in mind, a problem to solve, or just want to explore possibilities?
          </motion.p>

          {[ 
            {
              icon: <FaEnvelope className="text-blue-500 text-4xl bg-gray-100 rounded-full p-3" />,
              title: "EMAIL US",
              content: <a href="mailto:contact@godharma.in" className="text-gray-700">contact@godharma.in</a>,
            },
            {
              icon: <FaPhoneAlt className="text-green-500 text-4xl bg-gray-100 rounded-full p-3" />,
              title: "CALL US",
              content: <a href="tel:+917788029909" className="text-gray-700">+91 77880 29909</a>,
            },
            {
              icon: <FaMapMarkerAlt className="text-red-500 text-4xl bg-gray-100 rounded-full p-3" />,
              title: "VISIT",
              content: <p className="text-gray-700">India · Remote-first</p>,
            },
          ].map((item, i) => (
            <motion.article
              key={i}
              variants={slideLeft}
              whileHover={{ x: 6 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="flex items-center gap-4"
            >
              {item.icon}
              <div>
                <h3 className="text-sm font-bold text-gray-400">
                  {item.title}
                </h3>
                {item.content}
              </div>
            </motion.article>
          ))}

        </motion.section>

        {/* RIGHT FORM */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full lg:w-1/2 bg-white rounded-xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-shadow duration-300"
        >

          <form ref={form} onSubmit={sendEmail} className="space-y-8">

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-900">
                  Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  required
                  placeholder="Your Name"
                  className="w-full bg-gray-50 px-4 py-3 rounded-lg text-sm
                  placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-900">
                  Email
                </label>
                <input
                  type="email"
                  name="user_email"
                  required
                  placeholder="youremail@example.com"
                  className="w-full bg-gray-50 px-4 py-3 rounded-lg text-sm
                  placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-900">
                Project Details
              </label>
              <textarea
                rows="4"
                name="message"
                required
                placeholder="Tell us about your goals, timeline, and budget..."
                className="w-full bg-gray-50 px-4 py-3 rounded-lg text-sm
                placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              type="submit"
              className="w-full px-8 py-3 bg-blue-500 text-white rounded-full
              font-semibold hover:bg-blue-600 transition-colors duration-300
              flex items-center justify-center gap-2"
            >
              {status === "Sending..." ? "Sending..." : "Send Message"}
              <span className="text-xl">→</span>
            </motion.button>

            {status && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center text-sm text-gray-500"
              >
                {status}
              </motion.p>
            )}

          </form>
        </motion.div>

      </section>

      {/* ================= WHY CONTACT ================= */}
      <section className="px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900">
            Why Reach Out to GoDharma?
          </h2>
          <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
            We don’t jump straight into code. We start by understanding your
            vision, challenges, and long-term goals — so the solution actually
            makes sense for your business.
          </p>
        </motion.div>
      </section>

    </main>
  );
};

export default Contact;
