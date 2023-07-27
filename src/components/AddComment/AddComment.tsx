import React from "react";
import { useParams } from "react-router-dom";


import { Button, TextField } from "@mui/material";

import { props, useStyles } from "./styles";
import { ApolloQueryResult, useLazyQuery, useMutation } from "@apollo/client";
import { AddNewComment } from "../../app/graphql/queries/queries";
import { PostData } from "../interfaces/IPost";

export const AddComment = ({refetch}: {refetch: (variables?: (Partial<{postId: number}> | undefined)) => Promise<ApolloQueryResult<PostData>>}) => {
  const styles = useStyles();
  const [ addCommentRequest, { loading, data } ] = useMutation( AddNewComment );
  const [ text, setText ] = React.useState( "" );
  const [ isLoading, setIsLoading ] = React.useState( false );
  const { id } = useParams();
  
  const onSubmit = async () => {
    setIsLoading( true );
      const fields = {
        postId: Number(id),
        content: text,
      };
    await addCommentRequest( { variables: { newComment: fields } } );
    setText( "" );
    refetch();
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
