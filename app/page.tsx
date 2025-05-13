import Features from "./_sections/Features";
import HelloWorld from "./_sections/HelloWorld";
import HowItWorks from "./_sections/HowItWorks";
import { TailorMadeFor } from "./_sections/TailorMadeFor";
import WeAreCirculaire from "./_sections/WeAreCirculaire";

export default function Home() {
  return (
    <div>
      <HelloWorld />
      <Features />
      <HowItWorks />
      <TailorMadeFor />
      <WeAreCirculaire />
    </div>
  );
}
