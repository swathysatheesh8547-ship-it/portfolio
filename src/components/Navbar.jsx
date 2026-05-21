import React, { useState, useEffect } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Monitors page scroll to dynamically add active frosted styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 py-4 ${
        isScrolled
          ? "bg-[#FAF6F0]/90 backdrop-blur-md shadow-[0_10px_30px_rgba(45,34,25,0.04)] border-b border-orange-200/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        
        {/* Brand/Logo Design */}
        <a 
          href="#home" 
          className="text-xl font-black tracking-tight text-[#2D2219] hover:text-orange-600 transition-colors duration-300 font-mono"
        >
          SWATHY<span className="text-orange-500">.</span>
        </a>

        {/* Desktop Links Grid */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-bold text-[#6B5E53] hover:text-orange-600 tracking-wide transition-colors duration-300 relative group"
            >
              {link.name}
              {/* Dynamic growing line on hover */}
              <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
            </a>
          ))}
        </div>

        {/* Desktop CTA Link */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="px-5 py-2 bg-orange-500 text-white text-sm font-bold rounded-xl hover:bg-orange-600 shadow-md shadow-orange-500/10 hover:shadow-orange-500/20 transition-all duration-300"
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#2D2219] hover:text-orange-600 focus:outline-none transition-colors"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dynamic Drawer */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-[#FAF6F0] border-b border-orange-200/30 shadow-xl transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-64 opacity-100 py-4" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col px-6 gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)} 
              className="text-base font-bold text-[#6B5E53] hover:text-orange-600 py-1 border-b border-orange-100/40 last:border-none transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="w-full text-center px-5 py-2.5 bg-orange-500 text-white font-bold rounded-xl hover:bg-orange-600 transition-colors mt-2"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;