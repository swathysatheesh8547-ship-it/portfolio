import React from "react";

// Sub-component: A mini highlight card
function HighlightCard({ title, icon, delay }) {
  return (
    <div 
      className="bg-white/50 border border-orange-200/30 px-5 py-4 rounded-xl backdrop-blur-md shadow-sm hover:shadow-md hover:border-orange-400/60 transform hover:-translate-y-1.5 transition-all duration-300 group animate-superReveal opacity-0"
      style={{ animationDelay: delay }}
    >
      <div className="flex items-center gap-3">
        <span className="text-xl group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">{icon}</span>
        <span className="text-sm font-bold text-[#2D2219] tracking-tight">{title}</span>
      </div>
    </div>
  );
}

function About() {
  return (
    <section
      id="about"
      className="py-28 px-6 bg-[#FAF6F0] relative overflow-hidden"
    >
      {/* Moving Tech-Grid Matrix Background */}
      <div className="absolute inset-0 opacity-[0.2] bg-[radial-gradient(#e5e7eb_1.5px,transparent_1.5px)] [background-size:32px_32px] pointer-events-none animate-gridPan"></div>

      {/* Cinematic Ambient Glowing Halos */}
      <div className="absolute -top-24 -right-24 w-[500px] h-[500px] bg-gradient-to-bl from-orange-200/30 via-transparent to-transparent rounded-full blur-[100px] pointer-events-none animate-fluidBlob"></div>
      <div className="absolute -bottom-24 -left-24 w-[500px] h-[500px] bg-gradient-to-tr from-amber-200/30 via-transparent to-transparent rounded-full blur-[100px] pointer-events-none animate-fluidBlob" style={{ animationDelay: '-4s' }}></div>

      {/* Section Title */}
      <div className="relative z-10 text-center mb-14 animate-popIn opacity-0">
        <h2 className="text-4xl md:text-5xl font-black text-[#2D2219] tracking-tight mb-2">
          ABOUT ME
        </h2>
        <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto rounded-full animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-10">
        {/* Main Content Box */}
        <div 
          className="bg-white/40 border border-orange-200/20 p-8 md:p-10 rounded-2xl backdrop-blur-md shadow-[0_8px_32px_rgba(45,34,25,0.02)] hover:shadow-[0_20px_40px_rgba(249,115,22,0.05)] transition-shadow duration-500 animate-superReveal opacity-0 text-center"
          style={{ animationDelay: "0.2s" }}
        >
          <p className="text-[#6B5E53] text-lg md:text-xl leading-relaxed font-medium">
            I am a <span className="text-[#2D2219] font-bold underline decoration-orange-500/40 decoration-2 underline-offset-4">Computer Engineering student</span> with a deep passion for building modern web ecosystems. My core focus lies in crafting clean, user-centric interfaces and transforming complex ideas into pixel-perfect, highly responsive frontend solutions using <span className="text-[#2D2219] font-bold underline decoration-amber-500/40 decoration-2 underline-offset-4">React</span>.
          </p>
        </div>

        {/* Micro Grid Highlights */}
        <div className="flex flex-wrap justify-center gap-4 w-full max-w-2xl">
          <HighlightCard title="Frontend Development" icon="⚡" delay="0.4s" />
          <HighlightCard title="UI/UX & Design Sense" icon="✨" delay="0.55s" />
          <HighlightCard title="Responsive Architecture" icon="📱" delay="0.7s" />
        </div>
      </div>

      {/* 🛠️ Combined Master CSS Pipeline (Shared with Education Section) */}
      <style dangerouslySetInnerHTML={{__html: `
        /* 1. Cinematic Smooth Elastic Reveal */
        @keyframes superReveal {
          from { opacity: 0; transform: translateY(35px) scale(0.99); filter: blur(3px); }
          to { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
        }
        .animate-superReveal { 
          animation: superReveal 1.2s cubic-bezier(0.25, 1, 0.5, 1) forwards; 
        }

        /* 2. Soft Spring Pop In */
        @keyframes popIn {
          from { opacity: 0; transform: scale(0.92); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-popIn {
          animation: popIn 0.9s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        /* 3. Moving Grid Background */
        @keyframes gridPan {
          from { background-position: 0 0; }
          to { background-position: 32px 32px; }
        }
        .animate-gridPan {
          animation: gridPan 25s linear infinite;
        }

        /* 4. Ambient Fluid Blobs */
        @keyframes fluidBlob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          50% { transform: translate(25px, -25px) scale(1.08); }
        }
        .animate-fluidBlob {
          animation: fluidBlob 12s infinite ease-in-out;
        }

        /* 5. Icon Bounce (Used in Education cards on Hover) */
        @keyframes bounceShort {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        .animate-bounceShort {
          animation: bounceShort 0.6s ease-in-out infinite;
        }
      `}} />
    </section>
  );
}

export default About;