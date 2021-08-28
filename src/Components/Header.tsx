/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { fontFamily, fontSize, gray1, gray2, gray5 } from '../css/Styles';
import React from 'react'

export const Header = function() {

  const handleSearchInputChange = function(e: React.ChangeEvent<HTMLInputElement>) {
    return console.log(e.currentTarget.value)
  }

  return (
    <div css={css`
    position: fixed;
    box-sizing: border-box;
    top: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    background-color: #fff;
    border-bottom: 1px solid ${gray5};
    box-shadow: 0 3px 7px 0 rgba(110, 112, 114, 0.21);
    `}>
      <a href='./'>Chattaway</a>
      <input type='text' placeholder='Search...' onChange={handleSearchInputChange}/>
      <a href='./signin'><span>Sign in</span></a>
    </div>
  )
}
