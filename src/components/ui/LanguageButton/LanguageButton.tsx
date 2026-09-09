import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext/useLanguage";
import useToggle from "@/hooks/useToggle";
import clsx from "clsx";
import {
  FaGlobe,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
} from "@/assets/icons/icon";
import { useTranslation } from "react-i18next";
import { getLocaleName } from "./LanguageList/LanguageList.utils";
import LanguageList from "./LanguageList/LanguageList";

/**
 * Renders a button with the current app language and when clicked displays the languages list pop-up
 *
 * Displays:
 * - the icon MdKeyboardArrowUp on viewports < 1024px
 * - the icon MdKeyboardArrowDown on viewports >= 1024px
 *
 * The button arrow icon features a rotation animation and the languages list features a opacity animation
 */
export default function LanguageButton() {
  // Translation
  const { t } = useTranslation();

  // Context
  const { locale } = useLanguage();

  // Custom Hook
  const { isToggled, toggle } = useToggle(false);

  // State
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  /**
   * Toggles the arrow icon animation and languages list pop-up
   */
  const handleClick = () => {
    setIsAnimating((prev) => !prev);
    toggle();
  };

  const iconStyles = `scale-150 text-xl 
                    transition-transform duration-300
                    motion-reduce:transition-none`;

  return (
    <div
      className="relative h-13
                lg:h-9.5 lg:w-32.75"
    >
      {/*Current app language button*/}
      <button
        className="relative z-10 w-full h-full px-2
                border-2 border-solid border-slate-500 dark:border-white 
                rounded-full outline-none cursor-pointer
              bg-nav-footer-bg
              text-slate-500 dark:text-white
                focus-visible:focus-ring focus-visible:outline-offset-2
                theme-transition
              hover:text-slate-400 hover:dark:text-slate-300"
        onClick={handleClick}
        aria-label={`${t("languageButton.label")} ${getLocaleName(locale)}`}
      >
        <div
          className="flex justify-between items-center gap-4 px-2
                    lg:gap-2"
        >
          <FaGlobe className="text-2xl lg:text-xl" aria-hidden="true" />

          <span className="font-bold text-base tracking-widest">
            {locale.toUpperCase()}
          </span>

          {/*Viewports < 1024px*/}
          <div className="lg:hidden">
            <MdKeyboardArrowUp
              className={clsx(iconStyles, isAnimating && "rotate-180")}
              aria-hidden="true"
            />
          </div>

          {/*Viewports >= 1024px*/}
          <div className="hidden lg:inline-block">
            <MdKeyboardArrowDown
              className={clsx(iconStyles, isAnimating && "rotate-180")}
              aria-hidden="true"
            />
          </div>
        </div>
      </button>

      {/*Languages list pop-up*/}
      {isToggled ? (
        <div
          className={clsx(
            "absolute bottom-11.25 left-1/2 -translate-x-1/2",
            "transition-discrete transition-opacity duration-300 ease-out",
            "starting:opacity-0 motion-reduce:transition-none",
            "lg:top-8 lg:bottom-0",
            isToggled ? "opacity-100" : "opacity-0",
          )}
        >
          <LanguageList close={handleClick} />
        </div>
      ) : null}
    </div>
  );
}
