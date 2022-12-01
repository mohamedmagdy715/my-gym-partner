import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { ROUTES_PATHS } from "../../../utils/RoutesPaths";
import { PASSWORDREGEX } from "../../../utils/constants";
import messages from "../../../assets/locales";
import { signUpRequest } from "../../../store/Auth/slice";

export default function SignUp() {
  const dispatch = useDispatch();
  const { locale } = useSelector((state) => state.locale);

  const navigate = useNavigate();

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
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validateOnBlur: true,
    validationSchema: Yup.object({
      firstName: Yup.string().required(
        messages[locale]["auth"]["validations"]["req"]
      ),
      lastName: Yup.string().required(
        messages[locale]["auth"]["validations"]["req"]
      ),
      email: Yup.string()
        .email(messages[locale]["auth"]["validations"]["emailValid"])
        .required(messages[locale]["auth"]["validations"]["emailReq"]),
      password: Yup.string()
        .matches(
          PASSWORDREGEX,
          messages[locale]["auth"]["validations"]["passwordValid"]
        )
        .required(messages[locale]["auth"]["validations"]["passwordReq"]),
    }),
    onSubmit: ({ firstName, lastName, email, password }) => {
      dispatch(
        signUpRequest({
          data: {
            firstName,
            lastName,
            email,
            password,
          },
          navigate,
        })
      );
    },
  });

  return (
    <Container component="main" maxWidth="xs">
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
          {messages[locale]["auth"]["signUp"]}
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Input
                required
                fullWidth
                id={"firstName"}
                label={messages[locale]["auth"]["firstName"]}
                name={"firstName"}
                autoComplete={"given-name"}
                type={"text"}
                onChange={(value) => {
                  setFieldValue("firstName", value);
                }}
                value={values["firstName"]}
                isInputHasErr={!!(touched["firstName"] && errors["firstName"])}
                errMsg={errors["firstName"]}
                onBlur={handleBlur}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Input
                required
                fullWidth
                id={"lastName"}
                label={messages[locale]["auth"]["lastName"]}
                name={"lastName"}
                autoComplete={"family-name"}
                type={"text"}
                onChange={(value) => {
                  setFieldValue("lastName", value);
                }}
                value={values["lastName"]}
                isInputHasErr={!!(touched["lastName"] && errors["lastName"])}
                errMsg={errors["lastName"]}
                onBlur={handleBlur}
              />
            </Grid>
            <Grid item xs={12}>
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
                value={values["email"]}
                isInputHasErr={!!(touched["email"] && errors["email"])}
                errMsg={errors["email"]}
                onBlur={handleBlur}
              />
            </Grid>
            <Grid item xs={12}>
              <Input
                required
                fullWidth
                id={"password"}
                label={messages[locale]["auth"]["password"]}
                name={"password"}
                autoComplete={"new-password"}
                type={"password"}
                onChange={(value) => {
                  setFieldValue("password", value);
                }}
                value={values["password"]}
                isInputHasErr={!!(touched["password"] && errors["password"])}
                errMsg={errors["password"]}
                onBlur={handleBlur}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            label={messages[locale]["auth"]["signUp"]}
            sx={{ mt: 3, mb: 2 }}
            disabled={!dirty || !isValid}
          />
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link to={ROUTES_PATHS.signIn}>
                {messages[locale]["auth"]["signInQuestion"]}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
