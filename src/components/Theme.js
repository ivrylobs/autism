import { createMuiTheme } from "@material-ui/core/styles";

const arcGreen = "#B1BE12";
const arcRed = "#EF5666";
const arcBlue = "#3AC7FD";
const arcOrange = "#F26705";

export default createMuiTheme({
  palette: {
    common: {
      green: "#B1BE12",
      red: "#EF5666",
      blue: "#3AC7FD",
      orange: "#F26705",
    },
    // Red
    primary: {
      main: "#EF5666",
      light: "#EAA0A8",
      contrastText: "#000",
    },
    // Green
    secondary: {
      main: "#B1BE12",
      light: "#DBE0A5",
      contrastText: "#fff",
    },
    // Orange
    warning: {
      main: "#F26705",
      light: "#ED9B61",
      contrastText: "#fff",
    },
    // Blue
    success: {
      main: "#3AC7FD",
      light: "#ADE8FF",
      contrastText: "#fff",
    },
  },
  typography: {
    fontFamily: [" 'Trirong', sans-serif ", " 'Raleway', sans-serif "].join(
      ","
    ),
    h1: {
      fontWeight: 700,
      fontSize: 93,
      lineHeight: 1.167,
      letterSpacing: "-0.01562em",
    },
    h2: {
      fontWeight: 600,
      fontSize: 60,
      lineHeight: 1.2,
      letterSpacing: "-0.00833em",
    },
    h3: {
      fontWeight: 700,
      fontSize: 48,
      lineHeight: 1.167,
      letterSpacing: "0em",
    },
    h4: {
      fontWeight: 700,
      fontSize: 34,
      lineHeight: 1.235,
      letterSpacing: "0.00735em",
    },
    h5: {
      fontWeight: 500,
      fontSize: 24,
      lineHeight: 1.334,
      letterSpacing: "0em",
    },
    h6: {
      fontWeight: 500,
      fontSize: 20,
      lineHeight: 1.6,
      letterSpacing: "0.0075em",
    },
    subtitle1: {
      fontWeight: 400,
      fontSize: 16,
      lineHeight: 1.75,
      letterSpacing: "0.00938em",
    },
    subtitle2: {
      fontWeight: 500,
      fontSize: 14,
      lineHeight: 1.57,
      letterSpacing: "0.00714em",
    },
    caption: {
      fontWeight: 400,
      fontSize: 12,
      lineHeight: 1.66,
      letterSpacing: "0.03333em",
    },
    tab: {
      fontFamily: "Trirong",
      textTransform: "none",
      fontWeight: 700,
      fontSize: 16,
    },
    estimate: {
      fontFamily: "Trirong",
      fontSize: 16,
      textTransform: "none",
    },
  },
});
