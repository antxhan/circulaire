import Features from "./_sections/Features";
import HelloWorld from "./_sections/HelloWorld";
import { TailorMadeFor } from "./_sections/TailorMadeFor";
import HowItWorks from "./_sections/HowItWorks";

export default function Home() {
  return (
    <div>
      <HelloWorld />
      <Features />
      <HowItWorks />
      <TailorMadeFor />
    </div>
  );
}
