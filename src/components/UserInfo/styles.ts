import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    "& a": {
      textDecoration: "none",
      color: "inherit",
    },
  },

  avatar: {
    width: 30,
    height: 30,
    borderRadius: 30,
    marginRight: 10,
    transition: ".4s",
    "&:hover": {
      scale: "1.3"
    }
  },

  userName: {
    fontWeight: 500,
    fontSize: 14,
  },
  userDetails: {
    display: "flex",
    flexDirection: "column",
  },

  additional: {
    fontSize: 12,
    opacity: 0.6,
  },
})
