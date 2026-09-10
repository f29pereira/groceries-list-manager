import type { SubmitButtonProps } from "./SubmitButton.types";
import PillButton from "@/components/ui/PillButton/PillButton";

/**
 * Renders a form submit pill button
 */
export default function SubmitButton({ children }: SubmitButtonProps) {
  return (
    <PillButton
      styles="bg-brand
                      shadow-lg shadow-green-600/50 
                      hover:bg-brand-hover"
    >
      {children}
    </PillButton>
  );
}
