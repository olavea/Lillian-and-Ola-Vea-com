import * as React from "react";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { IconButton, InputAdornment, OutlinedInput } from "@mui/material";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        POW!
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  const [isPending, setIsPending] = useState();
  const [error, setError] = useState();
  const [rememberMe, setRememberMe] = useState("local");

  const handleSubmit = (event) => {
    event.preventDefault();

    setIsPending(true);
    setError(null);

    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get("email"),
      username: data.get("userName"),
      password: data.get("password"),
    });
    // if (result.error) {
    //   setIsPending(false);
    //   setError(result.error);
    // } else {
    //   if (onSubmitFulfilled) {
    //     onSubmitFulfilled();
    //   } else {
    //     navigate("/timeline/");
    //   }

    //   setIsPending(false);
    //}
  };
  const [values, setValues] = React.useState({
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const disabled = isPending;

  return (
    <ThemeProvider theme={theme}>
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
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Get started for $45 a year
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  disabled={disabled}
                  name="userName"
                  id="userName"
                  label="Username"
                  autoComplete="user-name"
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  disabled={disabled}
                  id="email"
                  label="Your Best Email Address"
                  name="email"
                  autoComplete="email"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <label>
                  {" "}
                  Password
                  <OutlinedInput
                    disabled={disabled}
                    value={values.password}
                    onChange={handleChange("password")}
                    // disabled={disabled}
                    id="outlined-adornment-password"
                    variant="outlined"
                    margin="normal"
                    name="password"
                    // label="Password"
                    type={values.showPassword ? "text" : "password"}
                    autoComplete="new-password"
                    placeholder="glitter-rainbow-butterfly-kitty"
                    //InputLabelProps={{ shrink: true }}
                    required
                    fullWidth
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {values.showPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </label>
              </Grid>

              <Grid item xs={12}>
                <FormControlLabel
                  disabled={disabled}
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want POW! emails."
                />
              </Grid>
            </Grid>
            <Button
              disabled={disabled}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Create account
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
