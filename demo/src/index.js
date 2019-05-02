import React, { Component } from "react";
import { render } from "react-dom";
// import styled from "styled-components"
import Div, {GlobalStyle} from "../../src";

const Demo = () => (
  <Div>
    <GlobalStyle />
    <Div bBlack as="h2">
    Hello and welcome.
    </Div>
  </Div>
);

render(<Demo />, document.querySelector("#demo"));
