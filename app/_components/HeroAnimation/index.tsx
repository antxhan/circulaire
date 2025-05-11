import Orbit from "./Orbit";
import Ring from "./Ring";

export default function HeroAnimation() {
  return (
    <div className="w-96 max-sm:[width:calc(100%-4rem)] aspect-square relative m-8">
      <Ring>
        <span className="font-bold font-accent text-2xl text-center">
          Re-evaluate, <br />
          Re-price, <br />
          Re-sell.
        </span>
      </Ring>
      <Orbit />
    </div>
  );
}
