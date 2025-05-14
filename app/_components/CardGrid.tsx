import Card from "./Card";

export default function CardGrid({
  className = "",
  contents,
}: {
  className?: string;
  contents: { order?: string; content: React.ReactNode }[];
}) {
  return (
    <div
      className="
          grid 
          grid-cols-[repeat(auto-fit,minmax(24rem,1fr))] 
          auto-rows-fr
          gap-4"
    >
      {contents.map((content, index) => (
        <Card
          key={index}
          className={`items-center gap-4 grid min-h-full p-4 ${className} ${
            content.order && content.order
          }`}
        >
          {content.content}
        </Card>
      ))}
    </div>
  );
}
