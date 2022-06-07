import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";

import { Container, Typography, Link as MuiLink } from "@mui/material";
import { Box } from "@mui/system";

export const SiteFooter = ({ ...props }) => {
  const { site } = useStaticQuery(graphql`
    {
      site {
        footer: siteMetadata {
          greeting
          contact {
            address
            email
          }
        }
      }
    }
  `);

  const greeting = site?.footer?.greeting;
  const email = site?.footer?.contact?.email;
  const address = site?.footer?.contact?.address;

  return (
    <Box component="footer" {...props}>
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          gap: 3,
          justifyContent: "space-between",
          flexDirection: { xs: "column", sm: "row" },
          "> *": {
            width: "33.3%",
          },
        }}
      >
        <Typography
          textAlign="left"
          dangerouslySetInnerHTML={{ __html: greeting }}
          sx={{ a: { color: "inherit" } }}
        />

        <Box sx={{ textAlign: { sm: "center" } }}>
          <Typography>Sign up for the</Typography>
          <MuiLink component={Link} to="/newsletter">
            Our Newsletter
          </MuiLink>
        </Box>

        <Box sx={{ textAlign: { sm: "right" } }}>
          <MuiLink href={`mailto://${email}`} color="inherit">
            {email}
          </MuiLink>
          <Typography>{address}</Typography>
        </Box>
      </Container>
    </Box>
  );
};
