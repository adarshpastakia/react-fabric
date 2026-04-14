/*
 * React Fabric
 * @version   : 1.0.0
 * @copyright : 2024
 * @author    : Adarsh Pastakia
 */

import { ApplicationProvider } from "@react-fabric/core";
import { DocsContainer } from "@storybook/addon-docs/blocks";
import { useEffect } from "react";
import { darkTheme, lightTheme } from "../theme";
import { ContextWrapper } from "./Context";

export const ContainerWrapper = ({ children, context }: AnyObject) => {
  const globals = context.store.userGlobals.globals;

  useEffect(() => {
    const [primary, accent] = (globals.theme ?? "denim:jade").split(":");
    document.documentElement.style.setProperty("--color-primary", `var(--color-${primary})`);
    document.documentElement.style.setProperty("--color-accent", `var(--color-${accent})`);
    document.documentElement.style.setProperty("--color-tint", `var(--color-${globals.tint ?? "silver"})`);
    document.documentElement.dataset.colorScheme = globals.scheme;
    document.documentElement.dataset.rounding = globals.round;
  }, [globals]);

  return (
    <ApplicationProvider defaultLocale={globals.locale} defaultCalendar={globals.calendar}>
      <ContextWrapper>
        <DocsContainer context={context} theme={globals.scheme === "dark" ? darkTheme : lightTheme}>
          {children}
        </DocsContainer>
      </ContextWrapper>
    </ApplicationProvider>
  );
};
