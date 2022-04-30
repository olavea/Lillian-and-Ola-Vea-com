import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const Seo = ({
  location,
  title,
  description,
  author,
  type,
  robots,
  lang,
  children,
}) => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            name
            url
            canonicalUrl
            twitterCreator
            twitterSite
          }
        }
      }
    `
  );

  const url = `${siteMetadata.url}${location.pathname}`;
  const canonical =
    location && `${siteMetadata.canonicalUrl}${location.pathname}`;
  const siteName = siteMetadata.name;
  const pageLang = lang || "en";
  const pageRobots = robots || "index";
  // const socialTitle = title;
  const socialType = type || "website";
  // const socialImage = `${siteMetadata.url}/.netlify/functions/social-image/?url=${url}`;
  const socialDescription = description;
  const twitterSite = siteMetadata.twitterSite;
  const twitterCreator = author || siteMetadata.twitterCreator;
  // const twitterCard = "summary";

  return (
    <Helmet>
      <title>{title}</title>

      <html lang={pageLang} />
      <meta charSet="utf-8" />

      <link rel="canonical" href={canonical} />

      <meta name="description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:type" content={socialType} />
      <meta property="og:description" content={socialDescription} />
      <meta name="twitter:site" content={twitterSite} />
      <meta name="twitter:creator" content={twitterCreator} />
      <meta name="twitter:description" content={socialDescription} />
      <meta name="robots" content={pageRobots} />

      {children}
    </Helmet>
  );
};

export default Seo;
