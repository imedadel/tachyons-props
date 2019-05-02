import { css } from "styled-components";
import { mediaQueries } from "./media-queries";

export const borderStyle = p => css`
  ${p.bDotted &&
    css`
      border-style: dotted;
    `}
  ${p.bDashed &&
    css`
      border-style: dashed;
    `}
  ${p.bSolid &&
    css`
      border-style: solid;
    `}
  ${p.bNone &&
    css`
      border-style: none;
    `}

  @media (${mediaQueries.breakpointNotSmall}) {
    ${p.bDottedNS &&
      css`
        border-style: dotted;
      `}
  ${p.bDashedNS &&
    css`
      border-style: dashed;
    `}
  ${p.bSolidNS &&
    css`
      border-style: solid;
    `}
  ${p.bNoneNS &&
    css`
      border-style: none;
    `}
  }

  @media (${mediaQueries.breakpointMedium}) {
    ${p.bDottedM &&
      css`
        border-style: dotted;
      `}
  ${p.bDashedM &&
    css`
      border-style: dashed;
    `}
  ${p.bSolidM &&
    css`
      border-style: solid;
    `}
  ${p.bNoneM &&
    css`
      border-style: none;
    `}
  }

  @media (${mediaQueries.breakpointLarge}) {
    ${p.bDottedL &&
      css`
        border-style: dotted;
      `}
  ${p.bDashedL &&
    css`
      border-style: dashed;
    `}
  ${p.bSolidL &&
    css`
      border-style: solid;
    `}
  ${p.bNoneL &&
    css`
      border-style: none;
    `}
  }
`;
