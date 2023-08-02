import { createTheme, Palette } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    // terrible name
    buttonInvertColor: Palette["primary"];
    borderColor: Palette["primary"];
    headline: string;
  }

  interface PaletteOptions {
    buttonInvertColor?: PaletteOptions["primary"];
    borderColor?: PaletteOptions["primary"];
    headline?: string;
  }
}

const basePalette = createTheme().palette;
const richBlack = "#010B13";
export const fontFamily = '"Roboto", "Helvetica", "Arial", sans-serif';

const lightPalette = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#008580",
    },
    secondary: {
      main: "#008580",
    },
    warning: {
      main: "#762200",
    },
    buttonInvertColor: {
      main: basePalette.common.white,
    },
    borderColor: {
      main: "rgba(0, 0, 0, 0.12)",
    },
    headline: "#000",
  },
}).palette;

const darkPalette = createTheme({
  palette: {
    mode: "dark", // Set the theme mode to 'dark'
    text: {
      primary: "#e0e8e0", // Light text color for dark theme
      secondary: "#bdbdbd", // Light secondary text color for dark theme
    },
    primary: {
      main: "#8bc34a",
    },
    secondary: {
      main: "#b0afaf",
    },
    warning: {
      main: "#ff9800",
    },
    background: {
      default: "#101610", // Dark background color
      paper: "#202420", // Dark paper color
    },
    headline: "#80ddff",
    buttonInvertColor: {
      main: richBlack,
    },
    borderColor: {
      main: "#5d5d5d",
    },
  },
}).palette;

const themeCreationFn = (activePalette: Palette) =>
  createTheme({
    palette: activePalette,
    typography: {
      fontFamily: fontFamily,
      fontSize: 14,
      // fontWeightLight: 300,
      // fontWeightRegular: 400,
      // fontWeightMedium: 500,
      // fontWeightBold: 700,
      h1: {
        fontWeight: 500, // Set the font weight for the h1
        margin: "0.66rem 0",
      },
      h2: {
        fontWeight: 500, // Set the font weight for the h2
        margin: "0.66rem 0",
      },
      h3: {
        fontWeight: 500, // Set the font weight for the h3
        margin: "0.66rem 0",
      },
      h4: {
        fontWeight: 500, // Set the font weight for the h4
        margin: "0.66rem 0",
      },
      h5: {
        fontWeight: 500, // Set the font weight for the h5
        margin: "0.66rem 0",
      },
      h6: {
        fontWeight: 500, // Set the font weight for the h6
        margin: "0.66rem 0",
      },
    },
    components: {
      MuiPaper: {
        defaultProps: {
          elevation: 0,
        },
        styleOverrides: {
          root: {
            border: "2px solid",
            boxShadow: "none",
            borderColor: activePalette.borderColor.main,
            padding: "0.33rem 0.66rem", // Add padding to the root of MuiPaper
            margin: "0.66rem 0.33rem", // Add margin to the root of MuiPaper
          },
        },
      },
      MuiInputBase: {
        styleOverrides: {
          input: {
            fontWeight: 500,
            backgroundColor: activePalette.background.default,
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            boxShadow: "none",
            "&:hover": {
              boxShadow: "none",
            },
          },
          containedPrimary: {
            backgroundColor: activePalette.primary.main,
            border: "2px solid",
            borderColor: activePalette.primary.main,
            color: activePalette.buttonInvertColor.main,
            "&:hover": {
              backgroundColor: activePalette.buttonInvertColor.main,
              color: activePalette.primary.main,
            },
            margin: "0.33rem", // Add margin to the root of containedPrimary button
          },
          containedSecondary: {
            backgroundColor: activePalette.secondary.main,
            border: "2px solid",
            borderColor: activePalette.secondary.main,
            color: activePalette.buttonInvertColor.main,
            "&:hover": {
              backgroundColor: activePalette.buttonInvertColor.main,
              color: activePalette.secondary.main,
            },
            margin: "0.33rem", // Add margin to the root of containedSecondary button
          },
          containedWarning: {
            backgroundColor: activePalette.buttonInvertColor.main,
            border: "2px solid",
            borderColor: activePalette.buttonInvertColor.main,
            color: activePalette.warning.main,
            "&:hover": {
              backgroundColor: activePalette.warning.main,
              color: activePalette.buttonInvertColor.main,
            },
            padding: "1rem 2rem", // Add padding to the root of containedWarning button
            margin: "0.66rem 0", // Add margin to the root of containedWarning button
          },
          // Add more color variations as needed (e.g., warning, error, etc.)
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            margin: "0.66rem 0",
          },
        },
      },
      MuiDivider: {
        styleOverrides: {
          root: {
            margin: "0.66rem 0", // Add margin to the root of MuiDivider
            padding: 0,
            border: "none",
            "&:after": {
              backgroundColor: activePalette.borderColor.main, // Set the color for the :after pseudo-element
              height: "2px", // Set the desired line width for the :after pseudo-element
            },
          },
        },
      },
    },
  });

export const lightTheme = themeCreationFn(lightPalette);
export const darkTheme = themeCreationFn(darkPalette);

//

//

//

//

//

//

const oldLightPalette = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#306900",
    },
    secondary: {
      main: "#333438",
    },
    warning: {
      main: "#762200",
    },
    buttonInvertColor: {
      main: basePalette.common.white,
    },
    borderColor: {
      main: "rgba(0, 0, 0, 0.12)",
    },
  },
}).palette;

const oldThemeCreationFn = (activePalette: Palette) =>
  createTheme({
    palette: activePalette,
    typography: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontSize: 14,
      // fontWeightLight: 300,
      // fontWeightRegular: 400,
      // fontWeightMedium: 500,
      // fontWeightBold: 700,
      h1: {
        fontWeight: 500, // Set the font weight for the h1
      },
      h2: {
        fontWeight: 500, // Set the font weight for the h2
      },
      h3: {
        fontWeight: 500, // Set the font weight for the h3
      },
      h4: {
        fontWeight: 500, // Set the font weight for the h4
      },
      h5: {
        fontWeight: 500, // Set the font weight for the h5
      },
      h6: {
        fontWeight: 500, // Set the font weight for the h6
      },
    },
    components: {
      MuiPaper: {
        defaultProps: {
          elevation: 0,
        },
        styleOverrides: {
          root: {
            border: "2px solid",
            boxShadow: "none",
            borderColor: activePalette.borderColor.main, // You can customize the border color
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            boxShadow: "none",
            "&:hover": {
              boxShadow: "none",
            },
          },
          containedPrimary: {
            backgroundColor: activePalette.primary.main,
            border: "2px solid",
            borderColor: activePalette.primary.main,
            color: activePalette.buttonInvertColor.main,
            "&:hover": {
              backgroundColor: activePalette.buttonInvertColor.main,
              color: activePalette.primary.main,
            },
          },
          containedSecondary: {
            backgroundColor: activePalette.secondary.main,
            border: "2px solid",
            borderColor: activePalette.secondary.main,
            color: activePalette.buttonInvertColor.main,
            "&:hover": {
              backgroundColor: activePalette.buttonInvertColor.main,
              color: activePalette.secondary.main,
            },
          },
          containedWarning: {
            backgroundColor: activePalette.buttonInvertColor.main,
            border: "2px solid",
            borderColor: activePalette.buttonInvertColor.main,
            color: activePalette.warning.main,
            "&:hover": {
              backgroundColor: activePalette.warning.main,
              color: activePalette.buttonInvertColor.main,
            },
          },
          // Add more color variations as needed (e.g., warning, error, etc.)
        },
      },
    },
  });
