export default function Video({
  src,
  className,
  children,
}: {
  src: string;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className={`...`}>
      <video src={src} controls className="..." />
      {children && <div className="p-4">{children}</div>}
    </div>
  );
}
