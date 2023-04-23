import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/system";

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: 400,
    padding: 50,
    border: "1px solid #dedede",
    margin: "50px auto",
  },

  registerForm: {
    "& .MuiTextField-root": {
      marginBottom: "20px",
    },
    "& .css-b62m3t-container": {
      marginBottom: "20px",
    }
  },

  title: {
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: "30px",
  },

  avatar: {
    display: "flex",
    justifyContent: "center",
    marginBottom: 30,
    cursor: "pointer",
  },

  register: {
    "&.MuiTypography-root": {
      color: "#fff",
    },
  },

  form: {
    marginTop: 20,
  },

  [theme.breakpoints.down(430)]: {
    root: {
      width: 370,
    },
  },

  [theme.breakpoints.down(380)]: {
    root: {
      width: 300,
    },
  },

  [theme.breakpoints.down(320)]: {
    root: {
      width: 230,
    },
  },
}));
