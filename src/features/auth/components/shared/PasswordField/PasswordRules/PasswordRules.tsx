import { useState, useEffect } from "react";
import clsx from "clsx";
import type { PasswordRulesProps } from "./PasswordRules.types";
import type { Rule } from "./PasswordRules.types";
import { getPasswordRules, getPasswordRulesText } from "./PasswordRules.utils";
import PasswordRuleIcon from "./PasswordRuleIcon/PasswordRuleIcon";
import { useTranslation } from "react-i18next";

/**
 * Renders a list of password rules
 *
 * Displays:
 * - list of rules with no password validation
 *
 * Or
 *
 * - list of rules with password validation with a checkmark or cross icon (if the rule is valid/invalid)
 *
 * Props are defined in {@link PasswordRulesProps}.
 */
export default function PasswordRules({ password }: PasswordRulesProps) {
  // Translation
  const { t } = useTranslation();

  // State
  const [rulesList, setRulesList] = useState<Rule[] | null>(null);

  const defaultRulesList = getPasswordRulesText(t);

  useEffect(() => {
    if (!password) {
      return;
    }

    let isCancelled = false;

    const getRulesDelay = setTimeout(async () => {
      try {
        const passwordRules = await getPasswordRules(t, password);

        if (!isCancelled) {
          setRulesList(passwordRules);
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        setRulesList(null); // Render defaultRulesList
      }
    }, 300);

    // Clean-up function
    return () => {
      isCancelled = true; // Cancels pending getPasswordRules
      clearTimeout(getRulesDelay);
    };
  }, [t, password]);

  return (
    <div className={clsx("w-62.5 h-37.5 mt-4 mb-8")}>
      {!password || !rulesList
        ? defaultRulesList.map((rule, index) => (
            <div
              className="grid grid-cols-[1.5rem_1fr] items-center gap-2 h-6 mb-2"
              key={index}
            >
              <span className="inline-block w-2 h-2 rounded-full bg-paragraph"></span>
              <span className="text-sm text-paragraph">{rule}</span>
            </div>
          ))
        : rulesList.map((rule, index) => (
            <div
              className="grid grid-cols-[1.5rem_1fr] items-center gap-2 h-6 mb-2"
              key={index}
            >
              <PasswordRuleIcon isRuleValid={rule.isValid} />
              <span className="text-sm text-paragraph">{rule.description}</span>
            </div>
          ))}
    </div>
  );
}
