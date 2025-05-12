import Section from "../_components/Section";
import { TextRotator } from "../_components/TextRotator";

 const customerCategories = ['Second Hand Shops', 'Professional Traders', 'Marketplaces', ' Insurance Companies', 'Pawn Shops', 'Personal Shoppers', 'Auction Houses'];
 
 export const TailorMadeFor = () => (
     <Section>
         <h2 className="text-2xl font-bold text-black whitespace-nowrap leading-[80px] height-[80px]">
             Tailor-made for
         </h2>
         <TextRotator texts={customerCategories} className="text-blue-600" />
    </Section>
 );