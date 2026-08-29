/*
 * React Fabric
 * @version   : 1.0.0
 * @copyright : 2024
 * @author    : Adarsh Pastakia
 */

import { ApplicationProvider } from "@react-fabric/core";
import i18next from "i18next";
import { I18nextProvider, initReactI18next } from "react-i18next";

i18next
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources: {
      en: {},
    },
    defaultNS: "core",
    fallbackLng: ["en"],
    keySeparator: ".",

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  })
  .then();
i18next.languages = ["en", "ar"];

export default {
  parameters: {},
  decorators: [
    (Story: any) => {
      return (
        <I18nextProvider i18n={i18next}>
          <ApplicationProvider>
            {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
            <Story />
          </ApplicationProvider>
        </I18nextProvider>
      );
    },
  ],
};
