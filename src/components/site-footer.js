import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { Container, Typography, Link as MuiLink } from "@mui/material";
import { Box } from "@mui/system";

export const SiteFooter = () => {
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
    <Box component="footer" sx={{ py: 6 }}>
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          gap: 3,
          justifyContent: "space-between",
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        <Typography
          textAlign="left"
          dangerouslySetInnerHTML={{ __html: greeting }}
        />

        <Box sx={{ textAlign: { sm: "right" } }}>
          <MuiLink href={`mailto://${email}`}>{email}</MuiLink>
          <Typography>{address}</Typography>
        </Box>
      </Container>
    </Box>
  );
};
