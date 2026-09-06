import { useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";
import clsx from "clsx";
import type { AuthenticationFields } from "../../types/auth.types";
import FieldErrorMessage from "@/components/shared/FieldErrorMessage/FieldErrorMessage";
import useToggle from "@/hooks/useToggle";
import useInputValidation from "@/hooks/useInputValidation";
import { passwordValidation } from "../../util/auth.utils";
import PasswordToggleButton from "../../shared/PasswordField/PasswordToggleButton/PasswordToggleButton";

/**
 * Renders the password field
 *
 * Displays an error message if:
 * - no password is provided
 * - TO DO: add password rules validation
 */
export default function PasswordField() {
  // Translation
  const { t } = useTranslation();

  // React Hook Form: context
  const {
    register,
    formState: { errors },
  } = useFormContext<AuthenticationFields>();

  // Custom Hooks
  const { isToggled, toggle } = useToggle(false); // Password visibility
  const { isInputInvalid, getInputErrorMessage } = useInputValidation(errors);

  return (
    <>
      <div className="flex justify-between items-center mt-8 mb-4">
        {/*Password label*/}
        <label className="text-label" htmlFor="password">
          {t("forms.signUp.auth-step.password-label")}
        </label>

        <FieldErrorMessage
          id="password-error"
          message={getInputErrorMessage("password")}
        />
      </div>

      <div className="relative mb-10">
        {/*Password input*/}
        <input
          className={clsx(
            "w-full h-12 px-4 py-2",
            "text-base text-paragraph",
            "border-2 border-solid border-input rounded-full",
            "focus:outline-none",
            "placeholder:text-placeholder placeholder:italic",
            isToggled ? "text-base" : "text-lg tracking-widest",
            isInputInvalid("password")
              ? "border-input-error focus:border-input-error"
              : "focus:border-focus",
          )}
          id="password"
          type={isToggled ? "text" : "password"}
          aria-invalid={isInputInvalid("password")}
          aria-describedby="password-error"
          {...register("password", passwordValidation(t))}
        />

        <PasswordToggleButton isToggled={isToggled} toggle={toggle} />
      </div>

      {/*TO DO: Add password rules component*/}
    </>
  );
}
