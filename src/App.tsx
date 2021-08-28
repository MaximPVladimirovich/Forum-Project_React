/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React from 'react';
import { Header } from './Components/Header'
import { HomePage } from './Pages/HomePage'

// Routing
import { BrowserRouter, Switch,  Route} from 'react-router-dom'
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
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/ask" component={AskPage} />
        <Route path="/signin" component={SignInPage } />
        <Route path="/search" component={SearchPage } />
        <Route path='/question' component={QuestionPage} />
        {/* Not Found */}
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
  );
}

export default App;


