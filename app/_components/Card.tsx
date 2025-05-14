export default function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`bg-white rounded-xl min-w-96 min-h-32 border border-neutral-300 dark:bg-neutral-900 dark:border-neutral-800 ${className}`}
    >
      {children}
    </div>
  );
}
