import { useLanguage } from "@/contexts/LanguageContext/useLanguage";
import { getLocaleName, getUppercaseLocaleCode } from "./LanguageList.utils";
import type { LanguageListProps } from "./LanguageList.types";
import type { SupportedLanguages } from "@/types/common.types";

/**
 * Renders a languages list pop-up
 *
 * Props are defined in {@link LanguageListProps}.
 */
export default function LanguageList({ close }: LanguageListProps) {
  const { locale, setLocale, localesList } = useLanguage();

  /**
   * Changes the locale and closes the languages list pop-up
   * @param locale current app locale
   */
  const handleOnClick = (locale: SupportedLanguages) => {
    setLocale(locale);
    close();
  };

  return (
    <ul
      className="w-32.5 min-h-20 overflow-hidden
              bg-white dark:bg-body-bg
                border-solid border-x-2 border-t-2 rounded-t-xl
              border-slate-500 dark:border-white
                lg:w-30
                lg:border-t-0 lg:rounded-t-none lg:border-b-2 lg:rounded-b-xl"
      role="menu"
    >
      {localesList
        .filter((l) => l !== locale)
        .map((l, index) => (
          <li
            className="first:mt-2 last:mb-3 
                      lg:first:mt-3 lg:last:mb-2"
            key={index}
          >
            <button
              className="w-full p-2
                        cursor-pointer
                        group focus-visible:outline-none
                      hover:bg-slate-200 hover:dark:bg-slate-800"
              onClick={() => handleOnClick(l)}
              aria-label={getLocaleName(l)}
            >
              <div
                className="flex justify-between items-center 
                          group-focus-visible:focus-ring group-focus-visible:outline-offset-2"
              >
                <span
                  className="text-sm 
                        text-paragraph"
                >
                  {getLocaleName(l)}
                </span>
                <span
                  className="text-sm 
                        text-paragraph"
                >
                  {getUppercaseLocaleCode(l)}
                </span>
              </div>
            </button>
          </li>
        ))}
    </ul>
  );
}
