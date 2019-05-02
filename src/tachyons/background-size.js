import { css } from "styled-components";
import { mediaQueries } from "./media-queries";

export const backgroundSize = p => css`
  ${p.cover &&
    css`
      background-size: cover !important;
    `}
  ${p.contain &&
    css`
      background-size: contain !important;
    `}

  @media (${mediaQueries.breakpointNotSmall}) {
    ${p.coverNS &&
      css`
        background-size: cover !important;
      `}
  ${p.containNS &&
    css`
      background-size: contain !important;
    `}
  }

  @media (${mediaQueries.breakpointMedium}) {
    ${p.coverM &&
      css`
        background-size: cover !important;
      `}
  ${p.containM &&
    css`
      background-size: contain !important;
    `}
  }

  @media (${mediaQueries.breakpointLarge}) {
    ${p.coverL &&
      css`
        background-size: cover !important;
      `}
  ${p.containL &&
    css`
      background-size: contain !important;
    `}
  }
`;
