import { ApplicationProvider } from "@react-fabric/core";
import { ReactRenderer } from "@storybook/react-vite";
import { useEffect } from "react";
import { I18nextProvider } from "react-i18next";
import { useGlobals } from "storybook/internal/preview-api";
import { PartialStoryFn } from "storybook/internal/types";
import { default as i18n } from "../i18n";
import { ContextWrapper } from "./Context";

export const StoryWrapper = (
  Story: PartialStoryFn<
    ReactRenderer,
    {
      [x: string]: any;
    }
  >,
) => {
  const [globals, setGlobals] = useGlobals();

  useEffect(() => {
    const [primary, accent] = (globals.theme ?? "denim:jade").split(":");
    document.documentElement.style.setProperty("--color-primary", `var(--color-${primary})`);
    document.documentElement.style.setProperty("--color-accent", `var(--color-${accent})`);
    document.documentElement.style.setProperty("--color-tint", `var(--color-${globals.tint ?? "silver"})`);
    document.documentElement.dataset.colorScheme = globals.scheme;
    document.documentElement.dataset.rounding = globals.round;
  }, [globals]);

  return (
    <I18nextProvider i18n={i18n}>
      <ApplicationProvider
        defaultLocale={globals.locale}
        defaultColorScheme={globals.scheme}
        defaultCalendar={globals.calendar}
      >
        <ContextWrapper>
          {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
          <Story />
        </ContextWrapper>
      </ApplicationProvider>
    </I18nextProvider>
  );
};
