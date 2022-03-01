import React from "react";
import { graphql, Link } from "gatsby";

export default function PageTemplate({ data = {} }) {
  const { frontmatter, html } = data.markdownRemark || {};
  const { title, sections } = frontmatter || {};
  return (
    <>
      <div className="container">
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        {(sections || []).map((section) => {
          const { title, body } = section || {};
          const { html } = body?.childMarkdownRemark || {};
          const { path, label } = section.cta || {};
          return (
            <section>
              {title && <h2>{title}</h2>}
              {html && <div dangerouslySetInnerHTML={{ __html: html }} />}
              {path && label && <Link to={path}>{label}</Link>}
            </section>
          );
        })}
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
