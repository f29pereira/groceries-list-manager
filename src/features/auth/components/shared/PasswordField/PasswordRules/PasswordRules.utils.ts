import type { TFunction } from "i18next";
import type { Rule } from "./PasswordRules.types";
import type { PasswordValidationStatus } from "firebase/auth";
import { auth } from "@/lib/firebase/firebase";
import { validatePassword } from "firebase/auth";

/**
 * Returns the list of password rules with validation
 * @param t        rules translation
 * @param password password field
 *
 * @returns array with the following rules and if valid or invalid:
 * - min-max characters
 * - 1 uppercase character
 * - 1 numeric character
 * - 1 special character
 */
export const getPasswordRulesWithValidation = async (
  t: TFunction<"translation", undefined>,
  password: string,
): Promise<Rule[]> => {
  const [lengthRule, uppercaseRule, numericRule, specialRule] =
    getPasswordRulesText(t);

  const status = await getPasswordStatus(password);

  return [
    {
      description: lengthRule,
      isChecked: true,
      isValid:
        (status.meetsMinPasswordLength && status.meetsMaxPasswordLength) ||
        false,
    },
    {
      description: uppercaseRule,
      isChecked: true,
      isValid: status.containsUppercaseLetter || false,
    },
    {
      description: numericRule,
      isChecked: true,
      isValid: status.containsNumericCharacter || false,
    },
    {
      description: specialRule,
      isChecked: true,
      isValid: status.containsNonAlphanumericCharacter || false,
    },
  ];
};

/**
 * Returns the list of password rules with no validation
 * @param t        rules translation
 *
 * @returns array with the following rules:
 * - min-max characters
 * - 1 uppercase character
 * - 1 numeric character
 * - 1 special character
 */
export const getPasswordRulesNoValidation = (
  t: TFunction<"translation", undefined>,
): Rule[] => {
  const [lengthRule, uppercaseRule, numericRule, specialRule] =
    getPasswordRulesText(t);

  return [
    {
      description: lengthRule,
      isChecked: false,
      isValid: false,
    },
    {
      description: uppercaseRule,
      isChecked: false,
      isValid: false,
    },
    {
      description: numericRule,
      isChecked: false,
      isValid: false,
    },
    {
      description: specialRule,
      isChecked: false,
      isValid: false,
    },
  ];
};

/**
 * Returns the Firebase password status
 * @param password password field
 */
export const getPasswordStatus = async (
  password: string,
): Promise<PasswordValidationStatus> => {
  return await validatePassword(auth, password);
};

/**
 * Returns the password rules text
 * @param t rules translation
 * @returns array with the following rules:
 * - min-max characters
 * - 1 uppercase character
 * - 1 numeric character
 * - 1 special character
 */
export const getPasswordRulesText = (
  t: TFunction<"translation", undefined>,
): string[] => {
  return [
    t("forms.auth.password.rules.length"),
    t("forms.auth.password.rules.upperCase"),
    t("forms.auth.password.rules.numeric"),
    t("forms.auth.password.rules.special"),
  ];
};
