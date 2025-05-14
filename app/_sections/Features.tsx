import AnalyticsIcon from "../_icons/AnalyticsIcon";
import DatabaseIcon from "../_icons/DatabaseIcon";
import PointerIcon from "../_icons/PointerIcon";
import Section from "../_components/Section";
import APIIcon from "../_icons/APIIcon";
import BellIcon from "../_icons/BellIcon";
import DollarIcon from "../_icons/DollarIcon";
import H2 from "../_components/H2";
import CardGrid from "../_components/CardGrid";

export default function Features() {
  const features = [
    {
      icon: <PointerIcon width={48} height={48} strokeWidth={1} />,
      bgColor: "bg-green",
      textColor: "text-green",
      title: "Easy-to-use interface",
      description:
        "Quickly get market insights for watches, handbags, clothing, sneakers, and accessories.",
    },
    {
      icon: <DatabaseIcon width={48} height={48} strokeWidth={1} />,
      bgColor: "bg-red",
      textColor: "text-red",
      title: "Plug & Play data sources",
      description:
        "Access niche sources and enable them easily for better market insights.",
    },
    {
      icon: <APIIcon width={48} height={48} strokeWidth={1} />,
      bgColor: "bg-teal",
      textColor: "text-teal",
      title: "Powerful APIs",
      description:
        "Don’t need our UI? No problem. Let our API integrate with your business flows.",
    },
    {
      icon: <AnalyticsIcon width={48} height={48} strokeWidth={1} />,
      bgColor: "bg-teal",
      textColor: "text-teal",
      title: "Analytics",
      description:
        "Get deeper insights into market data with our upcoming analytics platform.",
      label: "COMING SOON",
    },
    {
      icon: <BellIcon width={48} height={48} strokeWidth={1} />,
      bgColor: "bg-yellow",
      textColor: "text-yellow",
      title: "Pricing alerts",
      description:
        "Follow specific products and receive real-time pricing trend alerts.",
    },
    {
      icon: <DollarIcon width={48} height={48} strokeWidth={1} />,
      bgColor: "bg-green",
      textColor: "text-green",
      title: "Automated pricing",
      description:
        "Integrate with our API to automate pricing of your inventory, supporting all major ERPs.",
    },
  ];
  return (
    <Section wrapperClassName="flex flex-col gap-12" id="features">
      <H2 className="text-center md:text-left">
        Where pricing meets precision
      </H2>
      <CardGrid
        className="grid-cols-[min(100%,100px)_1fr] grid-rows-[20px_auto]"
        contents={features.map((feature) => (
          <>
            <div
              className={`
              rounded-full text-white ${feature.bgColor}
              aspect-square max-w-full
              flex items-center justify-center
              grid-rows-subgrid row-span-2
              
              `}
            >
              {feature.icon}
            </div>

            <div className="gap-2 grid grid-rows-subgrid row-span-2">
              <header className="flex items-center text-nowrap">
                <h3
                  className={`font-bold font-accent text-xl ${feature.textColor} dark:text-white`}
                >
                  {feature.title}
                </h3>
                {feature.label && (
                  <span className="text-xs font-bold bg-neutral-200 dark:bg-black py-1 px-2 rounded-full ml-auto">
                    {feature.label}
                  </span>
                )}
              </header>
              <p className="text-neutral-500 dark:text-white row-start-2 text-pretty">
                {feature.description}
              </p>
            </div>
          </>
        ))}
      />
    </Section>
  );
}
