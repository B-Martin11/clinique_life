import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import logo from "../assets/life.png";

const links = [
  { label: "Accueil", path: "/" },
  { label: "À propos", path: "/a-propos" },
  { label: "Services", path: "/services" },
  { label: "Contact", path: "/contact" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* NAVBAR VERRE */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[98%] md:w-[95%] max-w-[1400px] h-[72px] rounded-full border-2 border-white overflow-hidden shadow-sm">
        
        {/* Blur */}
        <div className="absolute inset-0 bg-white/15 backdrop-blur-lg pointer-events-none" />

        {/* Contenu */}
        <div className="relative z-10 flex items-center justify-between h-full px-6 md:px-10">
          
          {/* MOBILE HEADER */}
          <div className="flex md:hidden items-center justify-between w-full">
            <button
              onClick={() => setIsOpen(true)}
              className="text-3xl text-[#134774]"
            >
              ☰
            </button>

            <div className="flex items-center gap-2">
              <img src={logo} alt="Logo" className="w-10 h-10 object-contain" />
              <span className="font-bold text-[#134774] text-[22px]">
                Clinique Life
              </span>
            </div>

            <div className="w-8" />
          </div>

          {/* DESKTOP HEADER */}
          <div className="hidden md:flex items-center justify-between w-full">
            
            {/* Logo */}
            <div className="flex items-center gap-2 flex-[1.2]">
              <img src={logo} alt="Logo" className="w-14 h-14 object-contain" />
              <span className="font-bold text-black text-[22px]">
                Clinique Life
              </span>
            </div>

            {/* LINKS */}
            <ul className="flex gap-10 justify-center items-center flex-[2]">
              {links.map(({ label, path }) => (
                <li key={label}>
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      `px-5 py-1.5 rounded-full font-poppins text-[18px] transition-colors duration-300
                      ${
                        isActive
                          ? "font-semibold text-white bg-gradient-to-b from-[#05D2CE] to-[#007E7B]"
                          : "font-medium text-[#134774] hover:bg-white/20"
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* BOUTON RDV */}
            <div className="flex justify-end flex-[1]">
              <NavLink
                to="/rendez-vous"
                className="bg-[#1E80EF] text-white px-7 py-3 rounded-full font-medium transition-transform duration-200 hover:scale-105"
              >
                Rendez-vous
              </NavLink>
            </div>
          </div>
        </div>
      </nav>

      {/* MENU MOBILE */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-md z-[60]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 230, damping: 25 }}
              className="fixed top-0 left-0 h-full w-72 bg-white/90 backdrop-blur-lg z-[70] rounded-tr-3xl rounded-br-3xl pt-20 px-8 shadow-2xl"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 text-2xl text-gray-500 hover:text-red-500"
              >
                ✕
              </button>

              <nav className="flex flex-col gap-6 text-lg mt-10">
                {links.map(({ label, path }) => (
                  <NavLink
                    key={label}
                    to={path}
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-3 rounded-xl font-poppins font-medium text-[#134774] hover:bg-blue-50 transition-colors"
                  >
                    {label}
                  </NavLink>
                ))}

                <NavLink
                  to="/rendez-vous"
                  onClick={() => setIsOpen(false)}
                  className="bg-[#1E80EF] text-white px-6 py-3 rounded-full font-medium mt-4 text-center"
                >
                  Rendez-vous
                </NavLink>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ESPACE */}
     
    </>
  );
};

export default Navbar;
