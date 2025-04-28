import contact1 from "../image/contact1.svg";
import email from "../image/email.svg";
import phone from "../image/phone.svg";
import location from "../image/location.svg";
import { motion } from "framer-motion";
import Test from "../components/Test";
import { LazyLoadImage } from "react-lazy-load-image-component";
import formlogo from "../image/formlogo.svg";
export default function Contact() {
  return (
    <>
      <div className="bg-white px-4 sm:px-6 py-8 sm:py-12">
        {/* Contact Us Header Section */}
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <button className="mb-3 px-4 py-1 bg-gray-200 rounded-full text-sm">
              Contact Us
            </button>
            <h1 className="text-2xl md:text-3xl font-bold px-2">
              Get in touch with us today for expert assistance
            </h1>
          </motion.div>

          {/* Contact Info Section - Responsive for all devices */}
          <motion.div
            className="w-full mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="relative rounded-3xl overflow-hidden">
              {/* Background image - hidden on mobile */}
              <div className="hidden md:block">
                <LazyLoadImage
                  src={contact1}
                  alt="Contact background"
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>

              {/* Contact Card - Full width on mobile, overlay on desktop */}
              <div
                className={`
              bg-white rounded-3xl shadow-xl p-10 sm:p-6 
              md:absolute md:top-1/2 md:left-14 md:-translate-y-1/2 
              md:max-w-md md:w-[90%] lg:w-[400px]
              ${!contact1 || window.innerWidth < 768 ? "w-full" : ""}
            `}
              >
                <div className="flex flex-col gap-5 sm:gap-6">
                  {/* Email */}
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0">
                      <img
                        src={email || "/placeholder.svg"}
                        alt="email"
                        className="h-8 w-8 sm:h-9 sm:w-9 bg-black rounded-lg p-1"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-base sm:text-lg">
                        Email Address:
                      </span>
                      <span className="text-sm font-medium sm:text-base break-words">
                        sanofyinternational05@gmail.com
                      </span>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0">
                      <img
                        src={phone || "/placeholder.svg"}
                        alt="phone"
                        className="h-8 w-8 sm:h-9 sm:w-9 bg-black rounded-lg p-1"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-base sm:text-lg ">
                        Phone Number:
                      </span>
                      <span className="text-sm font-medium sm:text-base">
                        +91 79901 65810 <br /> +91 96627 11312
                      </span>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0">
                      <LazyLoadImage
                        src={location}
                        alt="location"
                        className="h-8 w-8 sm:h-9 sm:w-9 bg-black rounded-lg p-1"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-base sm:text-lg ">
                        Location:
                      </span>
                      <span className="text-sm sm:text-base font-medium break-words">
                         Surat,Gujarat,India
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form Section */}
          <motion.div
            className="w-full"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-start">
              {/* Left Text */}
              <div className="text-left">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 px-1">
                  Fill out this form, let's start trading globally!
                </h2>
                <div className="flex justify-center items-center mt-4">
                <img src={formlogo} alt="Formlogo" className="h-100 w-100" />
                </div>
              </div>

              {/* Form Card */}
              <div className="bg-gray-100 rounded-2xl p-5 sm:p-6 md:p-8 shadow-md w-full">
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full p-3 rounded-md bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black text-base"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full p-3 rounded-md bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black text-base"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full p-3 rounded-md bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black text-base"
                  />
                  <select className="w-full p-3 rounded-md bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black text-base">
                    <option value="">Subject</option>
                    <option value="trading">Trading Inquiry</option>
                    <option value="partnership">Partnership</option>
                    <option value="support">Support</option>
                  </select>
                  <textarea
                    rows="4"
                    placeholder="Message"
                    className="w-full p-3 rounded-md bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black text-base"
                  />
                  <button
                    type="submit"
                    className="w-full bg-black text-white py-3 rounded-md hover:opacity-90 transition text-base font-medium"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <Test />
    </>
  );
}
