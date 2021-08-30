export interface QuestionData {
  questionId: number;
  title: string;
  content: string;
  userName: string;
  created: Date;
  answers: AnswerData[];
}

export interface AnswerData {
  answerId: number;
  content: string;
  userName: string;
  created: Date;
}

const wait = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const questions: QuestionData[] = [
  {
    questionId: 1,
    title: "Why should I learn TypeScript?",
    content:
      "TypeScript seems to be getting popular so I wondered whether it is worth my time learning it? What benefits does it give over JavaScript?",
    userName: "Bob",
    created: new Date(),
    answers: [],
  },
  {
    questionId: 2,
    title: "Which state management tool should I use?",
    content:
      "There seem to be a fair few state management tools around for React - React, Unstated, ... which one should I use?",
    userName: "Bob",
    created: new Date(),
    answers: [],
  },
];

export const getUnansweredQuestions = async (): Promise<QuestionData[]> => {
  await wait(500);
  return questions.filter(function (q) {
    return q.answers.length === 0;
  });
};

export const getQuestion = async (
  questionId: number
): Promise<QuestionData | null> => {
  await wait(500);
  const results = questions.filter(function (q) {
    return q.questionId === questionId;
  });
  return results.length === 0 ? null : results[0];
};

export const searchQuestions = async (
  criteria: string
): Promise<QuestionData[]> => {
  await wait(500);
  return questions.filter(function (q) {
    return (
      q.title.toLowerCase().indexOf(criteria.toLowerCase()) >= 0 ||
      q.content.toLowerCase().indexOf(criteria.toLowerCase()) >= 0
    );
  });
};

export interface PostQuestionData {
  title: string;
  content: string;
  userName: string;
  created: Date;
}

export const postQuestion = async (
  question: PostQuestionData
): Promise<QuestionData | undefined> => {
  await wait(500);
  const questionId =
    Math.max(
      ...questions.map(function (q) {
        return q.questionId;
      })
    ) + 1;
  const newQuestion: QuestionData = { ...question, questionId, answers: [] };
  questions.push(newQuestion);
  return newQuestion;
};

// Simulates posting an answer
export interface PostAnswerData {
  questionId: number;
  content: string;
  userName: string;
  created: Date;
}

// Find question and add answer to answer array
export const PostAnswer = async function (
  answer: PostAnswerData
): Promise<AnswerData | undefined> {
  await wait(500);
  const question = questions.filter(
    (q) => q.questionId === answer.questionId
  )[0];
  const answerInQuestion: AnswerData = {
    answerId: 99,
    ...answer,
  };
  question.answers.push(answerInQuestion);
  return answerInQuestion;
};
