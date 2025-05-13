import Card from "../_components/Card";
import AnalyticsIcon from "../_icons/AnalyticsIcon";
import DatabaseIcon from "../_icons/DatabaseIcon";
import PointerIcon from "../_icons/PointerIcon";
import Section from "../_components/Section";
import H2 from "../_components/H2";

export default function Features() {
  const features = [
    {
      icon: null,
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
    <Section className="py-12">
      <div className="text-left">
        <H2 text="Where pricing meets precision" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {features.map((feature, index) => (
          <Card
            key={index}
            className="w-full bg-neutral-100 text-neutral-900 p-6"
          >
            {feature.icon ? <feature.icon /> : null}
            <h3 className="font-semibold mt-4">
              {feature.title}
              {feature.label && (
                <span className="text-xs text-white bg-black px-1 ml-1">
                  {feature.label}
                </span>
              )}
            </h3>
            <p className="text-sm text-neutral-400">{feature.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
