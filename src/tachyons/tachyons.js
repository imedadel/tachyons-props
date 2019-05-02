import { colors } from "./colors";
import { aspectRatios } from "./aspect-ratios";
import { backgroundPosition } from "./background-position";
import { backgroundSize } from "./background-size";
import { borderColors } from "./border-colors";
import {borderRadius} from "./border-radius";
import {borderStyle} from "./border-style";
import {borderWidths} from "./border-widths"
import { css, createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  ${colors}
`;

export const tachyons = css`
  ${aspectRatios}
  ${backgroundPosition}
  ${backgroundSize}
  ${borderColors}
  ${borderRadius}
  ${borderStyle}
  ${borderWidths}
`;
