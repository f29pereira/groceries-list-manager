import type { TFunction } from "i18next";
import type { RegisterOptions } from "react-hook-form";
import type { AuthenticationFields } from "../../types/auth.types";
import { getPasswordStatus } from "../../shared/PasswordField/PasswordRules/PasswordRules.utils";

/**
 * Returns the React Hook Form validation for the email field on the sign up form
 * @param t error messages translation
 */
export const signUpEmailValidation = (
  t: TFunction<"translation", undefined>,
): RegisterOptions<AuthenticationFields, "email"> => {
  return {
    required: t("forms.generic-errorMessages.required"),
    pattern: {
      value: /^[\w-.]+@(?:[\w-]+\.)+[\w-]{2,4}$/,
      message: t("forms.generic-errorMessages.invalid"),
    },
  };
};

/**
 * Returns the React Hook Form validation for the password field on the sign up form
 * @param t        error messages translation
 * @param password password field
 */
export const signUpPasswordValidation = (
  t: TFunction<"translation", undefined>,
  password: string,
): RegisterOptions<AuthenticationFields, "password"> => {
  return {
    required: t("forms.generic-errorMessages.required"),
    validate: async () => {
      const status = await getPasswordStatus(password);
      return status.isValid || t("forms.generic-errorMessages.invalid");
    },
  };
};
