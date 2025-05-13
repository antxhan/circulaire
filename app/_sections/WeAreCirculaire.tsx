import ProfileCard from "../_components/ProfileCard";
import BookDemoButton from "../_components/BookDemoButton";

export default function WeAreCirculaire() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-4xl md:text-5xl font-bold font-accent mb-12">
        We are Circulaire
      </h2>

      <div className="grid grid-cols-1 font-accent lg:grid-cols-[1fr_1px_1fr] gap-12">
        <div className="flex flex-col gap-12">
          <ProfileCard
            name="Emil Köpcke"
            role="Co-Founder & CEO"
            imageSrc="/people/emil.webp"
            contacts={[
              {
                icon: "/socials/linkedin.svg",
                label: "LinkedIn",
                url: "https://www.linkedin.com/in/emil-kopcke/",
              },
            ]}
          />
          <ProfileCard
            name="Andreas Nylander"
            role="Co-Founder & CPO"
            imageSrc="/people/andreas.webp"
            contacts={[
              {
                icon: "/socials/linkedin.svg",
                label: "LinkedIn",
                url: "https://www.linkedin.com/in/andreasnylander/",
              },
            ]}
          />
        </div>


        <div className="hidden lg:block h-full w-px bg-neutral-300 opacity-33" />


        <div className="flex flex-col justify-between gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 font-accent">
              We are passionate about empowering businesses with data-driven pricing insights.
            </h3>
            <p className="text-base text-neutral-700 leading-relaxed">
              With years of experience in eCommerce and AI-powered analytics, we founded <em>Circulaire</em> to help businesses optimize their pricing strategies in the second-hand market.
            </p>
          </div>

          <BookDemoButton />
        </div>
      </div>
    </section>
  );
}
