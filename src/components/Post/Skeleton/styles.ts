import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  skeleton: {
    padding: "20px 30px",
    backgroundColor: "#fff",
    border: "1px solid #dedede",
    borderRadius: 6,
    overflow: "hidden",
    marginBottom: 15,

    "&Content": {
      padding: 20,
    },

    "&Info": {
      marginLeft: 50,
    },
  },

  skeletonUser: {
    display: "flex",
    justifyContent: "space-between",

    "&Details": {
      display: "flex",
      flexDirection: "column",
    },
  },

  skeletonTags: {
    display: "flex",
    justifyContent: "space-between",
  },

  skeletonViews: {
    display: "flex",
    gap: 10,
    alignItems: "center",
  }
})
