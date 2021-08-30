import React from 'react'
import { Page } from '../Components/Page'
import { useForm } from 'react-hook-form'
import { Fieldset } from '../css/Styles'
import { FieldLabel } from '../css/Styles'
import { FieldInput } from '../css/Styles'
import { FieldContainer } from '../css/Styles'
import { FieldTextArea } from '../css/Styles'
import { FormButtonContainer } from '../css/Styles'
import { PrimaryButton } from '../css/Styles'

type FormData = {
  title: string;
  content: string;
}


export const AskPage = function () {
  const { register } = useForm<FormData>();
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
              {...register("title")}
            />
          </FieldContainer>
          <FieldContainer>
            <FieldLabel>
              Content
            </FieldLabel>
            <FieldTextArea id='content' {...register('content')} />
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
