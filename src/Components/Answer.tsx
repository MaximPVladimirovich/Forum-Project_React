/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { AnswerData } from '../MockData/QuestionsData';
import { gray3 } from '../css/Styles';

interface Props {
  data: AnswerData;
}

export const Answer = function({data}: Props) {
  return (
    <div>
      <div>
        {data.content}
      </div>
      <div>
        {`Answered by ${data.userName} on ${data.created.toLocaleDateString()} ${data.created.toLocaleTimeString()}`}
      </div>
    </div>
  )
}
