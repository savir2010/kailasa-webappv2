import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2.5">
      <img 
        src="/image.png" 
        alt="Kailasa Logo" 
        className="w-8 h-8 object-contain"
      />
      <div className="flex flex-col">
        <svg width="93" height="32" viewBox="0 0 93 32" fill="none">
          <text
            x="0"
            y="24"
            fill="white"
            fontSize="24"
            fontWeight="500"
            fontFamily="Clash Display"
          >
            Kailasa
          </text>
        </svg>
        <p className="font-clash-display text-xs text-white/60 font-normal mt-0.5">Supreme Intelligence</p>
      </div>
    </Link>
  );
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-crypto-primary-light backdrop-blur-md border-b border-white/10">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-8 md:px-12 py-4 md:py-6 flex justify-between items-center">
        <div className="flex items-center gap-4 md:gap-8">
          <Logo />
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-white text-base hover:text-crypto-primary transition-colors"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-white text-base hover:text-crypto-primary transition-colors"
            >
              About
            </Link>
            <Link
              to="/blogs"
              className="text-white text-base hover:text-crypto-primary transition-colors"
            >
              Blogs
            </Link>
            <Link
              to="/contact"
              className="text-white text-base hover:text-crypto-primary transition-colors"
            >
              Contact Us
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white p-2 hover:text-crypto-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Desktop Login Button */}
          <a 
            href="https://web.kailasa.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden md:block bg-crypto-primary text-crypto-bg px-4 md:px-6 py-2 md:py-3 rounded-xl font-bold hover:bg-crypto-primary/90 transition-colors text-sm md:text-base text-center"
          >
            Login
          </a>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-crypto-primary-light backdrop-blur-md border-t border-white/10">
          <nav className="max-w-[1300px] mx-auto px-4 sm:px-8 py-4 space-y-4">
            <Link
              to="/"
              onClick={closeMenu}
              className="block text-white text-base hover:text-crypto-primary transition-colors py-2"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={closeMenu}
              className="block text-white text-base hover:text-crypto-primary transition-colors py-2"
            >
              About
            </Link>
            <Link
              to="/blogs"
              onClick={closeMenu}
              className="block text-white text-base hover:text-crypto-primary transition-colors py-2"
            >
              Blogs
            </Link>
            <Link
              to="/contact"
              onClick={closeMenu}
              className="block text-white text-base hover:text-crypto-primary transition-colors py-2"
            >
              Contact Us
            </Link>
            <a 
              href="https://web.kailasa.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full bg-crypto-primary text-crypto-bg px-4 py-3 rounded-xl font-bold hover:bg-crypto-primary/90 transition-colors text-sm text-center block"
            >
              Login
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
