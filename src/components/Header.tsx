import { Menu, Search, Sun } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    
    // Check initial position
    handleScroll();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`px-5 py-4 flex items-center justify-between sticky top-0 z-40 transition-colors duration-300 ${
        scrolled 
          ? 'bg-background/80 backdrop-blur-xl border-b border-white/5 saturate-150' 
          : 'bg-primary border-b border-transparent'
      }`}
    >
      <div className="flex items-center gap-2">
        <img src="/assets/logo.svg" alt="Logo" className="w-auto h-10" />
       
      </div>
      
      <div className="flex items-center gap-5">
        
        <button className="text-white hover:text-primary transition-colors ml-1">
          <Menu size={22} strokeWidth={2} />
        </button>
      </div>
    </header>
  );
}
