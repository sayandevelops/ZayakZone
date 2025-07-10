'use server';

import { analyzeReview, AnalyzeReviewOutput } from '@/ai/flows/review-analysis';

export type AnalysisState = (AnalyzeReviewOutput & { error?: string | null }) | null;

export async function analyzeReviewAction(
  prevState: AnalysisState,
  formData: FormData
): Promise<AnalysisState> {
  const reviewText = formData.get('reviewText') as string;
  
  if (!reviewText || reviewText.trim().length < 5) {
    return { 
        sentiment: '',
        positiveFeedback: '',
        areasForImprovement: '',
        overallScore: 0,
        error: 'Please enter a review with at least 5 characters.' 
    };
  }

  try {
    const result = await analyzeReview({ reviewText });
    return { ...result, error: null };
  } catch (error) {
    console.error('Error analyzing review:', error);
    return { 
        sentiment: 'Error',
        positiveFeedback: '',
        areasForImprovement: '',
        overallScore: 0,
        error: 'Failed to analyze review. Please try again later.' 
    };
  }
}
