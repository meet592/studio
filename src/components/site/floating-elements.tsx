import { Coffee } from 'lucide-react';

const CoffeeBean = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128 128"
    className={className}
  >
    <defs>
      <radialGradient id="bean-gradient" cx="0.5" cy="0.5" r="0.5">
        <stop offset="0%" stopColor="#A56A47" />
        <stop offset="100%" stopColor="#512E1E" />
      </radialGradient>
      <filter id="bean-shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
        <feOffset dx="2" dy="4" />
        <feMerge>
          <feMergeNode />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <g transform="rotate(30 64 64)" filter="url(#bean-shadow)">
    <path
      d="M93.4,11.1C72.8-3.7,42.1-3.7,21.5,11.1c-15,10.7-22.3,31-15.5,49.2c4.1,10.9,12.7,20.4,24.1,26.5 c22.8,12.2,51.8,4,67.6-14.7C114.3,50,111.9,24.5,93.4,11.1z"
      fill="url(#bean-gradient)"
    />
    <path
      d="M59.9,13.6c-5.5,23.3,1.9,49.2-2.1,73.4c1.1,0.2,2.3,0.3,3.4,0.3c15.9,0,30.3-6.8,39.6-18.3 C117.3,47.9,103.5-3.3,59.9,13.6z"
      opacity="0.1"
      fill="#000000"
    />
    </g>
  </svg>
);

const CoffeeCup = ({ className }: { className?: string }) => (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="cup-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(var(--card))" />
          <stop offset="100%" stopColor="hsl(var(--muted))" />
        </linearGradient>
         <filter id="cup-shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="4" dy="6" stdDeviation="4" floodColor="hsl(var(--foreground))" floodOpacity="0.15"/>
        </filter>
      </defs>
      <g filter="url(#cup-shadow)">
        <path d="M 85,30 A 10 10 0 0 1 85,50" fill="none" stroke="hsl(var(--border))" strokeWidth="6"/>
        <path d="M 15,15 H 75 Q 80,15 80,20 V 60 Q 80,65 75,65 H 15 Q 10,65 10,60 V 20 Q 10,15 15,15 Z" fill="url(#cup-gradient)" />
        <ellipse cx="45" cy="15" rx="30" ry="5" fill="hsl(var(--background))" />
        <ellipse cx="45" cy="15" rx="28" ry="4" fill="hsl(var(--secondary))" />
      </g>
    </svg>
);

const FloatingElements = () => {
  return (
    <div className="relative h-64 flex items-center justify-center">
      <div className="absolute top-[20%] left-[15%] opacity-60 text-foreground/50 animate-float-rev" style={{ animationDelay: '1s' }}>
        <CoffeeBean className="w-12 h-12 -rotate-45" />
      </div>
      <div className="absolute top-[60%] left-[5%] opacity-80 text-foreground/60 animate-float" style={{ animationDelay: '3s' }}>
        <CoffeeBean className="w-8 h-8" />
      </div>
      <div className="absolute top-[10%] right-[10%] opacity-50 text-foreground/50 animate-float" style={{ animationDelay: '0s' }}>
        <CoffeeBean className="w-16 h-16 rotate-12" />
      </div>
      <div className="absolute top-[70%] right-[20%] opacity-60 text-foreground/40 animate-float-rev" style={{ animationDelay: '2s' }}>
        <CoffeeBean className="w-10 h-10 rotate-90" />
      </div>
       <div className="absolute top-[40%] right-[45%] opacity-40 text-foreground/30 animate-float" style={{ animationDelay: '4s' }}>
        <CoffeeBean className="w-6 h-6" />
      </div>

      <div className="relative animate-float">
        <CoffeeCup className="w-48 h-48 text-primary/30" />
      </div>

      <div className="text-center relative z-10 max-w-xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-headline mb-4">
          A Symphony of Flavor
        </h2>
        <p className="text-muted-foreground text-lg">
          From the delicate notes of our ceremonial grade to the robust character of our culinary blends, every sip is an experience.
        </p>
      </div>
    </div>
  );
};

export default FloatingElements;
