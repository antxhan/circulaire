import Card from "./Card";
import AnalyticsIcon from "../_icons/AnalyticsIcon";
import APIIcon from "../_icons/APIIcon";
import BellIcon from "../_icons/BellIcon";
import CalenderIcon from "../_icons/CalendarIcon";
import ComputerIcon from "../_icons/ComputerIcon";
import DatabasedIcon from "../_icons/DatabaseIcon";
import DollarIcon from "../_icons/DollarIcon";
import ExternalLinkIcon from "../_icons/ExternalLinkIcon";
import MoonIcon from "../_icons/MoonIcon";
import PointerIcon from "../_icons/PointerIcon";
import RefreshIcon from "../_icons/RefreshIcon";
import SearchIcon from "../_icons/SearchIcon";
import SunIcon from "../_icons/SunIcon";

export default function CardsSection() {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold mb-8">Where pricing meets precision</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <ComputerIcon />
          <h3 className="font-semibold mt-4">Easy-to-use interface</h3>
          <p className="text-sm text-gray-600">
            Quickly get market insights for watches, handbags, clothing,
            sneakers, and accessories.
          </p>
        </Card>

        <Card>
          <DatabasedIcon />
          <h3 className="font-semibold mt-4">Plug & Play data sources</h3>
          <p className="text-sm text-gray-600">
            Access niche sources and enable them easily for better market
            insights.
          </p>
        </Card>

        <Card>
          <APIIcon />
          <h3 className="font-semibold mt-4">Powerful APIs</h3>
          <p className="text-sm text-gray-600">
            Don’t need our UI? No problem. Let our API integrate with your
            business flows.
          </p>
        </Card>

        <Card>
          <AnalyticsIcon />
          <h3 className="font-semibold mt-4">
            Analytics{" "}
            <span className="text-xs text-white bg-black px-1 ml-1">
              Coming soon
            </span>
          </h3>
          <p className="text-sm text-gray-600">
            Get deeper insights into market data with our upcoming analytics
            platform.
          </p>
        </Card>

        <Card>
          <BellIcon />
          <h3 className="font-semibold mt-4">Pricing alerts</h3>
          <p className="text-sm text-gray-600">
            Follow specific products and receive real-time pricing trend alerts.
          </p>
        </Card>

        <Card>
          <PointerIcon />
          <h3 className="font-semibold mt-4">Automated pricing</h3>
          <p className="text-sm text-gray-600">
            Integrate with our API to automate pricing of your inventory,
            supporting all major ERPs.
          </p>
        </Card>
      </div>
    </section>
  );
}
