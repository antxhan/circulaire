import ExternalLink from "../_components/ExternalLink";
import FooterNavSection from "../_components/FooterNavSection";
import Wrapper from "../_components/Wrapper";
import Image from 'next/image';

export default function Footer() {
  return (
    <footer>
      <Wrapper className="flex justify-center">
        <div className="w-1/2 flex flex-col justify-between gap-8">
          <div className="h-[8rem] w-[8rem] bg-gray-500">animation</div>
          <div className="flex gap-2 flex-col">
            <ExternalLink 
              href="https://www.linkedin.com/company/circulaire"
            > 
              <Image
                src="socials/linkedin.svg"
                alt="LinkedIn"
                width={20}
                height={20}
                // style={{ filter: 'invert(1)' }} // add it when use dark mode
              />
            </ExternalLink>
            <span className="text-xs">{`© ${new Date().getFullYear()} Circulaire. All rights reserved.`}</span>
          </div>
        </div>
        <div className="w-1/2 flex flex-col justify-between gap-8">
          <div className="h-1/2 flex justify-end gap-40">
            <FooterNavSection
              heading="Product"
              links={[
                { href: "#features", label: "Features" },
                { href: "https://app.gocirculaire.com/login", label: "API" },
              ]}
            />
            <FooterNavSection
              heading="Company"
              links={[
                { href: "#about", label: "About" },
                { href: "https://journal.gocirculaire.com/circulaire-revolutionerar-prissattning-av-second-hand-produkter-med-ai-tar-in-kapital-och-starker-styrelsen/", label: "Press" },
              ]}
            />
          </div>
          <div className="h-1/2 flex justify-end align-bottom">
            <div className="w-1/2 bg-pink-400">
              Toggle
            </div> 
          </div>
        </div>
      </Wrapper>
    </footer>
  );
}
