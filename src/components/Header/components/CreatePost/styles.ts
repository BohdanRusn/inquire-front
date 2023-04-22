import { makeStyles } from "@mui/styles"

export const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    textAlign: "center",
  },
  iconButton: {
    marginLeft: 2,
  },

  addCircleIcon: {
    width: 25,
    height: 25,
  },

  menuItem: {
    color: "rgb(163, 163, 163)",
  },

  addBtn: {
    marginLeft: 10,
  },

  addLink: {
    textDecoration: "none",
    color: "inherit",
    display: "flex",
    alignItems: "center",
  },

})

export const props = {
  paperProps: {
    elevation: 0,
    sx: {
      overflow: "visible",
      filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
      marginTop: 1.5,
      "& .MuiAvatar-root": {
        width: 32,
        height: 32,
        marginLeft: -0.5,
        marginRight: 1,
      },
      "&:before": {
        content: '""',
        display: "block",
        position: "absolute",
        top: 0,
        right: 14,
        width: 10,
        height: 10,
        backgroundColor: "background.paper",
        transform: "translateY(-50%) rotate(45deg)",
        zIndex: 0,
      },
    },
  },
  transformOriginProps: {
    horizontal: "right",
    vertical: "top",
  },

  anchorOrigin: {
    horizontal: "right",
    vertical: "bottom",
  },
}
