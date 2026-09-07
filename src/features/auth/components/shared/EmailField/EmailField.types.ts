import type { TFunction } from "i18next";
import type { RegisterOptions } from "react-hook-form";
import type { AuthenticationFields } from "../../types/auth.types";

/**
 * Props for the EmailField component
 * @property validation - React Hook Form field validation
 */
export type EmailFieldProps = {
  validation: (
    t: TFunction<"translation", undefined>,
  ) => RegisterOptions<AuthenticationFields, "email">;
};
