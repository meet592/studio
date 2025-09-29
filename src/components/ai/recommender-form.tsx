'use client';

import { useTransition, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  matchaRecommendation,
  type MatchaRecommendationOutput,
} from '@/ai/flows/matcha-recommendation';

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
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Loader2, Sparkles } from 'lucide-react';
import { Separator } from '../ui/separator';

const formSchema = z.object({
  flavorPreferences: z.string().min(1, 'Please describe your flavor preferences.'),
  desiredEffects: z.string().min(1, 'Please describe the effects you desire.'),
});

export default function RecommenderForm() {
  const [isPending, startTransition] = useTransition();
  const [result, setResult] = useState<MatchaRecommendationOutput | null>(null);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      flavorPreferences: '',
      desiredEffects: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setResult(null);
    setError(null);
    startTransition(async () => {
      try {
        const res = await matchaRecommendation(values);
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
            name="flavorPreferences"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Flavor Preferences</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., sweet, umami, slightly bitter" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="desiredEffects"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Desired Effects</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., calming energy, focus, for lattes" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={isPending}>
            {isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Thinking...
              </>
            ) : (
              'Get Recommendations'
            )}
          </Button>
        </form>
      </Form>

      {isPending && (
         <div className="mt-8 text-center">
            <Loader2 className="mx-auto h-8 w-8 animate-spin text-primary" />
            <p className="mt-2 text-muted-foreground">Our AI is whisking up your recommendations...</p>
        </div>
      )}

      {error && <p className="mt-8 text-destructive">{error}</p>}
      
      {result && (
        <div className="mt-12">
            <Separator />
            <div className="my-8 text-center">
                <Sparkles className="mx-auto h-8 w-8 text-amber-500" />
                <h2 className="text-2xl font-headline mt-2">Your Personalized Recommendations</h2>
            </div>
            <div className="space-y-6">
                {result.recommendations.map((rec, index) => (
                    <Card key={index} className="bg-secondary/50">
                        <CardHeader>
                            <CardTitle>{rec.productName}</CardTitle>
                            <CardDescription>{rec.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="font-semibold text-sm mb-1">Why it's a match for you:</p>
                            <p className="text-muted-foreground">{rec.reason}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
      )}
    </div>
  );
}
