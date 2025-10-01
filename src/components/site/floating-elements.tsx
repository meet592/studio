import { Coffee } from 'lucide-react';

const CoffeeBean = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M10.23,4.21A8.4,8.4,0,0,1,20,10.5,8.5,8.5,0,0,1,4,14.24,8.4,8.4,0,0,1,10.23,4.21Z" />
    <path d="M14.24,20a8.5,8.5,0,0,1-10-6.24" />
    <path d="M10.5,10.5a2.5,2.5,0,1,1,5,0c0,2.5-2.5,5-5,5s-5-2.5-5-5a2.5,2.5,0,0,1,2.5-2.5" />
  </svg>
);

const FloatingElements = () => {
  return (
    <div className="relative h-64 flex items-center justify-center">
      <div className="absolute top-[20%] left-[15%] opacity-30 text-foreground/50 animate-float-rev" style={{ animationDelay: '1s' }}>
        <CoffeeBean className="w-12 h-12 -rotate-45" />
      </div>
      <div className="absolute top-[60%] left-[5%] opacity-50 text-foreground/60 animate-float" style={{ animationDelay: '3s' }}>
        <CoffeeBean className="w-8 h-8" />
      </div>
      <div className="absolute top-[10%] right-[10%] opacity-40 text-foreground/50 animate-float" style={{ animationDelay: '0s' }}>
        <CoffeeBean className="w-16 h-16 rotate-12" />
      </div>
      <div className="absolute top-[70%] right-[20%] opacity-30 text-foreground/40 animate-float-rev" style={{ animationDelay: '2s' }}>
        <CoffeeBean className="w-10 h-10 rotate-90" />
      </div>
       <div className="absolute top-[40%] right-[45%] opacity-20 text-foreground/30 animate-float" style={{ animationDelay: '4s' }}>
        <CoffeeBean className="w-6 h-6" />
      </div>

      <div className="relative animate-float">
        <Coffee className="w-48 h-48 text-primary/30" />
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
