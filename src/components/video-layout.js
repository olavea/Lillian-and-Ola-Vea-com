// POW!-site/src/components/video-layout.js
import React from "react";

export default function VideoLayout({ title, html, author_name }) {
  return (
    <>
      <article>
        <h1 className="mark">{title}</h1>
        <div
          className="video-container"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <h2 className="mark">Made with 💜 by: {author_name} 👑 </h2>
        <p>
          Click fullscreen on the video. The tiny frame in the bottom right
          coner. To the right to of "YOUTUBE".
        </p>
      </article>
      <div></div>
    </>
  );
}
