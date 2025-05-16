import Section from "../_components/Section";
import H2 from "../_components/H2";
import Image from "next/image";
import CardGrid from "../_components/CardGrid";

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

export default function Testimonials() {
  return (
    <Section>
      <H2 className="mb-12">What our users are saying</H2>
      <CardGrid
        className="grid-cols-1 grid-rows-[auto_1fr]"
        contents={testimonials.map((testimonial) => {
          return {
            content: (
              <>
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.imageSrc}
                      alt={`${testimonial.name}'s profile picture`}
                      width={36}
                      height={36}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="leading-[1] flex flex-col">
                    <span className="text-xl font-bold font-accent leading-[1]">
                      {testimonial.name}
                    </span>
                    <span className="text-sm font-normal">
                      {testimonial.profession}
                    </span>
                  </div>
                </div>
                <p className="h-full text-xl italic leading-[1.1] text-pretty text-neutral-600 dark:text-white">
                  &quot;{testimonial.comment}&quot;
                </p>
              </>
            ),
          };
        })}
      />
    </Section>
  );
}
