import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Guide", path: "/guide" },
  ];

  return (
    <nav className="bg-gradient-to-r from-[#2C3E50] to-[#34495E] text-white shadow-lg fixed w-full z-50">
      <div className="container mx-auto px-8 lg:px-20 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <span className="text-3xl font-bold tracking-wide font-sans text-[#00B8D9] hover:text-[#00D4FF] transition-colors duration-300">
            <Link to="/">Nova</Link>
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-10 text-lg font-medium">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="relative group"
            >
              <span className="transition-colors duration-300 hover:text-[#00D4FF]">
                {item.name}
              </span>
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#00D4FF] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Login Button */}
        <div className="hidden md:flex">
          <Link to="/login">
            <button className="bg-[#00B8D9] hover:bg-[#00D4FF] px-5 py-2 rounded-lg font-semibold shadow-md transition-all duration-300">
              Login
            </button>
          </Link>
        </div>

        {/* Mobile Hamburger Menu Button */}
        <button
          className="md:hidden text-3xl focus:outline-none transition-all duration-300 transform hover:scale-110 hover:text-[#00D4FF] hover:drop-shadow-[0_0_6px_#00D4FF]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-[#2C3E50] text-center py-6 space-y-6 shadow-lg"
        >
          {navItems.concat({ name: "Login", path: "/login" }).map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="block text-lg font-medium transition-colors duration-300 hover:text-[#00D4FF]"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </motion.div>
      )}
    </nav>
  );
}

export default NavBar;
