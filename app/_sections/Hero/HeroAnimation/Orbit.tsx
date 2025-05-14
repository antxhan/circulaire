import SearchIcon from "@/app/_icons/SearchIcon";
import Icon from "./Icon";
import RefreshIcon from "@/app/_icons/RefreshIcon";
import DollarIcon from "@/app/_icons/DollarIcon";

export default function Orbit() {
  return (
    <div className="absolute w-full h-full animate-orbit">
      <div className="relative w-full h-full">
        <div className="rotate-0 w-full h-full absolute">
          <Icon
            icon={<RefreshIcon width={30} height={30} />}
            className="top-0 left-[50%] translate-[-50%] animate-counter-orbit rotate-[-0deg]"
          />
        </div>
        <div className="rotate-120 w-full h-full absolute">
          <Icon
            icon={<DollarIcon width={30} height={30} />}
            className="top-0 left-[50%] translate-[-50%] animate-counter-orbit rotate-[-120deg]"
          />
        </div>
        <div className="rotate-240 absolute w-full h-full">
          <Icon
            icon={<SearchIcon width={30} height={30} />}
            className="top-0 left-[50%] translate-[-50%] animate-counter-orbit rotate-[-240deg]"
          />
        </div>
      </div>
    </div>
  );
}
