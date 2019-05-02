import expect from 'expect'
import React from 'react'
import { renderToStaticMarkup as render } from "react-dom/server";

import Div, {GlobalStyle} from "src/";

describe("Div", () => {
  it('renders a div with black borders', () => {
    expect(render(<Div><GlobalStyle/>Test</Div>)).toContain(
      'Test</div>'
    );
  });
});