import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Termsofservice from "./components/Termsofservice";
import Navbar from "./components/Navbar";
import Shippingpolicy from "./components/Shippingpolicy";
import Privacypolicy from "./components/Privacypolicy";
import Blog from "./components/Blog";
import Singleblog from "./components/Singleblog";
import Customize from "./components/Customize";
import Test from "./components/Test";
import Footer from "./components/Footer";
import About from "./components/About";
import Home from "./Page/Home";
import Ourproduct from "./components/Ourproduct";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Singleblog" element={<Singleblog />} />
          <Route path="/Customize" element={<Customize />} />
          <Route path="/Ourproduct" element={<Ourproduct/>} />
          <Route path="/About" element={<About />} />
          <Route path="/Test" element={<Test />} />
          <Route path="/Contact" element={<Contact />} />


          <Route path="/Termsofservice" element={<Termsofservice />} />
          <Route path="/Privacypolicy" element={<Privacypolicy />} />
          <Route path="/Shippingpolicy" element={<Shippingpolicy />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
