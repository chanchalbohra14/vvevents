import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Info, Briefcase, Palette, Phone } from "lucide-react";

const MobileBottomNav = () => {
  const location = useLocation();

  const navItems = [
    { name: "About", path: "/about", icon: Info },
    { name: "Services", path: "/services", icon: Briefcase },
    { name: "Home", path: "/", icon: Home },
    { name: "Theme", path: "/theme-decoration", icon: Palette },
    { name: "Contact", path: "/contact", icon: Phone },
  ];

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-black/90 border-t border-yellow-400/20 backdrop-blur-md shadow-2xl">
      <ul className="flex justify-around items-center h-16 px-2">
        {navItems.map(({ name, path, icon: Icon }) => (
          <li key={name}>
            <Link
              to={path}
              className={`flex flex-col items-center justify-center text-[9px] font-medium transition-all duration-300 ${
                isActive(path)
                  ? "text-yellow-400 scale-105"
                  : "text-white hover:text-yellow-400"
              }`}
            >
              <Icon size={20} className="mb-1" />
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MobileBottomNav;
