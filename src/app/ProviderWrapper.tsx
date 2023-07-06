"use client";

import {
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
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
  let theme = createTheme({
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
    },
  });
  theme = responsiveFontSizes(theme);
  return (
    <StyledEngineProvider injectFirst>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <SnackbarProvider>{children}</SnackbarProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
