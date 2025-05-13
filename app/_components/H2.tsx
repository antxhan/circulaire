export default function H2({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <h2 className={`font-accent font-bold text-5xl ${className}`}>
      {children}
    </h2>
  );
}
