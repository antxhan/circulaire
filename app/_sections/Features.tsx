import Card from "../_components/Card";
import AnalyticsIcon from "../_icons/AnalyticsIcon";
import DatabaseIcon from "../_icons/DatabaseIcon";
import PointerIcon from "../_icons/PointerIcon";
import Section from "../_components/Section";
import APIIcon from "../_icons/APIIcon";
import BellIcon from "../_icons/BellIcon";
import DollarIcon from "../_icons/DollarIcon";
import H2 from "../_components/H2";

export default function Features() {
  const features = [
    {
      icon: PointerIcon,
      title: "Easy-to-use interface",
      description:
        "Quickly get market insights for watches, handbags, clothing, sneakers, and accessories.",
    },
    {
      icon: DatabaseIcon,
      title: "Plug & Play data sources",
      description:
        "Access niche sources and enable them easily for better market insights.",
    },
    {
      icon: APIIcon,
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
      icon: BellIcon,
      title: "Pricing alerts",
      description:
        "Follow specific products and receive real-time pricing trend alerts.",
    },
    {
      icon: DollarIcon,
      title: "Automated pricing",
      description:
        "Integrate with our API to automate pricing of your inventory, supporting all major ERPs.",
    },
  ];

  return (
    <Section className="py-12">
      <H2 className="text-center">Where pricing meets precision</H2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {features.map((feature) => (
          <Card
            key={feature.title}
            className="w-full bg-neutral-100 text-neutral-900 p-6"
          >
            <span className="inline-block mb-2">
              <feature.icon className="w-7 h-7 text-primary-600" />
            </span>
            <h3 className="font-semibold mt-4 flex items-center gap-2">
              {feature.title}
              {feature.label && (
                <span className="text-xs rounded bg-black text-white px-2 py-0.5 ml-2">
                  {feature.label}
                </span>
              )}
            </h3>
            <p className="text-sm text-neutral-500 mt-2">
              {feature.description}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
