import Link from "next/link";
import { Home, Utensils, Star, ChefHat, MessageCircle } from "lucide-react";

export function MobileNavbar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t bg-background/95 backdrop-blur-sm md:hidden">
      <div className="container mx-auto grid h-16 max-w-lg grid-cols-5 items-center px-2">
        <Link href="/#home" className="flex flex-col items-center justify-center gap-1 text-xs font-medium text-muted-foreground hover:text-foreground">
          <Home className="h-5 w-5" />
          <span>Home</span>
        </Link>
        <Link href="/#menu" className="flex flex-col items-center justify-center gap-1 text-xs font-medium text-muted-foreground hover:text-foreground">
          <Utensils className="h-5 w-5" />
          <span>Menu</span>
        </Link>
        <Link href="/#reviews" className="flex flex-col items-center justify-center gap-1 text-xs font-medium text-muted-foreground hover:text-foreground">
          <Star className="h-5 w-5" />
          <span>Reviews</span>
        </Link>
        <Link href="/chef-story" className="flex flex-col items-center justify-center gap-1 text-xs font-medium text-muted-foreground hover:text-foreground">
          <ChefHat className="h-5 w-5" />
          <span>Chef</span>
        </Link>
        <Link href="/#order" className="flex flex-col items-center justify-center gap-1 text-xs font-medium text-muted-foreground hover:text-foreground">
          <MessageCircle className="h-5 w-5" />
          <span>Order</span>
        </Link>
      </div>
    </div>
  );
}
