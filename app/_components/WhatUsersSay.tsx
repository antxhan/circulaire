import Image from "next/image";
import Card from "./Card";

export default function WhatUsersSay() {
  return (
    <section className="flex flex-col md:flex-row justify-center gap-4 max-w-5xl mx-auto">
      <Card className="p-4 flex flex-col gap-2 max-w-sm border-none">
        <div className="flex items-center gap-2">
          <div className="w-[38px] h-[38px] rounded-full overflow-hidden">
            <Image
              src="/people/anna.webp"
              alt="Anna's profile picture"
              width={48}
              height={48}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="leading-[1]">
            <p
              className="text-[20px] font-semibold text-white mb-0"
              style={{ fontFamily: "var(--font-accent)" }}
            >
              Anna
            </p>
            <p className="text-[14px] font-extralight text-white mt-0">
              Buyer at pre-owned marketplace
            </p>
          </div>
        </div>
        <p className="text-[20px] italic font-light text-white leading-[1.1]">
          &quot;This platform has transformed our pricing strategies. Highly
          recommended!&quot;
        </p>
      </Card>

      <Card className="p-4 flex flex-col gap-2 max-w-sm border-none">
        <div className="flex items-center gap-2">
          <div className="w-[38px] h-[38px] rounded-full overflow-hidden">
            <Image
              src="/people/david.webp"
              alt="Sara's profile picture"
              width={48}
              height={48}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="leading-[1]">
            <p
              className="text-[20px] font-semibold text-white mb-0"
              style={{ fontFamily: "var(--font-accent)" }}
            >
              David
            </p>
            <p className="text-[14px] font-extralight text-white mt-0">
              E-commerce manager
            </p>
          </div>
        </div>
        <p className="text-[20px] italic font-light text-white leading-[1.1]">
          &quot;The insights from Circulaire have been a game-changer for our
          e-commerce sales.&quot;
        </p>
      </Card>

      <Card className="p-4 flex flex-col gap-2 max-w-sm border-none">
        <div className="flex items-center gap-2">
          <div className="w-[38px] h-[38px] rounded-full overflow-hidden">
            <Image
              src="/people/lorenz.webp"
              alt="Lorenz's profile picture"
              width={48}
              height={48}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="leading-[1]">
            <p
              className="text-[20px] font-semibold text-white mb-0"
              style={{ fontFamily: "var(--font-accent)" }}
            >
              Lorenz
            </p>
            <p className="text-[14px] font-extralight text-white mt-0">
              Head of Retail Operations
            </p>
          </div>
        </div>
        <p className="text-[20px] italic font-light text-white leading-[1.1]">
          &quot;Circulaire&apos;s data-driven approach has given us a
          competitive edge.&quot;
        </p>
      </Card>
    </section>
  );
}
