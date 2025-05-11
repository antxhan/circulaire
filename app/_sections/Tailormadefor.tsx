import { TextRotator } from "../_components/TextRotator";
import Wrapper from "../_components/Wrapper";

 const marketplaceTexts = ['Second Hand Shops', 'Professional Traders', 'Marketplaces'];
 
 export const Tailormadefor = () => (
     <Wrapper className="flex items-center gap-4">
         <h2 className="text-2xl font-bold text-black whitespace-nowrap leading-[80px] height-[80px]">
             Tailor-made for
         </h2>
         <TextRotator texts={marketplaceTexts} className="text-blue-600" />
    </Wrapper>
 );