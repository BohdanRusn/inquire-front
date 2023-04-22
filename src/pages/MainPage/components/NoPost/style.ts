import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  container: {
    margin: "0 auto",
    display: "flex",
    justifyContent: "center"
  },
  content: {
    marginTop: 50
  },
  image: {

  },
  description: {
    "&.MuiTypography-root": {
      color: "rgb(163, 163, 163)",
      fontWeight: "bold",
    },
  },
}));
