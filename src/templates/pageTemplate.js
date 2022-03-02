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
              {subtitle && <h2>{subtitle}</h2>}
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
                    <label htmlFor="fields_first_name">First name </label>
                    <input
                      type="text"
                      id="fields_first_name"
                      name="fields[first_name]"
                    />
                  </fieldset>
                  <fieldset>
                    <label htmlFor="fields_email">Email </label>
                    <input
                      type="text"
                      id="fields_email"
                      name="fields[email]"
                      required
                    />
                  </fieldset>
                  <button type="submit">Submit</button>
                </form>
              )}
            </section>
          );
        })}
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
