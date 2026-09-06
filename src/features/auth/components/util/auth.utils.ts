import type { TFunction } from "i18next";
import type { RegisterOptions } from "react-hook-form";
import type { AuthenticationFields } from "../types/auth.types";

/**
 * Returns the React Hook Form validation for the email field
 * @param t error messages translation
 */
export const emailValidation = (
  t: TFunction<"translation", undefined>,
): RegisterOptions<AuthenticationFields, "email"> => {
  return {
    required: t("forms.signUp.auth-step.errorMessages.required"),
    pattern: {
      value: /^[\w-.]+@(?:[\w-]+\.)+[\w-]{2,4}$/,
      message: t("forms.signUp.auth-step.errorMessages.invalid"),
    },
  };
};

/**
 * Returns the React Hook Form validation for the password field
 * @param t error messages translation
 */
export const passwordValidation = (
  t: TFunction<"translation", undefined>,
): RegisterOptions<AuthenticationFields, "password"> => {
  return {
    required: t("forms.signUp.auth-step.errorMessages.required"),
    /**
     * Validate if all password rules are OK
     */
  };
};

/**
 * TO DO: Add password rules
 */
