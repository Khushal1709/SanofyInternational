import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "../image/logo.svg";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);

  const handleNavigation = (categoryName) => {
    // Navigate to the Product.jsx page with the category name as Link query parameter
    navigate(`/Ourproduct?category=${encodeURIComponent(categoryName)}`);
    console.log(categoryName, "22");
  };
  const navigate = useNavigate();

  return (
    <nav className="max-w-7xl mx-auto relative flex items-center justify-between px-4 py-4 md:px-6 lg:px-8">
      {/* Logo */}
      <div className="flex items-center">
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
          <div className="relative">
            <Link to={"/Ourproduct"}>
              <button
                className="flex cursor-pointer  items-center text-gray-800 hover:text-gray-600 font-medium"
                onClick={() => setIsProductDropdownOpen(!isProductDropdownOpen)}
              >
                Product
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </Link>
            {isProductDropdownOpen && (
              <div className="absolute cursor-pointer  left-0 mt-2 w-48  bg-white  shadow-lg ring-1 ring-black ring-opacity-5 z-10">
                <ul>
                  <li
                    // to="/products/category1"
                    className="block px-4 py-2 text-sm hover:text-white hover:bg-black"
                    onClick={() => {
                      handleNavigation("PULSES");
                      setIsProductDropdownOpen();
                    }}
                  >
                    PULSES
                  </li>
                  <li
                    className="block px-4 py-2 text-sm hover:text-white hover:bg-black"
                    onClick={() => {
                      handleNavigation("SPICES");
                      setIsProductDropdownOpen();
                    }}
                  >
                    SPICES
                  </li>
                  <li
                    className="block px-4 py-2 text-sm hover:text-white hover:bg-black"
                    onClick={() => {
                      handleNavigation("VEGETABLE");
                      setIsProductDropdownOpen();
                    }}
                  >
                    VEGETABLE
                  </li>
                  <li
                    className="block px-4 py-2 text-sm hover:text-white hover:bg-black"
                    onClick={() => {
                      handleNavigation("GRAINS");
                      setIsProductDropdownOpen();
                    }}
                  >
                    GRAINS
                  </li>
                  <li
                    className="block px-4 py-2 text-sm hover:text-white hover:bg-black"
                    onClick={() => {
                      handleNavigation("COTTON SALES");
                      setIsProductDropdownOpen();
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
            <a
              href="/"
              className="py-3 text-gray-800 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="/About"
              className="py-3 text-gray-800 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
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
            <a
              href="/Contact"
              className="py-3 text-gray-800 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <a
              href="/Contact"
              className="py-3 text-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Inquiry Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
