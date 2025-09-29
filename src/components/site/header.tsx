'use client';

import Link from 'next/link';
import { Leaf, Menu, ShoppingBag, User } from 'lucide-react';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { useIsMobile } from '@/hooks/use-mobile';
import CartSheet from '../cart/cart-sheet';

const navLinks = [
  { href: '/products', label: 'Products' },
  { href: '/recommender', label: 'Recommender' },
  { href: '/recipes', label: 'Recipes' },
  { href: '/brewing-guide', label: 'Brewing Guide' },
];

const SiteHeader = () => {
  const isMobile = useIsMobile();

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 font-headline text-2xl">
          <Leaf className="text-primary" />
          <span>Mocha Choca</span>
        </Link>
        
        {isMobile ? (
          <div className="flex items-center gap-2">
            <CartSheet>
              <Button variant="ghost" size="icon">
                <ShoppingBag />
                <span className="sr-only">Shopping Cart</span>
              </Button>
            </CartSheet>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent>
                <nav className="flex flex-col gap-4 mt-8">
                  {navLinks.map((link) => (
                    <Link key={link.href} href={link.href} className="text-lg hover:text-primary transition-colors">
                      {link.label}
                    </Link>
                  ))}
                  <hr className="my-4"/>
                  <Link href="/account" className="text-lg hover:text-primary transition-colors">
                    Account
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        ) : (
          <div className="flex items-center gap-6">
            <nav className="flex items-center gap-6 text-sm">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="hover:text-primary transition-colors">
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="flex items-center gap-2">
              <CartSheet>
                <Button variant="ghost" size="icon">
                  <ShoppingBag />
                  <span className="sr-only">Shopping Cart</span>
                </Button>
              </CartSheet>
              <Button variant="ghost" size="icon" asChild>
                <Link href="/account">
                  <User />
                  <span className="sr-only">Account</span>
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default SiteHeader;
