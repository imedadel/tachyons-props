import { css } from "styled-components";
import { mediaQueries } from "./media-queries";

export const aspectRatios = p => css`
  ${p.aspectRatio &&
    css`
      height: 0;
      position: relative;
    `}

  ${p.aspectRatio16x9 &&
    css`
      padding-bottom: 56.25%;
    `}

  ${p.aspectRatio9x16 &&
    css`
      padding-bottom: 177.77%;
    `}

  ${p.aspectRatio4x3 &&
    css`
      padding-bottom: 75%;
    `}
  ${p.aspectRatio3x4 &&
    css`
      padding-bottom: 133.33%;
    `}

  ${p.aspectRatio6x4 &&
    css`
      padding-bottom: 66.6%;
    `}
  ${p.aspectRatio4x6 &&
    css`
      padding-bottom: 150%;
    `}

  ${p.aspectRatio8x5 &&
    css`
      padding-bottom: 62.5%;
    `}
  ${p.aspectRatio5x8 &&
    css`
      padding-bottom: 160%;
    `}

  ${p.aspectRatio7x5 &&
    css`
      padding-bottom: 71.42%;
    `}
  ${p.aspectRatio5x7 &&
    css`
      padding-bottom: 140%;
    `}

  ${p.aspectRatio1x1 &&
    css`
      padding-bottom: 100%;
    `}

  ${p.aspectRatioObject &&
    css`
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 100;
    `}

  @media (${mediaQueries.breakpointNotSmall}) {
    ${p.aspectRatioNS &&
      css`
        height: 0;
        position: relative;
      `}
    ${p.aspectRatio16x9NS &&
      css`
        padding-bottom: 56.25%;
      `}
    ${p.aspectRatio9x16NS &&
      css`
        padding-bottom: 177.77%;
      `}
    ${p.aspectRatio4x3NS &&
      css`
        padding-bottom: 75%;
      `}
    ${p.aspectRatio3x4NS &&
      css`
        padding-bottom: 133.33%;
      `}
    ${p.aspectRatio6x4NS &&
      css`
        padding-bottom: 66.6%;
      `}
    ${p.aspectRatio4x6NS &&
      css`
        padding-bottom: 150%;
      `}
    ${p.aspectRatio8x5NS &&
      css`
        padding-bottom: 62.5%;
      `}
    ${p.aspectRatio5x8NS &&
      css`
        padding-bottom: 160%;
      `}
    ${p.aspectRatio7x5NS &&
      css`
        padding-bottom: 71.42%;
      `}
    ${p.aspectRatio5x7NS &&
      css`
        padding-bottom: 140%;
      `}
    ${p.aspectRatio1x1NS &&
      css`
        padding-bottom: 100%;
      `}
    ${p.aspectRatioObjectNS &&
      css`
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 100;
      `}
  }

  @media (${mediaQueries.breakpointMedium}) {
    ${p.aspectRatioM &&
      css`
        height: 0;
        position: relative;
      `}
    ${p.aspectRatio16x9M &&
      css`
        padding-bottom: 56.25%;
      `}
    ${p.aspectRatio9x16M &&
      css`
        padding-bottom: 177.77%;
      `}
    ${p.aspectRatio4x3M &&
      css`
        padding-bottom: 75%;
      `}
    ${p.aspectRatio3x4M &&
      css`
        padding-bottom: 133.33%;
      `}
    ${p.aspectRatio6x4M &&
      css`
        padding-bottom: 66.6%;
      `}
    ${p.aspectRatio4x6M &&
      css`
        padding-bottom: 150%;
      `}
    ${p.aspectRatio8x5M &&
      css`
        padding-bottom: 62.5%;
      `}
    ${p.aspectRatio5x8M &&
      css`
        padding-bottom: 160%;
      `}
    ${p.aspectRatio7x5M &&
      css`
        padding-bottom: 71.42%;
      `}
    ${p.aspectRatio5x7M &&
      css`
        padding-bottom: 140%;
      `}
    ${p.aspectRatio1x1M &&
      css`
        padding-bottom: 100%;
      `}
    ${p.aspectRatioObjectM &&
      css`
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 100;
      `}
  }

  @media (${mediaQueries.breakpointLarge}) {
    ${p.aspectRatioL &&
      css`
        height: 0;
        position: relative;
      `}
    ${p.aspectRatio16x9L &&
      css`
        padding-bottom: 56.25%;
      `}
    ${p.aspectRatio9x16L &&
      css`
        padding-bottom: 177.77%;
      `}
    ${p.aspectRatio4x3L &&
      css`
        padding-bottom: 75%;
      `}
    ${p.aspectRatio3x4L &&
      css`
        padding-bottom: 133.33%;
      `}
    ${p.aspectRatio6x4L &&
      css`
        padding-bottom: 66.6%;
      `}
    ${p.aspectRatio4x6L &&
      css`
        padding-bottom: 150%;
      `}
    ${p.aspectRatio8x5L &&
      css`
        padding-bottom: 62.5%;
      `}
    ${p.aspectRatio5x8L &&
      css`
        padding-bottom: 160%;
      `}
    ${p.aspectRatio7x5L &&
      css`
        padding-bottom: 71.42%;
      `}
    ${p.aspectRatio5x7L &&
      css`
        padding-bottom: 140%;
      `}
    ${p.aspectRatio1x1L &&
      css`
        padding-bottom: 100%;
      `}
    ${p.aspectRatioObjectL &&
      css`
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 100;
      `}
  }
`;
