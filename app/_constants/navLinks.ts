const navLinks = {
  about: { label: "About", href: "#about" },
  api: {
    label: "API",
    href: "https://app.gocirculaire.com/login",
  },
  features: { label: "Features", href: "#features" },
  press: {
    label: "Press",
    href: "https://journal.gocirculaire.com/circulaire-revolutionerar-prissattning-av-second-hand-produkter-med-ai-tar-in-kapital-och-starker-styrelsen/",
  },
} as const;

export const headerLinks = (["features", "about", "api"] as const).map(
  (key: keyof typeof navLinks) => navLinks[key]
);

export const footerLinks = (
  [
    { category: "Product", links: ["features", "api"] },
    { category: "Company", links: ["about", "press"] },
    // { category: "Company2", links: ["about", "press"] },
    // { category: "Company3", links: ["about", "press"] },
    // { category: "Company4", links: ["about", "press"] },
    // { category: "Company5", links: ["about", "press"] },
  ] as const
).map(({ category, links }) => ({
  category,
  links: links.map((key) => navLinks[key]),
}));
