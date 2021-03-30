import React from "react";
import ReactDOM from "react-dom";
// import App from "./App";
import AppRouter from "./components/router/AppRouter";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";

// AVERIGUAR SI EN EL TEMA SE PUEDEN CREAR PROPIEDADES CON ESTILOS NUEVOS.
const theme = createMuiTheme({
  props: {
    MuiButton: {
      disableElevation: true,
    },
  },
  palette: {
    primary: {
      main: "#ff6600",
      dark: "#f89321",
    },
    secondary: { main: "#773090" },
  },
  typography: {
    button: {
      fontWeight: "bold",
      letterSpacing: "0",
      textTransform: "none",
    },
    h1: {
      fontWeight: "900",
    },
    h2: {
      fontWeight: "900",
      '@media (max-width:600px)': {
        fontSize: '54px',
      },
    },
    h3: {
      fontSize: "46px",
      fontWeight: "bold",
      '@media (max-width:600px)': {
        fontSize: '40px',
      },
    },
    h4: {
      fontWeight: "bold",
      '@media (max-width:600px)': {
        fontSize: '25px',
      },
    },
    h5: {
      fontWeight: "bold",
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
