import React from "react";
import { motion } from "framer-motion";
import About1 from "../image/About1.svg";
import About2 from "../image/About2.svg";
import About3 from "../image/About3.svg";
import CountUp from "react-countup";
import Agent1 from "../image/Agent1.svg";
import Agent2 from "../image/Agent2.svg";
import Agent3 from "../image/Agent3.svg";
import Bottomcontact from "./Bottomcontact";
import Test from "./Test";
import { Link } from "react-router-dom";

const agents = [
  {
    name: "Krushant Vamja",
    role: "Front-end Developer",
    image: Agent1,
  },
  {
    name: "Krushant Vamja",
    role: "Front-end Developer",
    image: Agent2,
  },
  {
    name: "Krushant Vamja",
    role: "Front-end Developer",
    image: Agent3,
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

const TradeExpertsSection = () => {
  return (
    <>
      <div className="bg-white text-gray-900 font-sans">
        {/* Header */}
            <motion.section
            className="text-center py-10 px-4"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            >
          <div className="inline-block bg-gray-100 text-gray-700 px-4 py-1 text-sm rounded-full mb-4">
            About US
          </div>
          <h1 className="text-3xl md:text-4xl font-bold leading-snug">
            Connect with our experts and bring <br />
            your global trade ideas to life.
          </h1>
        </motion.section>

        {/* Image Grid */}
        <motion.section
          className="max-w-6xl mx-auto px-4 pb-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-[40px] overflow-hidden">
              <img
                src={About1}
                alt="Spices on spoon"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-rows-2 gap-6">
              <div className="rounded-[40px] overflow-hidden">
                <img
                  src={About2}
                  alt="Purple onions"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-[40px] overflow-hidden">
                <img
                  src={About3}
                  alt="Lentils and grains"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </motion.section>

        {/* About Section */}
        <motion.section
          className="bg-white text-gray-900 px-4 md:px-8 lg:px-10  space-y-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold leading-snug">
                Your trusted import-export <br /> experts.
              </h2>
            </div>
            <div>
              <p className="text-gray-700 leading-relaxed mb-6">
                At Sanofy International, we take pride in delivering quality
                products that meet global standards—earning the trust of clients
                worldwide. Backed by cutting-edge facilities, we power seamless
                and efficient trade operations across borders.
                <br />
                <br />
                Our packaging practices are aligned with the ethics and
                standards set by the Indian Institute of Packaging, ensuring
                safety and sustainability. Committed to value, we believe in
                exporting excellence at the right price, making international
                trade both competitive and reliable.
                <br />
                <br />
                With a sharp focus on timely shipments, we ensure every order is
                delivered with precision and punctuality—because your time is
                our priority.
              </p>
              <Link to="/Ourproduct"><button className="bg-black text-white px-6 py-2 rounded-full text-sm transition cursor-pointer">
                View All Product
              </button>
              </Link>
            </div>
          </div>

          {/* Stats Section */}
          <div className="max-w-6xl mx-auto bg-gray-100 rounded-[30px] p-6 md:p-10 flex flex-col md:flex-row justify-between items-center text-center md:space-x-0">
            <div className="md:flex-1">
              <p className="text-2xl font-bold">
                <CountUp end={50} duration={2.5} />+
              </p>
              <p className="text-gray-700">Successful partnerships</p>
            </div>
            <div className="md:flex-1">
              <p className="text-2xl font-bold">
                <CountUp end={8} duration={2.5} />+
              </p>
              <p className="text-gray-700">Countries Covered</p>
            </div>
            <div className="md:flex-1">
              <p className="text-2xl font-bold">
                <CountUp end={5} duration={2.5} />+
              </p>
              <p className="text-gray-700">Years of experience</p>
            </div>
          </div>
        </motion.section>

        {/* Agents Section */}
        <motion.section
          className="bg-white text-gray-900 px-4 md:px-8 lg:px-16 py-12"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="max-w-6xl mx-auto mb-10">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-3 h-3 bg-black " />
              <span className="text-sm text-gray-500 font-medium">
                Team Members
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold leading-snug">
              Meet our exceptional agents for a <br /> seamless experience
            </h2>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {agents.map((agent, index) => (
              <motion.div
                key={index}
                className="relative rounded-[30px] overflow-hidden shadow-lg group"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <img
                  src={agent.image}
                  alt={agent.name}
                  className="w-full h-[350px] object-cover transition-transform duration-300 md:group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-6 py-4 text-white transition-opacity duration-300 opacity-100 md:opacity-0 md:group-hover:opacity-100">
                  <h3 className="text-lg font-semibold">{agent.name}</h3>
                  <p className="text-sm text-gray-300">{agent.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
      <Test />
      <Bottomcontact />
    </>
  );
};

export default TradeExpertsSection;
