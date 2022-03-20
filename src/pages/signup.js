import React from "react";
import { Link } from "gatsby";
import { Link as MuiLink, Typography } from "@mui/material";

import SignUp from "../components/SignUpForm";
import { SiteHeader } from "../components/site-header";

const SignUpPage = () => {
  return (
    <>
      <SiteHeader>
        <Typography variant="body2" sx={{ ml: "auto" }}>
          Already have an account?{" "}
          <MuiLink component={Link} to="login">
            Login
          </MuiLink>
        </Typography>
      </SiteHeader>
      <main>
        <SignUp />
      </main>
    </>
  );
};

export default SignUpPage;
