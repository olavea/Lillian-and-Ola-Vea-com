import React from "react";
import { Link } from "gatsby";
import {
  Box,
  Avatar,
  Container,
  Link as MuiLink,
  Typography,
} from "@mui/material";
import { LockOutlined as LockIcon } from "@mui/icons-material";

import { SignUpForm } from "../components/signup-form";
import { SiteHeader } from "../components/site-header";

const SignUpPage = () => {
  return (
    <>
      <SiteHeader>
        <Typography sx={{ ml: "auto" }}>
          Already have an account?{" "}
          <MuiLink component={Link} to="login">
            Login
          </MuiLink>
        </Typography>
      </SiteHeader>
      <main>
        <Box sx={{ pt: 12 }} component="header">
          <Container
            maxWidth="sm"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ mb: 3, bgcolor: "primary.main" }}>
              <LockIcon />
            </Avatar>
            <Typography component="h1" variant="h4">
              Create your POW! Account
            </Typography>
          </Container>
        </Box>
        <Box sx={{ pt: 6 }} component="section">
          <Container maxWidth="xs">
            <SignUpForm />
          </Container>
        </Box>
      </main>
    </>
  );
};

export default SignUpPage;
