// Toggle.tsx
import type {ReactNode} from 'react';
 
type ToggleItemProps = {
    id: string;
    content: ReactNode;
};

type ToggleProps = {
    items?: ToggleItemProps[];
    activeId?: string;
    onChange?: (id: string) => void;
    darkMode?: boolean;
    className?: string;
};

export const Toggle = ({
    items = [],
    activeId,
    onChange,
    darkMode = false,
    className = ''
}: ToggleProps) => {
    const containerClasses = `
        flex items-center h-[72px] rounded-full p-1 w-fit
        ${darkMode ? 'bg-gray-800 text-white border border-gray-100' : 'bg-gray-100 text-gray-800'}
        ${className}
    `;

    const getItemClasses = (isActive: boolean) => `
        flex items-center justify-center px-6 h-full rounded-full transition-all duration-300 ease-in-out
        ${
            isActive
                ? darkMode
                    ? 'bg-blue-600 text-white'
                    : 'bg-blue-500 text-white'
                : 'hover:bg-opacity-10 hover:bg-gray-500'
        }
        cursor-pointer
    `;

    return (
        <div className={containerClasses}>
            {items.map(item => (
                <div
                    key={item.id}
                    className={getItemClasses(activeId === item.id)}
                    onClick={() => onChange?.(item.id)}
                >
                    {item.content}
                </div>
            ))}
        </div>
    );
};