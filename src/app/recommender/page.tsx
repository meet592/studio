import RecommenderForm from '@/components/ai/recommender-form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Cpu } from 'lucide-react';

export default function RecommenderPage() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-16">
      <div className="text-center mb-12">
        <Cpu className="mx-auto h-12 w-12 text-primary mb-4" />
        <h1 className="text-4xl md:text-5xl font-headline mb-4">Find Your Perfect Matcha</h1>
        <p className="text-lg text-muted-foreground">
          Let our AI assistant guide you to the ideal matcha based on your unique tastes and desired mood.
        </p>
      </div>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>Matcha Recommender</CardTitle>
          <CardDescription>Tell us what you're looking for in a cup of matcha.</CardDescription>
        </CardHeader>
        <CardContent>
          <RecommenderForm />
        </CardContent>
      </Card>
    </div>
  );
}
