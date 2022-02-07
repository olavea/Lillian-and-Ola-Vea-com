import React from "react";
import { graphql } from "gatsby";

export default function EmbedOneVideoPage({ data }) {
  return <div dangerouslySetInnerHTML={{ __html: data.supplies.html }}></div>;
}

//              S. Sing $id:String
export const query = graphql`
  query($id: String) {
    supplies: markdownRemark(id: { eq: $id }) {
      html
    }
  }
`;
