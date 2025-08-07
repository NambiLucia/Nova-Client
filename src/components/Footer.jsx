import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaGithub, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#2C3E50] to-[#34495E] text-[#f5f5f5] pt-12">
      <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Logo */}
        <div>
          <Link to="/">
            <h1 className="text-4xl font-bold italic font-Bubblegum text-[#00B8D9] hover:text-[#00D4FF] transition-colors duration-300">
              NOVA
            </h1>
          </Link>
          <p className="mt-3 text-sm leading-relaxed text-gray-300">
            Reliable solutions for managing your payment vouchers and accounting processes with ease.
          </p>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold mb-3 border-b border-gray-500 pb-1">Support</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/guide" className="hover:text-[#00D4FF] transition-colors duration-300">
                Guide
              </Link>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold mb-3 border-b border-gray-500 pb-1">Company</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-[#00D4FF] transition-colors duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-[#00D4FF] transition-colors duration-300">
                About
              </Link>
            </li>
            <li>
              <Link to="/login" className="hover:text-[#00D4FF] transition-colors duration-300">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-600 mt-10 pt-6">
        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mb-4 text-lg">
          <a href="#facebook" className="hover:text-[#00D4FF] transition duration-300"><FaFacebookF /></a>
          <a href="#instagram" className="hover:text-[#00D4FF] transition duration-300"><FaInstagram /></a>
          <a href="#x" className="hover:text-[#00D4FF] transition duration-300"><FaTwitter /></a>
          <a href="#github" className="hover:text-[#00D4FF] transition duration-300"><FaGithub /></a>
          <a href="#youtube" className="hover:text-[#00D4FF] transition duration-300"><FaYoutube /></a>
        </div>

        {/* Copyright */}
        <p className="text-center text-sm text-gray-400">
          © 2024 Nova Payment Voucher Management System. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
