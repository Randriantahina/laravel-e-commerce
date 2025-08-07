import { Link } from "react-router-dom";
import { User, ShoppingBag, LogOut } from "lucide-react";
import React from "react";
import logo from "../assets/logo1.png";

const Navbar: React.FC = () => {
  const token = localStorage.getItem("token");
  const name = localStorage.getItem("name");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    window.location.href = "/login"; // Redirige vers la page login
  };

  return (
    <nav className="max-w-md mx-auto w-full px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <Link to="/" className="flex items-center space-x-2">
        <img src={logo} alt="Logo" className="h-10 w-10 object-contain" />
        <span className="text-xl font-bold text-gray-800">Good</span>
      </Link>

      {/* Icônes */}
      <div className="flex items-center gap-4">
        {!token ? (
          <Link to="/login">
            <User className="h-6 w-6 text-gray-800 cursor-pointer hover:scale-75" />
          </Link>
        ) : (
          <>
            <span className="text-gray-800 font-semibold">{name}</span>
            <LogOut
              onClick={handleLogout}
              className="h-6 w-6 text-gray-800 cursor-pointer hover:scale-75"
            />
          </>
        )}

        <Link to="/achat">
          <ShoppingBag className="h-6 w-6 text-gray-800 cursor-pointer hover:scale-75" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
