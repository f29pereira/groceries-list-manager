import type { AuthenticationFields } from "../../../types/auth.types";

/**
 * Props for the PasswordRules component
 * @property password - password field
 */
export type PasswordRulesProps = Pick<AuthenticationFields, "password">;

/**
 * Type for the password rule
 * @property description - rule description
 * @property isChecked   - is the rule checked
 * @property isValid     - is the rule valid
 */
export type Rule = {
  description: string;
  isChecked: boolean;
  isValid: boolean;
};
