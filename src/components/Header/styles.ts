import {makeStyles} from "@mui/styles";
import {Theme} from "@mui/system";

export const useStyles = makeStyles((theme: Theme) => ({
    header: {
        backgroundColor: "#ebf3f5",
        padding: "10px 0",
        borderBottom: " 1px solid #e0e0e0",
        marginBottom: 30,
    },

    logo: {
        width: 50,
        cursor: "pointer",
        color: "#4A6F44",
        fontWeight: 700,
        lineHeight: "35px",
        textTransform: "uppercase",
        letterSpacing: 1.15,
        borderRadius: 5,
        padding: "0 10px",
        textDecoration: "none",
        display: "flex",
        alignItems: "center",
    },

    inner: {
        display: "flex",
        justifyContent: "space-between",
    },

    buttons: {
        "& button": {
            marginLeft: 10,
        },

        "& a": {
            textDecoration: "none",
        },
    },
}))
