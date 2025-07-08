'use server';

/**
 * @fileOverview Analyzes customer reviews using AI sentiment analysis to identify positive feedback and areas for improvement.
 *
 * - analyzeReview - A function that handles the review analysis process.
 * - AnalyzeReviewInput - The input type for the analyzeReview function.
 * - AnalyzeReviewOutput - The return type for the analyzeReview function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnalyzeReviewInputSchema = z.object({
  reviewText: z.string().describe('The text content of the customer review.'),
});
export type AnalyzeReviewInput = z.infer<typeof AnalyzeReviewInputSchema>;

const AnalyzeReviewOutputSchema = z.object({
  sentiment: z
    .string()
    .describe(
      'The sentiment of the review (e.g., positive, negative, neutral).'
    ),
  positiveFeedback: z
    .string()
    .describe('Specific positive aspects mentioned in the review.'),
  areasForImprovement: z
    .string()
    .describe(
      'Areas where the restaurant can improve based on the review. If the review is overwhelmingly positive, this should suggest opportunities for maintaining the current standards.'
    ),
  overallScore: z.number().describe('A score from 1-10 of the review'),
});

export type AnalyzeReviewOutput = z.infer<typeof AnalyzeReviewOutputSchema>;

export async function analyzeReview(input: AnalyzeReviewInput): Promise<AnalyzeReviewOutput> {
  return analyzeReviewFlow(input);
}

const analyzeReviewPrompt = ai.definePrompt({
  name: 'analyzeReviewPrompt',
  input: {schema: AnalyzeReviewInputSchema},
  output: {schema: AnalyzeReviewOutputSchema},
  prompt: `You are an AI assistant designed to analyze customer reviews for restaurants.

  Analyze the following customer review and determine the sentiment, positive feedback, and areas for improvement. Provide an overall score from 1-10.

  Review: {{{reviewText}}}

  Respond in a structured JSON format.
  `,
});

const analyzeReviewFlow = ai.defineFlow(
  {
    name: 'analyzeReviewFlow',
    inputSchema: AnalyzeReviewInputSchema,
    outputSchema: AnalyzeReviewOutputSchema,
  },
  async input => {
    const {output} = await analyzeReviewPrompt(input);
    return output!;
  }
);
