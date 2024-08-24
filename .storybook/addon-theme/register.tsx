/*
 * React Fabric
 * @version   : 1.0.0
 * @copyright : 2024
 * @author    : Adarsh Pastakia
 */

import { useGlobals, useParameter, useStorybookApi } from "@storybook/api";
import { IconButton } from "@storybook/components";
import { MoonIcon, SunIcon } from "@storybook/icons";
import { themes, ThemeVars } from "@storybook/theming";
import React, { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "storybook-scheme";
const CALENDAR_KEY = "storybook-calendar";
const THEME_KEY = "storybook-theme";
const TINT_KEY = "storybook-tint";
const ROUNDING_KEY = "storybook-rounding";

const GLOBAL_KEY = "theme";

enum COLOR_SCHEME {
  LIGHT = "light",
  DARK = "dark",
}

enum CALENDAR {
  GREGORIAN = "gregorian",
  HIJRI = "hijri",
}

interface ColorSchemeToggleParams {
  lightTheme: ThemeVars;
  darkTheme: ThemeVars;
}

enum THEME {
  DENIM = "denim:avacado",
  IRIS = "iris:coral",
  JADE = "jade:wood",
  PUMPKIN = "pumpkin:lilac",
  SCARLET = "scarlet:marigold",
}
enum TINT {
  SILVER = "silver",
  STEEL = "steel",
  OLIVE = "olive",
  SAND = "sand",
}
enum ROUNDING {
  SMALL = "sm",
  NORMAL = "normal",
  MEDIUM = "md",
  FULL = "full",
}

const CalendarIcon = ({ color = "currentColor", size = 14, ...props }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 2v1h-2c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v14c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h14c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-14c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879h-2v-1c0-0.552-0.448-1-1-1s-1 0.448-1 1v1h-6v-1c0-0.552-0.448-1-1-1s-1 0.448-1 1zM20 9h-16v-3c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293h2v1c0 0.552 0.448 1 1 1s1-0.448 1-1v-1h6v1c0 0.552 0.448 1 1 1s1-0.448 1-1v-1h2c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707zM4 11h16v9c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-14c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707z"
        fill={color}
      />
    </svg>
  );
};
const HijriIcon = ({ color = "currentColor", size = 14, ...props }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.572 22.285h18.857v-13.715h-18.857v13.715zM7.715 6v-3.857c0-0.241-0.188-0.428-0.428-0.428h-0.857c-0.241 0-0.428 0.188-0.428 0.428v3.857c0 0.241 0.188 0.428 0.428 0.428h0.857c0.241 0 0.428-0.188 0.428-0.428zM18 6v-3.857c0-0.241-0.188-0.428-0.428-0.428h-0.857c-0.241 0-0.428 0.188-0.428 0.428v3.857c0 0.241 0.188 0.428 0.428 0.428h0.857c0.241 0 0.428-0.188 0.428-0.428zM23.143 5.143v17.143c0 0.938-0.777 1.715-1.715 1.715h-18.857c-0.938 0-1.715-0.777-1.715-1.715v-17.143c0-0.938 0.777-1.714 1.715-1.714h1.714v-1.285c0-1.178 0.965-2.143 2.143-2.143h0.857c1.178 0 2.143 0.965 2.143 2.143v1.285h5.143v-1.285c0-1.178 0.965-2.143 2.143-2.143h0.857c1.178 0 2.143 0.965 2.143 2.143v1.285h1.715c0.938 0 1.715 0.777 1.715 1.714zM13.389 19.885c-2.461 0-4.48-2.033-4.48-4.51 0-2.495 1.982-4.51 4.53-4.51 0.873 0 1.747 0.352 1.747 0.352-0.994-0.699-2.028-1.047-3.102-1.047-1.459 0-2.699 0.505-3.719 1.516s-1.53 2.24-1.53 3.69c0 1.44 0.508 2.667 1.523 3.683s2.243 1.523 3.683 1.523c1.861 0 3.001-0.961 3.145-1.055 0 0-0.923 0.359-1.796 0.359zM14.425 15.663l-0.465 1.443 1.226-0.887 1.219 0.887-0.465-1.443 1.226-0.882h-1.515l-0.465-1.44-0.472 1.44h-1.515l1.226 0.882z"
        fill={color}
      />
    </svg>
  );
};

export const ThemeToggle = () => {
  const api = useStorybookApi();
  const [globals, updateGlobals] = useGlobals();
  const [theme, setTheme] = useState<THEME>(
    (localStorage.getItem(THEME_KEY) as THEME) ?? THEME.DENIM,
  );
  const [tint, setTint] = useState<TINT>(
    (localStorage.getItem(TINT_KEY) as TINT) ?? TINT.SILVER,
  );
  const [rounding, setRounding] = useState<ROUNDING>(
    (localStorage.getItem(ROUNDING_KEY) as ROUNDING) ?? ROUNDING.NORMAL,
  );
  const { darkTheme = themes.dark, lightTheme = themes.light } = useParameter<
    Partial<ColorSchemeToggleParams>
  >("schemeToggle", {});
  const [colorScheme, setColorScheme] = useState<COLOR_SCHEME>(
    (localStorage.getItem(STORAGE_KEY) as COLOR_SCHEME) ?? COLOR_SCHEME.LIGHT,
  );
  const [calendar, setCalendar] = useState<CALENDAR>(
    (localStorage.getItem(CALENDAR_KEY) as CALENDAR) ?? CALENDAR.GREGORIAN,
  );

  // Function that will update the global value and trigger a UI refresh.
  // Function that will update the global value and trigger a UI refresh.
  const refreshAndUpdateGlobal = useCallback(
    (key: COLOR_SCHEME, theme: ThemeVars) => {
      api.setOptions({ theme });
      // Updates Storybook global value
      updateGlobals({
        [GLOBAL_KEY]: key,
      });
      api.getChannel()?.emit("SCHEME_CHANGED", key);
    },
    [],
  );

  const changeTheme = useCallback(
    (key: THEME = THEME.DENIM) => {
      localStorage.setItem(THEME_KEY, key);
      setTheme(key);
    },
    [theme],
  );

  const changeTint = useCallback(
    (key: TINT) => {
      localStorage.setItem(TINT_KEY, key);
      setTint(key);
    },
    [theme],
  );

  const changeRounding = useCallback(
    (key: ROUNDING) => {
      localStorage.setItem(ROUNDING_KEY, key);
      setRounding(key);
    },
    [theme],
  );

  const toggleColorScheme = useCallback(() => {
    const newTheme =
      colorScheme === COLOR_SCHEME.DARK
        ? COLOR_SCHEME.LIGHT
        : COLOR_SCHEME.DARK;
    localStorage.setItem(STORAGE_KEY, newTheme);
    setColorScheme(newTheme);
  }, [colorScheme]);

  const toggleCalendar = useCallback(() => {
    const newCalendar =
      calendar === CALENDAR.HIJRI ? CALENDAR.GREGORIAN : CALENDAR.HIJRI;
    localStorage.setItem(CALENDAR_KEY, newCalendar);
    setCalendar(newCalendar);
    api.getChannel()?.emit("CALENDAR_CHANGE", newCalendar);
  }, [calendar]);

  useEffect(() => {
    api.getChannel()?.emit("LOCALE_CHANGED", globals.locale);
  }, [globals.locale]);

  useEffect(() => {
    refreshAndUpdateGlobal(colorScheme, {
      ...(colorScheme === COLOR_SCHEME.DARK ? darkTheme : lightTheme),
    });
  }, [colorScheme, darkTheme, lightTheme, globals.primary, globals.accent]);

  useEffect(() => {
    const [primary, accent] = theme.split(":");
    api.getChannel()?.emit("THEME_CHANGED", primary, accent);
    api.getChannel()?.emit("TINT_CHANGED", tint ?? TINT.SILVER);
    api.getChannel()?.emit("ROUNDING_CHANGED", rounding ?? ROUNDING.NORMAL);
  }, [theme, tint, rounding, colorScheme]);

  return (
    <>
      <div
        style={{
          width: 1,
          height: 16,
          backgroundColor: "gray",
        }}
      />
      <IconButton
        key="SchemeToggle"
        title="Toggle color scheme"
        onClick={toggleColorScheme}
      >
        {colorScheme === COLOR_SCHEME.DARK ? <SunIcon /> : <MoonIcon />}
      </IconButton>
      <IconButton
        key="CalendarToggle"
        title="Toggle calendar"
        onClick={toggleCalendar}
      >
        {calendar === CALENDAR.HIJRI ? <HijriIcon /> : <CalendarIcon />}
      </IconButton>
      <div
        style={{
          width: 1,
          height: 16,
          backgroundColor: "gray",
        }}
      />

      <IconButton
        title="Theme: Denim/Avacado"
        active={theme === THEME.DENIM}
        onClick={() => changeTheme(THEME.DENIM)}
      >
        <div
          style={{
            borderRadius: "1rem",
            border: "8px solid transparent",
            borderTopColor: "var(--denim)",
            borderBottomColor: "var(--avacado)",
            borderInlineStartColor: "var(--denim)",
            borderInlineEndColor: "var(--avacado)",
          }}
        />
      </IconButton>

      <IconButton
        title="Theme: Jade/Wood"
        active={theme === THEME.JADE}
        onClick={() => changeTheme(THEME.JADE)}
      >
        <div
          style={{
            borderRadius: "1rem",
            border: "8px solid transparent",
            borderTopColor: "var(--jade)",
            borderBottomColor: "var(--wood)",
            borderInlineStartColor: "var(--jade)",
            borderInlineEndColor: "var(--wood)",
          }}
        />
      </IconButton>

      <IconButton
        title="Theme: Scarlet/Marigold"
        active={theme === THEME.SCARLET}
        onClick={() => changeTheme(THEME.SCARLET)}
      >
        <div
          style={{
            borderRadius: "1rem",
            border: "8px solid transparent",
            borderTopColor: "var(--scarlet)",
            borderBottomColor: "var(--marigold)",
            borderInlineStartColor: "var(--scarlet)",
            borderInlineEndColor: "var(--marigold)",
          }}
        />
      </IconButton>

      <IconButton
        title="Theme: Pumpkin/Lilac"
        active={theme === THEME.PUMPKIN}
        onClick={() => changeTheme(THEME.PUMPKIN)}
      >
        <div
          style={{
            borderRadius: "1rem",
            border: "8px solid transparent",
            borderTopColor: "var(--pumpkin)",
            borderBottomColor: "var(--lilac)",
            borderInlineStartColor: "var(--pumpkin)",
            borderInlineEndColor: "var(--lilac)",
          }}
        />
      </IconButton>

      <IconButton
        title="Theme: Iris/Coral"
        active={theme === THEME.IRIS}
        onClick={() => changeTheme(THEME.IRIS)}
      >
        <div
          style={{
            borderRadius: "1rem",
            border: "8px solid transparent",
            borderTopColor: "var(--iris)",
            borderBottomColor: "var(--coral)",
            borderInlineStartColor: "var(--iris)",
            borderInlineEndColor: "var(--coral)",
          }}
        />
      </IconButton>

      <div
        style={{
          width: 1,
          height: 16,
          backgroundColor: "gray",
        }}
      />

      <IconButton
        title="Tint: Silver"
        active={tint === TINT.SILVER}
        onClick={() => changeTint(TINT.SILVER)}
      >
        <div
          style={{
            width: "1rem",
            height: "1rem",
            backgroundColor: "var(--silver)",
            borderRadius: "1rem",
          }}
        />
      </IconButton>

      <IconButton
        title="Tint: Steel"
        active={tint === TINT.STEEL}
        onClick={() => changeTint(TINT.STEEL)}
      >
        <div
          style={{
            width: "1rem",
            height: "1rem",
            borderRadius: "1rem",
            backgroundColor: "var(--steel)",
          }}
        />
      </IconButton>

      <IconButton
        title="Tint: Olive"
        active={tint === TINT.OLIVE}
        onClick={() => changeTint(TINT.OLIVE)}
      >
        <div
          style={{
            width: "1rem",
            height: "1rem",
            borderRadius: "1rem",
            backgroundColor: "var(--olive)",
          }}
        />
      </IconButton>

      <IconButton
        title="Tint: Sand"
        active={tint === TINT.SAND}
        onClick={() => changeTint(TINT.SAND)}
      >
        <div
          style={{
            width: "1rem",
            height: "1rem",
            borderRadius: "1rem",
            backgroundColor: "var(--sand)",
          }}
        />
      </IconButton>

      <div
        style={{
          width: 1,
          height: 16,
          backgroundColor: "gray",
        }}
      />

      <IconButton
        title="Rounding: Small"
        active={rounding === ROUNDING.SMALL}
        onClick={() => changeRounding(ROUNDING.SMALL)}
      >
        <div
          style={{
            width: "1.5rem",
            height: "1rem",
            borderRadius: "2px",
            backgroundColor: "gray",
          }}
        />
      </IconButton>

      <IconButton
        title="Rounding: Regular"
        active={rounding === ROUNDING.NORMAL}
        onClick={() => changeRounding(ROUNDING.NORMAL)}
      >
        <div
          style={{
            width: "1.5rem",
            height: "1rem",
            borderRadius: "4px",
            backgroundColor: "gray",
          }}
        />
      </IconButton>

      <IconButton
        title="Rounding: Medium"
        active={rounding === ROUNDING.MEDIUM}
        onClick={() => changeRounding(ROUNDING.MEDIUM)}
      >
        <div
          style={{
            width: "1.5rem",
            height: "1rem",
            borderRadius: "6px",
            backgroundColor: "gray",
          }}
        />
      </IconButton>

      <IconButton
        title="Rounding: Full"
        active={rounding === ROUNDING.FULL}
        onClick={() => changeRounding(ROUNDING.FULL)}
      >
        <div
          style={{
            width: "1.5rem",
            height: "1rem",
            borderRadius: "8px",
            backgroundColor: "gray",
          }}
        />
      </IconButton>
    </>
  );
};
