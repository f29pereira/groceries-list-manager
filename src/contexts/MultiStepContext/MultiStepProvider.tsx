import type { ReactChildrenType } from "@/types/common.types";
import { useState } from "react";
import { MultiStepContext } from "./MultiStepContext/MultiStepContext";

/**
 * Provides context for a multi-step
 */
export default function MultiStepProvider({ children }: ReactChildrenType) {
  const [currentStep, setCurrentStep] = useState(0);

  /**
   * Goes to the next step
   */
  const nextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  /**
   * Goes to the previous step
   */
  const prevStep = () => {
    if (currentStep === 0) {
      return;
    }

    setCurrentStep((prev) => prev - 1);
  };

  return (
    <MultiStepContext
      value={{ currentStep, setCurrentStep, nextStep, prevStep }}
    >
      {children}
    </MultiStepContext>
  );
}
