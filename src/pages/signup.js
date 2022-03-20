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
        <Typography variant="body2" sx={{ ml: "auto" }}>
          Already have an account?{" "}
          <MuiLink component={Link} to="login">
            Login
          </MuiLink>
        </Typography>
      </SiteHeader>
      <main>
        <Box sx={{ pt: 16 }} component="header">
          <Container
            maxWidth="sm"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ mb: 2, bgcolor: "secondary.main" }}>
              <LockIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Get started for $45 a year
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
