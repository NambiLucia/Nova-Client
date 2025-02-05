import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#333333] text-[#f5f5f5] shadow-md">
      <div className="container mx-auto px-8 lg:px-20 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <span className="text-3xl font-bold italic font-Bubblegum text-[#3F51B5]">
            <Link to="/">Nova</Link>
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 text-lg font-Roboto">
          <Link to="/" className="hover:underline text-[#f5f5f5]">Home</Link>
          <Link to="/about" className="hover:underline text-[#f5f5f5]">About</Link>
          <Link to="/guide" className="hover:underline text-[#f5f5f5]">Guide</Link>
        </div>

        {/* Login Button */}
        <div className="hidden md:flex space-x-4 font-Roboto">
          <Link to="/login">
            <button className="bg-[#3F51B5] text-[#f5f5f5] px-4 py-2 rounded-md font-semibold hover:bg-[#303F9F]">
              Login
            </button>
          </Link>
        </div>

        {/* Mobile Hamburger Menu Button */}
        <button
          className="md:hidden text-3xl focus:outline-none text-[#f5f5f5]"
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
          className="md:hidden bg-[#333333] text-center py-4 space-y-4 font-Roboto"
        >
          <Link to="/" className="block py-2 hover:underline text-[#f5f5f5]" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" className="block py-2 hover:underline text-[#f5f5f5]" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/guide" className="block py-2 hover:underline text-[#f5f5f5]" onClick={() => setIsOpen(false)}>Guide</Link>
          <Link to="/login" className="block py-2 hover:underline text-[#f5f5f5]" onClick={() => setIsOpen(false)}>Login</Link>
        </motion.div>
      )}
    </nav>
  );
}

export default NavBar;
