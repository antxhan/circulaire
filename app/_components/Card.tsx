export default function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`bg-neutral-000 rounded-xl min-w-96 min-h-32 border border-neutral-300 ${className}`}
    >
      {children}
    </div>
  );
}
