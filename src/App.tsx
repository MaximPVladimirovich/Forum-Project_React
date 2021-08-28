/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React from 'react';
import { Header } from './Components/Header'
import { Page } from './Pages/HomePage'

import {fontFamily, fontSize, gray2} from './css/Styles'

function App() {
  return (
    <div css={css`
    font-family: ${fontFamily};
    font-size: ${fontSize};
    color: ${gray2};
    `
    }>
      <Header />
      <Page />
    </div>
  );
}

export default App;


