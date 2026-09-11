import type { CreateAccountButtonProps } from "./CreateAccountButton.types";
import SubmitButton from "@/components/shared/Form/SubmitButton/SubmitButton";
import { FaCircleNotch, FaUserPlus } from "@/assets/icons/icon";
import { useTranslation } from "react-i18next";

/**
 * Renders a create account button
 *
 * If the form is submitting, displays a loading icon with spin animation instead of add user icon
 */
export default function CreateAccountButton({
  isSubmitting,
}: CreateAccountButtonProps) {
  // Translation
  const { t } = useTranslation();

  return (
    <SubmitButton>
      {
        <div className="flex justify-center items-center gap-4">
          {isSubmitting ? (
            <FaCircleNotch
              className="text-2xl text-white 
                      motion-safe:animate-spin"
              aria-hidden="true"
            />
          ) : (
            <FaUserPlus className="text-2xl text-white" aria-hidden="true" />
          )}

          <span
            className="font-bold text-lg text-white
                    lg:text-base"
          >
            {t("forms.signUp.auth-step.submit-btn")}
          </span>
        </div>
      }
    </SubmitButton>
  );
}
