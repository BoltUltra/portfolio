"use client";

import { testimonials } from "@/content";
import { SectionHeading } from "@/components/shared/section-heading";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="container mt-32 space-y-8">
      <SectionHeading
        eyebrow="Testimonials"
        title="Kind words from collaborators."
        description="Glass cards with quotes from TGPC, Vehance, Nitx, and SDSN partners."
        align="center"
      />
      <ScrollArea className="w-full">
        <div className="flex gap-6 pb-4">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="w-96 shrink-0 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur"
            >
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                  <AvatarFallback>
                    {testimonial.name.slice(0, 2)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-white">{testimonial.name}</p>
                  <p className="text-xs text-gray-400">
                    {testimonial.role} · {testimonial.company}
                  </p>
                </div>
              </div>
              <blockquote className="mt-4 text-gray-200">
                “{testimonial.quote}”
              </blockquote>
            </figure>
          ))}
        </div>
      </ScrollArea>
    </section>
  );
}

