import { useTranslation } from "react-i18next";
import CreateAccountForm from "./CreateAccountForm/CreateAccountForm";
import NavigationLink from "@/components/ui/NavigationLink/NavigationLink";

/**
 * Renders the user authentication form step used by the SignUpForm component with:
 * - Email and Password form
 * - TO DO: Google Authentication button
 * - Sign in link
 */
export default function AuthStep() {
  // Translation
  const { t } = useTranslation();

  return (
    <div>
      {/*Main title*/}
      <h1
        className="mb-8
                  font-black 
                  text-center text-xl text-title
                  lg:text-left lg:text-2xl"
      >
        {t("forms.signUp.auth-step.title")}
      </h1>

      <CreateAccountForm />

      {/*TO DO: Add Google account*/}

      {/*Sign In link*/}
      <div className="flex justify-center items-center gap-2 mt-10">
        <p className="text-paragraph">
          {t("forms.signUp.auth-step.signIn-message")}
        </p>
        <NavigationLink
          styles="font-bold 
                  text-base text-link
                  theme-transition
                  hover:text-link-hover 
                  hover:underline hover:underline-offset-8 
                  hover:decoration-text-link"
          to="/signin"
        >
          {t("forms.signUp.auth-step.signIn-link")}
        </NavigationLink>
      </div>
    </div>
  );
}
