import H2 from "./H2";
import Wrapper from "./Wrapper";

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
      <Wrapper fullWidthComponent={fullWidthComponent}>
        {title && <H2 text={title} />}
        {children}
      </Wrapper>
    </section>
  );
}
