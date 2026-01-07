import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import logo from "../assets/life.png";

/* =======================
   LIENS NAVIGATION
======================= */
const links = [
  { label: "Accueil", path: "/" },
  { label: "À propos", path: "/a-propos" },
  { label: "Services", path: "/services" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* =======================
          NAVBAR FIXE
      ======================= */}
      <nav
        className="
          fixed
          top-2 md:top-4
          left-1/2 -translate-x-1/2
          z-50
          w-[94%] md:w-[95%]
          max-w-[1400px]
          h-[56px] md:h-[72px]
          rounded-xl md:rounded-full
          border border-white
          bg-white/30 backdrop-blur-lg
          shadow-sm
        "
      >
        <div className="flex items-center justify-between h-full px-4 md:px-10">

          {/* ===== MOBILE HEADER ===== */}
          <div className="flex md:hidden items-center justify-between w-full">
            <button
              onClick={() => setIsOpen(true)}
              className="text-2xl text-[#134774]"
              aria-label="Ouvrir le menu"
            >
              ☰
            </button>

            <div className="flex items-center gap-2">
              <img
                src={logo}
                alt="Clinique Life"
                className="w-8 h-8 object-contain"
              />
              <span className="font-bold text-[#134774] text-[16px]">
                Clinique Life
              </span>
            </div>

            <div className="w-6" />
          </div>

          {/* ===== DESKTOP HEADER ===== */}
          <div className="hidden md:flex items-center justify-between w-full">

            {/* Logo */}
            <div className="flex items-center gap-2 flex-[1.2]">
              <img
                src={logo}
                alt="Clinique Life"
                className="w-12 h-12 object-contain"
              />
              <span className="font-bold text-black text-[20px]">
                Clinique Life
              </span>
            </div>

            {/* Liens */}
            <ul className="flex gap-8 justify-center items-center flex-[2]">
              {links.map(({ label, path }) => (
                <li key={label}>
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      `
                        px-4 py-1
                        rounded-full text-[13px]
                        font-poppins transition-all duration-300
                        flex items-center justify-center whitespace-nowrap
                        ${
                          isActive
                            ? "font-semibold text-white bg-gradient-to-b from-[#05D2CE] to-[#007E7B]"
                            : "font-medium text-[#134774] hover:bg-white/40"
                        }
                      `
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Bouton RDV */}
            <div className="flex justify-end flex-[1]">
              <NavLink
                to="/rendez-vous"
                className="
                  bg-[#1E80EF] text-white
                  px-6 py-2
                  text-[13px]
                  rounded-full
                  font-medium
                  transition-transform duration-200
                  hover:scale-105
                  whitespace-nowrap
                "
              >
                Rendez-vous
              </NavLink>
            </div>
          </div>
        </div>
      </nav>

      {/* =======================
          MENU MOBILE (DRAWER)
      ======================= */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-md z-[60]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 230, damping: 25 }}
              className="
                fixed top-0 left-0
                h-full w-72
                bg-white/95 backdrop-blur-lg
                z-[70]
                pt-20 px-8
                shadow-2xl
              "
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 text-2xl text-gray-500 hover:text-red-500"
                aria-label="Fermer le menu"
              >
                ✕
              </button>

              <nav className="flex flex-col gap-6 text-[15px] mt-6">
                {links.map(({ label, path }) => (
                  <NavLink
                    key={label}
                    to={path}
                    onClick={() => setIsOpen(false)}
                    className="
                      px-4 py-3
                      rounded-xl
                      font-poppins font-medium
                      text-[#134774]
                      hover:bg-blue-50
                      transition-colors
                      whitespace-nowrap
                    "
                  >
                    {label}
                  </NavLink>
                ))}

                <NavLink
                  to="/rendez-vous"
                  onClick={() => setIsOpen(false)}
                  className="
                    bg-[#1E80EF] text-white
                    px-6 py-3
                    rounded-full
                    font-medium
                    mt-6
                    text-center
                    whitespace-nowrap
                  "
                >
                  Rendez-vous
                </NavLink>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
