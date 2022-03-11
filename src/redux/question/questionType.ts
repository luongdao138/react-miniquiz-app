import { Question, QuestionConfig } from '../../models';

export enum questionActionType {
  LOAD_QUESTION = 'load_question',
  LOAD_QUESTION_SUCCESS = 'load_question_success',
}

export interface LoadQuestionAction {
  type: questionActionType.LOAD_QUESTION;
  payload: QuestionConfig;
}

export interface LoadQuestionSuccessAction {
  type: questionActionType.LOAD_QUESTION_SUCCESS;
  payload: Question[];
}

export type QuestionAction = LoadQuestionAction | LoadQuestionSuccessAction;

export interface QuestionState {
  list: Question[];
  loading: boolean;
}
