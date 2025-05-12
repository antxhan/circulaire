// import ExternalLink from "../_components/ExternalLink";
// import { footerLinks } from "../_constants/navLinks";
// import FooterNavSection from "../_components/FooterNavSection";
// import Wrapper from "../_components/Wrapper";
// import Image from "next/image";

// // ("grid-template-columns: repeat(2, minmax(200px, 1fr))");
// // grid-cols-${footerLinks.length}
// // grid-template-columns: repeat(minmax(auto-fit, minmax(200px, 1fr)))

// export default function Footer() {
//   return (
//     <footer className="border-t border-neutral-300 pt-12">
//       <Wrapper className="flex flex-col gap-12">
//         <div className="flex gap-8 justify-between max-sm:flex-col max-sm:items-center @container">
//           <div className="h-[8rem] w-[8rem] bg-gray-500 aspect-square">
//             animation
//           </div>
//           <div
//             className={`border grid
//               grid-cols-[repeat(auto-fit,minmax(150px,1fr))]
//               @xl:grid-cols-[repeat(auto-fit,minmax(50px,1fr))] @xl:gap-x-8
//               gap-8 justify-items-end max-sm:justify-items-center w-full`}
//           >
//             {footerLinks.map(({ category, links }) => (
//               <FooterNavSection
//                 key={category}
//                 heading={category}
//                 links={links}
//               />
//             ))}
//           </div>
//         </div>
//         <div className="flex justify-between gap-8 flex-wrap max-sm:items-center max-sm:flex-col">
//           <div className="flex gap-2 flex-col max-sm:items-center">
//             <ExternalLink href="https://www.linkedin.com/company/circulaire">
//               <Image
//                 src="socials/linkedin.svg"
//                 alt="LinkedIn"
//                 width={24}
//                 height={24}
//               />
//             </ExternalLink>
//             <span>{`© ${new Date().getFullYear()} Circulaire. All rights reserved.`}</span>
//           </div>

//           <div className="w-32 bg-pink-400">Toggle</div>
//         </div>
//       </Wrapper>
//     </footer>
//   );
// }

import ExternalLink from "../_components/ExternalLink";
import { footerLinks } from "../_constants/navLinks";
import FooterNavSection from "../_components/FooterNavSection";
import Wrapper from "../_components/Wrapper";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-300 pt-12">
      <Wrapper className="flex flex-col gap-12">
        <div className="flex gap-8 justify-between max-sm:flex-col max-sm:items-center @container">
          <div className="h-[8rem] w-[8rem] bg-gray-500 aspect-square">
            animation
          </div>
          <div
            className={`border grid 
              grid-cols-[repeat(auto-fit,minmax(150px,1fr))]
              gap-8 justify-items-end max-sm:justify-items-center w-full sm:justify-end`}
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
          <div className="flex gap-2 flex-col max-sm:items-center">
            <ExternalLink href="https://www.linkedin.com/company/circulaire">
              <Image
                src="socials/linkedin.svg"
                alt="LinkedIn"
                width={24}
                height={24}
              />
            </ExternalLink>
            <span>{`© ${new Date().getFullYear()} Circulaire. All rights reserved.`}</span>
          </div>

          <div className="w-32 bg-pink-400">Toggle</div>
        </div>
      </Wrapper>
    </footer>
  );
}

{
  /* <div className="flex gap-8 justify-between max-sm:flex-col max-sm:items-center @container">
          <div className="h-[8rem] w-[8rem] bg-gray-500 aspect-square">
            animation
          </div>
          <div
            className={`border grid 
              grid-cols-[repeat(auto-fit,minmax(150px,1fr))] 
              @xl:grid-cols-[repeat(auto-fit,minmax(50px,1fr))] @xl:gap-x-8
              gap-8 justify-items-end max-sm:justify-items-center w-full`}
          >
            {footerLinks.map(({ category, links }) => (
              <FooterNavSection
                key={category}
                heading={category}
                links={links}
              />
            ))}
          </div>
        </div> */
}

// @xl:grid-cols-[repeat(2,))]
// @xl:grid-cols-[repeat(2,250px))]
// grid-cols-[repeat(auto-fit,minmax(min(100px,100%),1fr))]
