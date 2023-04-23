import * as yup from "yup"

export const passwordOption = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&_])[A-Za-z\d@$!%*_#?&]*$/;
export const userLoginSchema = yup.object().shape({
    email: yup.string().email("Введіть правильну пошту").required("Enter your email"),
    password: yup.string().matches(passwordOption, "Enter a stronger password").min(8, "Minimum 8 symbols").required("Enter your password")
})

