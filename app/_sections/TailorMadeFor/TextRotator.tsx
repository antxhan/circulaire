"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type TextRotatorProps = {
  texts: string[];
  interval?: number;
  className?: string;
};

const variants = {
  enter: { y: -96, opacity: 0, scale: 0.9 },
  next: { y: -36, opacity: 0.5, scale: 0.9 },
  current: { y: 0, opacity: 1, scale: 1, x: 0 },
  prev: { y: 36, opacity: 0.5, scale: 0.9 },
  exit: { y: 96, opacity: 0, scale: 0.9 },
};

const transition = {
  type: "spring",
  stiffness: 100,
  damping: 30,
  mass: 0.8,
  duration: 0.8,
};

export const TextRotator = ({
  texts,
  interval = 2000,
  className = "",
}: TextRotatorProps) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, interval);

    return () => clearInterval(timer);
  }, [interval, texts.length]);

  const prevIndex = (index - 1 + texts.length) % texts.length;
  const nextIndex = (index + 1) % texts.length;

  const cycle = Date.now();

  return (
    <div
      className={`relative w-full h-32 flex items-center overflow-hidden ${className} max-lg:justify-center`}
    >
      <AnimatePresence mode="sync">
        {[
          {
            id: `prev-${cycle}`,
            text: texts[prevIndex],
            position: "prev",
          },
          {
            id: `current-${cycle}`,
            text: texts[index],
            position: "current",
          },
          {
            id: `next-${cycle}`,
            text: texts[nextIndex],
            position: "next",
          },
        ].map((item) => (
          <motion.div
            key={item.id}
            className="absolute"
            initial="enter"
            animate={item.position}
            exit="exit"
            variants={variants}
            transition={transition}
          >
            {item.position === "current" ? (
              <div className="text-5xl font-bold text-blue font-accent text-center lg:text-left">
                {item.text}
              </div>
            ) : (
              <div className="text-4xl font-semibold text-neutral-400 dark:text-neutral-200 font-accent text-center lg:text-left">
                {item.text}
              </div>
            )}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};
