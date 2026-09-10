/**
 * Props for the FieldErrorMessage component
 * @propery  id      - id to match the field aria-describedby property
 * @property message - error message
 */
export type FieldErrorMessageProps = {
  id: string;
  message: string | undefined;
};
