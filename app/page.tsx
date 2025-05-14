import Features from "./_sections/Features";
import Testimonials from "./_sections/Testimonials";
import Demo from "./_sections/Demo";
import { TailorMadeFor } from "./_sections/TailorMadeFor";
import WeAreCirculaire from "./_sections/WeAreCirculaire";
import Hero from "./_sections/Hero";
import LogoBannerSection from "./_sections/LogoBanner";

export default function Home() {
  return (
    <div>
      <Hero />
      <TailorMadeFor />
      <Features />
      <Demo />
      <Testimonials />
      <LogoBannerSection />
      <WeAreCirculaire />
    </div>
  );
}
