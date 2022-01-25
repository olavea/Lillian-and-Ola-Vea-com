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
      </article>
      <div>

      </div>
    </>
  );
};