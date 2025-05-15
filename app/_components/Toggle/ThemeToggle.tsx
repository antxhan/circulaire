"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Toggle } from ".";
import ComputerIcon from "@/app/_icons/ComputerIcon";
import SunIcon from "@/app/_icons/SunIcon";
import MoonIcon from "@/app/_icons/MoonIcon";
import MobileIcon from "@/app/_icons/MobileIcon";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleResize = () => {
    setIsMobile(window.innerWidth < 640);
  };

  useEffect(() => {
    setMounted(true);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTheme(e.currentTarget.value);
  };

  const items = [
    {
      id: "system",
      content: isMobile ? <MobileIcon /> : <ComputerIcon />,
    },
    {
      id: "light",
      content: <SunIcon />,
    },
    {
      id: "dark",
      content: <MoonIcon />,
    },
  ];

  return (
    <Toggle
      items={items}
      currentValue={theme || "system"}
      name="theme"
      onChange={handleToggle}
    />
  );
}
