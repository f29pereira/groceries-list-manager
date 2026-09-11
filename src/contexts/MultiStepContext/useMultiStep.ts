import { MultiStepContext } from "./MultiStepContext/MultiStepContext";
import { useContext } from "react";

/**
 * Custom Hook: allows access to the MultiStepContext
 */
export function useMultiStep() {
  const context = useContext(MultiStepContext);

  if (!context) {
    throw new Error("useMultiStep must be used within a MultiStepProvider");
  }

  return context;
}
