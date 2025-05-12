import Card from "../_components/Card";
import AnalyticsIcon from "../_icons/AnalyticsIcon";
import DatabasedIcon from "../_icons/DatabaseIcon";
import PointerIcon from "../_icons/PointerIcon";
import Section from "../_components/Section";

export default function CardsSection() {
  const features = [
    {
      icon: null,
      title: "Easy-to-use interface",
      description:
        "Quickly get market insights for watches, handbags, clothing, sneakers, and accessories.",
    },
    {
      icon: DatabasedIcon,
      title: "Plug & Play data sources",
      description:
        "Access niche sources and enable them easily for better market insights.",
    },
    {
      icon: null,
      title: "Powerful APIs",
      description:
        "Don’t need our UI? No problem. Let our API integrate with your business flows.",
    },
    {
      icon: AnalyticsIcon,
      title: "Analytics",
      description:
        "Get deeper insights into market data with our upcoming analytics platform.",
      label: "Coming soon",
    },
    {
      icon: null,
      title: "Pricing alerts",
      description:
        "Follow specific products and receive real-time pricing trend alerts.",
    },
    {
      icon: PointerIcon,
      title: "Automated pricing",
      description:
        "Integrate with our API to automate pricing of your inventory, supporting all major ERPs.",
    },
  ];

  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold mb-8 text-[var(--clr-neutral-900)]">
        Where pricing meets precision
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {" "}
        {features.map((feature, index) => (
          <Card
            key={index}
            className="bg-[var(--clr-neutral-100)] text-[var(--clr-neutral-900)] p-6 rounded-lg shadow-lg" // اضافه کردن padding، border-radius و shadow برای زیبایی بیشتر
          >
            {feature.icon && <feature.icon />}
            <h3 className="font-semibold mt-4">
              {feature.title}
              {feature.label && (
                <span className="text-xs text-white bg-black px-1 ml-1">
                  {feature.label}
                </span>
              )}
            </h3>
            <p className="text-sm text-[var(--clr-neutral-400)]">
              {feature.description}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
}
