/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React from 'react'
import { QuestionList } from '../Components/QuestionList' 
import {getUnansweredQuestions, QuestionData} from '../MockData/QuestionsData'
import { PageTitle } from '../Components/PageTitle'
import { Page } from '../Components/Page'
import { PrimaryButton } from '../css/Styles'


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
    <Page >
      <div css={css`
    display: flex;
    align-items: center;
    justify-content: space-between; 
  `}>
        <PageTitle>Unanswered Questions</PageTitle>
        <PrimaryButton onClick={handleAskQuestion}>Ask a question</PrimaryButton>
      </div>
      {
      questionsLoading ? (
        <div>Loading...</div>
      ) : (
        <QuestionList data={questions || [] }/> 
      )
    }
    </Page>
    
  )
}
