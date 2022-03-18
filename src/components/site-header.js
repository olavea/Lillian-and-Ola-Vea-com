import React from "react";
import { Link } from "gatsby";
import { AppBar, Toolbar, Button, Container, Typography } from "@mui/material";

const SiteHeader = ({ children }) => {
  return (
    <AppBar>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Button component={Link} to="/" edge="start">
            <Typography
              sx={{
                fontWeight: 900,
                transform: "scale(1.3)",
              }}
            >
              POW!
            </Typography>
          </Button>
          {children}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default SiteHeader;
