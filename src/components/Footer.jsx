function Footer() {
    return (
      <footer className="bg-[#333333] text-white py-8">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Section: Logo */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h1 className="text-2xl font-bold">NOVA</h1>
          </div>
  
          {/* Right Section: Links */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Support</h3>
            <ul>
              <li>
                <a href="#guide" className="hover:underline">Guide</a>
              </li>
            </ul>
          </div>
  
          {/* Company */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Company</h3>
            <ul>
              <li>
                <a href="/" className="hover:underline">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:underline">About</a>
              </li>
              <li>
                <a href="#dashboard" className="hover:underline">Dashboard</a>
              </li>
            </ul>
          </div>
        </div>
  
        {/* Social Media Section */}
        <div className="mt-8 bg-[#333333] py-4 text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="#facebook" className="hover:text-gray-400">Facebook</a>
            <a href="#instagram" className="hover:text-gray-400">Instagram</a>
            <a href="#x" className="hover:text-gray-400">X</a>
            <a href="#github" className="hover:text-gray-400">GitHub</a>
            <a href="#youtube" className="hover:text-gray-400">YouTube</a>
          </div >
          <p className="text-sm text-[gray-500]">
            © 2024 Created by Lucia. All rights reserved.
          </p>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  