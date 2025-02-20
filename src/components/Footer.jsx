import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#333333] text-[#f5f5f5] py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section: Logo */}
        <div className="text-center md:text-left mb-6 md:mb-0">
          <Link to="/">
            <h1 className="text-4xl font-bold italic font-Bubblegum text-[#3F51B5]">NOVA</h1>
          </Link>
        </div>

        {/* Right Section: Links */}
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-2 text-[#f5f5f5]">Support</h3>
          <ul>
            <li>
              <Link to="/guide" className="hover:underline text-[#f5f5f5]">Guide</Link>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-2 text-[#f5f5f5]">Company</h3>
          <ul>
            <li>
              <Link to="/" className="hover:underline text-[#f5f5f5]">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline text-[#f5f5f5]">About</Link>
            </li>
            <li>
              <Link to="/login" className="hover:underline text-[#f5f5f5]">Login</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="mt-8 bg-[#333333] py-4 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#facebook" className="hover:text-[#3F51B5]">Facebook</a>
          <a href="#instagram" className="hover:text-[#3F51B5]">Instagram</a>
          <a href="#x" className="hover:text-[#3F51B5]">X</a>
          <a href="#github" className="hover:text-[#3F51B5]">GitHub</a>
          <a href="#youtube" className="hover:text-[#3F51B5]">YouTube</a>
        </div>
        <p className="text-sm text-[#f5f5f5]">
          © 2024 Nova Payment Voucher Management System. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
