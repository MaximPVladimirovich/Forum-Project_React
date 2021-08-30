/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { gray6 } from '../css/Styles';
import React from 'react'
import { Page } from '../Components/Page'
import { useParams } from 'react-router-dom'
import { QuestionData, getQuestion } from '../MockData/QuestionsData'
import { AnswerList } from '../Components/AnswerList'
import { useForm } from 'react-hook-form'
import { Fieldset } from '../css/Styles'
import { FieldContainer } from '../css/Styles'
import { FieldLabel } from '../css/Styles'
import { FieldTextArea } from '../css/Styles'
import { FormButtonContainer } from '../css/Styles'
import { PrimaryButton } from '../css/Styles'

type FormData = {
  content: string;
}

export const QuestionPage = function () {
  const { register } = useForm<FormData>()
  const [question, setQuestion] = React.useState<QuestionData | null>(null);

  const { questionId } = useParams()

  React.useEffect(() => {
    const doGetQuestion = async (
      questionId: number
    ) => {
      const foundQuestion = await getQuestion(questionId);
      setQuestion(foundQuestion);
    };

    if (questionId) {
      doGetQuestion(Number(questionId));
    }
  }, [questionId]);

  return (
    <Page>
      <div css={css`
        background-color: white;
        padding: 15px 20px 20px 20px;
        border-radius: 4px;
        border: 1px solid ${gray6};
        box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16);
      `}>
        <div css={css`
        font-size: 19px;
        font-weight: bold;
        margin: 10px 0px 5px;
      `}>{question === null ? '' : question.title}
        </div>
        {question !== null && (<React.Fragment><p
          css={css`
        margin-top: 0px;
        background-color: white;
        `}
        >{question.content}</p>
          <div>
            {`Asked by ${question.userName} on ${question.created.toLocaleDateString()} ${question.created.toLocaleTimeString()}`}
          </div>
          <AnswerList data={question.answers} />
          <form>
            <Fieldset>
              <FieldContainer>
                <FieldLabel>
                  Your answer
                </FieldLabel>
                <FieldTextArea>
                </FieldTextArea>
                <FormButtonContainer>
                  <PrimaryButton>
                    Submit Answer
                  </PrimaryButton>
                </FormButtonContainer>
              </FieldContainer>
            </Fieldset>
          </form>
        </React.Fragment>)}
      </div>
    </Page>
  )
}
