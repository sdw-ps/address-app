import React, { useState, useEffect } from "react";
import { CssBaseline, ThemeProvider, alpha } from "@mui/material";
import { Theme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import LightModeIcon from "@mui/icons-material/LightMode";
import { lightTheme, darkTheme } from "./theme";

interface IProps {
  children: React.JSX.Element;
}

export function ThemeSetter({ children }: IProps): JSX.Element {
  const [theme, setTheme] = useState<Theme | undefined>();

  // load the theme setting from local storage or set light theme if the local storage is empty
  useEffect(() => {
    const themeSetting = localStorage.getItem("themeSetting");
    if (themeSetting == null) {
      setTheme(lightTheme);
      return;
    }
    switch (themeSetting) {
      case "light":
        setTheme(lightTheme);
        return;
      case "dark":
        setTheme(darkTheme);
        return;
      default:
        setTheme(lightTheme);
        console.warn(`Unknown value \`${themeSetting}\` stored for the theme setting.`);
        return;
    }
  }, []);
  const handleThemeToggle = () => {
    setTheme((prev) => {
      const selectedTheme = prev === lightTheme ? darkTheme : lightTheme;
      localStorage.setItem("themeSetting", selectedTheme === lightTheme ? "light" : "dark");
      return selectedTheme;
    });
  };

  // the theme is not set yet, so we prevent rendering, otherwise it might cause flickering
  if (theme == null) {
    return <></>;
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <IconButton
        onClick={handleThemeToggle}
        sx={{
          // this button is a one-of-its-kind, so it gets a very individual styling
          position: "fixed",
          top: "6px",
          right: "6px",
          zIndex: 10,
          color: "primary",
          backgroundColor: (theme) => alpha(theme.palette.background.default, 0.7),
          borderRadius: "50%", // Round the background
          padding: "6px", // Add padding to adjust the size of the round background
          transition: (theme) =>
            `background-color ${theme.transitions.duration.complex}ms ${theme.transitions.easing.easeInOut}, ` +
            `color ${theme.transitions.duration.complex}ms ${theme.transitions.easing.easeInOut}`,
          "&:hover": {
            backgroundColor: "primary.main", // Set the background color on hover
            color: (theme) => theme.palette.buttonInvertColor.main,
          },
        }}
        color="primary"
      >
        {theme === lightTheme ? <NightsStayIcon /> : <LightModeIcon />}
      </IconButton>
      {children}
    </ThemeProvider>
  );
}
