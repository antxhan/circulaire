import Features from "./_sections/Features";
import HelloWorld from "./_sections/HelloWorld";
import Testimonials from "./_sections/Testimonials";
import Demo from "./_sections/Demo";
import { TailorMadeFor } from "./_sections/TailorMadeFor";
import WeAreCirculaire from "./_sections/WeAreCirculaire";

export default function Home() {
  return (
    <div>
      <HelloWorld />
      <Features />
      <Demo />
      <TailorMadeFor />
      <WeAreCirculaire />
      <Testimonials />
    </div>
  );
}
