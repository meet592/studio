'use client';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetFooter } from '@/components/ui/sheet';
import Image from 'next/image';
import Link from 'next/link';
import { Separator } from '../ui/separator';
import { getProducts } from '@/lib/products';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function CartSheet({ children }: { children: React.ReactNode }) {
  const cartItems = [
    { product: getProducts()[0], quantity: 1 },
    { product: getProducts()[2], quantity: 1 },
  ];
  const subtotal = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const getImage = (imageId: string) => PlaceHolderImages.find(p => p.id === imageId);

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
        </SheetHeader>
        {cartItems.length > 0 ? (
          <>
            <div className="flex-1 overflow-y-auto -mx-6 px-6">
              <ul className="divide-y divide-border">
                {cartItems.map((item) => {
                  const image = getImage(item.product.imageId);
                  return (
                  <li key={item.product.id} className="flex py-6">
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-border">
                      {image && (
                        <Image
                          src={image.imageUrl}
                          alt={item.product.name}
                          width={96}
                          height={96}
                          className="h-full w-full object-cover object-center"
                          data-ai-hint={image.imageHint}
                        />
                      )}
                    </div>
                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-foreground">
                          <h3>
                            <Link href={`/products/${item.product.slug}`}>{item.product.name}</Link>
                          </h3>
                          <p className="ml-4">${(item.product.price * item.quantity).toFixed(2)}</p>
                        </div>
                      </div>
                      <div className="flex flex-1 items-end justify-between text-sm">
                        <p className="text-muted-foreground">Qty {item.quantity}</p>
                        <div className="flex">
                          <button type="button" className="font-medium text-primary hover:text-primary/80">
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                )})}
              </ul>
            </div>
            <SheetFooter className="mt-auto border-t border-border pt-6 -mx-6 px-6 pb-6 sm:flex-col sm:items-stretch sm:gap-4">
              <div className="flex justify-between text-base font-medium text-foreground">
                <p>Subtotal</p>
                <p>${subtotal.toFixed(2)}</p>
              </div>
              <p className="mt-0.5 text-sm text-muted-foreground">Shipping and taxes calculated at checkout.</p>
              <div className="mt-6">
                <Button asChild className="w-full">
                  <Link href="/checkout">Checkout</Link>
                </Button>
              </div>
              <div className="mt-4 flex justify-center text-center text-sm text-muted-foreground">
                <p>
                  or{' '}
                  <Button variant="link" asChild className="p-0">
                    <Link href="/cart">
                      View Cart
                    </Link>
                  </Button>
                </p>
              </div>
            </SheetFooter>
          </>
        ) : (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 text-center">
            <h3 className="text-lg font-medium">Your cart is empty</h3>
            <p className="text-sm text-muted-foreground">Add some products to get started.</p>
            <SheetTrigger asChild>
                <Button asChild>
                    <Link href="/products">Continue Shopping</Link>
                </Button>
            </SheetTrigger>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
