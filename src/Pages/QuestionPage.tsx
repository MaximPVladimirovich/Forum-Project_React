/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { gray3, gray6 } from '../css/Styles';
import React from 'react'
import { Page} from '../Components/Page'
import { useParams} from 'react-router-dom'
import { QuestionData, getQuestion } from '../MockData/QuestionsData'

export const QuestionPage = function() {
  const [question, setQuestion] = React.useState<QuestionData | null>(null);

  const {questionId} = useParams()

  React.useEffect(() => {
    const doGetQuestion = async (
      questionId: number
    ) => {
      const foundQuestion = await getQuestion(questionId);
      setQuestion(foundQuestion);
    };
    if(questionId) {
      doGetQuestion(Number(questionId));
    }
  }, [questionId]);

  return (
    <Page>Questions Page {questionId}</Page>
  )
}
