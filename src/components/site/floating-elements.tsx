'use client';

import Image from 'next/image';

const FloatingElements = () => {
  return (
    <div className="relative h-64 flex items-center justify-center">
      <div className="absolute top-[20%] left-[15%] opacity-60 animate-float-rev" style={{ animationDelay: '1s' }}>
        <Image 
          src="https://picsum.photos/seed/bean1/80/80" 
          alt="Coffee bean" 
          width={48} 
          height={48} 
          className="rounded-full"
          data-ai-hint="coffee bean"
          />
      </div>
      <div className="absolute top-[60%] left-[5%] opacity-80 animate-float" style={{ animationDelay: '3s' }}>
         <Image 
          src="https://picsum.photos/seed/bean2/50/50" 
          alt="Coffee bean" 
          width={32} 
          height={32} 
          className="rounded-full"
          data-ai-hint="coffee bean"
          />
      </div>
      <div className="absolute top-[10%] right-[10%] opacity-50 animate-float" style={{ animationDelay: '0s' }}>
         <Image 
          src="https://picsum.photos/seed/bean3/100/100" 
          alt="Coffee bean" 
          width={64} 
          height={64} 
          className="rounded-full"
          data-ai-hint="coffee bean"
          />
      </div>
      <div className="absolute top-[70%] right-[20%] opacity-60 animate-float-rev" style={{ animationDelay: '2s' }}>
         <Image 
          src="https://picsum.photos/seed/bean4/60/60" 
          alt="Coffee bean" 
          width={40} 
          height={40} 
          className="rounded-full"
          data-ai-hint="coffee bean"
          />
      </div>
       <div className="absolute top-[40%] right-[45%] opacity-40 animate-float" style={{ animationDelay: '4s' }}>
         <Image 
          src="https://picsum.photos/seed/bean5/40/40" 
          alt="Coffee bean" 
          width={24} 
          height={24}
          className="rounded-full"
          data-ai-hint="coffee bean"
          />
      </div>

      <div className="relative animate-float">
        <Image 
            src="https://picsum.photos/seed/coffeecup/200/200" 
            alt="Coffee cup" 
            width={192} 
            height={192} 
            className="rounded-full shadow-2xl"
            data-ai-hint="coffee cup"
            />
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
