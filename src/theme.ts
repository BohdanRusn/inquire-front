import { ukUA } from "@mui/material/locale";
import { createTheme } from "@mui/material/styles";

export const theme = createTheme(
  {
    palette: {
      primary: {
        main: "#4A6F44",
      },
      warning: {
        main: "#efa567",
      }
    },
    typography: {
      button: {
        textTransform: "none",
        fontWeight: 400,
      },
    }
  },
  ukUA
);
