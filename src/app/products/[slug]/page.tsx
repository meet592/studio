import { getProductBySlug, getProducts } from '@/lib/products';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Separator } from '@/components/ui/separator';
import ProductCard from '@/components/product/product-card';
import { Star } from 'lucide-react';

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  if (!product) {
    notFound();
  }

  const image = PlaceHolderImages.find(p => p.id === product.imageId);
  const relatedProducts = getProducts().filter(p => p.id !== product.id).slice(0, 4);

  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-start">
        <div className="aspect-square relative w-full rounded-lg overflow-hidden border">
          {image && (
            <Image
              src={image.imageUrl}
              alt={product.name}
              fill
              className="object-cover"
              data-ai-hint={image.imageHint}
            />
          )}
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl md:text-4xl font-headline">{product.name}</h1>
          
          <div className="flex items-center gap-2">
            <div className="flex items-center text-amber-500">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
            </div>
            <span className="text-sm text-muted-foreground">(24 reviews)</span>
          </div>

          <p className="text-3xl font-semibold">${product.price.toFixed(2)}</p>
          <p className="text-muted-foreground leading-relaxed">{product.description}</p>
          
          <div className="mt-4">
            <Button size="lg" className="w-full md:w-auto">Add to Cart</Button>
          </div>
        </div>
      </div>

      <Separator className="my-16 md:my-24" />

      <div>
        <h2 className="text-3xl font-headline text-center mb-12">You Might Also Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {relatedProducts.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
