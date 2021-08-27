import React from 'react'
// import { QuestionList } from '../Componentns/QuestionList' 
import {getUnansweredQuestions, QuestionData} from '../MockData/QuestionsData'


export const HomePage = function() {
  const [questions, setQuestions] = React.useState<QuestionData[]>([])
  const [questionsLoading, setQuestionsLoading] = React.useState(true)

  React.useEffect( () => {
    const doGetUnansweredQuestions = async () => {
      const unansweredQuestions = await getUnansweredQuestions()
    }
    doGetUnansweredQuestions()
  }, [])

  return (
    <div>
      <div>
        <h2>Unanswered Questions</h2>
        <button>Ask a question</button>
      </div>
      {/* <QuestionList data={getUnansweredQuestions()/> */}
    </div>
  )
}
