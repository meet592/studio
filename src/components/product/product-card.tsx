import type { Product } from '@/lib/products';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const image = PlaceHolderImages.find(p => p.id === product.imageId);

  return (
    <Card className="flex flex-col overflow-hidden h-full">
      <Link href={`/products/${product.slug}`} className="block">
        <div className="aspect-square relative w-full overflow-hidden">
          {image && (
            <Image
              src={image.imageUrl}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
              data-ai-hint={image.imageHint}
            />
          )}
        </div>
      </Link>
      <CardHeader>
        <CardTitle>
          <Link href={`/products/${product.slug}`} className="hover:text-primary transition-colors">
            {product.name}
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription>{product.description}</CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <p className="text-lg font-semibold">${product.price.toFixed(2)}</p>
        <Button>Add to Cart</Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
