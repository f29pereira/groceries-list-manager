import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useForm, FormProvider } from "react-hook-form";
import type { AuthStepProps } from "./AuthStep.types";
import type { AuthenticationFields } from "../../types/auth.types";
import {
  signUpEmailValidation,
  signUpPasswordValidation,
  getCreateUserErrorMessage,
} from "./AuthStep.utils";
import { useAuth } from "@/contexts/AuthContext/useAuth";
import { auth } from "@/lib/firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import EmailField from "../../shared/EmailField/EmailField";
import PasswordField from "../../shared/PasswordField/PasswordField";
import CreateAccountButton from "./CreateAccountButton/CreateAccountButton";
import NavigationLink from "@/components/ui/NavigationLink/NavigationLink";
import FormErrorMessage from "@/components/shared/Form/FormErrorMessage/FormErrorMessage";

/**
 * Renders the user authentication form step used by the SignUpForm component
 */
export default function AuthStep({ nextStep }: AuthStepProps) {
  "use no memo"; // Prevents React Hook Form conflict with the React compiler

  // Translation
  const { t } = useTranslation();

  // Context
  const { setUser } = useAuth();

  // React Hook Form: methods
  const methods = useForm<AuthenticationFields>();

  // React Hook Form: context for inputs
  const {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    register,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    watch,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    formState: { errors, isSubmitting },
  } = methods;

  // State
  const [submitError, setSubmitError] = useState<string>("");

  /**
   * Submits the authentication form
   * @param data email and password fields
   *
   * If an error is catched, sets submitError state to display a form error message
   */
  const onSubmit = (data: AuthenticationFields) => {
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        nextStep();
      })
      .catch((error) => {
        const errorMessage = getCreateUserErrorMessage(t, error);
        setSubmitError(errorMessage);
      });
  };

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

      <FormProvider {...methods}>
        <form
          className="w-full"
          onSubmit={methods.handleSubmit((data) => onSubmit(data))}
          noValidate
        >
          <EmailField validation={signUpEmailValidation} />
          <PasswordField validation={signUpPasswordValidation} />

          <div
            className="min-h-17.5 overflow-hidden sm:mx-auto sm:w-2/3 lg:w-full"
            aria-live="assertive"
            aria-atomic="true"
          >
            {submitError ? <FormErrorMessage message={submitError} /> : null}
          </div>

          <div className="mt-2 sm:mx-auto sm:w-2/3 lg:w-full">
            <CreateAccountButton isSubmitting={isSubmitting} />
          </div>
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
