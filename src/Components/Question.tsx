import React from 'react'
import {QuestionData} from '../MockData/QuestionsData'

interface Props {
  data: QuestionData;
}

export const Question = function({data}: Props) {
  return (
    <div>
      <div>
        {data.title}
      </div>
      <div>
        {`Asked by ${data.userName} on 
        ${data.created.toLocaleDateString()} ${data.created.toLocaleTimeString()}`}
      </div>
    </div>

  )
}
