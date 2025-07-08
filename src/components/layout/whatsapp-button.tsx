import { Button } from "@/components/ui/button";
import Link from "next/link";

const WhatsAppIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      <path d="m16 2-3.9 3.9c-1.4 1.4-1.4 3.7 0 5.1l4 4c1.4 1.4 3.7 1.4 5.1 0l3.9-3.9" />
    </svg>
  );

export function WhatsAppButton() {
  const WHATSAPP_NUMBER = "1234567890"; // Replace with actual number
  const orderText = "I'd like to place an order.";
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(orderText)}`;

  return (
    <Button
      asChild
      size="icon"
      className="fixed bottom-20 right-4 z-50 h-14 w-14 rounded-full bg-green-500 text-white shadow-lg animate-glow hover:bg-green-600 md:bottom-8 md:right-8"
      aria-label="Order on WhatsApp"
    >
      <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
        <WhatsAppIcon />
      </Link>
    </Button>
  );
}
