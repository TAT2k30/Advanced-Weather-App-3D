import * as yup from "yup";
import { errorMessages } from "../messages/errorMessage";

export const RegisterSchema = yup.object({
  email: yup
    .string()
    .email(errorMessages.email.invalid)
    .required(errorMessages.email.required),
  password: yup
    .string()
    .min(6, errorMessages.password.minLength)
    .required(errorMessages.password.required),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), undefined], errorMessages.password.notMatch)
    .required("Confirm password is required"),
});


