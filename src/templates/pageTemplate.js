import React from "react";
import { graphql, Link } from "gatsby";
import {
  Button,
  Box,
  Container,
  Typography,
  Link as MuiLink,
} from "@mui/material";

import { Prose } from "../components/prose";
import { SiteHeader } from "../components/site-header";
import { NewsletterForm } from "../components/newsletter-form";
import { SiteFooter } from "../components/site-footer";

export default function PageTemplate({ data = {} }) {
  const { frontmatter, html } = data.markdownRemark || {};
  const { title, sections } = frontmatter || {};

  return (
    <>
      <div className="container">
        <SiteHeader>
          <MuiLink component={Link} to="/login" sx={{ ml: "auto", mr: 3 }}>
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
          <Box sx={{ pt: 12 }} component="header">
            <Container maxWidth="content">
              <Typography variant="overline" component="h1">
                {title}
              </Typography>
            </Container>
          </Box>

          <Container maxWidth="content">
            <Prose html={html} />
          </Container>

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
                    <Typography variant="body2" gutterBottom>
                      {subtitle}
                    </Typography>
                  )}
                  {html && <Prose html={html} />}
                  {path && label && (
                    <Button
                      variant="contained"
                      component={Link}
                      to={path}
                      sx={{ my: 2 }}
                    >
                      {label}
                    </Button>
                  )}
                  {form === "newsletter" && <NewsletterForm sx={{ mt: 5 }} />}
                </Container>
              </Box>
            );
          })}
        </main>
        <SiteFooter sx={{ pt: 12, pb: 4 }} />
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
