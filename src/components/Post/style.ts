import { Theme } from "@mui/system";
import { makeStyles } from "@mui/styles";

const blue = "#81C8C8";

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: "10px 30px 20px 30px",
    backgroundColor: "#fff",
    border: "1px solid #dedede",
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 15,
    position: "relative",
    boxShadow: "3px 3px 3px #dedede",
    "&:hover": {
      border: `1px solid ${blue}`,
      boxShadow: `0 0 0 1px ${blue}`,
    },
  },
  editableRoot: {
    padding: "10px 30px 20px 30px",
    backgroundColor: "#fff",
    border: "1px solid #dedede",
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 15,
    position: "relative",
    boxShadow: "3px 3px 3px #dedede",
    "& > *:first-child": {
      opacity: 0,
    },
    "&:hover": {
      border: `1px solid ${blue}`,
      boxShadow: `0 0 0 1px ${blue}`,
      "& > *:first-child": {
        opacity: 0,
      },
      "&:hover": {
        border: `1px solid ${blue}`,
        boxShadow: `0 0 0 1px ${blue}`,
        "& > *:first-child": {
          opacity: "1",
        },
      },
    },
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: 12,

    "&Full": {
      minHeight: 300,
      height: "100%",
    },
  },

  wrapper: {
    padding: "10px 0 0 10px",
  },

  content: {
    margin: "30px 0 50px",

    "& p": {
      fontSize: 22,
      lineHeight: "36px",
    },
  },

  details: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  indention: {
    paddingTop: 20,
  },

  title: {
    fontSize: 28,
    margin: 0,

    "& a": {
      textDecoration: "none",
      color: "#000",

      "&:hover": {
        color: `${blue}`,
      },
    },

    "&Full": {
      fontSize: 42,
      fontWeight: 900,
    },
  },

  tags: {
    listStyle: "none",
    padding: 0,
    margin: "5px 0 0 0",

    "& li": {
      display: "inline-block",
      fontSize: 14,
      marginRight: 15,
      opacity: 0.5,

      "&:hover": {
        opacity: 1,
      },

      "& a": {
        textDecoration: "none",
        color: "#000",
      },
    },
  },

  buttonDetails: {
    listStyle: "none",
    padding: 0,
    marginTop: 20,

    "& span": {
      fontSize: 16,
    },

    "& li": {
      display: "inline-flex",
      alignItems: "center",
      fontSize: 28,
      marginRight: 20,
      opacity: 0.5,

      "& svg": {
        fontSize: 28,
      },
    },
  },

  postDetails: {
    listStyle: "none",
    zIndex: 0,
    padding: 0,
    marginTop: 20,

    "& li": {
      display: "inline-flex",
      alignItems: "center",
      fontSize: 14,
      marginRight: 20,
      opacity: 0.5,

      "& svg": {
        fontSize: 18,
        marginRight: 5,
      },
    },
  },

  editButtons: {
    position: "absolute",
    zIndex: 1,
    right: 15,
    top: 15,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderBottom: "1px solid #dedede",
    borderRadius: 10,
    transition: "all 0.15s ease-in-out",
  },

  [theme.breakpoints.down(428)]: {
    image: {
      height: "100%",
    },

    postDetails: {
      "& li": {
        marginRight: "5px",
      },
    },

    title: {
      fontSize: 22,
    },

    wrapper: {
      padding: "20px 0 0 0",
    },
  },

  [theme.breakpoints.down(350)]: {
    postDetails: {
      display: "contents",
    },
    title: {
      fontSize: 18,
    },
    buttonDetails: {
      listStyle: "none",
      padding: 0,
      marginTop: 20,

      "& span": {
        fontSize: 16,
      },

      "& li": {
        display: "inline-flex",
        alignItems: "center",
        fontSize: 28,
        marginRight: 20,
        opacity: 0.5,

        "& svg": {
          fontSize: 28,
        },
      },

      sendIcon: {
        color: "#000",
      },

      content: {
        "& p": {
          fontSize: 15,
          lineHeight: "36px",
        },
      },
    },
  },
}));
