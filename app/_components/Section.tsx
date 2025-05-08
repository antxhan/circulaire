import H2 from "./H2";

export default function Section({
  title,
  fullWidthComponent,
  children,
}: {
  title?: string;
  fullWidthComponent?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section className="py-16">
      <div className="max-w-screen-xl mx-auto ">
        <div className="max-w-screen-lg mx-auto px-4">
          {title && <H2 text={title} />}
          {children}
        </div>
        {fullWidthComponent}
      </div>
    </section>
  );
}
