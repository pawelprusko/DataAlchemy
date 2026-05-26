import { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    
    handleScroll();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`px-6 py-5 flex items-center justify-between sticky top-0 z-40 transition-colors duration-300 ${
        scrolled 
          ? 'bg-background/90 backdrop-blur-md border-b border-white/5' 
          : 'bg-background border-b border-transparent'
      }`}
    >
      <div className="flex items-center">
        <span className="font-heading font-bold text-lg tracking-tight text-text-main/90">Data Alchemist</span>
      </div>
      
      <div className="flex items-center">
        <a href="#about" className="text-sm font-sans font-medium text-text-main/60 hover:text-text-main transition-colors">
          About Me
        </a>
      </div>
    </header>
  );
}
