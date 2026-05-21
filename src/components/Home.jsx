import React from "react";

// Sub-component: InfoCard with Premium Minimal Top Line Accent
function InfoCard({ title, text, delay, indicatorColor }) {
  return (
    <div
      className="bg-white/40 border border-orange-200/30 p-5 rounded-2xl w-40 text-left backdrop-blur-md shadow-[0_8px_32px_rgba(45,34,25,0.02)] hover:shadow-[0_25px_50px_rgba(249,115,22,0.1)] hover:bg-[#FAF6F0] hover:border-orange-400 transform hover:-translate-y-2 hover:scale-105 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group animate-superReveal opacity-0 relative overflow-hidden"
      style={{ animationDelay: delay }}
    >
      <div className={`absolute top-0 left-0 right-0 h-[3px] ${indicatorColor} opacity-70 group-hover:opacity-100 transition-opacity duration-300`}></div>
      <h3 className="text-[10px] font-mono font-bold text-[#8C7A6B] uppercase tracking-widest mb-1 mt-1">{title}</h3>
      <p className="text-sm font-black text-[#2D2219] tracking-tight group-hover:text-orange-600 transition-colors duration-300">{text}</p>
    </div>
  );
}

function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-[#FAF6F0] relative px-6 md:px-16 overflow-hidden pt-28 pb-12"
    >
      {/* Moving Tech-Grid Matrix Background */}
      <div className="absolute inset-0 opacity-[0.25] bg-[radial-gradient(#e5e7eb_1.5px,transparent_1.5px)] [background-size:32px_32px] pointer-events-none animate-gridPan"></div>

      {/* Cinematic Fluid Ambient Glowing Halos */}
      <div className="absolute -top-40 -left-40 w-[700px] h-[700px] bg-gradient-to-br from-orange-200/40 via-amber-100/20 to-transparent rounded-full blur-[150px] pointer-events-none animate-fluidBlob"></div>
      <div className="absolute -bottom-40 -right-40 w-[700px] h-[700px] bg-gradient-to-tl from-rose-200/30 via-orange-100/20 to-transparent rounded-full blur-[150px] pointer-events-none animate-fluidBlob" style={{ animationDelay: '-5s' }}></div>

      {/* Two-Column Main Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-12 gap-12 items-center w-full">
        
        {/* LEFT COLUMN: Attractive Profile Image Frame with Dynamic Floating Gradients */}
        <div className="md:col-span-5 flex justify-center items-center order-first md:order-last animate-popIn opacity-0">
          <div className="relative group">
            {/* Background Aesthetic Glow Aura */}
            <div className="absolute -inset-1.5 bg-gradient-to-tr from-orange-500 via-rose-400 to-amber-400 rounded-[2.5rem] blur opacity-40 group-hover:opacity-70 group-hover:scale-105 transition duration-500 animate-pulseSlow"></div>
            
            {/* Main Premium Framed Image Container */}
            <div className="relative w-72 h-96 md:w-80 md:h-[26rem] bg-[#FAF6F0] rounded-[2.2rem] overflow-hidden border-2 border-white/80 shadow-2xl flex items-center justify-center group-hover:scale-[1.02] transform transition duration-500 ease-out">
              
              {/* Replace 'https://via.placeholder.com/400x500' with your actual beautiful avatar or high-quality professional portrait photo link */}
              <img 
                src="/image/swathy.jpeg" 
                alt="Swathy S S Portrait" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              
              {/* Elegant Bottom Glassmorphism Overlay Overlay Tag */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/60 backdrop-blur-md border border-white/40 py-3 px-4 rounded-2xl shadow-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-xs font-mono font-bold text-orange-700 uppercase tracking-widest text-center">✨ Creative Mind</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Premium Text Engineering Block */}
        <div className="md:col-span-7 text-center md:text-left flex flex-col justify-center items-center md:items-start">
          
          {/* Status Badge Tag */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-gradient-to-r from-orange-50 to-orange-100/80 border border-orange-200/60 text-orange-800 text-xs font-bold tracking-widest uppercase mb-6 animate-popIn opacity-0 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            Frontend Developer
          </div>

          {/* Hero Name Header */}
          <h1 
            className="text-5xl md:text-7xl font-black text-[#2D2219] mb-5 tracking-tight animate-superReveal opacity-0 select-none leading-none"
            style={{ animationDelay: "0.2s" }}
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-orange-600 via-rose-500 via-amber-500 to-orange-500 bg-clip-text text-transparent bg-[size:200%_auto] animate-liquidGradient select-text">
              Swathy S S
            </span>
          </h1>

          {/* Short Bio */}
          <p 
            className="text-[#6B5E53] max-w-xl mb-10 animate-superReveal text-lg leading-relaxed font-medium opacity-0"
            style={{ animationDelay: "0.4s" }}
          >
            I build clean, responsive, and user-focused web applications using <span className="text-[#1F1610] font-bold underline decoration-orange-500/60 decoration-2 underline-offset-4 hover:decoration-orange-500 transition-all duration-300">React</span> and modern web technologies.
          </p>

          {/* Feature Metrics Cards (Staggered Wave Entrance) */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-12">
            <InfoCard title="Focus" text="UI Development" delay="0.6s" indicatorColor="bg-orange-500" />
            <InfoCard title="Interest" text="Frontend & Design" delay="0.75s" indicatorColor="bg-amber-500" />
            <InfoCard title="Goal" text="Internship Ready" delay="0.9s" indicatorColor="bg-rose-500" />
          </div>

          {/* Call-To-Action (CTA) Interface Hooks */}
          <div 
            className="flex flex-wrap justify-center md:justify-start gap-5 animate-popIn opacity-0"
            style={{ animationDelay: "1.1s" }}
          >
            <a
              href="#projects"
              className="group/btn relative bg-[#2D2219] text-white font-bold px-9 py-4 rounded-xl shadow-lg shadow-[#2D2219]/10 hover:shadow-orange-500/30 overflow-hidden transform hover:-translate-y-1 transition-all duration-300"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-orange-500 to-amber-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500 ease-out"></span>
              <span className="relative z-10 flex items-center gap-2">
                View Projects <span className="transform group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
              </span>
            </a>
            <a
              href="#contact"
              className="border-2 border-[#2D2219]/20 text-[#2D2219] font-bold px-9 py-4 rounded-xl hover:border-orange-500 hover:text-orange-600 bg-transparent transform hover:-translate-y-1 transition-all duration-300"
            >
              Contact Me
            </a>
          </div>

        </div>

      </div>

      {/* Ultra-Premium Custom Keyframe Pipelines */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes superReveal {
          from { opacity: 0; transform: translateY(40px) scale(0.98); filter: blur(4px); }
          to { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
        }
        .animate-superReveal { 
          animation: superReveal 1.2s cubic-bezier(0.25, 1, 0.5, 1) forwards; 
        }

        @keyframes popIn {
          from { opacity: 0; transform: scale(0.85); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-popIn {
          animation: popIn 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        @keyframes liquidGradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-liquidGradient {
          animation: liquidGradient 5s ease infinite;
        }

        @keyframes fluidBlob {
          0%, 100% { transform: translate(0px, 0px) scale(1) rotate(0deg); }
          33% { transform: translate(40px, -60px) scale(1.15) rotate(120deg); }
          66% { transform: translate(-30px, 40px) scale(0.9) rotate(240deg); }
        }
        .animate-fluidBlob {
          animation: fluidBlob 16s infinite ease-in-out;
        }

        @keyframes gridPan {
          from { background-position: 0 0; }
          to { background-position: 32px 32px; }
        }
        .animate-gridPan {
          animation: gridPan 20s linear infinite;
        }

        @keyframes pulseSlow {
          0%, 100% { transform: scale(1); opacity: 0.4; }
          50% { transform: scale(1.03); opacity: 0.6; }
        }
        .animate-pulseSlow {
          animation: pulseSlow 4s ease-in-out infinite;
        }
      `}} />
    </section>
  );
}

export default Home; 