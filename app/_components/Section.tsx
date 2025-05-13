import Wrapper from "./Wrapper";

export default function Section({
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
      <Wrapper fullWidthComponent={fullWidthComponent}>{children}</Wrapper>
    </section>
  );
}
