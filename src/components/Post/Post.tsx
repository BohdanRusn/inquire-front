import React from "react";
import clsx from "clsx";
import { Link, useNavigate } from "react-router-dom";

import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Clear";
import EditIcon from "@mui/icons-material/Edit";
import CommentIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";

import { PostSkeleton } from "./Skeleton/Skeleton";

import { Box } from "@mui/material";
import 'react-toastify/dist/ReactToastify.css';
import { useStyles } from "./style";
import { appDispatch } from "../../redux/store";
import { removePost } from "../../redux/slices/posts/posts";
import { closeModal, openModal } from "../../redux/slices/modal";
import { ModalType } from "../../redux/types/modal";
import { UserInfo } from "../UserInfo/UserInfo";
import { IAuthData } from "../interfaces/auth/IAuth";

interface PostProps {
  title: string;
  children?: JSX.Element;
  id: number;
  user: IAuthData;
  commentsCount: number;
  isFullPost?: boolean;
  isLoading?: boolean;
  isEditable?: boolean;
}

export const Post = ({
  id,
  title,
  children,
  user,
  isFullPost,
  isEditable,
  commentsCount,
  isLoading,
}: PostProps) => {
  const navigate = useNavigate();
  const styles = useStyles();
  if ( isLoading ) {
    return <PostSkeleton/>;
  }
  const onClickRemove = () => {
    appDispatch(openModal({
      type: ModalType.RemovePost,
      onCancel: () => {
        appDispatch(closeModal(ModalType.RemovePost));
      },
      onSubmit: () => {
        appDispatch(removePost(id));
        appDispatch(closeModal(ModalType.RemovePost));
      },
    }))
    navigate("/");
  };


  return (
    <Box className={ isEditable ? styles.editableRoot : styles.root }>
      { isEditable && (
        <Box className={ styles.editButtons }>
        <Link to={ `/posts/${ id }/edit` }>
          <IconButton color="warning">
            <EditIcon/>
          </IconButton>
        </Link>
        <IconButton onClick={ onClickRemove } color="error">
          <DeleteIcon/>
        </IconButton>
      </Box>
      ) }
      <Box className={ styles.wrapper }>
        <Box className={ styles.details }>
          <UserInfo user={ user }/>
          <ul className={ styles.postDetails }>
            <li>
              <CommentIcon/>
              <span>{ commentsCount }</span>
            </li>
          </ul>
        </Box>
        <Box className={ styles.indention }>
          <h2
            className={ clsx(styles.title, { [styles.titleFull]: isFullPost }) }
          >
            { isFullPost ? title : <Link to={ `/posts/${ id }` }>{ title }</Link> }
          </h2>
          { children && <Box className={ styles.content }>{ children }</Box> }
        </Box>
      </Box>
    </Box>
  );
};
