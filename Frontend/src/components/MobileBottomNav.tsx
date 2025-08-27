import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  Info,
  Briefcase,
  Phone,
} from "lucide-react"; // Lucide icons

const MobileBottomNav = () => {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "About", path: "/about", icon: Info },
    { name: "Services", path: "/services", icon: Briefcase },
    { name: "Contact", path: "/contact", icon: Phone },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-black/90 border-t border-yellow-400/20 backdrop-blur-sm shadow-lg">
      <ul className="flex justify-around items-center h-16 px-4">
        {navItems.map(({ name, path, icon: Icon }) => {
          const isActive = location.pathname === path;
          return (
            <li key={name}>
              <Link
                to={path}
                className={`flex flex-col items-center justify-center text-xs font-medium transition-all duration-200 ${
                  isActive ? "text-yellow-400" : "text-white hover:text-yellow-400"
                }`}
              >
                <Icon size={20} className="mb-1" />
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default MobileBottomNav;
