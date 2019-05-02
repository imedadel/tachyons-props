export const mediaQueries = {
  breakpointNotSmall: `${p =>
    p.theme.breakpointNotSmall || `screen and (min-width: 30em)`}`,
  breakpointMedium: `${p =>
    p.theme.breakpointMedium ||
    `screen and (min-width: 30em) and (max-width: 60em)`}`,
  breakpointLarge: `${p =>
    p.theme.breakpointLarge || `screen and (min-width: 60em)`}`
};
