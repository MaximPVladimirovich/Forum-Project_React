import { QuestionData } from "./MockData/QuestionsData";

interface QuestionsState {
  // Signal of server request
  readonly loading: boolean;

  // Unanswered questions
  readonly unanswered: QuestionData[];

  // Question user is currently viewing
  readonly viewing: QuestionData | null;

  // Questions that matched the search
  readonly searched: QuestionData[];
}

export interface AppeState {
  readonly questions: QuestionsState;
}

// Initial state
const initialQuestionState: QuestionState = {
  loading: false,
  unanswered: [],
  viewing: null,
  searched: [],
};

// Action to get questions from server
export const GETTINGUNANSWEREDQUESTIONS = "GettingUnansweredQuestions";
export const gettingUnansweredQuestionsAction = () =>
  ({
    type: GETTINGUNANSWEREDQUESTIONS,
    // Const assertion will give back immutable type
  } as const);

// Action that will be returned when questions are retreived from server
export const GOTUNANSWEREDQUESTIONS = "GotUnansweredQuestions";
export const gotUnansweredQuestionsAction = () => (questions: QuestionData[]) =>
  ({ type: GOTUNANSWEREDQUESTIONS, question: questions } as const);

// Viewing questions
export const GETTINGQUESTION = "GettingQuestion";
export const gettingQuestionAction = () =>
  ({
    type: GETTINGQUESTION,
  } as const);

export const GOTQUESTION = "GotQuestion";
export const gotQuestionAction = (question: QuestionData[] | null) =>
  ({
    type: GOTQUESTION,
    question: question,
  } as const);

// Searching for questions
export const SEARCHINGQUESTIONS = "SearchingQuestions";
export const searchingQuestionsAction = () =>
  ({
    type: SEARCHINGQUESTIONS,
  } as const);

export const SEARCHEDQUESTIONS = "SearchedQuestions";
export const searchedQuestionsAction = (questions: QuestionData[]) =>
  ({
    type: SEARCHEDQUESTIONS,
    questions,
  } as const);

// Expects a function type to be passed in
type QuestionsActions =
  | ReturnType<typeof gettingUnansweredQuestionsAction>
  | ReturnType<typeof gotUnansweredQuestionsAction>
  | ReturnType<typeof gettingQuestionAction>
  | ReturnType<typeof gotQuestionAction>
  | ReturnType<typeof searchingQuestionsAction>
  | ReturnType<typeof searchedQuestionsAction>;

// Skeleton reducer function
const questionsReducer = (
  state = initialQuestionState,
  action: QuestionsActions
) => {
  // Handle Difference action and returns
  switch (action.type) {
    case GETTINGUNANSWEREDQUESTIONS: {
      return {
        ...state,
        loading: true,
      };
    }
    case GOTUNANSWEREDQUESTIONS: {
      return {
        ...state,
        unanswered: action.question,
        loading: false,
      };
    }
    case GETTINGQUESTION: {
      return {
        ...state,
        viewing: null,
        loading: true,
      };
    }
    case GOTQUESTION: {
      return {
        ...state,
        viewing: action.question,
        loading: true,
      };
    }
    case SEARCHINGQUESTIONS: {
      return {
        ...state,
        searched: [],
        loading: true,
      };
    }
    case SEARCHEDQUESTIONS: {
      return {
        ...state,
        searched: action.questions,
        loading: false,
      };
    }
  }
  // New state
  return state;
};
