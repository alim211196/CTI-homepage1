import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme.jsx";
import { CssBaseline, GlobalStyles } from "@mui/material";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          "@keyframes pulseShape": {
            "0%": { transform: "scale(1)", opacity: 0.7 },
            "50%": { transform: "scale(1.1)", opacity: 1 },
            "100%": { transform: "scale(1)", opacity: 0.7 },
          },
        }}
      />
      <App />
    </ThemeProvider>
  </StrictMode>
);
