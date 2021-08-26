import React from 'react'
import { QuestionData } from '../MockData/QuestionsData'
import {Question} from '../Components/Question'

interface Props {
  data: QuestionData[];
}

export const QuestionList = function({data}: Props) {
  return (
    <ul>
      {data.map(function(question) {
        return (
          <>
          <li key={question.questionId}>
            <Question data={question} />
            </li>
          </>
        )
      })}
    </ul>
  )
}
