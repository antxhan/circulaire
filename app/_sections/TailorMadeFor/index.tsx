import H2 from "../../_components/H2";
import Section from "../../_components/Section";
import { TextRotator } from "./TextRotator";

const customerCategories = [
  "Second Hand Shops",
  "Professional Traders",
  "Marketplaces",
  "Insurance Companies",
  "Pawn Shops",
  "Personal Shoppers",
  "Auction Houses",
];

export const TailorMadeFor = () => (
  <Section>
    <div
      className="
      grid grid-cols-1 items-center gap-4
      lg:grid-cols-2
    "
    >
      <H2 className="text-center lg:text-right">Tailor-made for</H2>
      <TextRotator texts={customerCategories} />
    </div>
  </Section>
);
