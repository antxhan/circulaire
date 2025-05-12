import Image from "next/image";
import Card from "./Card";

export default function TestimonialCard({
  name,
  profession,
  comment,
  imageSrc,
}: {
  name: string;
  profession: string;
  comment: string;
  imageSrc: string;
}) {
  return (
    <Card className="p-4 flex flex-col gap-2 max-w-sm border-none">
      <div className="flex items-center gap-2">
        <div className="w-[38px] h-[38px] rounded-full overflow-hidden">
          <Image
            src={imageSrc}
            alt={`${name}'s profile picture`}
            width={38}
            height={38}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="leading-[1]">
          <p
            className="text-[20px] font-semibold text-white mb-0"
            style={{ fontFamily: "var(--font-accent)" }}
          >
            {name}
          </p>
          <p className="text-[14px] font-extralight text-white mt-0">
            {profession}
          </p>
        </div>
      </div>
      <p className="text-[20px] italic font-light text-white leading-[1.1]">
        &quot;{comment}&quot;
      </p>
    </Card>
  );
}
