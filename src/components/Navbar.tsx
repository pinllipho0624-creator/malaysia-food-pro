import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-amber-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <span className="text-2xl">🍃</span>
            <div>
              <div className="font-playfair text-xl font-bold text-amber-900 tracking-tight leading-none">
                Makan Malaysia
              </div>
              <div className="text-xs text-amber-600 font-inter tracking-widest uppercase">
                Stories Behind Every Plate
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={`font-inter text-sm font-medium tracking-wide transition-colors ${
                location.pathname === "/"
                  ? "text-amber-700 border-b-2 border-amber-500 pb-0.5"
                  : "text-stone-600 hover:text-amber-700"
              }`}
            >
              Home
            </Link>
            <Link
              to="/dishes"
              className={`font-inter text-sm font-medium tracking-wide transition-colors ${
                location.pathname === "/dishes"
                  ? "text-amber-700 border-b-2 border-amber-500 pb-0.5"
                  : "text-stone-600 hover:text-amber-700"
              }`}
            >
              All Dishes
            </Link>
            <Link
              to="/about"
              className={`font-inter text-sm font-medium tracking-wide transition-colors ${
                location.pathname === "/about"
                  ? "text-amber-700 border-b-2 border-amber-500 pb-0.5"
                  : "text-stone-600 hover:text-amber-700"
              }`}
            >
              About
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-stone-600 hover:text-amber-700 hover:bg-amber-50"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span className={`block h-0.5 bg-current transition-all ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
              <span className={`block h-0.5 bg-current transition-all ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 bg-current transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-amber-100 px-4 py-4 space-y-3">
          <Link to="/" onClick={() => setMenuOpen(false)} className="block font-inter text-sm font-medium text-stone-700 hover:text-amber-700 py-2">Home</Link>
          <Link to="/dishes" onClick={() => setMenuOpen(false)} className="block font-inter text-sm font-medium text-stone-700 hover:text-amber-700 py-2">All Dishes</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)} className="block font-inter text-sm font-medium text-stone-700 hover:text-amber-700 py-2">About</Link>
        </div>
      )}
    </nav>
  );
}
