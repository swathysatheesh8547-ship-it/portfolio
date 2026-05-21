import React from "react";

function Footer() {
  return (
    <footer className="bg-[#FAF6F0] border-t border-orange-200/20 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Logo / Brand */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-black tracking-tight text-[#2D2219] font-mono">
            SWATHY<span className="text-orange-500">.</span>
          </h2>

          <p className="text-sm text-[#6B5E53] mt-2">
            Frontend Developer passionate about creating clean and modern web experiences.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-6 flex-wrap justify-center">
          <a
            href="#home"
            className="text-sm font-semibold text-[#6B5E53] hover:text-orange-600 transition-colors duration-300"
          >
            Home
          </a>

          <a
            href="#about"
            className="text-sm font-semibold text-[#6B5E53] hover:text-orange-600 transition-colors duration-300"
          >
            About
          </a>

          <a
            href="#education"
            className="text-sm font-semibold text-[#6B5E53] hover:text-orange-600 transition-colors duration-300"
          >
            Education
          </a>

          <a
            href="#skills"
            className="text-sm font-semibold text-[#6B5E53] hover:text-orange-600 transition-colors duration-300"
          >
            Skills
          </a>

          <a
            href="#contact"
            className="text-sm font-semibold text-[#6B5E53] hover:text-orange-600 transition-colors duration-300"
          >
            Contact
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4">

          {/* GitHub */}
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white border border-orange-200 flex items-center justify-center text-[#2D2219] hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-5 h-5"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12a12 12 0 008.21 11.39c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.09-.75.08-.74.08-.74 1.2.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.49 1 .11-.78.42-1.31.76-1.61-2.66-.3-5.46-1.34-5.46-5.95 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23A11.5 11.5 0 0112 5.8c1.02 0 2.05.14 3.01.41 2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.62-2.8 5.65-5.47 5.95.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.82.58A12 12 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white border border-orange-200 flex items-center justify-center text-[#2D2219] hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-5 h-5"
            >
              <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.35-1.85 3.58 0 4.24 2.36 4.24 5.43v6.31zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.11 20.45H3.56V9h3.55v11.45z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-8 text-center border-t border-orange-100 pt-6">
        <p className="text-sm text-[#8C7A6B]">
          © 2026 Swathy S S. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;