export default function Ring({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-full border-10 border-neutral-300 dark:border-neutral-700 border-dashed rounded-[50%] flex items-center justify-center absolute top-0 left-0">
      {children}
    </div>
  );
}
