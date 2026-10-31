import React, { useState, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { IoMdMenu } from "react-icons/io";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const location = useLocation();

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skill", label: "Skill" },
    { id: "services", label: "Services" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  // Track scroll position to highlight active link
  useEffect(() => {
    const handleScroll = () => {
      navItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(item.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-white z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between h-[70px]">
        {/* Logo */}
        <div className="text-2xl font-extrabold text-transparent bg-gradient-to-r from-blue-400/65 to-orange-400/45 bg-clip-text">
          Portfolio
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-7 font-semibold text-lg">
          {navItems.map((item) => (
            <Link
              key={item.id}
              smooth
              to={`/#${item.id}`}
              className={`transition-all duration-300 border-b-2 ${
                activeSection === item.id
                  ? "border-orange-500 text-orange-400"
                  : "border-transparent hover:border-orange-500"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <IoMdMenu
            className="text-3xl cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          />
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-black px-6 py-4 text-center space-y-4 animate-fade-down">
          {navItems.map((item) => (
            <Link
              key={item.id}
              smooth
              to={`/#${item.id}`}
              className={`block text-lg transition-all duration-300 border-b-2 ${
                activeSection === item.id
                  ? "border-orange-500 text-orange-400"
                  : "border-transparent hover:border-orange-500"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
