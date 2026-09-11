import type { Dispatch, SetStateAction } from "react";

/**
 * Type for the MultiStepContext
 * @property currentStep - current step index state
 * @property currentStep - current step index state setter function
 * @property nextStep    - function to go to the next step
 * @property prevStep    - function to go back to a previous step
 */
export type MultiStepContextType = {
  currentStep: number;
  setCurrentStep: Dispatch<SetStateAction<number>>;
  nextStep: () => void;
  prevStep: () => void;
};
