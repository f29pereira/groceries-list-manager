import type { FormErrorMessageProps } from "./FormErrorMessage.types";
import { RiErrorWarningLine } from "@/assets/icons/icon";

/**
 * Renders a general form error message
 *
 * The warning icon features a pop-in animation
 */
export default function FormErrorMessage({ message }: FormErrorMessageProps) {
  return (
    <div
      className="w-full p-2
                border-2 border-solid border-input-error
                bg-red-50 dark:bg-transparent
                rounded-full"
    >
      <div className="flex justify-center items-center gap-2">
        <RiErrorWarningLine
          className="shrink-0 text-2xl text-input-error
                    motion-safe:animate-pop-in"
          aria-hidden="true"
        />
        <p
          className="font-medium text-sm text-input-error "
          aria-live="assertive"
        >
          {message}
        </p>
      </div>
    </div>
  );
}
