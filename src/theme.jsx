// theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#85151C",
      light: "#CB1C1B",
    },
    secondary: {
      main: "#FF4939",
    },
    neutral: {
      main: "#FCC380",
      light: "#FCE297",
      white: "#FFFFFF",
      black: "#000000",
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
});

export default theme;
