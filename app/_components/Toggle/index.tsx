type ToggleItemProps = {
  id: string;
  content: React.ReactNode;
};

const getItemClasses = (isActive: boolean) => `
flex items-center justify-center whitespace-nowrap px-6 rounded-full !h-11 transition-all duration-200 ease-in-out cursor-pointer;
${
  isActive
    ? "bg-blue text-white"
    : "hover:bg-opacity-10 hover:text-blue-500 dark:hover:text-white"
}
`;

export const Toggle = ({
  items,
  currentValue,
  onChange,
  name,
  className = "",
}: {
  items: ToggleItemProps[];
  currentValue: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  className?: string;
}) => {
  return (
    <fieldset
      className={`flex p-2 items-center rounded-full font-accent font-bold w-fit bg-neutral-200 text-gray-800 border border-neutral-200 dark:bg-neutral-900 dark:text-neutral-600 dark:border-neutral-800 ${className}`}
    >
      {items.map((item) => (
        <button
          key={item.id}
          htmlFor={item.id}
          className={getItemClasses(currentValue === item.id)}
        >
          <input
            key={item.id}
            className="sr-only"
            onChange={onChange}
            type="radio"
            name={name}
            id={item.id}
            value={item.id}
            defaultChecked={currentValue === item.id}
          />
          {item.content}
        </button>
      ))}
    </fieldset>
  );
};
