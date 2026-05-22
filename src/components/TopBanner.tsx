import React, { useMemo } from 'react';
import { ArrowRight } from 'lucide-react';

export default function TopBanner() {
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
    <div className="relative pt-6 pb-4 -mt-[80px]">
      {/* Background shape */}
      <div className="absolute top-0 left-0 right-0 w-full z-0">
        <div className="h-[110px] w-full bg-primary" />
        <div className="w-full leading-none -mt-[2px]">
          <svg fill="var(--color-primary)" viewBox="0 0 1200 160" preserveAspectRatio="none" className="w-full h-24 md:h-32 block drop-shadow-md">
            <path opacity="0.3" d={crystalPaths[0]} />
            <path opacity="0.6" d={crystalPaths[1]} />
            <path d={crystalPaths[2]} />
          </svg>
        </div>
      </div>

      <div className="mx-5 mb-8 mt-[240px] relative isolate z-10">
        <div className="relative isolate overflow-hidden rounded-2xl bg-[#EFC88B] px-6 pt-8 pb-6 shadow-xl w-full border-[3px] border-dashed border-[#816CFF] text-[#2C2C2C] max-w-lg mx-auto">
          {/* Flower emoji equivalent */}
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xl">🌸</span>
            <span className="font-heading font-bold text-lg text-primary">It's the Spring Sale!</span>
          </div>
          
          <p className="font-sans text-[15px] font-medium leading-relaxed mb-6">
            For a limited time, you can launch your next vision with massive clarity using our flagship service, <span className="underline decoration-2 underline-offset-4 font-bold text-primary">Vibe Prototyping</span>.
            <br /><br />
            I know finding the right aesthetic is hard, but we only accept 2 clients a month. This is a rare chance to snag a slot. 😄
          </p>

          <button className="w-full bg-[#2C2C2C] text-[#F3F4F6] py-3.5 px-4 rounded-xl flex items-center justify-between hover:bg-[#1A1A1A] transition-colors group border-2 border-transparent">
            <span className="font-sans font-bold text-sm tracking-wide">Learn More</span>
            <div className="bg-[#4a4a4a] p-1.5 rounded-lg group-hover:bg-primary transition-colors">
              <ArrowRight size={16} className="text-white" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
