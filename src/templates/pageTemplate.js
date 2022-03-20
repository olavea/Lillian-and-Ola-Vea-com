import React from "react";
import { graphql, Link } from "gatsby";
import {
  Toolbar,
  Button,
  Container,
  Typography,
  Link as MuiLink,
} from "@mui/material";
import { Box } from "@mui/system";
import { Prose } from "../components/prose";

import { SiteHeader } from "../components/site-header";
import { NewsletterForm } from "../components/newsletter-form";

export default function PageTemplate({ data = {} }) {
  const { frontmatter, html } = data.markdownRemark || {};
  const { title, sections } = frontmatter || {};

  return (
    <>
      <div className="container">
        <SiteHeader>
          <MuiLink href="my.usepow.app" sx={{ ml: "auto", mr: 3 }}>
            Log In
          </MuiLink>
          <Button
            color="primary"
            variant="contained"
            component={Link}
            to="/signup"
            edge="end"
          >
            Get started
          </Button>
        </SiteHeader>

        <main>
          <Box sx={{ pt: 16 }} component="header">
            <Container maxWidth="content">
              <Typography variant="overline" component="h1">
                {title}
              </Typography>
            </Container>
          </Box>

          <Prose html={html} />

          {(sections || []).map((section) => {
            const { title, subtitle, body } = section || {};
            const { html } = body?.childMarkdownRemark || {};
            const { path, label } = section.cta || {};
            const { form } = section || {};
            return (
              <Box component="section" sx={{ py: 6 }}>
                <Container maxWidth="content">
                  {title && (
                    <Typography component="h2" variant="h1" gutterBottom>
                      {title}
                    </Typography>
                  )}
                  {subtitle && (
                    <Typography component="h3" variant="h2" gutterBottom>
                      {subtitle}
                    </Typography>
                  )}
                  {html && <Prose html={html} />}
                  {path && label && (
                    <Button variant="contained" to={path} sx={{ my: 2 }}>
                      {label}
                    </Button>
                  )}
                  {form === "newsletter" && <NewsletterForm sx={{ mt: 5 }} />}
                </Container>
              </Box>
            );
          })}
        </main>
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
            <Typography textAlign="left">
              Made with ❤️ <br />
              by <MuiLink href="https://twitter.com/raae">@raae</MuiLink> and
              family.
            </Typography>

            <Box sx={{ textAlign: { sm: "right" } }}>
              <MuiLink href="mailto://hello@usepow.app">
                hello@usepow.app
              </MuiLink>

              <Typography>Tromsøgata 26, 0565 Oslo, Norway</Typography>
            </Box>
          </Container>
        </Box>
      </div>
    </>
  );
}

export const query = graphql`
  query ($catsbyId: String) {
    markdownRemark(id: { eq: $catsbyId }) {
      html
      frontmatter {
        title
        sections {
          title
          subtitle
          form
          body {
            childMarkdownRemark {
              html
            }
          }
          cta {
            path
            label
          }
        }
      }
    }
  }
`;
