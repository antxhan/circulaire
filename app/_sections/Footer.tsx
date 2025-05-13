import ExternalLink from "../_components/ExternalLink";
import { footerLinks } from "../_constants/navLinks";
import FooterNavSection from "../_components/FooterNavSection";
import Wrapper from "../_components/Wrapper";
import Image from "next/image";
import { ThemeToggle } from "../_components/Toggle/ThemeToggle";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-300 pt-12 pb-12">
      <Wrapper className="flex flex-col gap-12">
        <div className="flex max-sm:flex-col-reverse gap-12 justify-between max-sm:items-center">
          <div className="h-[8rem] w-[8rem] bg-gray-500 aspect-square">
            animation
          </div>
          <div
            className={`flex flex-wrap
              gap-x-32 gap-y-8 justify-center w-full sm:justify-end`}
          >
            {footerLinks.map(({ category, links }) => (
              <FooterNavSection
                key={category}
                heading={category}
                links={links}
              />
            ))}
          </div>
        </div>
        <div className="flex justify-between gap-8 flex-wrap max-sm:items-center max-sm:flex-col">
          <div className="flex gap-4 flex-col max-sm:items-center">
            <ExternalLink
              href="https://www.linkedin.com/company/circulaire"
              className="w-max"
            >
              <Image
                src="socials/linkedin.svg"
                alt="LinkedIn"
                width={24}
                height={24}
                className="transition duration-300 filter hover:filter-[brightness(0)_saturate(100%)_invert(19%)_sepia(99%)_saturate(7499%)_hue-rotate(203deg)_brightness(99%)_contrast(101%)]"
              />
            </ExternalLink>
            <span className="max-sm:text-center text-balance">{`© ${new Date().getFullYear()} Circulaire. All rights reserved.`}</span>
          </div>

          <ThemeToggle/>
        </div>
      </Wrapper>
    </footer>
  );
}
