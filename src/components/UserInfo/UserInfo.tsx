import React from "react";

import { Tooltip } from "@mui/material";

import { useStyles } from "./styles";
import Avatar from "@mui/material/Avatar";
import { IAuthData } from "../interfaces/auth/IAuth";

export const fullName = "Тут могло бути ім'я людини, але я спішу";
export const avatarUrl = "https://guru-tuning.com/upload/iblock/212/2120b67959f713edf90a1290d0676f97.jpg";
export const UserInfo = ({ user }: any) => {
  const styles = useStyles()
  return (
    <div className={ styles.root }>
      <Tooltip title="Відвідати профіль">
        <Avatar className={ styles.avatar } src={ avatarUrl }/>
      </Tooltip>
      <div className={ styles.userDetails }>
        <Tooltip title="Відвідати профіль">
          <span className={ styles.userName }>{ user ? user.name : fullName }</span>
        </Tooltip>
        <span className={ styles.additional }>Тестовий проект</span>
      </div>
    </div>
  );
};
