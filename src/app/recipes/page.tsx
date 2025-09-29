import RecipeGeneratorForm from '@/components/ai/recipe-generator-form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Leaf } from 'lucide-react';

export default function RecipesPage() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-16">
      <div className="text-center mb-12">
        <Leaf className="mx-auto h-12 w-12 text-primary mb-4" />
        <h1 className="text-4xl md:text-5xl font-headline mb-4">Creative Matcha Recipes</h1>
        <p className="text-lg text-muted-foreground">
          Discover new ways to enjoy matcha with unique recipes generated just for you.
        </p>
      </div>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>AI Recipe Generator</CardTitle>
          <CardDescription>Tell us your preferences and we'll create a delicious matcha recipe.</CardDescription>
        </CardHeader>
        <CardContent>
          <RecipeGeneratorForm />
        </CardContent>
      </Card>
    </div>
  );
}
