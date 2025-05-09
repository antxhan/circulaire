export default function Wrapper({
  fullWidthComponent,
  children,
}: {
  fullWidthComponent: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-screen-xl mx-auto ">
      <div className="max-w-screen-lg mx-auto px-4">{children}</div>
      {fullWidthComponent}
    </div>
  );
}
