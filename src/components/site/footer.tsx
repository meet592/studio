import { Leaf } from 'lucide-react';
import Link from 'next/link';

const SiteFooter = () => {
  return (
    <footer className="bg-secondary/70">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 font-headline text-2xl">
              <Leaf className="text-primary" />
              <span>Sakura Sip</span>
            </Link>
            <p className="mt-4 text-muted-foreground text-sm">
              Embrace the ritual of matcha.
            </p>
          </div>
          <div>
            <h4 className="font-headline text-lg mb-4">Shop</h4>
            <ul className="space-y-2">
              <li><Link href="/products" className="text-sm text-muted-foreground hover:text-primary transition-colors">All Products</Link></li>
              <li><Link href="/products/ceremonial-grade-matcha" className="text-sm text-muted-foreground hover:text-primary transition-colors">Ceremonial</Link></li>
              <li><Link href="/products/culinary-grade-matcha" className="text-sm text-muted-foreground hover:text-primary transition-colors">Culinary</Link></li>
              <li><Link href="/products" className="text-sm text-muted-foreground hover:text-primary transition-colors">Accessories</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-headline text-lg mb-4">Discover</h4>
            <ul className="space-y-2">
              <li><Link href="/recommender" className="text-sm text-muted-foreground hover:text-primary transition-colors">Matcha Recommender</Link></li>
              <li><Link href="/recipes" className="text-sm text-muted-foreground hover:text-primary transition-colors">Recipe Generator</Link></li>
              <li><Link href="/brewing-guide" className="text-sm text-muted-foreground hover:text-primary transition-colors">Brewing Guide</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-headline text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">FAQ</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Sakura Sip. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
