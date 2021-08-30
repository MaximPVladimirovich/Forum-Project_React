import React from 'react'
import { Page } from '../Components/Page'
import { useForm } from 'react-hook-form'
import { Fieldset } from '../css/Styles'
import { FieldLabel } from '../css/Styles'
import { FieldInput } from '../css/Styles'
import { FieldContainer } from '../css/Styles'
import { FieldTextArea } from '../css/Styles'
import { FormButtonContainer } from '../css/Styles'
import { PrimaryButton, FieldError } from '../css/Styles'

type FormData = {
  title: string;
  content: string;
}


export const AskPage = function () {
  const { register, formState: { errors } } = useForm<FormData>({ mode: 'onBlur' });
  return (
    <Page title='Ask a question'>
      <form>
        <Fieldset>
          <FieldContainer>
            <FieldLabel htmlFor="title">
              Title
            </FieldLabel>
            <FieldInput
              id="title"
              type="text"
              {...register("title", { required: true, minLength: 10 })}
            />{errors.title && errors.title.type === 'required' && <FieldError> You must enter the question title</FieldError>}
            {errors.title && errors.title.type === 'minLength' && (<FieldError>The title must be at least 10 characters long</FieldError>)}
          </FieldContainer>
          <FieldContainer>
            <FieldLabel>
              Content
            </FieldLabel>
            <FieldTextArea id='content' {...register('content', { required: true, minLength: 50 })} />
            {errors.content && errors.content.type === 'required' && (<FieldError>You must enter the questions content</FieldError>)}
            {errors.content && errors.content.type === 'minLength' && (<FieldError>Content must be at least 50 characters long</FieldError>)}
          </FieldContainer>
          <FormButtonContainer>
            <PrimaryButton type="submit">
              Submit Question
            </PrimaryButton>
          </FormButtonContainer>
        </Fieldset>
      </form>
    </Page>
  )
}
