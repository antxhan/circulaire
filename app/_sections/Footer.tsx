import ExternalLink from "../_components/Links/ExternalLink";
import { footerLinks } from "../_constants/navLinks";
import FooterNavSection from "../_components/FooterNavSection";
import Wrapper from "../_components/Wrapper";
import ThemeToggle from "../_components/Toggle/ThemeToggle";
import LinkeinIcon from "../_icons/LinkeinIcon";
import FooterAnimation from "../_components/FooterAnimation";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-300 dark:border-neutral-700 py-12">
      <Wrapper className="flex flex-col gap-12">
        <div className="flex max-sm:flex-col-reverse gap-12 justify-between max-sm:items-center">
          <FooterAnimation size={122} />
          <div
            className="grid grid-cols-2 gap-y-8 gap-x-32 justify-items-center sm:justify-items-end"
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
              <LinkeinIcon className="transition duration-300 filter hover:text-blue-500" />
            </ExternalLink>
            <span className="max-sm:text-center text-balance">
              {`© ${new Date().getFullYear()} Circulaire. All rights reserved.`}
            </span>
          </div>
          <ThemeToggle />
        </div>
      </Wrapper>
    </footer>
  );
}
