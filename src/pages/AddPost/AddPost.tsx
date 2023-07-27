import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import SimpleMDE from "react-simplemde-editor";
import { Options } from "easymde";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import "easymde/dist/easymde.min.css";

import { useStyles } from "./styles";
import { appDispatch } from "../../redux/store";
import { Box } from "@mui/material";
import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import { AddNewPost, GetPostById, UpdatePost } from "../../app/graphql/queries/queries";

export const AddPost = () => {
  const styles = useStyles();
  const location = useLocation();
  const [ title, setTitle ] = React.useState( "" );
  const [ content, setContent ] = React.useState( "" );
  const navigate = useNavigate();
  const { id } = useParams();
  const [ addNewPost, { loading: addLoading } ] = useMutation( AddNewPost );
  const [ updatePost, { loading: updateLoading } ] = useMutation( UpdatePost );
  const [getPostById, { loading, data: currentPost }] = useLazyQuery( GetPostById );
  
  const isEditing = Boolean( id );
  
  
  const onSubmit = async () => {
    const fields = {
      title,
      content,
    };
    const data = isEditing
      ? await updatePost( { variables: { post: { id: Number(id), newPost: fields } } }  )
      : await addNewPost( { variables: { newPost: fields } }  );
    console.log( data );
    const _id = data.data.addPost.id || data.data.updatePost.id;
    //
    navigate(`/posts/${_id}`);
  };

  React.useEffect(() => {
    if (id) {
      getPostById({ variables: { postId: Number( id ) } })
    }
    return () => {
      setTitle("");
      setContent("");
    }
  }, [location]);

  React.useEffect( () => {
    if ( currentPost?.post ) {
      setTitle( currentPost?.post.title );
      setContent( currentPost?.post.content );
    }
  }, [ currentPost ] )

  const onChange = React.useCallback((value: React.SetStateAction<string>) => {
    setContent(value);
  }, []);

  const options = React.useMemo(
    () => ({
      spellChecker: false,
      maxHeight: "400px",
      autofocus: true,
      placeholder: "Введіть текст...",
      status: false,
      autosave: {
        enabled: true,
        delay: 1000,
        uniqueId: "1",
      },
    }),
    []
  );

  return (
    <Box className={styles.root} sx={{ borderRadius: 3 }}>
      <TextField
        name="title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        variant="standard"
        className={styles.title}
        placeholder="Заголовок..."
        fullWidth
      />
      <SimpleMDE
        className={styles.editor}
        value={content}
        onChange={onChange}
        options={options as Options}
      />
      <Box className={styles.buttons}>
        <Button onClick={onSubmit} size="large" variant="contained">
          {isEditing ? "Зберегти" : "Створити"}
        </Button>
        <a href="/">
          <Button size="large">Відмінити</Button>
        </a>
      </Box>
    </Box>
  );
};
