'use server';

/**
 * @fileOverview Generates unique matcha-based recipes based on user preferences.
 *
 * - generateRecipe - A function that generates matcha recipes.
 * - RecipeGenerationInput - The input type for the generateRecipe function.
 * - RecipeGenerationOutput - The return type for the generateRecipe function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RecipeGenerationInputSchema = z.object({
  dietaryPreferences: z
    .string()
    .describe(
      'Dietary preferences for the recipe, such as vegetarian, vegan, gluten-free, etc.'
    ),
  degreeOfDifficulty: z
    .string()
    .describe('The difficulty level of the recipe (easy, medium, hard).'),
});
export type RecipeGenerationInput = z.infer<typeof RecipeGenerationInputSchema>;

const RecipeGenerationOutputSchema = z.object({
  recipeName: z.string().describe('The name of the generated matcha recipe.'),
  ingredients: z.array(z.string()).describe('A list of ingredients for the recipe.'),
  instructions: z.string().describe('Step-by-step instructions for preparing the recipe.'),
  recipeDescription: z.string().describe('A short description of the recipe'),
});
export type RecipeGenerationOutput = z.infer<typeof RecipeGenerationOutputSchema>;

export async function generateRecipe(
  input: RecipeGenerationInput
): Promise<RecipeGenerationOutput> {
  return generateRecipeFlow(input);
}

const prompt = ai.definePrompt({
  name: 'recipeGenerationPrompt',
  input: {schema: RecipeGenerationInputSchema},
  output: {schema: RecipeGenerationOutputSchema},
  prompt: `You are a creative chef specializing in matcha-based recipes. Generate a unique matcha recipe based on the user's preferences.

Dietary Preferences: {{{dietaryPreferences}}}
Degree of Difficulty: {{{degreeOfDifficulty}}}

Consider these factors when generating the recipe. Be creative!
Output the recipe name, ingredients, instructions, and description.`,
});

const generateRecipeFlow = ai.defineFlow(
  {
    name: 'generateRecipeFlow',
    inputSchema: RecipeGenerationInputSchema,
    outputSchema: RecipeGenerationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
