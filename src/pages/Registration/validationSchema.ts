import * as yup from "yup"
import { passwordOption } from "../Login/validationSchema";

export const userRegisterSchema = yup.object().shape({
  name: yup.string().min(3, "Мінімум 3 символи").required("Enter your Name").required(),
  email: yup.string().email("Введіть правильну пошту").required("Enter your email").required(),
  password: yup.string().matches(passwordOption, "Enter a stronger password").min(5, "Minimum 8 symbols").required("Enter your password").required()
})

