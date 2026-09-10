import { FirebaseError } from "firebase/app";

/**
 * Type Guard function that checks if a given error is a FirebaseError
 * @param error
 */
export const isFirebaseError = (error: unknown): error is FirebaseError => {
  return error instanceof FirebaseError;
};
