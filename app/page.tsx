import HelloWorld from "./_sections/HelloWorld";
import LogoBannerScroll from "./_components/LogoBannerScroll";
import Image from "next/image";

export default function Home() {
  const companyIcons = [
    "/companies/bigcartel.png",
    "/companies/claude.svg",
    "/companies/gemini.png",
    "/companies/openai.svg",
    "/companies/shopify.svg",
    "/companies/square.svg",
    "/companies/woo.svg",
  ];
  return (
    <div>
      <HelloWorld />
      <LogoBannerScroll>
        {companyIcons.map((src, index) => {
          const isGemini = src.includes("gemini");
          const isOpenAI = src.includes("openai");
          const isBigCartel = src.includes("bigcartel");

          return (
            <div
              key={index}
              className={`flex items-center justify-center w-[120px] h-[60px] overflow-hidden ${
                isOpenAI || isGemini ? "" : "mr-8"
              }`}
            >
              <Image
                src={src}
                alt={`Company logo ${index + 1}`}
                width={100}
                height={40}
                className={`object-contain aspect-[3/1] ${
                  isGemini ? "-mt-3" : ""
                } ${isOpenAI ? "scale-140" : ""}
                ${isBigCartel ? "mt-1" : ""}
                `}
                style={{ display: "inline-block", verticalAlign: "middle" }}
              />
            </div>
          );
        })}
      </LogoBannerScroll>
    </div>
  );
}
