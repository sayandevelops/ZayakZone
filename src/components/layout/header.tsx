import Link from "next/link";
import { UtensilsCrossed } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-20 hidden md:block">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <UtensilsCrossed className="h-8 w-8 text-primary" />
          <span className="text-2xl font-bold font-headline text-white">ZaykaZone</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          <Link
            href="/#menu"
            className="text-sm font-medium text-white/80 transition-colors hover:text-white"
            prefetch={false}
          >
            Menu
          </Link>
          <Link
            href="/#reviews"
            className="text-sm font-medium text-white/80 transition-colors hover:text-white"
            prefetch={false}
          >
            Reviews
          </Link>
          <Link
            href="/chef-story"
            className="text-sm font-medium text-white/80 transition-colors hover:text-white"
            prefetch={false}
          >
            Chef Story
          </Link>
        </nav>
        <Button asChild variant="secondary">
          <Link href="/#order">Order Now</Link>
        </Button>
      </div>
    </header>
  );
}
