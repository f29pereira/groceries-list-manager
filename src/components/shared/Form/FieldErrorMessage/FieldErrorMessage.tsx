import type { FieldErrorMessageProps } from "./FieldErrorMessage.types";

/**
 * Returns a field error message
 *
 * Props are defined in {@link FieldErrorMessageProps}.
 */
export default function FieldErrorMessage({
  id,
  message,
}: FieldErrorMessageProps) {
  return (
    <span
      className="font-medium text-sm text-input-error 
                lg:text-base"
      id={id}
    >
      {message}
    </span>
  );
}
