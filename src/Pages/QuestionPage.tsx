/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react'
import { Page } from '../Components/Page'
import { useParams } from 'react-router-dom'
import { QuestionData, getQuestion, PostAnswer } from '../MockData/QuestionsData'
import { AnswerList } from '../Components/AnswerList'
import { useForm } from 'react-hook-form'
import {
  gray6,
  Fieldset,
  FieldContainer,
  FormButtonContainer,
  PrimaryButton,
  FieldTextArea,
  FieldLabel,
  FieldError,
  SubmissionSuccess
} from '../css/Styles'


type FormData = {
  content: string;
}

export const QuestionPage = function () {
  const [successfullySubmitted, setSuccessfullySubmitted] = React.useState(false)
  const { register, formState: { errors }, handleSubmit, formState } = useForm<FormData>()
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

  const submitForm = async (data: FormData) => {
    const result = await PostAnswer({
      questionId: question!.questionId,
      content: data.content,
      userName: "Fred",
      created: new Date(),
    })
    setSuccessfullySubmitted(
      result ? true : false,
    )
  }

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
          <form onSubmit={handleSubmit(submitForm)}>
            {/* Disables form if submission in progress or completed */}
            <Fieldset disabled={formState.isSubmitting || successfullySubmitted}>
              <FieldContainer>
                <FieldLabel>
                  Your answer
                </FieldLabel>
                <FieldTextArea
                  id='content'
                  {...register('content', { required: true, minLength: 50 })}>
                </FieldTextArea>
                {errors.content && errors.content.type === 'required' && (<FieldError>You must enter the answer</FieldError>)}
                {errors.content && errors.content.type === 'minLength' && (<FieldError>The length must be at least 50 characters</FieldError>)}
                <FormButtonContainer>
                  <PrimaryButton>
                    Submit Answer
                  </PrimaryButton>
                </FormButtonContainer>
                {successfullySubmitted && (<SubmissionSuccess>
                  Your answer was successfully submitted</SubmissionSuccess>)}
              </FieldContainer>
            </Fieldset>
          </form>
        </React.Fragment>)}
      </div>
    </Page>
  )
}
