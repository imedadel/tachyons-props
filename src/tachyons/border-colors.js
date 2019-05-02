import { css } from "styled-components";

export const borderColors = p => css`
  ${p.bBlack&& css`
    border-color: var(--black);`
  }
  ${p.bNearBlack&& css`
    border-color: var(--near-black);`
  }
  ${p.bDarkGray&& css`
    border-color: var(--dark-gray);`
  }
  ${p.bMidGray&& css`
    border-color: var(--mid-gray);`
  }
  ${p.bGray&& css`
    border-color: var(--gray);`
  }
  ${p.bSilver&& css`
    border-color: var(--silver);`
  }
  ${p.bLightSilver&& css`
    border-color: var(--light-silver);`
  }
  ${p.bMoonGray&& css`
    border-color: var(--moon-gray);`
  }
  ${p.bLightGray&& css`
    border-color: var(--light-gray);`
  }
  ${p.bNearWhite&& css`
    border-color: var(--near-white);`
  }
  ${p.bWhite&& css`
    border-color: var(--white);`
  }

  ${p.bWhite90 && css`
    border-color: var(--white-90);`
  }
  ${p.bWhite80 && css`
    border-color: var(--white-80);`
  }
  ${p.bWhite70 && css`
    border-color: var(--white-70);`
  }
  ${p.bWhite60 && css`
    border-color: var(--white-60);`
  }
  ${p.bWhite50 && css`
    border-color: var(--white-50);`
  }
  ${p.bWhite40 && css`
    border-color: var(--white-40);`
  }
  ${p.bWhite30 && css`
    border-color: var(--white-30);`
  }
  ${p.bWhite20 && css`
    border-color: var(--white-20);`
  }
  ${p.bWhite10 && css`
    border-color: var(--white-10);`
  }
  ${p.bWhite05 && css`
    border-color: var(--white-05);`
  }
  ${p.bWhite025 && css`
    border-color: var(--white-025);`
  }
  ${p.bWhite0125 && css`
    border-color: var(--white-0125);`
  }

  ${p.bBlack90 && css`
    border-color: var(--black-90);`
  }
  ${p.bBlack80 && css`
    border-color: var(--black-80);`
  }
  ${p.bBlack70 && css`
    border-color: var(--black-70);`
  }
  ${p.bBlack60 && css`
    border-color: var(--black-60);`
  }
  ${p.bBlack50 && css`
    border-color: var(--black-50);`
  }
  ${p.bBlack40 && css`
    border-color: var(--black-40);`
  }
  ${p.bBlack30 && css`
    border-color: var(--black-30);`
  }
  ${p.bBlack20 && css`
    border-color: var(--black-20);`
  }
  ${p.bBlack10 && css`
    border-color: var(--black-10);`
  }
  ${p.bBlack05 && css`
    border-color: var(--black-05);`
  }
  ${p.bBlack025 && css`
    border-color: var(--black-025);`
  }
  ${p.bBlack0125 && css`
    border-color: var(--black-0125);`
  }

  ${p.bDarkRed && css`
    border-color: var(--dark-red);`
  }
  ${p.bRed && css`
    border-color: var(--red);`
  }
  ${p.bLightRed && css`
    border-color: var(--light-red);`
  }
  ${p.bOrange && css`
    border-color: var(--orange);`
  }
  ${p.bGold && css`
    border-color: var(--gold);`
  }
  ${p.bYellow && css`
    border-color: var(--yellow);`
  }
  ${p.bLightYellow && css`
    border-color: var(--light-yellow);`
  }
  ${p.bPurple && css`
    border-color: var(--purple);`
  }
  ${p.bLightPurple && css`
    border-color: var(--light-purple);`
  }
  ${p.bDarkPink && css`
    border-color: var(--dark-pink);`
  }
  ${p.bHotPink && css`
    border-color: var(--hot-pink);`
  }
  ${p.bPink && css`
    border-color: var(--pink);`
  }
  ${p.bLightPink && css`
    border-color: var(--light-pink);`
  }
  ${p.bDarkGreen && css`
    border-color: var(--dark-green);`
  }
  ${p.bGreen && css`
    border-color: var(--green);`
  }
  ${p.bLightGreen && css`
    border-color: var(--light-green);`
  }
  ${p.bNavy && css`
    border-color: var(--navy);`
  }
  ${p.bDarkBlue && css`
    border-color: var(--dark-blue);`
  }
  ${p.bBlue && css`
    border-color: var(--blue);`
  }
  ${p.bLightBlue && css`
    border-color: var(--light-blue);`
  }
  ${p.bLightestBlue && css`
    border-color: var(--lightest-blue);`
  }
  ${p.bWashedBlue && css`
    border-color: var(--washed-blue);`
  }
  ${p.bWashedGreen && css`
    border-color: var(--washed-green);`
  }
  ${p.bWashedYellow && css`
    border-color: var(--washed-yellow);`
  }
  ${p.bWashedRed && css`
    border-color: var(--washed-red);`
  }

  ${p.bTransparent && css`
    border-color: var(--transparent);`
  }
  ${p.bInherit && css`
    border-color: inherit;`
  }
`;
