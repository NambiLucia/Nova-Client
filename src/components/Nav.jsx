import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="bg-gradient-to-r from-gray-400 to-gray-200 text-[#333333]">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
      
        <div className="text-xl font-bold font-Roboto">
          <Link to="/">Nova</Link>
        </div>

       
        <div className="hidden md:flex space-x-8 text-lg font-Roboto">
          <Link to="/" className="hover:underline">Home</Link>
          <a href="#about" className="hover:underline">About</a>
          <a href="#dashboard" className="hover:underline">Dashboard</a>
        </div>

   
        <div className="space-x-4 font-Roboto">
          <button className="bg-white text-blue-700 px-4 py-2 rounded-md font-semibold hover:bg-gray-200">
            Login
          </button>
          <button className="bg-yellow-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-yellow-600">
            Signup
          </button>
        </div>
      </div>

      {/* Mobile Navigation Links */}
      <div className="md:hidden bg-gradient-to-r from-gray-400 to-gray-200 text-center py-2 font-Roboto">
        <a href="/" className="block py-2 hover:underline">Home</a>
        <a href="#about" className="block py-2 hover:underline">About</a>
        <a href="#dashboard" className="block py-2 hover:underline">Dashboard</a>
      </div>
    </nav>
  );
}

export default NavBar;
