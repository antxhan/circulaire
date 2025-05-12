export default function Wrapper({
  fullWidthComponent,
  children,
  className = "",
}: {
  fullWidthComponent?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`max-w-screen-xl mx-auto`}>
      <div className={`max-w-screen-xl mx-auto px-4 ${className}`}>
        {children}
      </div>
      {fullWidthComponent}
    </div>
  );
}
