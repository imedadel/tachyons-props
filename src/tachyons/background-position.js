import { css } from "styled-components";
import { mediaQueries } from "./media-queries";

export const backgroundPosition = p => css`
   ${p.bgCenter &&
     css`
       background-repeat: no-repeat;
       background-position: center center;
     `}

   ${p.bgTop &&
     css`
       background-repeat: no-repeat;
       background-position: top center;
     `}

   ${p.bgRight &&
     css`
       background-repeat: no-repeat;
       background-position: center right;
     `}

   ${p.bgBottom &&
     css`
       background-repeat: no-repeat;
       background-position: bottom center;
     `}

   ${p.bgLeft &&
     css`
       background-repeat: no-repeat;
       background-position: center left;
     `}

  @media (${mediaQueries.breakpointNotSmall}) {
    ${p.bgCenterNS &&
      css`
        background-repeat: no-repeat;
        background-position: center center;
      `}

   ${p.bgTopNS &&
     css`
       background-repeat: no-repeat;
       background-position: top center;
     `}

   ${p.bgRightNS &&
     css`
       background-repeat: no-repeat;
       background-position: center right;
     `}

   ${p.bgBottomNS &&
     css`
       background-repeat: no-repeat;
       background-position: bottom center;
     `}

   ${p.bgLeftNS &&
     css`
       background-repeat: no-repeat;
       background-position: center left;
     `}
  }

  @media (${mediaQueries.breakpointMedium}) {
    ${p.bgCenterM &&
      css`
        background-repeat: no-repeat;
        background-position: center center;
      `}

   ${p.bgTopM &&
     css`
       background-repeat: no-repeat;
       background-position: top center;
     `}

   ${p.bgRightM &&
     css`
       background-repeat: no-repeat;
       background-position: center right;
     `}

   ${p.bgBottomM &&
     css`
       background-repeat: no-repeat;
       background-position: bottom center;
     `}

   ${p.bgLeftM &&
     css`
       background-repeat: no-repeat;
       background-position: center left;
     `}
  }

  @media (${mediaQueries.breakpointLarge}) {
    ${p.bgCenterL &&
      css`
        background-repeat: no-repeat;
        background-position: center center;
      `}

   ${p.bgTopL &&
     css`
       background-repeat: no-repeat;
       background-position: top center;
     `}

   ${p.bgRightL &&
     css`
       background-repeat: no-repeat;
       background-position: center right;
     `}

   ${p.bgBottomL &&
     css`
       background-repeat: no-repeat;
       background-position: bottom center;
     `}

   ${p.bgLeftL &&
     css`
       background-repeat: no-repeat;
       background-position: center left;
     `}
  }
`;
