import Image from "next/image";
import ExternalLink from "./Links/ExternalLink";

interface ContactDetails {
  icon: string;
  label: string;
  url: string;
}

interface ProfileCardProps {
  name: string;
  role: string;
  imageSrc: string;
  contacts: ContactDetails[];
}

export default function ProfileCard({
  name,
  role,
  imageSrc,
  contacts,
}: ProfileCardProps) {
  return (
    <div className="flex items-center gap-8">
      <div className="w-[150px] h-[150px] aspect-square rounded-full bg-neutral-300 dark:bg-neutral-700 overflow-hidden">
        <Image
          src={imageSrc}
          alt={name}
          width={150}
          height={150}
          className="object-cover w-full h-full"
        />
      </div>

      <div className="gap-2">
        <h3 className=" text-2xl font-bold font-accent">{name}</h3>
        <p className="italic">{role}</p>

        <div>
          {contacts.map((contact) => (
            <ExternalLink key={contact.label} href={contact.url}>
              <Image
                src={contact.icon}
                alt={contact.label}
                width={24}
                height={24}
              />
            </ExternalLink>
          ))}
        </div>
      </div>
    </div>
  );
}
