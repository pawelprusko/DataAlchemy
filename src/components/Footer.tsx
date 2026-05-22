import { ArrowRight, Twitter, Github, Linkedin, Rss, Sun, Search, Volume2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative mt-32 bg-primary text-white overflow-hidden pt-36 pb-12 px-6">
      <div className="absolute -top-[2px] left-0 right-0 w-full leading-none">
        <svg fill="var(--color-background)" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-24 md:h-32 block overflow-visible">
          <defs>
            <filter id="hand-drawn-bottom" x="-20%" y="-20%" width="140%" height="140%">
              <feTurbulence type="fractalNoise" baseFrequency="0.008 0.008" numOctaves="1" result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="12" xChannelSelector="R" yChannelSelector="G" />
            </filter>
          </defs>
          <path filter="url(#hand-drawn-bottom)" d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V-50H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="max-w-md mx-auto">
        <div className="flex items-center gap-2 mb-2">
          <img src="/assets/logo.svg" alt="Logo" className="w-8 h-8" />
          <span className="font-heading text-2xl font-semibold text-white">Codex.</span>
        </div>
        
        <p className="font-sans font-bold text-sm mb-10 flex items-center gap-1 text-white">
          You are a rockstar. <span className="text-xl">🌟</span>
        </p>

        <p className="font-sans font-medium text-sm mb-3 text-white/90">
          Want to know when I publish new content? <br />
          Enter your email to join my free newsletter:
        </p>

        <form className="flex w-full mb-12 shadow-lg rounded-xl overflow-hidden" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="anna@aol.com"
            className="w-full bg-[#2C2C2C] px-4 py-3 text-[14px] focus:outline-none text-white placeholder:text-white/40 border border-white/10 border-r-0 rounded-l-xl"
          />
          <button type="submit" className="px-5 bg-primary text-white hover:bg-[#6c59d9] transition-colors flex items-center justify-center rounded-r-xl">
            <ArrowRight size={20} />
          </button>
        </form>

        <div className="grid grid-cols-2 gap-y-4 gap-x-8 mb-16 font-sans text-sm font-semibold">
          <div className="col-span-1 text-xs text-white/30 mb-1">INTERACTIVE COURSES</div>
          <div className="col-span-1 text-xs text-white/30 mb-1 text-right">GENERAL</div>

          <div className="col-span-1 hover:text-primary cursor-pointer transition-colors text-white/80">Data Architecture</div>
          <div className="col-span-1 text-right hover:text-primary cursor-pointer transition-colors text-white/80">About Author</div>

          <div className="col-span-1 hover:text-primary cursor-pointer transition-colors text-white/80">The Zen of Data</div>
          <div className="col-span-1 text-right hover:text-primary cursor-pointer transition-colors text-white/80">About This Codex</div>

          <div className="col-span-1 hover:text-primary cursor-pointer transition-colors text-white/80">UI Micro-interactions</div>
          <div className="col-span-1 text-right hover:text-primary cursor-pointer transition-colors text-white/80">Contact</div>
        </div>

        <div className="flex justify-between items-center px-2 mb-8 text-white/60">
          <Search size={22} className="cursor-pointer hover:text-primary transition-colors" />
          <Volume2 size={22} className="cursor-pointer hover:text-primary transition-colors" />
          <Sun size={22} className="cursor-pointer hover:text-primary transition-colors" />
          <Rss size={22} className="cursor-pointer hover:text-primary transition-colors" />
          <Twitter size={22} className="cursor-pointer hover:text-primary transition-colors" />
          <Github size={22} className="cursor-pointer hover:text-primary transition-colors" />
          <Linkedin size={22} className="cursor-pointer hover:text-primary transition-colors" />
        </div>

        <div className="text-xs text-white/40 font-sans leading-relaxed">
          <p className="mb-2">© 2026-present Data Alchemy. All Rights Reserved.</p>
          <div className="flex gap-4">
            <span className="underline cursor-pointer hover:text-primary">Terms of Use</span>
            <span className="underline cursor-pointer hover:text-primary">Privacy Policy</span>
            <span className="underline cursor-pointer hover:text-primary">Code of Conduct</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
