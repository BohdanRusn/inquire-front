import { makeStyles } from "@mui/styles"

export const useStyles = makeStyles({
  root: {
    display: "flex",
    marginTop: 10,
    paddingBottom: 20,
    marginRight: 20,
    marginLeft: 17,
  },
  avatar: {
    marginRight: 15,
  },

  form: {
    width: "100%",
    "& button": {
      marginTop: 10,
    },
  },
})

export const props = {
  inputProps: {
    maxLength: 300,
  },
}
