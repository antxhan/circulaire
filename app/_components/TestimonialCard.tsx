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
        <div className="w-9 h-9 rounded-full overflow-hidden">
          <Image
            src={imageSrc}
            alt={`${name}'s profile picture`}
            width={36}
            height={36}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="leading-[1]">
          <h6 className="text-xl font-bold font-accent">{name}</h6>
          <span className="text-sm font-normal">{profession}</span>
        </div>
      </div>
      <p className="text-xl italic leading-[1.1]">&quot;{comment}&quot;</p>
    </Card>
  );
}
