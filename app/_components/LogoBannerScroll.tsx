import Image from "next/image";

export default function AnimateScrollHorizontal({
  className,
}: {
  className?: string;
}) {
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
    <section className={`w-full overflow-hidden bg-white ${className}`}>
      <div
        className="flex animate-scroll whitespace-nowrap w-max"
        style={{ animation: "var(--animate-scroll-horizontal)" }}
      >
        {Array(4)
          .fill(null)
          .map((_, i) => (
            <div key={i} className="flex gap-8">
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
                      } ${isOpenAI ? "scale-150" : ""}
                      ${isBigCartel ? "mt-1 ml-6" : ""}`}
                      style={{
                        display: "inline-block",
                        verticalAlign: "middle",
                      }}
                    />
                  </div>
                );
              })}
            </div>
          ))}
      </div>
    </section>
  );
}
