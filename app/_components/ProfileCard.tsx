import Image from "next/image";
import Link from "next/link";

interface ProfileCardProps {
  name: string;
  role: string;
  imageSrc: string;
  linkedinUrl: string;
}

export default function ProfileCard({
  name,
  role,
  imageSrc,
  linkedinUrl,
}: ProfileCardProps) {
  return (
    <div className="w-[444px] h-[332px] flex items-start space-x-6">
      <div className="w-[150px] h-[150px] rounded-full bg-neutral-300 overflow-hidden">
        <Image
          src={imageSrc}
          alt={name}
          width={150}
          height={150}
          className="object-cover w-full h-full"
        />
      </div>

      <div className="w-[212px] h-[81px] pt-1">
        <h3 className="text-black text-2xl font-bold font-['League_Spartan']">
          {name}
        </h3>
        <p className="text-black text-base font-normal font-['Inter'] italic">
          {role}
        </p>
        <Link
          href={linkedinUrl}
          target="_blank"
          className="inline-block mt-2"
        >
          <Image src="/linkedin.svg" alt="LinkedIn" width={24} height={24} />
        </Link>
      </div>
    </div>
  );
}
