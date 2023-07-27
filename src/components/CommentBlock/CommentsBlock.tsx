import React from "react";

import {
  Avatar,
  Box,
  CardContent,
  CardHeader, CircularProgress,
  Collapse,
  Container,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Skeleton,
  Tooltip,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import { useStyles } from "./styles";
import { appDispatch } from "../../redux/store";
import { closeModal, openModal } from "../../redux/slices/modal";
import { ModalType } from "../../redux/types/modal";
import { avatarUrl } from "../UserInfo/UserInfo";
import { IAuthData } from "../interfaces/auth/IAuth";
import { ApolloQueryResult, useMutation } from "@apollo/client";
import { DeleteComment } from "../../app/graphql/queries/queries";
import { PostData } from "../interfaces/IPost";

interface ICommentsBlock {
  items: Comment[] | [];
  children: React.ReactNode;
  isLoading: boolean;
  postOwner: IAuthData;
  refetch: ( variables?: ( Partial<{ postId: number }> | undefined ) ) => Promise<ApolloQueryResult<PostData>>;
}

export const CommentsBlock = ( {
   items,
   postOwner,
   children,
   refetch,
   isLoading = true,
 }: ICommentsBlock ) => {
  const styles = useStyles();
  const [ deleteComment ] = useMutation( DeleteComment );
  const userData = JSON.parse( window.localStorage.getItem( "user" ) as string );
  const [ open, setOpen ] = React.useState( false );
  
  const onClickRemove = ( id: number ) => {
    appDispatch( openModal( {
      type: ModalType.RemoveComment,
      onCancel: () => {
        appDispatch( closeModal( ModalType.RemoveComment ) );
      },
      onSubmit: () => {
        deleteComment( {
          variables: {
            id,
          },
        } );
        refetch();
        appDispatch( closeModal( ModalType.RemoveComment ) );
      },
    }))
  };

  return (
    <Box className={ styles.root }>
      <CardHeader
        title={
          <>
            <Typography component="span">Коментарі</Typography>&nbsp;
            <Typography component="span">
              { isLoading ? (
                <CircularProgress style={ { width: 20, height: 20 } }/>
              ) : (
                items?.length
              ) }
            </Typography>
          </>
        }
        action={
          <>
            { items?.length !== 0 && (
              <IconButton
                onClick={ () => setOpen(!open) }
                aria-label="expand"
                size="small"
              >
                { open ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/> }
              </IconButton>
            ) }
          </>
        }
      ></CardHeader>
      { children }
      <Box>
        <Collapse in={ open } timeout="auto" unmountOnExit>
          <CardContent>
            <Container>
              <List>
                { ( isLoading ? [ ...Array( 5 ) ] : items )?.map( ( comment: any, index: number ) => {
                    
                    return (
                      <React.Fragment key={ index }>
                        <ListItem alignItems="flex-start">
                          <ListItemAvatar>
                            { isLoading ? (
                              <Skeleton variant="circular" width={ 40 } height={ 40 }/>
                            ) : (
                              <Box>
                                <Tooltip title="Відвідати профіль">
                                  <Avatar src={ avatarUrl } alt={ "Тут нікого немає" }>
                                    :)
                                  </Avatar>
                                </Tooltip>
                              
                              </Box>
                            ) }
                          </ListItemAvatar>
                          { isLoading ? (
                            <div className={ styles.skeletonWrapper }>
                              <Skeleton variant="text" height={ 25 } width={ 70 }/>
                              <Skeleton variant="text" height={ 18 } width={ 130 }/>
                            </div>
                          ) : (
                            <Box
                              style={ {
                                display: "flex",
                                width: "100%",
                              } }
                            >
                              <ListItemText
                                primary={ comment?.author?.name }
                                secondary={ comment.content }
                              />
                              { userData && ( userData.id === comment.author?.id ||
                                userData.id === postOwner?.id ) && ( <Tooltip title="Видалити коментар">
                                <IconButton
                                  aria-label="close"
                                  onClick={ () => onClickRemove( comment.id ) }
                                  className={ styles.iconButton }
                                >
                                  <DeleteIcon className={ styles.closeIcon }/>
                                </IconButton>
                              </Tooltip> ) }
                            </Box>
                          ) }
                        </ListItem>
                        <Divider variant="inset" component="li"/>
                      </React.Fragment>
                    );
                  },
                ) }
              </List>
            </Container>
          </CardContent>
        </Collapse>
      </Box>
    </Box>
  );
};
