import React from 'react'
import { QuestionList } from '../Components/QuestionList' 
import {getUnansweredQuestions, QuestionData} from '../MockData/QuestionsData'


export const HomePage = function() {
  const [questions, setQuestions] = React.useState<QuestionData[]>([])
  const [questionsLoading, setQuestionsLoading] = React.useState(true)

  React.useEffect(() => {
    const doGetUnansweredQuestions = async () => {
      const unansweredQuestions = await getUnansweredQuestions()
      setQuestions(unansweredQuestions)
      setQuestionsLoading(false)
    }
    doGetUnansweredQuestions()
  }, [])

  const handleAskQuestion = function() {
    return console.log('Todo - move to ask page')
  }

  return (
    <div>
      <div>
        <h2>Unanswered Questions</h2>
        <button onClick={handleAskQuestion}>Ask a questio</button>
      </div>
      {
      questionsLoading ? (
        <div>Loading...</div>
      ) : (
        <QuestionList data={questions || [] }/> 
      )
    }
    </div>
    
  )
}
