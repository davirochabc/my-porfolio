import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#00adb5",
    },
    secondary: {
      main: "#ff5722",
    },
    background: {
      default: "#121212",
      paper: "#1e1e1e",
    },
  },
  typography: {
    fontFamily: "'Roboto Mono', monospace",
    h1: { fontWeight: 700, fontSize: "3rem" },
    h2: { fontWeight: 500, fontSize: "2rem" },
    body1: { fontSize: "1.1rem", lineHeight: 1.6 },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "8px",
          padding: "8px 20px",
        },
      },
    },
  },
});

export default theme;
