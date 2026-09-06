import type { PasswordRuleIconProps } from "./PasswordRuleIcon.types";
import { IoMdCheckmark, IoIosClose } from "@/assets/icons/icon";

/**
 * Renders an icon for a password rule
 *
 * Displays:
 * - A checkmark icon if the rule is valid
 * - A cross icon if the rule is invalid
 */
export default function PasswordRuleIcon({
  isRuleValid,
}: PasswordRuleIconProps) {
  return (
    <>
      {isRuleValid ? (
        <IoMdCheckmark className="text-xl text-brand" />
      ) : (
        <IoIosClose className="text-2xl text-input-error" />
      )}
    </>
  );
}
