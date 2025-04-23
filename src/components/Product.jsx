import React from 'react';
import { motion } from 'framer-motion';
import Hpro1 from "../image/Hpro1.svg";
import Hpro2 from "../image/Hpro2.svg";
import Hpro3 from "../image/Hpro3.svg";
import Hpro4 from "../image/Hpro4.svg";
import { Link } from 'react-router-dom';

const products = [
  {
    title: 'Kidney beans',
    description: 'Nutritious, high-protein beans perfect for soups, salads, and stews.',
    image: Hpro1
  },
  {
    title: 'Cardamom',
    description: 'A fragrant spice enhancing flavors in both sweet and savory dishes.',
    image: Hpro2
  },
  {
    title: 'Kidney beans',
    description: 'Nutritious, high-protein beans perfect for soups, salads, and stews.',
    image: Hpro3
  },
  {
    title: 'Basmati Rice',
    description: 'Aromatic, long-grain rice perfect for curries, pilafs, and salads.',
    image: Hpro4
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const ProductShowcase = () => {
  return (
    <section className="px-4 md:px-6 lg:px-8  max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-3 h-3 bg-black " />
            <span className="text-sm text-gray-700 font-medium">Product</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 max-w-xl leading-snug">
            High-quality, reliable solutions for diverse industries.
          </h2>
        </div>
        <Link to="/Ourproduct"><button className="bg-black text-white px-6 py-3 rounded-full text-sm font-medium  transition duration-200 cursor-pointer">
          View All Products
        </button>
        </Link>
      </motion.div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <motion.div
            key={index}
            className="group bg-white rounded-2xl overflow-hidden transition duration-300"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }} // Stagger effect
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-900">{product.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{product.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProductShowcase;
