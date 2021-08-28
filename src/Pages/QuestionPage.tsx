import React from 'react'
import { Page} from '../Components/Page'
import { useParams} from 'react-router-dom'

export const QuestionPage = function() {

  const {questionId} = useParams()
  return (
    <Page>Questions Page {questionId}</Page>
  )
}
