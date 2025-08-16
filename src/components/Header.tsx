import React, { useState } from "react";
import { Search, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import NavLinkWithImage from "./NavLinkWithImage";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between py-4">
          {/* Left Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              to="/home"
              className="flex items-center text-gray-700 hover:text-emerald-600 transition-colors"
            >
              <img
                src="/logo1.png"
                alt="Miss Spa Logo"
                className="h-16 w-auto"
              />
            </Link>
            <NavLinkWithImage to="/home" label="Home" image="/powCopy.png" />
            {/* <NavLinkWithImage to="/services" label="Services" image="/powCopy.png" /> */}
            <NavLinkWithImage to="/shop" label="Shop" image="/powCopy.png" />
            <NavLinkWithImage to="/aboutUs" label="About us" image="/powCopy.png" />
            <NavLinkWithImage to="/contactUs" label="Contact Us" image="/powCopy.png" />

            {/* <Link
              to="/aboutUs"
              className="text-gray-700 hover:text-emerald-600 transition-colors"
            >
              About us
            </Link>
            <Link
              to="/services"
              className="text-gray-700 hover:text-emerald-600 transition-colors"
            >
              Services
            </Link>
            <Link
              to="/pages"
              className="text-gray-700 hover:text-emerald-600 transition-colors"
            >
              Pages
            </Link>
            <Link
              to="/blog"
              className="text-gray-700 hover:text-emerald-600 transition-colors"
            >
              Blog
            </Link>
            <Link
              to="/contactUs"
              className="text-gray-700 hover:text-emerald-600 transition-colors"
            >
              Contact Us
            </Link> */}
          </nav>
          {/* Right Navigation */}
          <nav className="hidden lg:flex items-center space-x-8"></nav>

          {/* Search and CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="p-2 text-gray-700 hover:text-emerald-600 transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors text-sm font-medium">
              Book an Appointment
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <a
                href="#"
                className="text-gray-700 hover:text-emerald-600 transition-colors"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-emerald-600 transition-colors"
              >
                About us
              </a>
              {/* <a
                href="#"
                className="text-gray-700 hover:text-emerald-600 transition-colors"
              >
                Services
              </a> */}
              <a
                href="#"
                className="text-gray-700 hover:text-emerald-600 transition-colors"
              >
                Pages
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-emerald-600 transition-colors"
              >
                Blog
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-emerald-600 transition-colors"
              >
                Contact Us
              </a>
              <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors text-sm font-medium w-fit">
                Book an Appointment
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

{
  /* <div className="flex space-x-2">
  <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
  <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
  <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
</div> */
}
