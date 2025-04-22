// import React from "react";
// import TopSellingProduct from "../components/TopSellingProduct";
// import LastSection from "../components/LastSection";
// import ShopByCategory from "../components/ShopByCategory";
// import FeaturesSection from "../components/FeaturesSection";
// import FeatureCollection from "../components/FeatureCollection";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// const Home = () => {

//     return (

//         <>
//             <Navbar />

//             <FeatureCollection />
//             <TopSellingProduct />
//             <ShopByCategory />
//             <FeaturesSection/>
//             <LastSection/>

//             <Footer/>

//         </>
//     )
// }

// export default Home


import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Home1 from "../image/Home1.svg";
import Home2 from "../image/Home2.svg";
import Home3 from "../image/Home3.svg";
import Home4 from "../image/Home4.svg";
import Home12 from "../image/Home12.svg";
import Home13 from "../image/Home13.svg";
import Bottomcontact from "../components/Bottomcontact";
import Product from "../components/Product";
import Service from "../components/Service";
import WhyChoose from "../components/WhyChoose";
import Test from "../components/Test";
import { LazyLoadImage } from 'react-lazy-load-image-component';
const HeroSection = () => {
  const images = [Home1, Home12, Home13];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-4 text-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <span className="bg-gray-100 text-gray-700 text-sm px-4 py-1 rounded-full">
            Sanofy International
          </span>
        </motion.div>

        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center leading-tight"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Bridging Global Markets <br className="hidden md:block" />
          <span className="text-black">with Trust & Efficiency</span>
        </motion.h1>

        <motion.div
          className="mt-8 w-full rounded-2xl overflow-hidden relative"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <LazyLoadImage
            src={images[currentIndex]}
            alt="Grains and Pulses"
            className="w-full h-auto object-cover transition-all duration-500"
          />
        </motion.div>

        <motion.div
          className="py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-start"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Left Column */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-3 h-3 bg-black " />
              <span className="text-sm text-gray-700 font-medium">About Us</span>
            </div>
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-justify-between"
              variants={fadeInUp}
            >
              Connecting Markets, Empowering Trade Across Borders
            </motion.h2>
            <button className="bg-black text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition">
              Learn More
            </button>
          </motion.div>

          {/* Right Column - 3 items */}
          <div className="space-y-8">
            {[
              {
                img: Home2,
                title: "Empowering trade through global connections.",
                desc: "Deliver reliable, innovative, and sustainable export-import solutions that connect markets, build trust, and empower growth globally.",
              },
              {
                img: Home3,
                title: "Leading global trade with trust.",
                desc: "Become a trusted global trade leader by delivering excellence, fostering innovation, and enabling seamless international commerce.",
              },
              {
                img: Home4,
                title: "Global Reach, Trusted Connections.",
                desc: "Building global reach and fostering trusted connections to empower businesses and drive success worldwide.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="flex items-start gap-4"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="bg-black p-3 rounded-lg w-15 h-10 flex items-center justify-center">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-auto object-contain text-justify"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900  ">
                    {item.title}
                  </h4>
                  <p className="text-sm mt-2 text-gray-600 text-justify">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <Product />
      <Service />
      <WhyChoose />
      <Test />
      <Bottomcontact />
    </>
  );
};

export default HeroSection;








