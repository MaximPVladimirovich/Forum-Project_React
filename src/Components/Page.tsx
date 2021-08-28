/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React from 'react'
import { PageTitle } from '../Components/PageTitle'

interface Props {
  title?: string;
  children: React.ReactNode;
}

export const Page = function({title, children}: Props) {
  return (
    <div css={css`
    margin: 50px auto 20px auto;
    padding: 30px 20px;
    max-width: 600px;
  `}>
      {title && <PageTitle>{title}</PageTitle>}
      {children}
    </div>
  )
}
