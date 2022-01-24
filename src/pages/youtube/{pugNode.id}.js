// src/pages/powtube/{powTubeOemBed.id}.js
import React from "react";
import { graphql } from "gatsby";

export default function UnEmbedPage({ data }) {
  return (
    <>
    <article>
      <h1 className="mark">{data.youTubeEmbed.internal.type}</h1>
      <p>I am preparing a node so I later can get video data from youtube. This title you see over is just the `type` of my home-made-node with only three things inside it:</p>
      <ol>
        <li>id: {data.youTubeEmbed.id}</li>
        <li>type: {data.youTubeEmbed.internal.type} </li>
        <li>contentDigest: {data.youTubeEmbed.internal.contentDigest}</li>
      </ol>
      <h2>And those three things are all you need to create your own node.</h2>
      <p>I used my pugNode to create this page with parrot-pages.</p>
    </article>
    </>
  );
};

export const query = graphql`
  query($id: String) {
    youTubeEmbed: pugNode(id: {eq: $id}) {
      id
      internal {
        type
        contentDigest
      }

    }
  }
`;