import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import Input from "../../../components/Input";
import Checkbox from "../../../components/Checkbox";
import Button from "../../../components/Button";
import { ROUTES_PATHS } from "../../../utils/RoutesPaths";
import messages from "../../../assets/locales";

export default function SignIn() {
  const { locale } = useSelector((state) => state.locale);

  const {
    values,
    setFieldValue,
    handleSubmit,
    touched,
    errors,
    dirty,
    isValid,
    handleBlur,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    validateOnBlur: true,
    validationSchema: Yup.object({
      email: Yup.string()
        .email(messages[locale]["auth"]["validations"]["emailValid"])
        .required(messages[locale]["auth"]["validations"]["emailReq"]),
      password: Yup.string().required(
        messages[locale]["auth"]["validations"]["passwordReq"]
      ),
    }),
    onSubmit: ({ email, password, rememberMe }) => {
      console.log({
        email,
        password,
        rememberMe,
      });
    },
  });

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
          <img
            src="https://emojipedia-us.s3.amazonaws.com/source/noto-emoji-animations/344/flexed-biceps_light-skin-tone_1f4aa-1f3fb_1f3fb.gif"
            alt="logo"
            width={"40px"}
          />
        </Avatar>
        <Typography component="h1" variant="h5">
          {messages[locale]["auth"]["signIn"]}
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <Input
            required
            fullWidth
            id={"email"}
            label={messages[locale]["auth"]["email"]}
            name={"email"}
            autoComplete={"email"}
            type={"text"}
            onChange={(value) => {
              setFieldValue("email", value);
            }}
            sxWrapper={{ my: 1 }}
            value={values["email"]}
            isInputHasErr={!!(touched["email"] && errors["email"])}
            errMsg={errors["email"]}
            onBlur={handleBlur}
          />
          <Input
            required
            fullWidth
            id={"password"}
            label={messages[locale]["auth"]["password"]}
            name={"password"}
            autoComplete={"current-password"}
            type={"password"}
            onChange={(value) => {
              setFieldValue("password", value);
            }}
            value={values["password"]}
            sxWrapper={{ my: 1 }}
            isInputHasErr={!!(touched["password"] && errors["password"])}
            errMsg={errors["password"]}
            onBlur={handleBlur}
          />
          <Checkbox
            label={messages[locale]["auth"]["rememberMe"]}
            name="rememberMe"
            checked={values["rememberMe"]}
            onChange={(value) => {
              setFieldValue("rememberMe", value);
            }}
            id={"remember"}
          />
          <Button
            type="submit"
            fullWidth
            label={messages[locale]["auth"]["signIn"]}
            sx={{ mt: 3, mb: 2 }}
            disabled={!dirty || !isValid}
          />
          <Grid container justifyContent={"space-between"}>
            <Grid item>
              <Link to={ROUTES_PATHS.root}>
                {messages[locale]["auth"]["forgotPassword"]}
              </Link>
            </Grid>
            <Grid item>
              <Link to={ROUTES_PATHS.signUp}>
                {messages[locale]["auth"]["signUpQuestion"]}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
