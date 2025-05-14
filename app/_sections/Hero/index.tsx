import BookDemoButton from "../../_components/BookDemoButton";
import ButtonLink from "../../_components/Links/ButtonLink";
import BlogUpdate from "./BlogUpdate";
import HeroAnimation from "./HeroAnimation";
import Section from "../../_components/Section";
import { links } from "../../_constants/links";
import VideoIcon from "../../_icons/VideoIcon";

export default function HeroSection() {
  const bulletPoints = [
    "AI-powered accurate, modern and powerful platform for second-hand market data.",
    "Available through flexible APIs or user interface.",
    "Improve your margins and increase your sales. Become data-driven in your pricing decisions.",
  ];
  return (
    <Section
      className="max-md:pt-8"
      wrapperClassName="flex !max-w-6xl gap-16 justify-between 
      max-md:flex-col max-md:items-center
    "
    >
      <div className="flex flex-col max-md:items-center gap-12">
        <BlogUpdate text="Circulair March Update" link={links.update} />
        <div>
          <h1 className="font-accent font-bold text-5xl leading-tight max-md:text-center text-balance">
            The #1 Real-Time
            <br /> Pricing Insights Platform
          </h1>
          <ul className="space-y-2 font-body list-disc list-outside pl-4 max-w-lg">
            {bulletPoints.map((bulletPoint, index) => (
              <li key={index} className="text-pretty">
                {bulletPoint}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-4">
          <BookDemoButton />
          <ButtonLink
            href={links.demo}
            text="How it Works"
            icon={<VideoIcon />}
          />
        </div>
      </div>
      <div className="flex justify-center items-center max-sm:min-w-full sm:max-w-md md:max-w-lg overflow-hidden">
        <HeroAnimation />
      </div>
    </Section>
  );
}
