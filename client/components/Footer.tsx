import { ArrowRight } from "lucide-react";

function Logo() {
  return (
    <div className="flex items-center gap-2.5">
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
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-crypto-bg border-t border-white/20">
      <div className="max-w-[1300px] mx-auto px-12 py-20">
        {/* Top Section - Columns */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-12 gap-12">
          {/* Left side - Logo and mission */}
          <div className="flex flex-col gap-4 max-w-[486px]">
            <a href="/">
              <Logo />
            </a>
            <p className="text-base text-white/60">
              Our mission is to equip everyone with unparalleled supreme intelligence to
              achieve wealth, health, and lasting happiness.
            </p>
          </div>

          {/* Right side - Links */}
          <div className="flex gap-20 flex-wrap">
            <div className="flex flex-col gap-3">
              <h3 className="text-xl font-medium mb-2">Links</h3>
              <ul className="flex flex-col gap-3">
                <li><a href="/" className="text-base text-white/60 hover:text-white transition-colors">Home</a></li>
                <li><a href="/about" className="text-base text-white/60 hover:text-white transition-colors">About</a></li>
                <li><a href="/blogs" className="text-base text-white/60 hover:text-white transition-colors">Blog</a></li>
                <li><a href="/contact" className="text-base text-white/60 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="text-xl font-medium mb-2">Important Links</h3>
              <ul className="flex flex-col gap-3">
                <li><a href="/terms" className="text-base text-white/60 hover:text-white transition-colors">Terms & Conditions</a></li>
                <li><a href="/privacy" className="text-base text-white/60 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/faqs" className="text-base text-white/60 hover:text-white transition-colors">FAQ</a></li>
                <li><a href="/cookies" className="text-base text-white/60 hover:text-white transition-colors">Cookies</a></li>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="text-xl font-medium mb-2">Help & Support</h3>
              <ul className="flex flex-col gap-3">
                <li><a href="mailto:support@kailasa.app" className="text-base text-white/60 hover:text-white transition-colors">support@kailasa.app</a></li>
                <li className="text-base text-white/60">San Francisco, California, United States</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mb-12">
          <h3 className="text-xl font-medium mb-4">Subscribe to our newsletter</h3>
          <form className="flex flex-col sm:flex-row gap-4 items-start sm:items-end">
            <div className="flex gap-2 w-full sm:w-auto">
              <input
                type="text"
                placeholder="Enter your name"
                className="px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-crypto-primary transition-colors"
                required
              />
              <div className="w-px bg-white/20"></div>
              <input
                type="email"
                placeholder="Enter your email address here"
                className="px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-crypto-primary transition-colors"
                required
              />
            </div>
            <button
              type="submit"
              className="flex items-center justify-center w-12 h-12 rounded-xl bg-white text-crypto-bg hover:bg-white/90 transition-colors"
            >
              <ArrowRight className="w-6 h-6" />
            </button>
          </form>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/20 flex justify-between items-center flex-wrap gap-4">
          <p className="text-sm text-white">
            IGURU INNOVATIONS LLC © 2025. All Rights Reserved.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="https://youtube.com/@kailasa"
              target="_blank"
              rel="noopener noreferrer"
              className="flex p-2 items-center justify-center rounded-full bg-black hover:bg-black/80 transition-colors cursor-pointer"
            >
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            <a
              href="https://linkedin.com/company/kailasa"
              target="_blank"
              rel="noopener noreferrer"
              className="flex p-2 items-center justify-center rounded-full bg-black hover:bg-black/80 transition-colors cursor-pointer"
            >
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a
              href="https://instagram.com/kailasa"
              target="_blank"
              rel="noopener noreferrer"
              className="flex p-2 items-center justify-center rounded-full bg-black hover:bg-black/80 transition-colors cursor-pointer"
            >
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a
              href="https://facebook.com/kailasa"
              target="_blank"
              rel="noopener noreferrer"
              className="flex p-2 items-center justify-center rounded-full bg-black hover:bg-black/80 transition-colors cursor-pointer"
            >
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

