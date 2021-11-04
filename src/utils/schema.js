import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup
    .string()
    .required("Please enter your name")
    .min(3, "Name must be at least 3 characters"),

  email: yup
    .string()
    .required("Please enter an email address")
    .email("Please enter a valid email address"),

  subject: yup
    .string()
    .required("Please enter your subject")
    .min(4, "Subject must be at least 4 characters"),

  message: yup
    .string()
    .required("Please enter an message")
    .min(10, "The message must be at least 10 characters"),
});
