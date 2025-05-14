export default function H2({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <h2
      className={`text-center md:text-left font-accent font-bold text-5xl text-balance ${className}`}
    >
      {children}
    </h2>
  );
}
