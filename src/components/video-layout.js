import React from "react";

export const VideoLayout = ({ title, html, author_name }) => {
  return (
    <>
      <article>
        <h1 className="mark">{title}</h1>
        <div
          className="video-container"
          dangerouslySetInnerHTML={{ __html: html }}
        />

        <p>
          Click fullscreen on the video. The tiny frame in the bottom right
          coner. To the right to of "YOUTUBE".
        </p>
      </article>
      <div></div>
    </>
  );
};
