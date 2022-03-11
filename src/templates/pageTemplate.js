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
import SiteHeader from "../components/site-header";

export default function PageTemplate({ data = {} }) {
  const { frontmatter, html } = data.markdownRemark || {};
  const { title, sections } = frontmatter || {};
  function createEmail(event) {
    event.preventDefault();
    alert("POW! You've got mail 📧 📫");
  }
  return (
    <>
      <div className="container">
        <SiteHeader>
          <Button
            variant="outlined"
            href="my.usepow.app"
            sx={{ ml: "auto", mr: 2 }}
          >
            Log In
          </Button>
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
            <Container maxWidth="md">
              <Typography variant="overline" component="h1">
                {title}
              </Typography>
            </Container>
          </Box>

          <div dangerouslySetInnerHTML={{ __html: html }} />
          {(sections || []).map((section) => {
            const { title, subtitle, body } = section || {};
            const { html } = body?.childMarkdownRemark || {};
            const { path, label } = section.cta || {};
            const { form } = section || {};
            return (
              <Box component="section" sx={{ py: 6 }}>
                <Container maxWidth="md">
                  {title && (
                    <Typography variant="h2" gutterBottom>
                      {title}
                    </Typography>
                  )}
                  {subtitle && <Typography variant="h3">{subtitle}</Typography>}
                  {html && <div dangerouslySetInnerHTML={{ __html: html }} />}
                  {path && label && (
                    <Button variant="contained" to={path} sx={{ my: 2 }}>
                      {label}
                    </Button>
                  )}
                  {form && (
                    <form
                      onSubmit={createEmail}
                      action="https://forms.userlist.com/b199b263-3262-435f-a9bc-96a12aa9955d/submissions"
                      method="POST"
                      acceptCharset="UTF-8"
                    >
                      <fieldset>
                        <label htmlFor="fields_first_name">
                          Your first name{" "}
                        </label>
                        <input
                          type="text"
                          id="fields_first_name"
                          name="fields[first_name]"
                        />
                      </fieldset>
                      <fieldset>
                        <label htmlFor="fields_email">
                          Your email address{" "}
                        </label>
                        <input
                          type="text"
                          id="fields_email"
                          name="fields[email]"
                          required
                        />
                      </fieldset>
                      <Button type="submit" variant="contained">
                        Subscribe to the POW! Newsletter
                      </Button>
                    </form>
                  )}
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
