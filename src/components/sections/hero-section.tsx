import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      <video
        className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover -translate-x-1/2 -translate-y-1/2 -z-10"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="https://videos.pexels.com/video-files/3769953/3769953-hd_1920_1080_25fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4">
        <h1 className="font-headline text-5xl font-bold tracking-tight text-balance sm:text-7xl md:text-8xl">
          Experience the Taste of Tradition
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-white/80 text-balance">
          ZaykaZone brings you authentic flavors, crafted with passion and served with love. A culinary journey you will never forget.
        </p>
        <div className="mt-8 flex gap-4">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link href="/#menu">View Menu</Link>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <Link href="/chef-story">Our Story</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
