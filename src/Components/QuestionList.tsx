/** @jsxImportSource @emotion/react */
import { css} from '@emotion/react'
import { accent2, gray5 } from '../css/Styles'
import React from 'react'
import { QuestionData } from '../MockData/QuestionsData'
import {Question} from '../Components/Question'

interface Props {
  data: QuestionData[];
}

export const QuestionList = function({data}: Props) {
  return (
    <ul css={css`
    list-style: none;
    margin: 10px 0 0 0;
    padding: 0px 20px;
    background-color: #fff;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    border-top: 3px solid ${accent2};
    box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16);
    `}>
      {data.map(function(question) {
        return (
          <li key={question.questionId}
          css={css`
          border-top: 1px solid ${gray5};
          :first-of-type {
          border-top: none;
          }`
          }>
            <Question data={question} />
          </li>
        )
      })}
    </ul>
  )
}
