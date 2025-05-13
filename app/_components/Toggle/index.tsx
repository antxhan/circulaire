type ToggleItemProps = {
  id: string;
  content: React.ReactNode;
};

type ToggleProps = {
  items: ToggleItemProps[];
  activeId: string;
  onClick: (id: string) => void;
  className?: string;
};

const getItemClasses = (isActive: boolean) => `
flex items-center justify-center px-6 rounded-full !h-11 transition-all duration-200 ease-in-out cursor-pointer
${
  isActive
    ? "bg-blue text-white"
    : "hover:bg-opacity-10 hover:text-blue-500 dark:hover:text-white"
}
`;

export const Toggle = ({
  items,
  activeId,
  onClick,
  className = "",
}: ToggleProps) => {
  return (
    <div
      className={`flex p-2 items-center rounded-full font-accent font-bold w-fit bg-neutral-200 text-gray-800 dark:border dark:bg-neutral-000 dark:text-neutral-600 dark:border-neutral-700 ${className}`}
    >
      {items.map((item) => (
        <button
          key={item.id}
          type="button"
          className={getItemClasses(activeId === item.id)}
          onClick={() => onClick(item.id)}
        >
          {item.content}
        </button>
      ))}
    </div>
  );
};
