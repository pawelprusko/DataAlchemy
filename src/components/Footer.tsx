import React, { useMemo } from 'react';
import { ArrowRight, Twitter, Github, Linkedin, Rss, Sun, Search, Volume2 } from 'lucide-react';

export default function Footer() {
  const crystalPaths = useMemo(() => {
    const r = (i: number, seed: number) => {
      const fract = Math.sin(i * 13.412 + seed * 37.193) * 43758.5453;
      return fract - Math.floor(fract);
    };

    const genPath = (seed: number, baseY: number, waveAmp: number, waveFreq: number, crystalScale: number, minXStep: number, maxXStep: number) => {
      let path = `M 0 -50 L 1200 -50 `;
      const points: {x: number, y: number}[] = [];
      let x = 0;
      let i = 0;
      while (x < 1200) {
        const wave = Math.sin(x * waveFreq + seed) * waveAmp;
        const noise = (r(i, seed) - 0.5) * crystalScale;
        const y = baseY + wave + noise;
        points.push({ x, y });
        
        x += minXStep + r(i, seed + 1) * (maxXStep - minXStep);
        i++;
      }
      
      const lastWave = Math.sin(1200 * waveFreq + seed) * waveAmp;
      const lastNoise = (r(i, seed) - 0.5) * crystalScale;
      points.push({ x: 1200, y: baseY + lastWave + lastNoise });
      
      points.reverse().forEach(p => {
        path += `L ${p.x.toFixed(1)} ${p.y.toFixed(1)} `;
      });
      path += "Z";
      return path;
    };

    return [
      genPath(15, 110, 35, 0.008, 25, 15, 35),
      genPath(42, 80, 25, 0.008, 20, 20, 45),
      genPath(88, 55, 15, 0.008, 15, 25, 55),
    ];
  }, []);

  return (
    <footer className="relative mt-32 bg-primary text-white overflow-hidden pt-36 pb-12 px-6">
      <div className="absolute -top-[2px] left-0 right-0 w-full leading-none">
        <svg fill="var(--color-background)" viewBox="0 0 1200 160" preserveAspectRatio="none" className="w-full h-24 md:h-32 block drop-shadow-md">
          <path opacity="0.3" d={crystalPaths[0]} />
          <path opacity="0.6" d={crystalPaths[1]} />
          <path d={crystalPaths[2]} />
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
