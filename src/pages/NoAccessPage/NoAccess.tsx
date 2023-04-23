import React from "react";
import { Typography, Box } from "@mui/material";
import LockIcon from "@mui/icons-material/LockOutlined";
import { useStyles } from "./style";

interface NoAccessProps {
  text: string;
}

export const NoAccess = ({text}: NoAccessProps) => {
  const styles = useStyles();
  return (
    <Box className={styles.container}>
      <Typography>
        <Typography className={styles.lockIconBlock}>
          <LockIcon className={styles.lockIcon} />
        </Typography>
      </Typography>
      <Typography className={styles.description}>{text}</Typography>
    </Box>
  );
};
