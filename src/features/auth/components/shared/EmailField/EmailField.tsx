import { useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";
import clsx from "clsx";
import type { AuthenticationFields } from "../../types/auth.types";
import FieldErrorMessage from "@/components/shared/FieldErrorMessage/FieldErrorMessage";
import useInputValidation from "@/hooks/useInputValidation";
import { emailValidation } from "../../util/auth.utils";

/**
 * Renders the email field
 *
 * Displays an error message if:
 * - no email is provided
 * - provided email is invalid
 */
export default function EmailField() {
  // Translation
  const { t } = useTranslation();

  // React Hook Form: context
  const {
    register,
    formState: { errors },
  } = useFormContext<AuthenticationFields>();

  // Custom Hook
  const { isInputInvalid, getInputErrorMessage } = useInputValidation(errors);

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        {/*Email label*/}
        <label className="text-label" htmlFor="email">
          {t("forms.signUp.auth-step.email-label")}
        </label>

        <FieldErrorMessage
          id="email-error"
          message={getInputErrorMessage("email")}
        />
      </div>

      {/*Email input*/}
      <input
        className={clsx(
          "w-full h-12 px-4 py-2",
          "text-base text-paragraph",
          "border-2 border-solid border-input rounded-full",
          "focus:outline-none",
          isInputInvalid("email")
            ? "border-input-error focus:border-input-error"
            : "focus:border-focus",
        )}
        id="email"
        type="email"
        autoComplete="email"
        placeholder="e.g johndoe@lorem.com"
        aria-invalid={isInputInvalid("email")}
        aria-describedby="email-error"
        {...register("email", emailValidation(t))}
      />
    </>
  );
}
