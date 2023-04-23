import React from "react";
import { Link } from "react-router-dom";
import LockIcon from "@mui/icons-material/LockOutlined";
import { Typography, Box, Button } from "@mui/material";

import {useStyles} from "./styles";

export const GetAuth = () => {
    const styles = useStyles()
  return (
    <Box className={styles.content}>
      <Typography className={styles.lockIconText}>
        <LockIcon className={styles.lockIcon} />
      </Typography>
      <Typography className={styles.text}>
        Увійдіть, щоб скористатись усім функціоналом сервісу.
      </Typography>
      <Box className={styles.buttons}>
      <Link to="/login">
        <Button size="small" variant="outlined">Увійти</Button>
      </Link>
      <Link to="/register">
        <Button size="small" variant="contained">
          <Typography color="white" className={styles.buttonText}>Зареєструватись</Typography>
        </Button>
      </Link>
      </Box>
    </Box>
  );
};
