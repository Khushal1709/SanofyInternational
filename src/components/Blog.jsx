import React from "react";
import { motion } from "framer-motion";
import Tradelogo from "../image/Tradeblog.svg";
import B1 from "../image/B1.svg";
import B2 from "../image/B2.svg";
import B3 from "../image/B3.svg";
import { Link } from "react-router-dom";
import Bottomcontact from "./Bottomcontact";

const blogData = [
  {
    title: "Empowering global trade with innovation,",
    description:
      "Connecting global markets through reliable and seamless trade solutions.",
    image: B1,
  },
  {
    title: "We connect businesses through trusted",
    description: "Expanding borders with seamless import and export services.",
    image: B2,
  },
  {
    title: "Honoring heroes, remembering sacrifice",
    description: "Two stand still, where courage echoes through time.",
    image: B3,
  },
  {
    title: "Empowering global trade with innovation,",
    description:
      "Connecting global markets through reliable and seamless trade solutions.",
    image: B1,
  },
  {
    title: "We connect businesses through trusted",
    description: "Expanding borders with seamless import and export services.",
    image: B2,
  },
  {
    title: "Honoring heroes, remembering sacrifice",
    description: "Two stand still, where courage echoes through time.",
    image: B3,
  },
];

const Blog = () => {
  return (
    <div className="bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Top label */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center">
            <div className="inline-block bg-gray-100 text-gray-600 text-sm px-4 py-1 rounded-full mb-4 text-center w-20">
              Blogs
            </div>
          </div>

          {/* Main heading */}
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-10 text-center">
            Expert advice and market updates
            <br /> on global trade.
          </h2>
        </motion.div>

        {/* Animated Image section with overlay card */}
        <div className="relative rounded-[2rem] overflow-hidden mb-16">
          {/* Image - only visible on sm and up */}
          <Link to="/Singleblog">
            <motion.img
              src={Tradelogo}
              alt="Trade background"
              className="hidden sm:block w-full h-auto sm:h-[600px] object-cover"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true, amount: 0.2 }}
            />
          </Link>

          {/* Text content - animated */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            className="relative sm:absolute sm:inset-x-4 sm:bottom-20 sm:left-20 sm:right-auto bg-white bg-opacity-90 rounded-2xl p-4 sm:p-8 text-left shadow-lg max-w-full sm:max-w-lg mt-4 sm:mt-0"
          >
            <Link to="/Singleblog">
              <div className="text-xs text-gray-500 bg-gray-100 inline-block px-3 py-1 rounded-full mb-2">
                Resource
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                How to choose the right import-export partner for your business
                needs
              </h3>
              <p className="text-sm sm:text-base text-gray-700">
                Choosing the right import-export partner is crucial for smooth,
                efficient, and profitable global trade.
              </p>
            </Link>
          </motion.div>
        </div>

        {/* Blog Grid Section */}
        <div className="mb-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 bg-black" />
              <span className="text-sm text-gray-600 font-medium">
                Other Blog
              </span>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogData.map((blog, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: false, amount: 0.2 }}
              >
                <div className="rounded-2xl overflow-hidden mb-4">
                  <Link to="/Singleblog">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-[300px] sm:h-[400px] object-cover"
                    />
                  </Link>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {blog.title}
                </h3>
                <p className="text-sm text-gray-600">{blog.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <Bottomcontact />
    </div>
  );
};

export default Blog;
