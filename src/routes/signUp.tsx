import MultiStepProvider from "@/contexts/MultiStepContext/MultiStepProvider";
import SignUpForm from "@/features/auth/components/SignUpForm/SignUpForm";

/**
 * Renders the SignUpForm component
 */
export default function SignUp() {
  return (
    <MultiStepProvider>
      <SignUpForm />
    </MultiStepProvider>
  );
}
