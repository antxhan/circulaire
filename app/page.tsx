import Features from "./_sections/Features";
import Testimonials from "./_sections/Testimonials";
import Demo from "./_sections/Demo";
import { TailorMadeFor } from "./_sections/TailorMadeFor";
import About from "./_sections/About";
import Hero from "./_sections/Hero";
import Integrations from "./_sections/Integrations";

export const metadata = {
  title: "Circulaire",
  description: "AI-powered pricing support for second-hand sellers. Access real-time data via API or UI to increase margins and simplify pricing decisions.",
};

export default function Home() {
  return (
    <div>
      <Hero />
      <TailorMadeFor />
      <Features />
      <Demo />
      <Testimonials />
      <Integrations />
      <About />
    </div>
  );
}
