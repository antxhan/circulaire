import TestimonialCard from "../_components/TestimonialCard";
import Section from "../_components/Section";

const testimonials = [
  {
    name: "Anna",
    profession: "Buyer at pre-owned marketplace",
    comment:
      "This platform has transformed our pricing strategies. Highly recommended!",
    imageSrc: "/people/anna.webp",
  },
  {
    name: "David",
    profession: "E-commerce manager",
    comment:
      "The insights from Circulaire have been a game-changer for our e-commerce sales.",
    imageSrc: "/people/david.webp",
  },
  {
    name: "Lorenz",
    profession: "Head of Retail Operations",
    comment:
      "Circulaire's data-driven approach has given us a competitive edge.",
    imageSrc: "/people/lorenz.webp",
  },
];

export default function WhatUsersSay() {
  return (
    <Section title="What our users are saying">
      <div className="mt-12 flex flex-col md:flex-row justify-center gap-4 max-w-5xl mx-auto">
        {testimonials.map((testimonials, index) => (
          <TestimonialCard key={index} {...testimonials} />
        ))}
      </div>
    </Section>
  );
}
