import BookDemoButton from "../_components/BookDemoButton";
import ButtonLink from "../_components/ButtonLink";
import BlogUpdate from "../_components/BlogUpdate";
import HeroAnimation from "../_components/HeroAnimation";
import Section from "../_components/Section";
import H2 from "../_components/H2";
import { links } from "../_constants/links";
import VideoIcon from "../_icons/VideoIcon";

export default function HeroSection() {
  return (
    <Section>
      <div className="flex flex-col md:flex-row">
        <div className="flex-1 ml-6 sm:ml-12 lg:ml-20">
          <BlogUpdate text="Circulair March Update" link="#" />
          <H2 className="mt-12 leading-tight">
            The #1 Real-Time
            <br /> Pricing Insights Platform
          </H2>
          <ul className="mt-4 space-y-2 font-body list-disc list-outside pl-4 max-w-lg">
            <li>
              AI-powered accurate, modern and powerful platform for second-hand
              market data.
            </li>
            <li>Available through flexible APIs or user interface.</li>
            <li>
              Improve your margins and increase your sales. Become data-driven
              in your pricing decisions.
            </li>
          </ul>
          <div className="mt-8 flex flex-row gap-4">
            <BookDemoButton />
            <ButtonLink
              href={links.demo}
              text="How it Works"
              icon={<VideoIcon />}
              className="!bg-black border border-white/25"
            />
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center max-w-xs sm:max-w-md md:max-w-lg mr-8 overflow-hidden">
          <HeroAnimation />
        </div>
      </div>
    </Section>
  );
}
