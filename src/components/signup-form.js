import React, { useState } from "react";

import {
  Button,
  TextField,
  FormControlLabel,
  Box,
  Checkbox,
  IconButton,
  InputAdornment,
} from "@mui/material";

import {
  Visibility as VisibilityOnIcon,
  VisibilityOff as VisibilityOffIcon,
} from "@mui/icons-material";

export const SignUpForm = () => {
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
  const [values, setValues] = useState({
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
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
      component="form"
    >
      <TextField
        disabled={disabled}
        label="Username"
        type="text"
        autoComplete="username"
        sx={{ mb: 3 }}
        required
        fullWidth
      />

      <TextField
        disabled={disabled}
        label="Email address"
        type="email"
        autoComplete="email"
        sx={{ mb: 3 }}
        required
        fullWidth
      />

      <TextField
        disabled={disabled}
        label="Password"
        type={values.showPassword ? "text" : "password"}
        autoComplete="new-password"
        placeholder="glitter-rainbow-butterfly-kitty"
        value={values.password}
        onChange={handleChange("password")}
        sx={{ mb: 2 }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {values.showPassword ? (
                  <VisibilityOffIcon />
                ) : (
                  <VisibilityOnIcon />
                )}
              </IconButton>
            </InputAdornment>
          ),
        }}
        required
        fullWidth
      />

      <FormControlLabel
        disabled={disabled}
        control={<Checkbox value="allowExtraEmails" />}
        label="I want POW! emails."
        sx={{ my: 2, pl: 2 }}
        fullWidth
      />

      <Button disabled={disabled} type="submit" fullWidth variant="contained">
        Create account
      </Button>
    </Box>
  );
};
