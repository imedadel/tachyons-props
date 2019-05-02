import { css } from "styled-components";
import { mediaQueries } from "./media-queries";

export const borderRadius = p => css`
  ${p.br0 &&
    css`
      border-radius: 0;
    `}
  ${p.br1 &&
    css`
      border-radius: 0.125rem;
    `}
  ${p.br2 &&
    css`
      border-radius: 0.25rem;
    `}
  ${p.br3 &&
    css`
      border-radius: 0.5rem;
    `}
  ${p.br4 &&
    css`
      border-radius: 1rem;
    `}
  ${p.br100 &&
    css`
      border-radius: 100%;
    `}
  ${p.brPill &&
    css`
      border-radius: 9999px;
    `}
  ${p.brBottom &&
    css`
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    `}
  ${p.brTop &&
    css`
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    `}
  ${p.brRight &&
    css`
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    `}
  ${p.brLeft &&
    css`
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    `}

  @media (${mediaQueries.breakpointNotSmall}) {
    ${p.br0NS &&
      css`
        border-radius: 0;
      `}
  ${p.br1NS &&
    css`
      border-radius: 0.125rem;
    `}
  ${p.br2NS &&
    css`
      border-radius: 0.25rem;
    `}
  ${p.br3NS &&
    css`
      border-radius: 0.5rem;
    `}
  ${p.br4NS &&
    css`
      border-radius: 1rem;
    `}
  ${p.br100NS &&
    css`
      border-radius: 100%;
    `}
  ${p.brPillNS &&
    css`
      border-radius: 9999px;
    `}
  ${p.brBottomNS &&
    css`
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    `}
  ${p.brTopNS &&
    css`
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    `}
  ${p.brRightNS &&
    css`
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    `}
  ${p.brLeftNS &&
    css`
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    `}
  }

  @media (${mediaQueries.breakpointMedium}) {
    ${p.br0M &&
      css`
        border-radius: 0;
      `}
  ${p.br1M &&
    css`
      border-radius: 0.125rem;
    `}
  ${p.br2M &&
    css`
      border-radius: 0.25rem;
    `}
  ${p.br3M &&
    css`
      border-radius: 0.5rem;
    `}
  ${p.br4M &&
    css`
      border-radius: 1rem;
    `}
  ${p.br100M &&
    css`
      border-radius: 100%;
    `}
  ${p.brPillM &&
    css`
      border-radius: 9999px;
    `}
  ${p.brBottomM &&
    css`
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    `}
  ${p.brTopM &&
    css`
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    `}
  ${p.brRightM &&
    css`
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    `}
  ${p.brLeftM &&
    css`
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    `}
  }

  @media (${mediaQueries.breakpointLarge}) {
    ${p.br0L &&
      css`
        border-radius: 0;
      `}
  ${p.br1L &&
    css`
      border-radius: 0.125rem;
    `}
  ${p.br2L &&
    css`
      border-radius: 0.25rem;
    `}
  ${p.br3L &&
    css`
      border-radius: 0.5rem;
    `}
  ${p.br4L &&
    css`
      border-radius: 1rem;
    `}
  ${p.br100L &&
    css`
      border-radius: 100%;
    `}
  ${p.brPillL &&
    css`
      border-radius: 9999px;
    `}
  ${p.brBottomL &&
    css`
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    `}
  ${p.brTopL &&
    css`
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    `}
  ${p.brRightL &&
    css`
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    `}
  ${p.brLeftL &&
    css`
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    `}
  }
`;
