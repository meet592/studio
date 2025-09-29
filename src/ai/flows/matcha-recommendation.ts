'use server';

/**
 * @fileOverview This file defines a Genkit flow for providing personalized matcha recommendations
 * based on user flavor preferences and desired effects.
 *
 * - matchaRecommendation - A function that accepts user preferences and returns matcha recommendations.
 * - MatchaRecommendationInput - The input type for the matchaRecommendation function.
 * - MatchaRecommendationOutput - The return type for the matchaRecommendation function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const MatchaRecommendationInputSchema = z.object({
  flavorPreferences: z
    .string()
    .describe(
      'A description of the user\'s flavor preferences (e.g., sweet, bitter, umami).'
    ),
  desiredEffects:
    z.string().describe('The desired effects of the matcha (e.g., energy, calm, focus).'),
});
export type MatchaRecommendationInput = z.infer<typeof MatchaRecommendationInputSchema>;

const MatchaRecommendationOutputSchema = z.object({
  recommendations: z.array(
    z.object({
      productName: z.string().describe('The name of the recommended matcha product.'),
      description: z.string().describe('A brief description of the product.'),
      reason: z.string().describe('The reason why this product is recommended.'),
    })
  ).describe('A list of matcha product recommendations.'),
});
export type MatchaRecommendationOutput = z.infer<typeof MatchaRecommendationOutputSchema>;

export async function matchaRecommendation(input: MatchaRecommendationInput): Promise<MatchaRecommendationOutput> {
  return matchaRecommendationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'matchaRecommendationPrompt',
  input: {schema: MatchaRecommendationInputSchema},
  output: {schema: MatchaRecommendationOutputSchema},
  prompt: `You are an expert matcha advisor. A user will describe their flavor preferences and desired effects, and you will provide personalized matcha recommendations.

Flavor Preferences: {{{flavorPreferences}}}
Desired Effects: {{{desiredEffects}}}

Based on these preferences and desired effects, recommend matcha products from our catalog. Explain why each product is a good fit for the user.

Format your response as a JSON object with a 'recommendations' field. Each recommendation should include the 'productName', 'description', and 'reason' fields.
`,
});

const matchaRecommendationFlow = ai.defineFlow(
  {
    name: 'matchaRecommendationFlow',
    inputSchema: MatchaRecommendationInputSchema,
    outputSchema: MatchaRecommendationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
