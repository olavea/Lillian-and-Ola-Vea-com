const themeTypography = (theme) => {
  return {
    h6: {
      fontSize: "0.875rem",
      fontWeight: theme.typography.fontWeightBold,
    },
    h5: {
      fontSize: "1rem",
      fontWeight: theme.typography.fontWeightBold,
    },
    h4: {
      fontSize: "1.25rem",
      fontWeight: theme.typography.fontWeightBold,
    },
    h3: {
      fontSize: "1.75rem",
      fontWeight: theme.typography.fontWeightBold,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: theme.typography.fontWeightExtraBold,
    },
    h1: {
      letterSpacing: "-0.025em",
      lineHeight: 1,
      fontSize: "3.15rem",
      fontWeight: theme.typography.fontWeightExtraBold,
    },
    subtitle1: {
      fontSize: "1.125rem",
      lineHeight: 1.35,
      fontWeight: theme.typography.fontWeightBold,
    },
    subtitle2: {
      fontSize: "1rem",
      lineHeight: 1.35,
      fontWeight: theme.typography.fontWeightMedium,
    },
    overline: {
      fontSize: "1rem",
      lineHeight: 1.35,
    },
    body2: {
      fontSize: "1.25rem",
      fontWeight: theme.typography.fontWeightLight,
    },
  };
};

export default themeTypography;
