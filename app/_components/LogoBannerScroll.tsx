export default function LogoBannerScroll({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`w-full overflow-hidden bg-white ${className}`}>
      <div className="flex animate-scroll whitespace-nowrap w-max">
        {Array(4)
          .fill(null)
          .map((_, i) => (
            <div key={i} className="flex">
              {children}
            </div>
          ))}
      </div>
    </section>
  );
}
