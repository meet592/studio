import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { GlassWater } from 'lucide-react';
import Image from 'next/image';

const steps = [
  {
    title: 'Step 1: Sift the Matcha',
    content: 'Sift 1-2 teaspoons of matcha into a bowl to remove any clumps. This ensures a smooth, frothy texture.',
    imageId: 'brew-guide-1',
  },
  {
    title: 'Step 2: Add Hot Water',
    content: 'Pour about 2 ounces (60ml) of hot water over the matcha. The ideal water temperature is around 175°F (80°C), not boiling.',
    imageId: 'brew-guide-2',
  },
  {
    title: 'Step 3: Whisk Vigorously',
    content: 'Using a bamboo whisk (chasen), whisk the matcha and water in a rapid "W" or "M" motion until a fine froth appears on the surface.',
    imageId: 'brew-guide-3',
  },
  {
    title: 'Step 4: Enjoy Your Matcha',
    content: 'Your bowl of matcha is ready. Enjoy it immediately to savor the fresh, vibrant flavor and aroma. You can add more water to taste.',
    imageId: 'brew-guide-4',
  },
];

export default function BrewingGuidePage() {
  const getImage = (id: string) => PlaceHolderImages.find(p => p.id === id);
  return (
    <div className="container mx-auto max-w-4xl px-4 py-16">
      <div className="text-center mb-12">
        <GlassWater className="mx-auto h-12 w-12 text-primary mb-4" />
        <h1 className="text-4xl md:text-5xl font-headline mb-4">The Art of Brewing Matcha</h1>
        <p className="text-lg text-muted-foreground">
          Follow our simple guide to prepare the perfect bowl of matcha every time.
        </p>
      </div>

      <Accordion type="single" collapsible className="w-full" defaultValue="item-0">
        {steps.map((step, index) => {
          const image = getImage(step.imageId);
          return (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-xl font-headline hover:no-underline">
                {step.title}
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid md:grid-cols-3 gap-6 items-center pt-2">
                  <div className="md:col-span-2">
                    <p className="text-muted-foreground leading-relaxed">{step.content}</p>
                  </div>
                  {image && (
                    <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                      <Image 
                        src={image.imageUrl} 
                        alt={step.title} 
                        fill 
                        className="object-cover"
                        data-ai-hint={image.imageHint}
                        />
                    </div>
                  )}
                </div>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}
