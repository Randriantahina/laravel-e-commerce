import { Link } from "react-router-dom";
import { User, ShoppingBag } from "lucide-react";
import React from "react";
import logo from "../assets/logo1.png";

const Navbar: React.FC = () => {
  return (
    <nav className=" max-w-md mx-auto w-full  px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <Link to="/" className="flex items-center space-x-2">
        <img src={logo} alt="Logo" className="h-40 w-40 object-contain" />
        <span className="text-xl font-bold text-gray-800">Good</span>
      </Link>

      {/* Icône (lucide-react) */}
      <div className="flex items-center gap-4">
        <User className="h-6 w-6 text-gray-800 cursor-pointer hover:scale-75" />
        <ShoppingBag className="h-6 w-6 text-gray-800 cursor-pointer hover:scale-75" />
      </div>
    </nav>
  );
};

export default Navbar;
