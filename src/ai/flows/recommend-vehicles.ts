// This file implements the Genkit flow for recommending vehicles based on user preferences and browsing history.
// - recommendVehicles - A function that recommends vehicles.
// - RecommendVehiclesInput - The input type for the recommendVehicles function.
// - RecommendVehiclesOutput - The return type for the recommendVehicles function.

'use server';

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RecommendVehiclesInputSchema = z.object({
  budget: z.number().optional().describe('The user\'s budget for the vehicle.'),
  preferredBodyStyle: z.string().optional().describe('The user\'s preferred body style (e.g., sedan, SUV, truck).'),
  numberOfSeats: z.number().optional().describe('The user\'s preferred number of seats.'),
  browsingHistory: z.string().optional().describe('The user\'s browsing history on the website.'),
});
export type RecommendVehiclesInput = z.infer<typeof RecommendVehiclesInputSchema>;

const RecommendVehiclesOutputSchema = z.object({
  recommendations: z.array(z.string()).describe('A list of recommended vehicles based on user preferences.'),
});
export type RecommendVehiclesOutput = z.infer<typeof RecommendVehiclesOutputSchema>;

export async function recommendVehicles(input: RecommendVehiclesInput): Promise<RecommendVehiclesOutput> {
  return recommendVehiclesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'recommendVehiclesPrompt',
  input: {schema: RecommendVehiclesInputSchema},
  output: {schema: RecommendVehiclesOutputSchema},
  prompt: `You are a car expert. Recommend a list of vehicles based on the user's preferences and browsing history.

      Consider the following information about the user:
      Budget: {{#if budget}}{{{budget}}}{{else}}Not specified{{/if}}
      Preferred Body Style: {{#if preferredBodyStyle}}{{{preferredBodyStyle}}}{{else}}Not specified{{/if}}
      Number of Seats: {{#if numberOfSeats}}{{{numberOfSeats}}}{{else}}Not specified{{/if}}
      Browsing History: {{#if browsingHistory}}{{{browsingHistory}}}{{else}}Not specified{{/if}}

      The output should be a list of recommended vehicles.
      Make sure the recommendations are diverse and consider all given information about the user.
      If there is no specific information for the user, then recommend top trending vehicles. 
      If any of the information isn't relevant for recommendations, then ignore it.
`,
});

const recommendVehiclesFlow = ai.defineFlow(
  {
    name: 'recommendVehiclesFlow',
    inputSchema: RecommendVehiclesInputSchema,
    outputSchema: RecommendVehiclesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
