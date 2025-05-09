import React from "react";

interface ReusableProps {
  children?: React.ReactNode;
  className?: string;
}

const Reusable: React.FC<ReusableProps> = ({ children, className = "" }) => {
  return (
    <div
      className={`bg-white rounded-xl w-[360px] h-[120px] shadow-sm ${className}`}
    >
      {children}
    </div>
  );
};

export default Reusable;
