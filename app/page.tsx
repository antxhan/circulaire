import Features from "./_sections/Features";
import Testimonials from "./_sections/Testimonials";
import Demo from "./_sections/Demo";
import { TailorMadeFor } from "./_sections/TailorMadeFor";
import WeAreCirculaire from "./_sections/WeAreCirculaire";
import Hero from "./_sections/Hero";

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <Demo />
      <TailorMadeFor />
      <WeAreCirculaire />
      <Testimonials />
    </div>
  );
}
