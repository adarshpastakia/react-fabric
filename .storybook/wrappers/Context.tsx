import { useApplicationContext } from "@/core/src";
import { useEffect } from "react";

export const ContextWrapper = ({ locale, colorScheme, calendar, styleEffect, children }: AnyObject) => {
  const { changeLocale, changeCalendar, toggleColorScheme } = useApplicationContext();

  useEffect(() => {
    toggleColorScheme(colorScheme);
  }, [colorScheme]);
  useEffect(() => {
    changeCalendar(calendar);
  }, [calendar]);
  useEffect(() => {
    changeLocale(locale);
  }, [locale]);

  return children;
};
