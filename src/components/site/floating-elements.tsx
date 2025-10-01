'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import ScrollReveal from './scroll-reveal';

const FloatingElements = () => {
  const displayImage = PlaceHolderImages.find(p => p.id === 'takeaway-cup');
  return (
    <div className="relative">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <ScrollReveal>
          <div className="relative aspect-square">
            {displayImage && (
            <Image 
                src={displayImage.imageUrl} 
                alt="A takeaway cup of matcha" 
                fill
                className="object-contain animate-float"
                data-ai-hint={displayImage.imageHint}
                />
            )}
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-headline mb-4">
              A Symphony of Flavor
            </h2>
            <p className="text-muted-foreground text-lg">
              From the delicate notes of our ceremonial grade to the robust character of our culinary blends, every sip is an experience. Discover the rich tradition and vibrant taste of premium matcha.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default FloatingElements;

    