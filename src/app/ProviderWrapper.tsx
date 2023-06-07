"use client";

import {
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { SnackbarProvider } from "notistack";
declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}
export default function ProviderWrapper({ children }: { children: any }) {
  const font = "'Montserrat', sans-serif";
  const theme = createTheme({
    palette: {
      primary: {
        main: "#089B74",
      },
      secondary: {
        main: "#000",
      },
    },
    typography: {
      fontFamily: font,
      h3: {
        fontWeight: "bold",
        fontSize: "48pt",
        lineHeight: "116%",
      },
      h5: {
        fontSize: "24pt",
        fontWeight: "bold",
      },
    },
  });
  return (
    <StyledEngineProvider injectFirst>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <SnackbarProvider>{children}</SnackbarProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
