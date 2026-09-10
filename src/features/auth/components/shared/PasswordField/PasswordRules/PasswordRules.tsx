import { useState, useEffect } from "react";
import type { PasswordRulesProps } from "./PasswordRules.types";
import type { Rule } from "./PasswordRules.types";
import {
  getPasswordRulesWithValidation,
  getPasswordRulesNoValidation,
} from "./PasswordRules.utils";
import PasswordRuleIcon from "./PasswordRuleIcon/PasswordRuleIcon";
import { useTranslation } from "react-i18next";
import { GoDot } from "@/assets/icons/icon";

/**
 * Renders a list of password rules
 *
 * Displays:
 * - list of rules with no password validation
 *
 * Or
 *
 * - list of rules with password validation using a checkmark or cross icon (if the rule is valid/invalid)
 *
 * The rule icon features a pop-in animation.
 *
 * Props are defined in {@link PasswordRulesProps}.
 */
export default function PasswordRules({ password }: PasswordRulesProps) {
  // Translation
  const { t } = useTranslation();

  // Data
  const defaultRulesList = getPasswordRulesNoValidation(t);

  // State
  const [rulesList, setRulesList] = useState<Rule[]>(defaultRulesList);

  useEffect(() => {
    if (!password) {
      return;
    }

    let isCancelled = false;

    const getRulesDelay = setTimeout(async () => {
      try {
        const passwordRules = await getPasswordRulesWithValidation(t, password);

        if (!isCancelled) {
          setRulesList(passwordRules);
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        setRulesList(getPasswordRulesNoValidation(t)); // Render the rules with no validaton
      }
    }, 300);

    // Clean-up function
    return () => {
      isCancelled = true; // Cancels pending getPasswordRules
      clearTimeout(getRulesDelay);
    };
  }, [t, password]);

  return (
    <div
      className="w-62.5 h-37.5 my-2 mx-auto
                sm:mx-0 sm:w-75"
    >
      <ul aria-label={t("forms.auth.password.rules.label")}>
        {rulesList.map((rule, index) => (
          <li
            className="grid grid-cols-[1.5rem_1fr] items-center gap-1 min-h-6 mb-2"
            key={index}
          >
            {/*Rule icon*/}
            {password && rule.isChecked ? (
              <PasswordRuleIcon isRuleValid={rule.isValid} />
            ) : (
              <GoDot
                className="text-lg text-green-800 dark:text-slate-300 
                          motion-safe:animate-pop-in"
                aria-hidden="true"
              />
            )}
            {/*Rule description*/}
            <span className="text-sm text-paragraph">
              {rule.description}
              {/*Screen reader only text: Rule validation*/}
              <span className="sr-only">
                {password && rule.isChecked
                  ? t("forms.auth.password.rules.validation.checked")
                  : t("forms.auth.password.rules.validation.unchecked")}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
