import type { SupportedLanguages } from "@/types/common.types";

/**
 * Returns a given locale in uppercase
 * @param localeCode locale code
 *
 * @example getLocaleCode(en)
 * // EN
 */
export const getUppercaseLocaleCode = (localeCode: SupportedLanguages) => {
  return `(${localeCode.toUpperCase()})`;
};

/**
 * Returns the language name by a given locale code
 * @param localeCode locale code
 */
export const getLocaleName = (localeCode: SupportedLanguages) => {
  switch (localeCode) {
    case "en":
      return "English";
    case "pt":
      return "Português";
  }
};
