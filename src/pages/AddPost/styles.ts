import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/system";

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: "20px 30px",
    boxShadow: "3px 3px 3px #dedede",
    border: "1px solid #dedede",
  },

  title: {
    input: {
      fontSize: "20px",
      fontWeight: 900,
    },
    "& div": {
      fontSize: 40,
      "&:before": {
        display: "none",
      },
      "&:after": {
        display: "none",
      },
    },
  },

  image: {
    width: "100%",
    marginTop: 20,
    borderRadius: 5,
  },

  tags: {
    margin: "15px 0",
  },

  editor: {
    margin: "30px -30px",
    padding: "0 20px",

    "&:global": {
      "&cm-s-easymde": {
        border: 0,
        fontSize: 22,
      },

      editorToolbar: {
        border: 0,
        backgroundColor: "rgb(0 0 0 / 2%)",
      },
    },
  },

  buttons: {
    display: "flex",

    "& button": {
      marginRight: 15,
    },

    "& a": {
      textDecoration: "none",
    },
  },

  [theme.breakpoints.down(500)]: {
    title: {
      "& div": {
        fontSize: 30,
      },
      input: {
        fontSize: 29,
        fontWeight: 900,
      },
    },
  },

  [theme.breakpoints.down(380)]: {
    title: {
      "& div": {
        fontSize: 25,
      },
      input: {
        fontSize: 12,
      },
    },
    tags: {
      "& div": {
        fontSize: 13,
      },
      input: {
        fontSize: 12,
      },
    },
  },

  [theme.breakpoints.down(320)]: {
    title: {
      input: {
        fontSize: 20,
        fontWeight: 900,
      },
    },

    tags: {
      input: {
        fontSize: 10,
      },
    },
  },
}));
