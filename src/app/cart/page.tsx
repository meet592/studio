import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { getProducts } from '@/lib/products';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Trash2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function CartPage() {
  const cartItems = [
    { product: getProducts()[0], quantity: 1 },
    { product: getProducts()[2], quantity: 1 },
    { product: getProducts()[3], quantity: 2 },
  ];
  const subtotal = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const shipping = 5.00;
  const total = subtotal + shipping;
  const getImage = (imageId: string) => PlaceHolderImages.find(p => p.id === imageId);
  
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-headline text-center mb-12">Your Shopping Cart</h1>
      {cartItems.length > 0 ? (
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-start">
          <div className="md:col-span-2">
            <ul className="divide-y divide-border">
              {cartItems.map((item) => {
                const image = getImage(item.product.imageId);
                return (
                  <li key={item.product.id} className="flex py-6 items-center">
                    <div className="h-24 w-24 md:h-32 md:w-32 flex-shrink-0 overflow-hidden rounded-md border">
                       {image && (
                        <Image
                          src={image.imageUrl}
                          alt={item.product.name}
                          width={128}
                          height={128}
                          className="h-full w-full object-cover object-center"
                          data-ai-hint={image.imageHint}
                        />
                      )}
                    </div>
                    <div className="ml-4 flex flex-1 flex-col">
                      <div className="flex justify-between font-medium text-foreground">
                        <h3>
                          <Link href={`/products/${item.product.slug}`}>{item.product.name}</Link>
                        </h3>
                        <p className="ml-4">${(item.product.price * item.quantity).toFixed(2)}</p>
                      </div>
                      <p className="text-sm text-muted-foreground">${item.product.price.toFixed(2)} each</p>
                      <div className="flex flex-1 items-end justify-between text-sm mt-4">
                        <Input type="number" defaultValue={item.quantity} className="w-20" aria-label="Quantity"/>
                        <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-destructive">
                          <Trash2 className="h-4 w-4" />
                          <span className="sr-only">Remove</span>
                        </Button>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="md:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <Button asChild className="w-full mt-4" size="lg">
                  <Link href="/checkout">Proceed to Checkout</Link>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/products">Continue Shopping</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      ) : (
        <div className="text-center py-16 border border-dashed rounded-lg">
          <h2 className="text-xl font-medium">Your cart is empty</h2>
          <p className="text-muted-foreground mt-2 mb-6">Looks like you haven't added anything to your cart yet.</p>
          <Button asChild>
            <Link href="/products">Start Shopping</Link>
          </Button>
        </div>
      )}
    </div>
  );
}
