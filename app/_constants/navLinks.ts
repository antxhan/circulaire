import { links } from "./links";

const navLinks = {
  about: { label: "About", href: links.about },
  api: {
    label: "API",
    href: links.api,
  },
  features: { label: "Features", href: links.features },
  press: {
    label: "Press",
    href: links.press,
  },
} as const;

export const headerLinks = (["features", "about", "api"] as const).map(
  (key: keyof typeof navLinks) => navLinks[key]
);

export const footerLinks = (
  [
    { category: "Product", links: ["features", "api"] },
    { category: "Company", links: ["about", "press"] },
  ] as const
).map(({ category, links }) => ({
  category,
  links: links.map((key) => navLinks[key]),
}));
