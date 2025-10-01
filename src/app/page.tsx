import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Cpu, GlassWater, Leaf, Sprout } from 'lucide-react';
import ProductCard from '@/components/product/product-card';
import { getProducts } from '@/lib/products';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import ScrollReveal from '@/components/site/scroll-reveal';
import FloatingElements from '@/components/site/floating-elements';

export default function Home() {
  const featuredProducts = getProducts().slice(0, 3);
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-1');

  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center text-center text-white">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 p-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-headline tracking-tight leading-tight mb-4 text-shadow-lg">
            Experience the Art of Matcha
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Discover our curated selection of premium matcha, crafted for tranquility and vitality.
          </p>
          <Button asChild size="lg">
            <Link href="/products">
              Shop Now <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-headline mb-4">Why Mocha Choca?</h2>
              <p className="text-muted-foreground text-lg">
                We are passionate about bringing you the finest matcha experience, from leaf to cup.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <ScrollReveal>
              <div className="flex flex-col items-center">
                <div className="bg-secondary p-4 rounded-full mb-4">
                  <Leaf className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-headline mb-2">Premium Quality</h3>
                <p className="text-muted-foreground">Sourced from the best tea gardens in Japan, ensuring unparalleled flavor and freshness.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="flex flex-col items-center">
                <div className="bg-secondary p-4 rounded-full mb-4">
                  <Sprout className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-headline mb-2">Health Benefits</h3>
                <p className="text-muted-foreground">Rich in antioxidants, our matcha boosts energy, enhances focus, and promotes calm.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="flex flex-col items-center">
                <div className="bg-secondary p-4 rounded-full mb-4">
                  <GlassWater className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-headline mb-2">Mindful Ritual</h3>
                <p className="text-muted-foreground">Embrace the meditative practice of preparing and savoring a perfect bowl of matcha.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary/50 overflow-hidden">
        <div className="container mx-auto px-4">
          <FloatingElements />
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-headline mb-4">Our Featured Products</h2>
              <p className="text-muted-foreground text-lg">
                A selection of our most loved matcha and accessories.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <ScrollReveal key={product.id} delay={index * 0.1}>
                <ProductCard product={product} />
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <div className="text-center mt-12">
              <Button asChild variant="outline">
                <Link href="/products">View All Products</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <Card className="overflow-hidden">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 font-headline text-2xl">
                    <Cpu /> AI Matcha Recommender
                  </CardTitle>
                  <CardDescription>
                    New to matcha? Let our AI guide you to your perfect match based on your flavor preferences and desired effects.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-muted-foreground">
                    Answer a few simple questions and discover the ideal matcha to start your journey. Find your zen in a cup.
                  </p>
                  <Button asChild>
                    <Link href="/recommender">
                      Find My Matcha <ArrowRight className="ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 font-headline text-2xl">
                    <Leaf /> AI Recipe Generator
                  </CardTitle>
                  <CardDescription>
                    Unleash your culinary creativity with unique, AI-generated matcha recipes tailored to your taste.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-muted-foreground">
                    From lattes to desserts, explore new ways to enjoy matcha with recipes customized for your dietary needs and skill level.
                  </p>
                  <Button asChild>
                    <Link href="/recipes">
                      Generate a Recipe <ArrowRight className="ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-headline mb-4">The Perfect Brew</h2>
              <p className="text-muted-foreground text-lg mb-8">
                Master the art of matcha preparation with our simple, step-by-step guide. Elevate your daily ritual.
              </p>
              <Button asChild size="lg" variant="outline">
                <Link href="/brewing-guide">
                  View Brewing Guide
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
