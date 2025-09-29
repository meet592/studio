'use client';

import { useTransition, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  generateRecipe,
  type RecipeGenerationOutput,
} from '@/ai/flows/recipe-generation';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Loader2, Sparkles, CheckCircle } from 'lucide-react';
import { Separator } from '../ui/separator';
import { Textarea } from '../ui/textarea';

const formSchema = z.object({
  dietaryPreferences: z.string().min(1, 'Please enter any dietary preferences.'),
  degreeOfDifficulty: z.enum(['easy', 'medium', 'hard']),
});

export default function RecipeGeneratorForm() {
  const [isPending, startTransition] = useTransition();
  const [result, setResult] = useState<RecipeGenerationOutput | null>(null);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      dietaryPreferences: 'None',
      degreeOfDifficulty: 'easy',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setResult(null);
    setError(null);
    startTransition(async () => {
      try {
        const res = await generateRecipe(values);
        setResult(res);
      } catch (e) {
        setError('An error occurred. Please try again.');
        console.error(e);
      }
    });
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="dietaryPreferences"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Dietary Preferences</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., vegan, gluten-free" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="degreeOfDifficulty"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Difficulty</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a difficulty level" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="easy">Easy</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="hard">Hard</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={isPending}>
            {isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Creating...
              </>
            ) : (
              'Generate Recipe'
            )}
          </Button>
        </form>
      </Form>

      {isPending && (
         <div className="mt-8 text-center">
            <Loader2 className="mx-auto h-8 w-8 animate-spin text-primary" />
            <p className="mt-2 text-muted-foreground">Our AI chef is crafting your recipe...</p>
        </div>
      )}

      {error && <p className="mt-8 text-destructive">{error}</p>}

      {result && (
        <div className="mt-12">
          <Separator />
          <div className="my-8 text-center">
            <Sparkles className="mx-auto h-8 w-8 text-amber-500" />
            <h2 className="text-2xl font-headline mt-2">Your Custom Recipe</h2>
          </div>
          <Card className="bg-secondary/50">
            <CardHeader>
              <CardTitle>{result.recipeName}</CardTitle>
              <CardDescription>{result.recipeDescription}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">Ingredients</h3>
                <ul className="space-y-2">
                  {result.ingredients.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Instructions</h3>
                <div className="prose prose-sm text-foreground max-w-none whitespace-pre-wrap">
                  {result.instructions}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
