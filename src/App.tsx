/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React from 'react';
import { Header } from './Components/Header'
import { HomePage } from './Pages/HomePage'

// Routing
import { BrowserRouter, Routes,  Route} from 'react-router-dom'
import { AskPage } from './Pages/AskPage'
import { SignInPage } from './Pages/SignInPage'
import { SearchPage } from './Pages/SearchPage'
import { QuestionPage } from './Pages/QuestionPage'
import { NotFoundPage} from './Pages/NotFoundPage'


import {fontFamily, fontSize, gray2} from './css/Styles'

function App() {
  return (
  <BrowserRouter>
    <div css={css`
    font-family: ${fontFamily};
    font-size: ${fontSize};
    color: ${gray2};
    `}>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ask" element={<AskPage/>} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path='/question/:questionId' element={<QuestionPage/>} />
        {/* Not Found */}
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;


