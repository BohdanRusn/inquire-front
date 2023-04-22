import * as React from "react";
import { Link } from "react-router-dom";

import Box from "@mui/material/Box";
import PostAddOutlinedIcon from "@mui/icons-material/PostAddOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import {PopoverOrigin, Typography } from "@mui/material";
import {props, useStyles} from "./styles"

export const CreatePost = () => {
  const styles = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box className={styles.root}>
        <Tooltip title="Створити">
          <IconButton
            onClick={handleClick}
            size="small"
            className={styles.iconButton}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <AddCircleOutlineOutlinedIcon className={styles.addCircleIcon}/>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={props.paperProps}
        transformOrigin={props.transformOriginProps as PopoverOrigin}
        anchorOrigin={props.anchorOrigin as PopoverOrigin}
      >
        <MenuItem className={styles.menuItem}>
          <Link
            to="/add-post"
            className={styles.addLink}
          >
            <PostAddOutlinedIcon />
            <Typography component="span" className={styles.addBtn}>Створити пост</Typography>
          </Link>
        </MenuItem>
      </Menu>
    </>
  );
};
