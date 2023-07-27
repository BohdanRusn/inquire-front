import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

import { useStyles } from "./styles";

import { IUserLoginData } from "../../components/interfaces/auth/IAuth";
import { isAuth } from "../../redux/slices/auth/authSelectors";
import { useMutation } from "@apollo/client";
import { useToast } from "../../hooks/toast/useToast";
import { appDispatch } from "../../redux/store";
import { logIn } from "../../redux/slices/auth/auth";
import { yupResolver } from "@hookform/resolvers/yup";
import { userLoginSchema } from "./validationSchema";
import { LoginUser } from "../../app/graphql/queries/queries";

export const Login = () => {
  const styles = useStyles();
  const isLoaded = useSelector( isAuth );
  const { errorToast } = useToast();
  const [ getAuthUser, { loading, error, data } ] = useMutation( LoginUser );
  
  
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm( {
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
    resolver: yupResolver( userLoginSchema ),
  } );

  const onSubmit = async (values: IUserLoginData) => {
    try {
      const { data } = await getAuthUser( { variables: { user: values } } )
      window.localStorage.setItem("user", JSON.stringify(data?.login))
      appDispatch(logIn(data?.login))
    }
    catch ( e ) {}
    
  };

  if (isLoaded) {
    return <Navigate to="/" />;
  }

  return (
    <Paper classes={{ root: styles.root }}>
      <Typography classes={{ root: styles.title }} variant="h5">
        Форма авторизації
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <TextField
          className={styles.field}
          label="Пошта"
          error={Boolean(errors.email?.message)}
          helperText={errors.email?.message}
          {...register("email")}
          fullWidth
        />
        <TextField
          className={styles.field}
          label="Пароль"
          type="password"
          error={Boolean(errors.password?.message)}
          helperText={errors.password?.message}
          {...register("password")}
          fullWidth
        />
        <Button
            disabled={!isValid}
            type="submit"
            size="large"
            variant="contained"
            fullWidth
        >
          <Typography className={styles.login}>Увійти</Typography>
        </Button>
      </form>
    </Paper>
  );
};
