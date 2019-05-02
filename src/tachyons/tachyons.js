import { colors } from "./colors";
import { aspectRatios } from "./aspect-ratios";
import { backgroundPosition } from "./background-position";
import { backgroundSize } from "./background-size";
import { borderColors } from "./border-colors";
import { css, createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  ${colors}
`;

export const tachyons = css`
  ${aspectRatios}
  ${backgroundPosition}
  ${backgroundSize}
  ${borderColors}
`;
