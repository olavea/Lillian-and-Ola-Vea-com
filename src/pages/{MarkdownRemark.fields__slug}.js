import React from "react";
import { graphql } from "gatsby";

const ComponentName = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark;
  const { title, sections } = frontmatter;
  return (
    <>
      <div className="container">
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        {(sections || []).map((section) => {
          const { title } = section;
          const { html } = section.body.childMarkdownRemark;
          const { label } = section.cta;
          const { path } = section.cta;

          return (
            <section>
              <h2>{title}</h2>
              <div dangerouslySetInnerHTML={{ __html: html }} />
              <a href={path}>{label}</a>
            </section>
          );
        })}
      </div>
    </>
  );
};

export const query = graphql`
  query($id: String) {
    markdownRemark(id: { eq: $id }) {
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

export default ComponentName;
