'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { analyzeReviewAction, type AnalysisState } from '@/lib/actions';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { ThumbsUp, ThumbsDown, Lightbulb, TrendingUp } from 'lucide-react';
import { SectionWrapper } from '../shared/section-wrapper';
import { AnimatedSection } from '../shared/animated-section';

const initialState: AnalysisState = null;

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full md:w-auto">
      {pending ? 'Analyzing...' : 'Analyze Review'}
    </Button>
  );
}

export function ReviewAnalysisSection() {
  const [state, formAction] = useFormState(analyzeReviewAction, initialState);

  const getSentimentBadge = (sentiment: string) => {
    switch (sentiment.toLowerCase()) {
      case 'positive':
        return 'bg-green-500 hover:bg-green-500';
      case 'negative':
        return 'bg-red-500 hover:bg-red-500';
      case 'neutral':
        return 'bg-yellow-500 hover:bg-yellow-500';
      default:
        return 'secondary';
    }
  };

  return (
    <SectionWrapper id="order" className="bg-card">
      <AnimatedSection>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-headline text-4xl font-bold md:text-5xl text-primary">Unlock Insights from Feedback</h2>
            <p className="mt-4 text-muted-foreground">
              Our AI-powered tool helps you understand customer feedback instantly. Paste a review to discover sentiment, key takeaways, and actionable insights for your restaurant.
            </p>
            <form action={formAction} className="mt-6 space-y-4">
              <Textarea
                name="reviewText"
                placeholder="Paste a customer review here..."
                required
                rows={6}
                className="text-base"
              />
              <SubmitButton />
            </form>
          </div>
          <div>
            {state?.error && (
              <Alert variant="destructive">
                <AlertTitle>Analysis Error</AlertTitle>
                <AlertDescription>{state.error}</AlertDescription>
              </Alert>
            )}
            {state && !state.error && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex justify-between items-center">
                    <span>Analysis Results</span>
                    <Badge className={getSentimentBadge(state.sentiment)}>{state.sentiment}</Badge>
                  </CardTitle>
                  <CardDescription>AI-generated summary of the review.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold flex items-center gap-2 mb-2"><ThumbsUp className="h-5 w-5 text-green-400" /> Positive Feedback</h4>
                    <p className="text-muted-foreground text-sm">{state.positiveFeedback}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold flex items-center gap-2 mb-2"><ThumbsDown className="h-5 w-5 text-red-400" /> Areas for Improvement</h4>
                    <p className="text-muted-foreground text-sm">{state.areasForImprovement}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold flex items-center gap-2 mb-2"><TrendingUp className="h-5 w-5 text-blue-400" /> Overall Score: {state.overallScore}/10</h4>
                    <Progress value={state.overallScore * 10} />
                  </div>
                </CardContent>
              </Card>
            )}
            {!state && (
                 <Card className="flex flex-col items-center justify-center text-center p-8 border-dashed h-full">
                    <Lightbulb className="h-12 w-12 text-muted-foreground mb-4" />
                    <CardTitle>Awaiting Review</CardTitle>
                    <CardDescription>Your analysis will appear here.</CardDescription>
                </Card>
            )}
          </div>
        </div>
      </AnimatedSection>
    </SectionWrapper>
  );
}
