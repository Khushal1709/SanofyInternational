
import React from "react";
import Flogo from "../image/Flogo.svg";
import { Link } from "react-router-dom";

const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
  };

  
const Footer = () => (
  <footer className="bg-[#181818] text-white py-10 px-4">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
      {/* Left Section */}
      <div className="mb-8 md:mb-0">
        <div className="flex items-center mb-4">
          {/* Logo */}
          <Link to="/"><img src={Flogo} alt="Sanofy" onClick={scrollToTop} /></Link>
        </div>
        <p className="max-w-xs text-white text-base">
          Bridging the gap between global trade partners with trust, reliability, and seamless solutions.
        </p>
      </div>

      {/* Links Section */}
      <div className="flex gap-16">
        {/* Company */}
        <div>
          <h4 className="font-bold mb-3">Company</h4>
          <ul className="space-y-2 text-white">
            <li><Link to="/About" onClick={scrollToTop} className="hover:text-cyan-400">About US</Link></li>
            <li><Link to="/Ourproduct" onClick={scrollToTop} className="hover:text-cyan-400">Product</Link></li>
            <li><Link to="/Blog" onClick={scrollToTop} className="hover:text-cyan-400">Blog</Link></li>
            <li><Link to="/Contact" onClick={scrollToTop} className="hover:text-cyan-400">Contact</Link></li>
          </ul>
        </div>
        {/* Legal */}
        <div>
          <h4 className="font-bold mb-3">Legal</h4>
          <ul className="space-y-2 text-white">
            <li><Link to="/Termsofservice" onClick={scrollToTop} className="hover:text-cyan-400">Terms of Service</Link></li>
            <li><Link to="/Privacypolicy" onClick={scrollToTop} className="hover:text-cyan-400">Privacy Policy</Link></li>
            <li><Link to="/Shippingpolicy" onClick={scrollToTop} className="hover:text-cyan-400">Shipping Policy</Link></li>
            <li><Link to="/Ourproduct" onClick={scrollToTop} className="hover:text-cyan-400">Explore</Link></li>
          </ul>
        </div>
      </div>
    </div>
    {/* Bottom Bar */}
    <div className="border-t border-gray-700 mt-8 pt-4 text-center text-white text-sm">
      © 2025 Sanofy. All rights reserved.
    </div>
  </footer>
);

export default Footer;
