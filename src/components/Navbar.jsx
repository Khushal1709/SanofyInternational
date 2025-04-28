import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "../image/logo.svg";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (categoryName) => {
    navigate(`/Ourproduct?category=${encodeURIComponent(categoryName)}`);
    console.log(categoryName, "22");
    setIsProductDropdownOpen(false);
  };

  return (
    <nav className="max-w-7xl mx-auto relative flex items-center justify-between px-4 py-4 md:px-6 lg:px-8">
      {/* Logo */}
      <div className="flex items-center">
        <Link to="/">
          <img
            src={logo}
            alt="Sanofy International"
            width={150}
            height={40}
            className="h-auto w-auto"
          />
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="ml-auto md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? (
          <X className="h-6 w-6 text-gray-700" />
        ) : (
          <Menu className="h-6 w-6 text-gray-700" />
        )}
      </button>

      {/* Desktop Navigation */}
      <div className="hidden items-center justify-center flex-1 md:flex">
        <div className="flex space-x-8">
          <Link
            to="/"
            className="text-gray-800 hover:text-gray-600 font-medium"
          >
            Home
          </Link>
          <Link
            to="/About"
            className="text-gray-800 hover:text-gray-600 font-medium"
          >
            About
          </Link>
          <div className="relative group">
            <Link to="/Ourproduct">
              <div className="flex cursor-pointer items-center text-gray-800 hover:text-gray-600 font-medium">
                Product
                <ChevronDown className="ml-1 h-4 w-4" />
              </div>
            </Link>
            <div className="absolute left-0 top-full w-48 bg-white shadow-lg ring-1 ring-black ring-opacity-5 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto">
              <ul className="py-1">
                <li
                  className="block px-4 py-2 text-sm hover:text-white hover:bg-black cursor-pointer"
                  onClick={() => handleNavigation("PULSES")}
                >
                  PULSES
                </li>
                <li
                  className="block px-4 py-2 text-sm hover:text-white hover:bg-black cursor-pointer"
                  onClick={() => handleNavigation("SPICES")}
                >
                  SPICES
                </li>
                <li
                  className="block px-4 py-2 text-sm hover:text-white hover:bg-black cursor-pointer"
                  onClick={() => handleNavigation("VEGETABLE")}
                >
                  VEGETABLE
                </li>
                <li
                  className="block px-4 py-2 text-sm hover:text-white hover:bg-black cursor-pointer"
                  onClick={() => handleNavigation("GRAINS")}
                >
                  GRAINS
                </li>
                <li
                  className="block px-4 py-2 text-sm hover:text-white hover:bg-black cursor-pointer"
                  onClick={() => handleNavigation("COTTON SALES")}
                >
                  COTTON SALES
                </li>
              </ul>
            </div>
          </div>
          <Link
            to="/Contact"
            className="text-gray-800 hover:text-gray-600 font-medium"
          >
            Contact
          </Link>
        </div>
      </div>

      {/* Inquiry Button */}
      <div className="hidden md:block">
        <Link
          to="/Contact"
          className="rounded-full bg-black px-6 py-2.5 text-sm font-medium text-white hover:bg-gray-800 transition-colors"
        >
          Inquiry Now
        </Link>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 z-20 bg-white shadow-lg md:hidden">
          <div className="flex flex-col px-4 py-2">
            <Link
              to="/"
              className="py-3 text-gray-800 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/About"
              className="py-3 text-gray-800 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <div>
              <button
                className="flex items-center w-full py-3 text-gray-800 border-b border-gray-100"
                onClick={() => setIsProductDropdownOpen(!isProductDropdownOpen)}
              >
                Product
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isProductDropdownOpen && (
                <div className="pl-4">
                  <ul>
                    <li
                      className="block py-2 text-gray-700"
                      onClick={() => {
                        handleNavigation("PULSES");
                        setIsMenuOpen(false);
                      }}
                    >
                      PULSES
                    </li>
                    <li
                      className="block py-2 text-gray-700"
                      onClick={() => {
                        setIsMenuOpen(false);
                        handleNavigation("SPICES");
                      }}
                    >
                      SPICES
                    </li>
                    <li
                      className="block py-2 text-gray-700"
                      onClick={() => {
                        handleNavigation("VEGETABLE");
                        setIsMenuOpen(false);
                      }}
                    >
                      VEGETABLE
                    </li>
                    <li
                      className="block py-2 text-gray-700"
                      onClick={() => {
                        handleNavigation("GRAINS");
                        setIsMenuOpen(false);
                      }}
                    >
                      GRAINS
                    </li>
                    <li
                      className="block py-2 text-gray-700"
                      onClick={() => {
                        handleNavigation("COTTON SALES");
                        setIsMenuOpen(false);
                      }}
                    >
                      COTTON SALES
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <Link
              to="/Contact"
              className="py-3 text-gray-800 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/Contact"
              className="py-3 text-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Inquiry Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}








// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { ChevronDown, Menu, X } from "lucide-react";
// import logo from "../image/logo.svg";

// export default function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const navigate = useNavigate();

//   const handleNavigation = (categoryName) => {
//     navigate(`/Ourproduct?category=${encodeURIComponent(categoryName)}`);
//     setIsMenuOpen(false);
//   };

//   return (
//     <nav className="max-w-7xl mx-auto relative flex items-center justify-between px-4 py-4 md:px-6 lg:px-8">
//       {/* Logo */}
//       <div className="flex items-center">
//         <Link to="/">
//           <img
//             src={logo}
//             alt="Sanofy International"
//             width={150}
//             height={40}
//             className="h-auto w-auto"
//           />
//         </Link>
//       </div>

//       {/* Mobile Menu Button */}
//       <button
//         className="ml-auto md:hidden"
//         onClick={() => setIsMenuOpen(!isMenuOpen)}
//       >
//         {isMenuOpen ? (
//           <X className="h-6 w-6 text-gray-700" />
//         ) : (
//           <Menu className="h-6 w-6 text-gray-700" />
//         )}
//       </button>

//       {/* Desktop Navigation */}
//       <div className="hidden items-center justify-center flex-1 md:flex">
//         <div className="flex space-x-8">
//           <Link
//             to="/"
//             className="text-gray-800 hover:text-gray-600 font-medium"
//           >
//             Home
//           </Link>
//           <Link
//             to="/About"
//             className="text-gray-800 hover:text-gray-600 font-medium"
//           >
//             About
//           </Link>

//           {/* Product Dropdown */}
//           <div className="relative group">
//             <div className="flex cursor-pointer items-center text-gray-800 hover:text-gray-600 font-medium">
//               Product
//               <ChevronDown className="ml-1 h-4 w-4" />
//             </div>
//             <div className="absolute left-0 top-full mt-1 w-48 bg-white shadow-lg ring-1 ring-black ring-opacity-5 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto">
//               <ul className="py-1">
//                 <li
//                   className="block px-4 py-2 text-sm hover:text-white hover:bg-black cursor-pointer"
//                   onClick={() => handleNavigation("PULSES")}
//                 >
//                   PULSES
//                 </li>
//                 <li
//                   className="block px-4 py-2 text-sm hover:text-white hover:bg-black cursor-pointer"
//                   onClick={() => handleNavigation("SPICES")}
//                 >
//                   SPICES
//                 </li>
//                 <li
//                   className="block px-4 py-2 text-sm hover:text-white hover:bg-black cursor-pointer"
//                   onClick={() => handleNavigation("VEGETABLE")}
//                 >
//                   VEGETABLE
//                 </li>
//                 <li
//                   className="block px-4 py-2 text-sm hover:text-white hover:bg-black cursor-pointer"
//                   onClick={() => handleNavigation("GRAINS")}
//                 >
//                   GRAINS
//                 </li>
//                 <li
//                   className="block px-4 py-2 text-sm hover:text-white hover:bg-black cursor-pointer"
//                   onClick={() => handleNavigation("COTTON SALES")}
//                 >
//                   COTTON SALES
//                 </li>
//               </ul>
//             </div>
//           </div>

//           <Link
//             to="/Contact"
//             className="text-gray-800 hover:text-gray-600 font-medium"
//           >
//             Contact
//           </Link>
//         </div>
//       </div>

//       {/* Inquiry Button */}
//       <div className="hidden md:block">
//         <Link
//           to="/Contact"
//           className="rounded-full bg-black px-6 py-2.5 text-sm font-medium text-white hover:bg-gray-800 transition-colors"
//         >
//           Inquiry Now
//         </Link>
//       </div>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="absolute top-full left-0 right-0 z-20 bg-white shadow-lg md:hidden">
//           <div className="flex flex-col px-4 py-2">
//             <Link
//               to="/"
//               className="py-3 text-gray-800 border-b border-gray-100"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Home
//             </Link>
//             <Link
//               to="/About"
//               className="py-3 text-gray-800 border-b border-gray-100"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               About
//             </Link>
//             <div>
//               <div className="flex items-center w-full py-3 text-gray-800 border-b border-gray-100">
//                 Product
//                 <ChevronDown className="ml-1 h-4 w-4" />
//               </div>
//               <div className="pl-4">
//                 <ul>
//                   <li
//                     className="block py-2 text-gray-700 cursor-pointer"
//                     onClick={() => handleNavigation("PULSES")}
//                   >
//                     PULSES
//                   </li>
//                   <li
//                     className="block py-2 text-gray-700 cursor-pointer"
//                     onClick={() => handleNavigation("SPICES")}
//                   >
//                     SPICES
//                   </li>
//                   <li
//                     className="block py-2 text-gray-700 cursor-pointer"
//                     onClick={() => handleNavigation("VEGETABLE")}
//                   >
//                     VEGETABLE
//                   </li>
//                   <li
//                     className="block py-2 text-gray-700 cursor-pointer"
//                     onClick={() => handleNavigation("GRAINS")}
//                   >
//                     GRAINS
//                   </li>
//                   <li
//                     className="block py-2 text-gray-700 cursor-pointer"
//                     onClick={() => handleNavigation("COTTON SALES")}
//                   >
//                     COTTON SALES
//                   </li>
//                 </ul>
//               </div>
//             </div>
//             <Link
//               to="/Contact"
//               className="py-3 text-gray-800 border-b border-gray-100"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Contact
//             </Link>
//             <Link
//               to="/Contact"
//               className="py-3 text-gray-800"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Inquiry Now
//             </Link>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }
