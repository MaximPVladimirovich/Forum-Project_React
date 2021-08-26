import React from 'react'
import { QuestionList } from '../Components/QuestionList'
import { getUnansweredQuestions } from '../MockData/QuestionsData'

export const HomePage = function() {
  return (
    <div>
      <div>
        <h2>Unanswered Questions</h2>
        <button>Ask a question</button>
      </div>
      <QuestionList data={getUnansweredQuestions()}/>
    </div>
  )
}
