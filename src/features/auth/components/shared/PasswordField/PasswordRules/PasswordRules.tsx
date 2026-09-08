import { useState, useEffect } from "react";
import clsx from "clsx";
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
    <div className={clsx("w-62.5 h-37.5 mt-4 mb-8")}>
      {rulesList.map((rule, index) => (
        <div
          className="grid grid-cols-[1.5rem_1fr] items-center gap-1 h-6 mb-2"
          key={index}
        >
          {/*Rule icon*/}
          {password && rule.isChecked ? (
            <PasswordRuleIcon isRuleValid={rule.isValid} />
          ) : (
            <GoDot
              className="text-lg text-green-800 dark:text-slate-300 motion-safe:animate-pop-in"
              aria-hidden="true"
            />
          )}
          {/*Rule descriotion*/}
          <span className="text-sm text-paragraph">{rule.description}</span>
        </div>
      ))}
    </div>
  );
}
