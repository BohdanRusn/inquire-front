import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  container: {
    position: "absolute",
    top: "30%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  lockIconBlock: {
    textAlign: "center",
    color: "rgb(163, 163, 163)",
  },
  lockIcon: {
    "&.MuiSvgIcon-root": {
      height: 30,
      width: 30,
    },
  },
  description: {
    "&.MuiTypography-root": {
      color: "rgb(163, 163, 163)",
      fontWeight: "bold",
    },
  },
}));
