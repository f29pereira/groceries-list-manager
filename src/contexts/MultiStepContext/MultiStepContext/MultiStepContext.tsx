import { createContext } from "react";
import type { MultiStepContextType } from "./MultiStepContext.type";

export const MultiStepContext = createContext<MultiStepContextType | undefined>(
  undefined,
);
