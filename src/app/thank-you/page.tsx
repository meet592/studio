import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CheckCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function ThankYouPage() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'thank-you-hero');
  const orderNumber = Math.floor(Math.random() * 900000) + 100000;

  return (
    <div>
      <section className="relative w-full h-64 bg-secondary">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt="Thank you for your order"
            fill
            className="object-cover"
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-primary/20" />
      </section>

      <div className="container mx-auto max-w-3xl px-4 py-16 text-center -mt-32 relative">
          <div className="bg-background p-8 md:p-12 rounded-lg shadow-xl">
            <CheckCircle className="mx-auto h-16 w-16 text-green-500 mb-6" />
            <h1 className="text-4xl md:text-5xl font-headline mb-4">Thank You for Your Order!</h1>
            <p className="text-lg text-muted-foreground mb-2">
                Your order has been placed successfully.
            </p>
            <p className="text-muted-foreground mb-8">
                Your order number is <span className="font-semibold text-foreground">#{orderNumber}</span>. 
                We've sent a confirmation receipt to your email.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                    <Link href="/products">Continue Shopping</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                    <Link href="/account">View Order History</Link>
                </Button>
            </div>
        </div>
      </div>
    </div>
  );
}
