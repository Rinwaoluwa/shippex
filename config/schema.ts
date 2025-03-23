import * as yup from "yup";

export const login = yup.object({
    url: yup.string(),
    usernameOrPassword: yup.string().required(),
    password: yup.string().required(),
});
