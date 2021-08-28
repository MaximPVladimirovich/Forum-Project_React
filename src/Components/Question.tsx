/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { gray2, gray3 } from '../css/Styles';
import React from 'react'
import {QuestionData} from '../MockData/QuestionsData'

interface Props {
  data: QuestionData;
}

export const Question = function({data}: Props) {
  return (
    <div css={css`
    padding: 10px 10px`}>
      <div css={css`
      padding: 10px 10px;
      font-size: 19px`}>
        {data.title}
      </div>
      <div css={css`
      font-size: 12px;
      font-style: italic;
      color: ${gray3};`}>
        {`Asked by ${data.userName} on 
        ${data.created.toLocaleDateString()} ${data.created.toLocaleTimeString()}`}
      </div>
    </div>

  )
}
