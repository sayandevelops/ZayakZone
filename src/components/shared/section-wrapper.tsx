import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

export function SectionWrapper({
  children,
  className,
  id,
  hasPt = true,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  hasPt?: boolean;
}) {
  return (
    <section id={id} className={cn("w-full py-16 md:py-24 lg:py-28", !hasPt && "pt-0", className)}>
      <div className="container mx-auto px-4 md:px-6">
        {children}
      </div>
    </section>
  );
}
