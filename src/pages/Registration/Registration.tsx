import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { Box, Button, Paper, TextField, Typography } from "@mui/material";


import { yupResolver } from "@hookform/resolvers/yup";
import { userRegisterSchema } from "./validationSchema";
import { IUserRegisterData } from "../../components/interfaces/auth/IAuth";

import { useStyles } from "./styles";
import { useToast } from "../../hooks/toast/useToast";
import { useMutation } from "@apollo/client";
import { RegisterUser } from "../../app/graphql/queries/queries";

export const Registration = () => {
  const styles = useStyles();
  const { successToast } = useToast();
  const [ registerUser ] = useMutation( RegisterUser );
  const navigate = useNavigate();
  
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    mode: "onChange",
    resolver: yupResolver(userRegisterSchema),
  });


  const onSubmit = async (values: IUserRegisterData) => {
    try {
      const { data } = await registerUser( { variables: { user: values } } );
      console.log( data );
      successToast("Реєстрація прошла успішно")
      navigate("/login")
    } catch ( e ) {}
  };

  return (
    <Paper classes={ { root: styles.root } }>
      <Typography classes={ { root: styles.title } } variant="h5">
        Форма реєстрації
      </Typography>
      <Box className={ styles.form }>
        <form className={ styles.registerForm } onSubmit={ handleSubmit(onSubmit) }>
          <TextField
            label="Ім'я"
            fullWidth
            error={ Boolean(errors.name?.message) }
            helperText={ errors.name?.message }
            { ...register("name") }
          />
          <TextField
            label="Пошта"
            fullWidth
            error={ Boolean(errors.email?.message) }
            helperText={ errors.email?.message }
            { ...register("email") }
          />
          <TextField
            style={ { zIndex: 0 } }
            label="Пароль"
            type="password"
            fullWidth
            error={ Boolean(errors.password?.message) }
            helperText={ errors.password?.message }
            { ...register("password") }
          />
          <Button
            disabled={ !isValid }
            type="submit"
            size="large"
            variant="contained"
            fullWidth
          >
            <Typography className={ styles.register }>Створити акаунт</Typography>
          </Button>
        </form>
      </Box>
    </Paper>
  );
};
