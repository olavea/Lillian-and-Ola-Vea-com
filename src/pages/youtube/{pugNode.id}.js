// POW!-site/src/pages/powtube/{pugNode.id}.js
import React from "react";
import { graphql } from "gatsby";
import VideoLayout from "../../components/video-layout";

export default function UnEmbedPage({ data }) {
  return <VideoLayout {...data.youTubeEmbed} />
};

export const query = graphql`
  query($id: String) {
    youTubeEmbed: pugNode(id: {eq: $id}) {
      id
      title
      html
      author_name
      internal {
        type
        contentDigest
      }

    }
  }
`;