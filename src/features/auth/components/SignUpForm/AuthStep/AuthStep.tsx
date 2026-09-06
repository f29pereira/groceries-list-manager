import { useTranslation } from "react-i18next";
import { useForm, FormProvider } from "react-hook-form";
import type { AuthStepProps } from "./AuthStep.types";
import type { AuthenticationFields } from "../../types/auth.types";
import EmailField from "../../shared/EmailField/EmailField";
import PasswordField from "../../shared/PasswordField/PasswordField";
import CreateAccountButton from "./CreateAccountButton/CreateAccountButton";
import NavigationLink from "@/components/ui/NavigationLink/NavigationLink";

/**
 * Renders the user authentication form step used by the SignUpForm component
 */
export default function AuthStep({ nextStep }: AuthStepProps) {
  "use no memo"; // Prevents React Hook Form conflict with the React compiler

  // Translation
  const { t } = useTranslation();

  // React Hook Form: methods
  const methods = useForm<AuthenticationFields>();

  // React Hook Form: context for inputs
  const {
    register,
    formState: { errors },
  } = methods;

  /**
   * Submits the authentication form
   */
  const onSubmit = () => {
    try {
      // TO DO: Add Firebase account creation
      nextStep();
    } catch (error) {
      /*TO DO: redirect to error page*/
    }
  };

  return (
    <div>
      {/*Main title*/}
      <h1
        className="mb-8
                  font-black 
                  text-center text-xl text-title
                  lg:text-2xl"
      >
        {t("forms.signUp.auth-step.title")}
      </h1>

      <FormProvider {...methods}>
        <form
          className="flex flex-col justify-center"
          onSubmit={methods.handleSubmit(onSubmit)}
          noValidate
        >
          <EmailField />
          <PasswordField />
          <CreateAccountButton />
        </form>
      </FormProvider>

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
