import React from "react";
import { graphql, Link } from "gatsby";

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
        <header>
          <h1>POW!</h1>
          <Link to="../signup">Sign Up</Link>
          <Link to="../log-in">Log In</Link>
        </header>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        {(sections || []).map((section) => {
          const { title, subtitle, body } = section || {};
          const { html } = body?.childMarkdownRemark || {};
          const { path, label } = section.cta || {};
          const { form } = section || {};
          return (
            <section>
              {title && <h2>{title}</h2>}
              {subtitle && <h3>{subtitle}</h3>}
              {html && <div dangerouslySetInnerHTML={{ __html: html }} />}
              {path && label && <Link to={path}>{label}</Link>}
              {form && (
                <form
                  onSubmit={createEmail}
                  action="https://forms.userlist.com/b199b263-3262-435f-a9bc-96a12aa9955d/submissions"
                  method="POST"
                  acceptCharset="UTF-8"
                >
                  <fieldset>
                    <label htmlFor="fields_first_name">Your first name </label>
                    <input
                      type="text"
                      id="fields_first_name"
                      name="fields[first_name]"
                    />
                  </fieldset>
                  <fieldset>
                    <label htmlFor="fields_email">Your email address </label>
                    <input
                      type="text"
                      id="fields_email"
                      name="fields[email]"
                      required
                    />
                  </fieldset>
                  <button type="submit">
                    Subscribe to the POW! Newsletter
                  </button>
                </form>
              )}
            </section>
          );
        })}
        <footer>
          <p>
            Made with{" "}
            <span role="img" aria-label="heart emoji">
              💜
            </span>
            by @raae and family. hello@usepow.app Tromsøgata 26, 0565 Oslo,
            Norway
          </p>
        </footer>
      </div>
    </>
  );
}

export const query = graphql`
  query($catsbyId: String) {
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
