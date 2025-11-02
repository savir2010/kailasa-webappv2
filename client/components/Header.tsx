import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2.5">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path
          d="M6.353 7.765a16 16 0 0123.622-1.06l-5.132 4.609a8 8 0 00-12.559-3.549z"
          fill="white"
        />
        <path
          d="M30 24.661a16 16 0 01-23.648 1.228l5.308-4.425a8 8 0 0012.344 3.197z"
          fill="white"
        />
        <path d="M14.782 16.285L6.261 22.99V9.58l8.521 6.705z" fill="#99E39E" />
        <path d="M10.522 16.285L2 22.99V9.58l8.522 6.705z" fill="#99E39E" />
      </svg>
      <div className="flex flex-col">
        <svg width="93" height="32" viewBox="0 0 93 32" fill="none">
          <text
            x="0"
            y="24"
            fill="white"
            fontSize="24"
            fontWeight="500"
            fontFamily="DM Sans"
          >
            Kailasa
          </text>
        </svg>
        <p className="text-xs text-white/60 font-normal mt-0.5">Supreme Intelligence</p>
      </div>
    </Link>
  );
}

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-crypto-primary-light backdrop-blur-md border-b border-white/10">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-8 md:px-12 py-4 md:py-6 flex justify-between items-center">
        <div className="flex items-center gap-4 md:gap-8">
          <Logo />
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
              to="#"
              className="text-white text-base hover:text-crypto-primary transition-colors"
            >
              Blogs
            </Link>
            <Link
              to="#"
              className="text-white text-base hover:text-crypto-primary transition-colors"
            >
              Careers
            </Link>
            <Link
              to="#"
              className="text-white text-base hover:text-crypto-primary transition-colors"
            >
              Contact Us
            </Link>
          </nav>
        </div>
        <button className="bg-crypto-primary text-crypto-bg px-4 md:px-6 py-2 md:py-3 rounded-xl font-bold hover:bg-crypto-primary/90 transition-colors text-sm md:text-base">
          Login
        </button>
      </div>
    </header>
  );
}

