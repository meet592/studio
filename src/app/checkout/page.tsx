import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { getProducts } from '@/lib/products';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import Link from 'next/link';

export default function CheckoutPage() {
  const cartItems = [
    { product: getProducts()[0], quantity: 1 },
    { product: getProducts()[2], quantity: 1 },
  ];
  const subtotal = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const shipping = 5.00;
  const taxes = subtotal * 0.08;
  const total = subtotal + shipping + taxes;
  const getImage = (imageId: string) => PlaceHolderImages.find(p => p.id === imageId);

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-headline text-center mb-12">Checkout</h1>
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <Card>
          <CardHeader>
            <CardTitle>Shipping & Payment</CardTitle>
            <CardDescription>Please enter your details to complete the purchase.</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="you@example.com" />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-4">Shipping Address</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-1">
                    <Label htmlFor="first-name">First Name</Label>
                    <Input id="first-name" />
                  </div>
                  <div className="col-span-1">
                    <Label htmlFor="last-name">Last Name</Label>
                    <Input id="last-name" />
                  </div>
                  <div className="col-span-2">
                    <Label htmlFor="address">Address</Label>
                    <Input id="address" />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <Label htmlFor="city">City</Label>
                    <Input id="city" />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <Label htmlFor="country">Country</Label>
                    <Input id="country" />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-4">Payment Details</h3>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="card-number">Card Number</Label>
                    <Input id="card-number" placeholder="•••• •••• •••• ••••" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="expiry-date">Expiry Date</Label>
                      <Input id="expiry-date" placeholder="MM / YY" />
                    </div>
                    <div>
                      <Label htmlFor="cvc">CVC</Label>
                      <Input id="cvc" placeholder="•••" />
                    </div>
                  </div>
                </div>
              </div>
              <Button type="submit" size="lg" className="w-full" asChild>
                <Link href="/thank-you">Pay ${total.toFixed(2)}</Link>
              </Button>
            </form>
          </CardContent>
        </Card>
        
        <div className="space-y-6">
          <h2 className="text-2xl font-headline">Order Summary</h2>
          <Card className="bg-secondary/50">
            <CardContent className="p-6">
              <ul className="divide-y divide-border">
                {cartItems.map(item => {
                  const image = getImage(item.product.imageId);
                  return (
                  <li key={item.product.id} className="flex py-4">
                    <div className="h-16 w-16 rounded-md overflow-hidden border flex-shrink-0">
                       {image && (
                        <Image
                          src={image.imageUrl}
                          alt={item.product.name}
                          width={64}
                          height={64}
                          className="h-full w-full object-cover"
                          data-ai-hint={image.imageHint}
                        />
                      )}
                    </div>
                    <div className="ml-4 flex flex-1 justify-between items-center">
                      <div>
                        <h4 className="font-medium">{item.product.name}</h4>
                        <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                      </div>
                      <p className="font-medium">${item.product.price.toFixed(2)}</p>
                    </div>
                  </li>
                )})}
              </ul>
              <div className="mt-6 border-t border-border pt-6 space-y-2">
                 <div className="flex justify-between text-sm">
                  <p className="text-muted-foreground">Subtotal</p>
                  <p>${subtotal.toFixed(2)}</p>
                </div>
                <div className="flex justify-between text-sm">
                  <p className="text-muted-foreground">Shipping</p>
                  <p>${shipping.toFixed(2)}</p>
                </div>
                 <div className="flex justify-between text-sm">
                  <p className="text-muted-foreground">Taxes</p>
                  <p>${taxes.toFixed(2)}</p>
                </div>
                <div className="flex justify-between font-semibold text-lg pt-2">
                  <p>Total</p>
                  <p>${total.toFixed(2)}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
