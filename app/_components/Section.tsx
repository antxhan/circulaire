import Wrapper from "./Wrapper";

export default function Section({
  fullWidthComponent,
  className = "",
  id,
  wrapperClassName = "",
  children,
}: {
  title?: string;
  id?: string;
  fullWidthComponent?: React.ReactNode;
  className?: string;
  wrapperClassName?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      className={`py-28 md:scroll-mt-4 ${className}`}
      {...(id ? { id: id } : {})}
    >
      <Wrapper
        fullWidthComponent={fullWidthComponent}
        className={wrapperClassName}
      >
        {children}
      </Wrapper>
    </section>
  );
}
