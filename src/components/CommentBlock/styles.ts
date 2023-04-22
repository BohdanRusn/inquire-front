import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  root: {
    padding: "20px 20px",
    backgroundColor: "#fff",
    border: "1px solid #dedede",
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 15,
    position: "relative",
    boxShadow: "3px 3px 3px #dedede",
    minWidth: 300,
  },

  iconButton: {
    position: "absolute",
    right: 8,
    top: 8,
    color: "grey",
  },
  closeIcon: {
    width: 20,
    height: 20,
    marginTop: "-10px",
  },

  skeletonWrapper: {
    display: "flex",
    flexDirection: "column",
  },

  avatarLink: {
    textDecoration: "none",
  },

  listItemText: {
    wordBreak: "break-word",
    marginTop: 100,
  },
}));
