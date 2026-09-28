import { useApplicationContext } from "@/core/src";
import { useApplicationContext as useAP } from "@react-fabric/core";
import { useEffect } from "react";

export const ContextWrapper = ({ locale, colorScheme, calendar, styleEffect, children }: AnyObject) => {
  const { changeLocale, changeCalendar, toggleColorScheme } = useApplicationContext();
  const { changeLocale: apChangeLocale, changeCalendar: apChangeCalendar, toggleColorScheme: apToggleColorSchema } = useAP();

  useEffect(() => {
    toggleColorScheme(colorScheme);
    apToggleColorSchema(colorScheme);
  }, [colorScheme]);
  useEffect(() => {
    changeCalendar(calendar);
    apChangeCalendar(calendar);
  }, [calendar]);
  useEffect(() => {
    changeLocale(locale);
    apChangeLocale(locale);
  }, [locale]);

  return children;
};
