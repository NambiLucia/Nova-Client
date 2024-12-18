import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="bg-gradient-to-r from-gray-400 to-gray-200 text-[#333333] shadow-md">
      <div className="container mx-auto px-8 lg:px-20 py-4 flex items-center justify-between">
        
        <div className="flex items-center space-x-2">
          {/* <img
            src="\public\undraw_online_transactions_-02-ka.svg"
            alt="Nova Logo"
            className="w-10 h-10 object-contain"
          /> */}
          <span className="text-3xl font-bold italic font-Bubblegum text-[#3F51B5]">
            <Link to="/">Nova</Link>
          </span>
        </div>

       
        <div className="hidden md:flex space-x-8 text-lg font-Roboto">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/content" className="hover:underline">
            About
          </Link>
          <Link to="/display" className="hover:underline">
            Dashboard
          </Link>
        </div>

       
        <div className="space-x-4 font-Roboto">
        <Link to="/login"> <button className="bg-[#f5f5f5] text-[#3F51B5] px-4 py-2 rounded-md font-semibold hover:bg-gray-200">
            Login
          </button></Link>
          <Link to="/register">
            <button className="bg-[#f5f5f5] text-[#3F51B5] px-4 py-2 rounded-md font-semibold hover:bg-gray-200">
              Signup
            </button>
          </Link>
        </div>
      </div>

      {/* Mobile Navigation Links */}
      <div className="md:hidden bg-gradient-to-r from-gray-400 to-gray-200 text-center py-2 font-Roboto">
        <a href="/" className="block py-2 hover:underline">
          Home
        </a>
        <a href="#about" className="block py-2 hover:underline">
          About
        </a>
        <a href="#dashboard" className="block py-2 hover:underline">
          Dashboard
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
