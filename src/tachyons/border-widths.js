import { css } from "styled-components";
import { mediaQueries } from "./media-queries";

export const borderWidths = p => css`
${p.bw0 &&
  css`
    border-width: 0;
  `}
${p.bw1 &&
  css`
    border-width: 0.125rem;
  `}
${p.bw2 &&
  css`
    border-width: 0.25rem;
  `}
${p.bw3 &&
  css`
    border-width: 0.5rem;
  `}
${p.bw4 &&
  css`
    border-width: 1rem;
  `}
${p.bw5 &&
  css`
    border-width: 2rem;
  `}

/* Resets */
${p.bt0 &&
  css`
    border-top-width: 0;
  `}
${p.br0 &&
  css`
    border-right-width: 0;
  `}
${p.bb0 &&
  css`
    border-bottom-width: 0;
  `}
${p.bl0 &&
  css`
    border-left-width: 0;
  `}

@media (${mediaQueries.breakpointNotSmall}) {
  ${p.bw0NS &&
    css`
      border-width: 0;
    `}
${p.bw1NS &&
  css`
    border-width: 0.125rem;
  `}
${p.bw2NS &&
  css`
    border-width: 0.25rem;
  `}
${p.bw3NS &&
  css`
    border-width: 0.5rem;
  `}
${p.bw4NS &&
  css`
    border-width: 1rem;
  `}
${p.bw5NS &&
  css`
    border-width: 2rem;
  `}

/* Resets */
${p.bt0NS &&
  css`
    border-top-width: 0;
  `}
${p.br0NS &&
  css`
    border-right-width: 0;
  `}
${p.bb0NS &&
  css`
    border-bottom-width: 0;
  `}
${p.bl0NS &&
  css`
    border-left-width: 0;
  `}
}

@media (${mediaQueries.breakpointMedium}) {
  ${p.bw0M &&
    css`
      border-width: 0;
    `}
${p.bw1M &&
  css`
    border-width: 0.125rem;
  `}
${p.bw2M &&
  css`
    border-width: 0.25rem;
  `}
${p.bw3M &&
  css`
    border-width: 0.5rem;
  `}
${p.bw4M &&
  css`
    border-width: 1rem;
  `}
${p.bw5M &&
  css`
    border-width: 2rem;
  `}

/* Resets */
${p.bt0M &&
  css`
    border-top-width: 0;
  `}
${p.br0M &&
  css`
    border-right-width: 0;
  `}
${p.bb0M &&
  css`
    border-bottom-width: 0;
  `}
${p.bl0M &&
  css`
    border-left-width: 0;
  `}
}

@media (${mediaQueries.breakpointLarge}) {
  ${p.bw0L &&
    css`
      border-width: 0;
    `}
${p.bw1L &&
  css`
    border-width: 0.125rem;
  `}
${p.bw2L &&
  css`
    border-width: 0.25rem;
  `}
${p.bw3L &&
  css`
    border-width: 0.5rem;
  `}
${p.bw4L &&
  css`
    border-width: 1rem;
  `}
${p.bw5L &&
  css`
    border-width: 2rem;
  `}

/* Resets */
${p.bt0L &&
  css`
    border-top-width: 0;
  `}
${p.br0L &&
  css`
    border-right-width: 0;
  `}
${p.bb0L &&
  css`
    border-bottom-width: 0;
  `}
${p.bl0L &&
  css`
    border-left-width: 0;
  `}
}
`;
