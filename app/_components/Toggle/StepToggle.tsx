"use client";

import { useState } from "react";
import { Toggle } from ".";

const steps = [
  { id: "1", content: "1. Step" },
  { id: "2", content: "2. Step" },
  { id: "3", content: "3. Step" },
];

export const StepToggle = () => {
  const [currentStep, setCurrentStep] = useState("1");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentStep(e.currentTarget.value);
  };

  return (
    <Toggle
      items={steps}
      currentValue={currentStep}
      onChange={handleChange}
      name="video"
    />
  );
};
