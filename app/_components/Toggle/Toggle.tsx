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
flex items-center justify-center px-6 h-full rounded-full transition-all duration-200 ease-in-out cursor-pointer
${
    isActive
        ? 'bg-blue-500 text-white dark:bg-blue-600'
        : 'hover:bg-opacity-10 hover:bg-gray-500'
}
`;

export const Toggle = ({
    items,
    activeId,
    onClick,
    className = ''
}: ToggleProps) => {
    return (
        <div className={`flex items-center h-[72px] rounded-full p-1 w-fit bg-gray-100 text-gray-800 border border-gray-100 dark:bg-gray-800 dark:text-white dark:border-gray-100 ${className}`}>
            {items.map(item => (
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