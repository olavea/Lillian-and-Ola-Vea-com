import {
  AppBar,
  Container,
  InputAdornment,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import SignUp from "../components/SignUp";

// <main>
// <Box>
//   <Container>
//     <Typography>
//       <InputAdornment />
//     </Typography>
//   </Container>
// </Box>
// </main>

export default function Signup() {
  return (
    <>
      <div className="container">
        <AppBar>
          <Container maxWidth="lg">
            <Toolbar disableGutters>
              <Typography
                sx={{
                  fontWeight: 900,
                  transform: "scale(1.3)",
                }}
              >
                POW!
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
        <div>
          <SignUp />
        </div>
      </div>
    </>
  );
}
