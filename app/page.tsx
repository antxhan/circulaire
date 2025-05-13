import HelloWorld from "./_sections/HelloWorld";
import { TailorMadeFor } from "./_sections/TailorMadeFor";
import WeAreCirculaire from "./_sections/WeAreCirculaire";

export default function Home() {
  return (
    <div>
      <HelloWorld />
      <TailorMadeFor />
      <WeAreCirculaire />
    </div>
  );
}
