import { useApplicationContext } from "@react-fabric/core";
import { useEffect } from "react";
import { Fragment } from "react/jsx-runtime";
import { addons } from "storybook/manager-api";

export const ContextWrapper = (props: AnyObject) => {
  const { changeLocale, changeCalendar } = useApplicationContext();
  useEffect(() => {
    addons.getChannel().on("CALENDAR_CHANGE", (calendar: AnyObject) => {
      changeCalendar?.(calendar);
    });
    addons.getChannel().on("LOCALE_CHANGED", (locale: AnyObject) => {
      changeLocale?.(locale);
    });
  }, []);
  return <Fragment {...props} />;
};
