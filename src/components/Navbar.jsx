import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiPhone } from "react-icons/fi";
import Logo from "./Logo";
import site from "../data/site";

const navItems = [
  { to: "/", label: "Home" }, { to: "/about", label: "About" }, { to: "/menu", label: "Menu" },
  { to: "/gallery", label: "Gallery" }, { to: "/branches", label: "Branches" }, { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isTransparent = location.pathname === "/" && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <header
      data-testid="navbar"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        isTransparent ? "bg-transparent"
          : "bg-[#FFF8F2]/85 backdrop-blur-xl border-b border-[#5C2C06]/10 shadow-[0_8px_30px_-12px_rgba(92,44,6,0.15)]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group" aria-label="Indori Sarafa Home">
          <Logo size={70} variant={"primary"} />
          <div className="hidden sm:flex flex-col leading-tight">
            <span className={`font-display text-xl font-extrabold tracking-tight ${isTransparent ? "text-white" : "text-[#5C2C06]"}`}>Indori Sarafa</span>
            <span className={`text-[10px] uppercase tracking-[0.25em] ${isTransparent ? "text-[#D4AF37]" : "text-[#A52A2A]"}`}>Since 2019</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `relative px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  isTransparent ? "text-white/90 hover:text-[#D4AF37]"
                    : isActive ? "text-[#5C2C06]" : "text-[#444444] hover:text-[#5C2C06]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  {isActive && !isTransparent && (
                    <motion.span layoutId="nav-underline" className="absolute left-3 right-3 -bottom-0.5 h-[2px] bg-[#D4AF37] rounded-full" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href={`tel:${site.phone}`} className="hidden md:inline-flex btn-gold !py-2 !px-5 text-sm">
            <FiPhone /> Call Now
          </a>
          <button
            type="button" onClick={() => setOpen((v) => !v)}
            className={`lg:hidden p-2 rounded-full border ${isTransparent ? "border-white/30 text-white" : "border-[#5C2C06]/20 text-[#5C2C06]"}`}
            aria-label="Toggle menu"
          >
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }} className="lg:hidden bg-[#FFF8F2] border-t border-[#5C2C06]/10"
          >
            <div className="px-5 py-4 flex flex-col gap-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.to} to={item.to}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-2xl font-medium ${isActive ? "bg-[#5C2C06] text-[#FFF8F2]" : "text-[#5C2C06] hover:bg-[#5C2C06]/5"}`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              {/* <a href={`tel:${site.phone}`} className="btn-gold mt-3 justify-center">
                <FiPhone /> {site.phoneDisplay}
              </a> */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;