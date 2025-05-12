import H2 from "./H2";
import Wrapper from "./Wrapper";

export default function Section({
  title,
  fullWidthComponent,
  className = "",
  children,
}: {
  title?: string;
  fullWidthComponent?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section className={`py-16 ${className}`}>
      <Wrapper fullWidthComponent={fullWidthComponent}>
        {title && <H2 text={title} />}
        {children}
      </Wrapper>
    </section>
  );
}
