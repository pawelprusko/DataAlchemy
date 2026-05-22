import { ArrowRight } from 'lucide-react';

export default function TopBanner() {
  return (
    <div className="relative pt-6 pb-4 -mt-[80px]">
      {/* Background shape */}
      <div className="absolute top-0 left-0 right-0 w-full z-0">
        <div className="h-[110px] w-full bg-primary" />
        <div className="w-full leading-none -mt-[2px]">
          <svg fill="var(--color-primary)" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-24 md:h-32 block overflow-visible">
            <defs>
              <filter id="hand-drawn-top" x="-20%" y="-20%" width="140%" height="140%">
                <feTurbulence type="fractalNoise" baseFrequency="0.008 0.008" numOctaves="1" result="noise" />
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="12" xChannelSelector="R" yChannelSelector="G" />
              </filter>
            </defs>
            <path filter="url(#hand-drawn-top)" d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V-50H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
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
