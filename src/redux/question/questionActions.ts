import { Question, QuestionConfig } from '../../models';
import { LoadQuestionAction, LoadQuestionSuccessAction, questionActionType } from './questionType';

export const loadQuestions = (config: QuestionConfig): LoadQuestionAction => {
  return { type: questionActionType.LOAD_QUESTION, payload: config };
};

export const loadQuestionsSuccess = (data: Question[]): LoadQuestionSuccessAction => {
  return { type: questionActionType.LOAD_QUESTION_SUCCESS, payload: data };
};
