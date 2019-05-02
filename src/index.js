import React, { Component } from "react";
import styled from "styled-components";
import { tachyons, GlobalStyle } from "./tachyons/tachyons";
// import {colors} from "./tachyons/colors";

export { GlobalStyle };
// export const GlobalStyle = createGlobalStyle`${colors}`
export default styled.div`
  ${tachyons}
`;
