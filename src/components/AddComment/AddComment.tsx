import React from "react";
import { useParams } from "react-router-dom";


import {TextField, Button} from "@mui/material";

import { props, useStyles } from "./styles";
import { appDispatch } from "../../redux/store";
import { addComment } from "../../redux/slices/posts/posts";

export const AddComment = () => {
  const styles = useStyles()
  const [text, setText] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const { id } = useParams();

  const onSubmit = async () => {
      setIsLoading(true);
      const fields = {
        postId: Number(id),
        content: text,
      };
      await appDispatch(addComment(fields))
      setText("");
      setIsLoading(false);
  };

  return (
    <>
        <div className={styles.root}>
          <div className={styles.form}>
            <TextField
              label="Залишити коментар..."
              variant="outlined"
              value={text}
              disabled={isLoading}
              onChange={(e) => setText(e.target.value)}
              maxRows={20}
              multiline
              fullWidth
              inputProps={props.inputProps}
            />
            <Button
              variant="contained"
              disabled={isLoading || text === ""}
              onClick={onSubmit}
            >
              Надіслати
            </Button>
          </div>
        </div>
    </>
  );
};
