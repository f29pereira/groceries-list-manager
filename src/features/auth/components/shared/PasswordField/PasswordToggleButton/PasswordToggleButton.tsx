import { useTranslation } from "react-i18next";
import type { PasswordToggleButtonProps } from "./PasswordToggleButton.types";
import { FaRegEye, FaRegEyeSlash } from "@/assets/icons/icon";

/**
 * Renders a password toggle button
 */
export default function PasswordToggleButton({
  isToggled,
  toggle,
}: PasswordToggleButtonProps) {
  // Translation
  const { t } = useTranslation();

  return (
    <button
      className="absolute top-1/2 right-4 -translate-y-1/2 
                rounded-full
                cursor-pointer 
                text-xl text-brand hover:text-brand-hover
                focus-visible:focus-ring focus-visible:outline-offset-3
                theme-transition"
      type="button"
      onClick={toggle}
      aria-label={
        isToggled
          ? t("forms.auth.password.toggle.dont-show-label")
          : t("forms.auth.password.toggle.show-label")
      }
    >
      {isToggled ? (
        <FaRegEye className="" aria-hidden="true" />
      ) : (
        <FaRegEyeSlash className="" aria-hidden="true" />
      )}
    </button>
  );
}
