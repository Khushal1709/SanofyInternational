import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.2 },
  }),
};

const Bottomcontact = () => {
  return (
    <section className="text-center px-4 py-16 md:py-24">
      {/* Section label */}
      <motion.div
        className="flex justify-center items-center gap-2 mb-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="w-3 h-3 bg-black" />
        <span className="text-sm text-gray-700 font-medium">Contact</span>
      </motion.div>

      {/* Heading */}
      <motion.h2
        className="text-2xl md:text-4xl font-bold text-gray-900 leading-snug mb-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        custom={1}
      >
        Discover Global Trade Opportunities <br className="hidden sm:block" />
        from Your Own Ease!
      </motion.h2>

      {/* Button */}
      <Link to="/Contact">
        <motion.button
          className="bg-black text-white px-6 py-3 rounded-full text-sm font-medium transition cursor-pointer"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={2}
        >
          Contact Us
        </motion.button>
      </Link>
    </section>
  );
};

export default Bottomcontact;
