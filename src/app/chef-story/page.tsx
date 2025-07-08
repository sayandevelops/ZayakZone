import Image from "next/image";
import { Header } from "@/components/layout/header";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { AnimatedSection } from "@/components/shared/animated-section";
import { Separator } from "@/components/ui/separator";

export default function ChefStoryPage() {
  return (
    <>
      <div className="relative h-[50vh] w-full">
        <Image
          src="https://placehold.co/1920x1080.png"
          alt="Chef in the kitchen"
          layout="fill"
          objectFit="cover"
          className="grayscale"
          data-ai-hint="chef cooking"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4">
          <AnimatedSection>
            <h1 className="font-headline text-5xl font-bold tracking-tight text-balance sm:text-7xl">
              The Heart of ZaykaZone
            </h1>
            <p className="mt-4 text-xl text-white/80">Meet the Mastermind Behind the Magic</p>
          </AnimatedSection>
        </div>
      </div>

      <SectionWrapper>
        <div className="grid md:grid-cols-3 gap-12 items-start">
          <AnimatedSection className="md:col-span-1">
            <Image
              src="https://placehold.co/800x1000.png"
              alt="Portrait of Chef Anamika"
              width={800}
              height={1000}
              className="rounded-lg object-cover shadow-lg"
              data-ai-hint="chef portrait"
            />
          </AnimatedSection>
          <div className="md:col-span-2">
            <AnimatedSection delay="duration-500">
              <h2 className="font-headline text-4xl font-bold text-primary">Chef Anamika Sharma</h2>
              <p className="mt-2 text-xl text-muted-foreground font-semibold">Culinary Director & Founder</p>
            </AnimatedSection>
            <Separator className="my-8" />
            <AnimatedSection delay="duration-700" className="space-y-6 text-lg text-muted-foreground">
              <p>
                Chef Anamika Sharma's culinary journey began in the vibrant kitchens of her grandmother in Lucknow, India. It was there, amidst the fragrant spices and simmering pots, that she discovered her passion for cooking. She believes that food is not just sustenance, but a celebration of life, culture, and connection.
              </p>
              <p>
                After honing her skills at the prestigious Institute of Hotel Management in Delhi, Chef Anamika traveled across India, from the royal kitchens of Rajasthan to the coastal flavors of Kerala, absorbing the diverse culinary traditions of her homeland. Her philosophy is simple: use the freshest, locally-sourced ingredients to create dishes that are both traditional in essence and modern in presentation.
              </p>
              <blockquote className="border-l-4 border-primary pl-4 italic text-foreground">
                "Every dish has a story. I want my guests to not just taste the food, but to feel the love and history behind it. That is the 'Zayka' we bring to every plate."
              </blockquote>
              <p>
                At ZaykaZone, Chef Anamika and her team are dedicated to providing an unforgettable dining experience that honors the rich tapestry of Indian cuisine.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
