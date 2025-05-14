import ProfileCard from "../_components/ProfileCard";
import BookDemoButton from "../_components/BookDemoButton";
import Section from "../_components/Section";
import H2 from "../_components/H2";
import { links } from "../_constants/links";
import LinkeinIcon from "../_icons/LinkeinIcon";

const teamMembers = [
  {
    name: "Emil",
    role: "Co-Founder & CEO",
    imageSrc: "/people/emil.webp",
    contacts: [
      {
        icon: <LinkeinIcon />,
        label: "LinkedIn",
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
        icon: <LinkeinIcon />,
        label: "LinkedIn",
        url: links.AndreasLinkedin,
      },
    ],
  },
];

export default function WeAreCirculaire() {
  return (
    <Section>
      <H2 className="mb-12">We are Circulaire</H2>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1px_1fr] gap-12">
        <div className="flex flex-col gap-12">
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
