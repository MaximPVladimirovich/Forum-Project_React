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

      <a href='./' css={css`
      font-size: 24px;
      font-weight:bold;
      color: ${gray1};
      text-decoration: none
      `}
      >Chattaway</a>

      <input css={ css`
      box-sizing: border-box;
      font-family: ${fontFamily};
      font-size: ${fontSize};
      padding: 8px 10px;
      border: 1px solid ${gray5};
      color: ${gray2};
      background-color: white;
      width:200px
      height: 30px;
      :focus {
        outline-color: ${gray5};
      }
      `}
      type='text' placeholder='Search...' onChange={handleSearchInputChange}/>
      <a href='./signin'
      css={css`
      font-family: ${fontFamily};
      font-size: ${fontSize};
      padding: 5px 10px;
      background-color: transparent;
      color: ${gray2};
      text-decoration: none;
      cursor: pointer;
      :focus {
        outline-color: ${gray5};
      }
      span {
        margin-left: 7px;
      }
      `}><span>Sign in</span></a>
    </div>
  )
}
