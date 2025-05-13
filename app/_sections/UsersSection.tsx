"use client";
import Section from "../_components/Section";
import Card from "../_components/Card";
import ButtonLink from "../_components/BookDemoButton";

export default function UsersSection() {
  const testimonials = [
    {
      name: "Anna",
      role: "Buyer at pre-owned marketplace",
      image: "/people/anna.webp",
      text: "This platform has transformed our pricing strategies. Highly recommended!",
    },
    {
      name: "David",
      role: "E-commerce manager",
      image: "/people/david.webp",
      text: "The insights from Circulaire have been a game-changer for our e-commerce sales.",
    },
    {
      name: "Lorenz",
      role: "Head of Retail Operations",
      image: "/people/lorenz.webp",
      text: "Circulaire's data-driven approach has given us a competitive edge.",
    },
  ];

  return (
    <Section className="py-16 bg-white">
      <h2 className="text-2xl font-bold mb-10 text-[var(--clr-neutral-900)]">
        What our users are saying
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((user, index) => (
          <Card
            key={index}
            className="bg-white border border-gray-100 p-6 rounded-xl shadow-sm"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={user.image}
                alt={user.name}
                className="w-10 h-10 rounded-full object-cover"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src =
                    "/people/default.jpg";
                }}
              />
              <div>
                <p className="font-semibold text-sm">{user.name}</p>
                <p className="text-xs text-gray-500">{user.role}</p>
              </div>
            </div>
            <p className="italic text-gray-700 text-sm">“{user.text}”</p>
          </Card>
        ))}
      </div>

      <div className="mt-10 text-center">
        <ButtonLink />
      </div>
    </Section>
  );
}
