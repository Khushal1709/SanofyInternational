import React from "react";
import { motion } from "framer-motion";
import Hser1 from "../image/Hser1.svg";
import Hser2 from "../image/Hser2.svg";
import Hser3 from "../image/Hser3.svg";
import Hser4 from "../image/Hser4.svg";
import Hser5 from "../image/Hser5.svg";
import Hser6 from "../image/Hser6.svg";

const services = [
  {
    icon: Hser1,
    title: "Global Trade Consulting",
    desc: "Expert advice to navigate international markets and business strategies.",
  },
  {
    icon: Hser2,
    title: "Export–Import Solutions",
    desc: "Seamless management of cross-border trade operations for businesses.",
  },
  {
    icon: Hser3,
    title: "Product Sourcing",
    desc: "High-quality product sourcing from trusted global suppliers.",
  },
  {
    icon: Hser4,
    title: "Logistics and Shipping Management",
    desc: "Efficient handling of shipping, customs, and delivery processes worldwide.",
  },
  {
    icon: Hser5,
    title: "Market Expansion Support",
    desc: "Tailored solutions for businesses seeking to grow internationally.",
  },
  {
    icon: Hser6,
    title: "Customs Clearance Assistance",
    desc: "Expert assistance with compliance and customs documentation for smooth transactions.",
  },
];

const ServicesSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-16">
      {/* Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="flex justify-center items-center gap-2 mb-2">
          <div className="w-3 h-3 bg-black" />
          <span className="text-sm text-gray-700 font-medium">Services</span>
        </div>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 max-w-2xl mx-auto leading-snug">
          Reliable, efficient, and tailored global trade solutions.
        </h2>
      </motion.div>

      {/* Service Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="flex items-start gap-4"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="bg-black p-3 rounded-lg w-15 h-12 flex items-center justify-center">
              <img
                src={service.icon}
                alt={service.title}
                className="w-6 h-6 object-contain"
              />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                {service.title}
              </h2>
              <p className="text-sm text-gray-600 mt-1">{service.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
