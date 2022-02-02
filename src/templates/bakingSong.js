//              1. bakingSong = Lilly Owslby sings 🦉
//              2. supplies: data
//              3. Loop over the images and
//              for each bake a _ _ _
//youTubeImageTreasure
// fill your life with story and glory

import React from "react";
import { graphql } from "gatsby";
import VideoLayout from "../components/video-layout";
//import VideoLayout from "../../components/video-layout";
//<VideoLayout {...data.youTubeImageTreasure} />;
//              E. EmbedOneVideoPage
export default function EmbedOneVideoPage({ data }) {
  return <VideoLayout {...data.youTubeImageTreasure.oEmbed} />;
}

//              S. Sing $id:String
export const query = graphql`
  query($id: String) {
    youTubeImageTreasure: youTube(id: { eq: $id }) {
      oEmbed {
        title
        html
      }
    }
  }
`;
