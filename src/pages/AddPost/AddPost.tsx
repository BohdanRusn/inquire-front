import React from "react";
import { useNavigate, useParams, useLocation  } from "react-router-dom";
import { useSelector } from "react-redux";

import SimpleMDE from "react-simplemde-editor";
import { Options } from "easymde";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import "easymde/dist/easymde.min.css";

import { useStyles } from "./styles";
import { appDispatch } from "../../redux/store";
import { addPost, clearPost, getPostById, updatePost } from "../../redux/slices/posts/posts";
import { selectPostById } from "../../redux/slices/posts/postsSelectors";
import { Post } from "../../components/interfaces/IPost";
import { Box } from "@mui/material";

export const AddPost = () => {
  const styles = useStyles();
  const location = useLocation();
  const currentPost = useSelector(selectPostById) as Post;
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditing = Boolean(id);


  const onSubmit = async () => {
      const fields = {
        title,
        content,
      };
      const data = isEditing
        ? await appDispatch(updatePost({id: Number(id), updateData: fields}))
        : await appDispatch(addPost(fields));
      const _id = data.payload.id;

      navigate(`/posts/${_id}`);
  };

  React.useEffect(() => {
    if (id) {
      appDispatch(getPostById(+id))
    }
    return () => {
      setTitle("");
      setContent("");
      appDispatch(clearPost(null));
    }
  }, [location]);

  React.useEffect(()=>{
    if ( currentPost ){
      setTitle(currentPost.title);
      setContent(currentPost.content);
    }
  }, [currentPost])

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
