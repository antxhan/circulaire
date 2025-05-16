import BookDemoButton from "@/app/_components/BookDemoButton";
import H2 from "@/app/_components/H2";
import ProfileCard from "./ProfileCard";
import Section from "@/app/_components/Section";
import { links } from "@/app/_constants/links";
import LinkedinIcon from "@/app/_icons/LinkedinIcon";

const teamMembers = [
  {
    name: "Emil",
    role: "Co-Founder & CEO",
    imageSrc: "/people/emil.webp",
    contacts: [
      {
        icon: <LinkedinIcon />,
        label: "Emil LinkedIn",
        url: links.EmilLinkedin,
      },
    ],
  },
  {
    name: "Andreas",
    role: "Co-Founder & CPO",
    imageSrc: "/people/andreas.webp",
    contacts: [
      {
        icon: <LinkedinIcon />,
        label: "Andreas LinkedIn",
        url: links.AndreasLinkedin,
      },
    ],
  },
];

export default function About() {
  return (
    <Section id="about">
      <H2 className="mb-12">We are Circulaire</H2>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1px_1fr] gap-12">
        <div className="flex flex-col gap-12 items-center md:items-start">
          {teamMembers.map((member, index) => (
            <ProfileCard
              key={index}
              name={member.name}
              role={member.role}
              imageSrc={member.imageSrc}
              contacts={member.contacts}
            />
          ))}
        </div>

        <div className="hidden lg:block h-full w-px bg-neutral-300 dark:bg-neutral-700" />

        <div className="flex flex-col justify-between gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 font-accent text-pretty">
              We are passionate about empowering businesses with data-driven
              pricing insights.
            </h3>
            <p className="text-base text-neutral-700 dark:text-neutral-400 text-pretty">
              With years of experience in eCommerce and AI-powered analytics, we
              founded <em>Circulaire</em> to help businesses optimize their
              pricing strategies in the second-hand market.
            </p>
          </div>

          <BookDemoButton />
        </div>
      </div>
    </Section>
  );
}
