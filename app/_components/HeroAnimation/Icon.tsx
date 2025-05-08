export default function Icon({
  icon,
  className,
}: {
  icon: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`bg-blue rounded-[50%] w-12 h-12 flex items-center justify-center text-neutral-000 absolute ${className}`}
    >
      {icon}
    </div>
  );
}
