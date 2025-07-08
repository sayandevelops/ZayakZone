import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import { SectionWrapper } from "../shared/section-wrapper";
import { AnimatedSection } from "../shared/animated-section";

const reviews = [
  { id: 1, name: 'Alisha P.', rating: 5, text: "Absolutely divine! The flavors were authentic and rich. The best Chicken Biryani I've had in ages. A must-visit!", image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2', hint: 'woman smiling' },
  { id: 2, name: 'Mark R.', rating: 4, text: "Great atmosphere and delicious food. The Paneer Tikka was perfectly cooked. A bit pricey, but worth it for a special occasion.", image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2', hint: 'man portrait' },
  { id: 3, name: 'Priya D.', rating: 5, text: "ZaykaZone is our new favorite spot! The service is impeccable, and every dish we tried was a masterpiece. Highly recommended.", image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2', hint: 'woman portrait' },
  { id: 4, name: 'David Chen', rating: 5, text: "Incredible experience. The lamb vindaloo had the perfect amount of spice. The floating dish decor is a nice touch too!", image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2', hint: 'asian man' },
  { id: 5, name: 'Sophia L.', rating: 4, text: "The desserts are to die for! Gulab Jamun was heavenly. The main course was good, but the sweets stole the show.", image: 'https://images.pexels.com/photos/943084/pexels-photo-943084.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2', hint: 'smiling person' },
];

export function ReviewsSection() {
  return (
    <SectionWrapper id="reviews" className="bg-card">
      <AnimatedSection>
        <div className="text-center">
          <h2 className="font-headline text-4xl font-bold md:text-5xl text-primary">What Our Guests Say</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">Hear directly from our patrons about their ZaykaZone experience.</p>
        </div>
      </AnimatedSection>
      
      <AnimatedSection delay="duration-1000">
        <Carousel
          opts={{ align: "start", loop: true }}
          className="w-full max-w-4xl mx-auto mt-12"
        >
          <CarouselContent>
            {reviews.map((review) => (
              <CarouselItem key={review.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="h-full flex flex-col justify-between">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <Avatar>
                          <AvatarImage src={review.image} alt={review.name} data-ai-hint={review.hint} />
                          <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-bold">{review.name}</p>
                          <div className="flex items-center gap-0.5">
                            {Array(review.rating).fill(0).map((_, i) => (
                              <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                            ))}
                            {Array(5 - review.rating).fill(0).map((_, i) => (
                              <Star key={i} className="h-4 w-4 text-muted-foreground" />
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground italic">"{review.text}"</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </AnimatedSection>
    </SectionWrapper>
  );
}
