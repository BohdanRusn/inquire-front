import {makeStyles} from "@mui/styles";

export const useStyles = makeStyles({
    content: {
        position: "absolute",
        top: "30%",
        left: "48%",
        transform: "translate(-50%, -50%)",
    },

    lockIconText: {
        textAlign: "center",
        color: "rgb(163, 163, 163)",
    },

    lockIcon: {
        height: 30,
        width: 30,
    },

    text: {
        textAlign: "center",
        color: "rgb(163, 163, 163)",
    },

    buttons: {
        display: "flex",
        justifyContent: "center",
        marginTop: 20,
        "& button": {
            marginLeft: 10,
        },
        "& a": {
            textDecoration: "none",
        },
    },
    buttonText: {
        fontSize: 15,
    },
})
