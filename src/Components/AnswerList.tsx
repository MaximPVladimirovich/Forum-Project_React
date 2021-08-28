/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { AnswerData } from '../MockData/QuestionsData';
import { Answer } from './Answer';
import { gray5 } from '../css/Styles';

interface Props {
  data: AnswerData[];
}

export const AnswerList = function({data}: Props) {
  return (
    <ul css={css`
    list-style: none;
    margin: 10px 0 0 0;
    padding: 0;
    `}>
      {data.map(function(answer) {
        return (
          <li 
          css={css`
          border-top: 1px solid ${gray5}
          `}
          key={answer.answerId}> 
          <Answer data={answer} />
          </li>
        )
      })}
    </ul>
  )
}
