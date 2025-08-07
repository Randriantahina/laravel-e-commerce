import { Navigate } from "react-router-dom";
import type { ReactNode } from "react";

interface GuestProps {
  children: ReactNode;
}

const Guest: React.FC<GuestProps> = ({ children }) => {
  const token = localStorage.getItem("token");

  return token ? <Navigate to="/" replace /> : children;
};

export default Guest;
