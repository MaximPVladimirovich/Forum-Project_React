/** @jsxImportSource @emotion/react */
import React from 'react'
import {Page} from '../Components/Page'
import { css } from '@emotion/react'
import { useSearchParams } from 'react-router-dom';
import { QuestionList } from '../Components/QuestionList';
import { searchQuestions, QuestionData } from '../MockData/QuestionsData';

export const SearchPage = function() {

  const [searchParams] = useSearchParams();

  const [questions, setQuestions] = React.useState<QuestionData[]>([]);

  const search = searchParams.get('criteria') || '';

  React.useEffect(function() {
    const doSearch = async function(criteria: string) {
      const foundResults = await searchQuestions(criteria)
      setQuestions(foundResults)
    }
    doSearch(search)
  }, [search])

  return (
    <Page title='Search Results'>{search && (<p
    css={css`
    font-size: 16px;
    font-style: italic;
    margin-top: 0px;
    `}    
    >for {search}</p>
    )}
    <QuestionList data={questions } />
    </Page>
  )
}
