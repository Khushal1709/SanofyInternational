import React from 'react';
import { motion } from 'framer-motion';
import Whychoose from "../image/Whychoose.svg";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.2 },
  }),
};

const WhyChooseUs = () => {
  return (
    <section className="max-w-7xl mx-auto px-4  sm:px-6 lg:px-8">
      {/* Top Label & Heading */}
      <motion.div
        className="mb-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="flex items-center gap-2 mb-2">
          <div className="w-3 h-3 bg-black" />
          <span className="text-lg text-gray-700 font-medium">Why choose us</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
          Trusted, efficient, global trade <br />
          service excellence.
        </h2>
      </motion.div>

      {/* Main Content */}
      <div className="relative rounded-3xl overflow-hidden">
        {/* Background Image */}
        <motion.img
          src={Whychoose}
          alt="Corn and spices"
          className="hidden md:block w-full h-[500px] object-cover rounded-3xl"
          initial="hidden"
          whileInView="visible"

          
          viewport={{ once: true }}
          variants={fadeInUp}
        />

        {/* Content Box */}
        <motion.div
          className="relative md:absolute md:right-8 md:top-1/2 md:transform md:-translate-y-1/2 bg-white rounded-3xl shadow-lg w-full md:max-w-md p-6 sm:p-8 space-y-6 mt-6 md:mt-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          {[
            {
              title: "Trusted Global Expertise",
              desc: "Years of experience in international trade with a proven track record.",
            },
            {
              title: "Quality-First Approach",
              desc: "Commitment to delivering only the best products and services.",
            },
            {
              title: "Seamless & Reliable Service",
              desc: "Hassle-free logistics, transparent processes, and timely delivery—every time.",
            },
          ].map((item, i) => (
            <motion.div key={i} custom={i} variants={fadeInUp}>
              <h4 className="font-semibold text-lg text-gray-900 flex items-start gap-2">
                <span className="text-xl">✓</span> {item.title}
              </h4>
              <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
