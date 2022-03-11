import { configActionType, ResetConfigAction } from '../config';
import { QuestionAction, questionActionType, QuestionState } from './questionType';

const initialState: QuestionState = {
  list: [],
  loading: true,
};

const questionReducer = (
  state: QuestionState = initialState,
  action: QuestionAction | ResetConfigAction
): QuestionState => {
  switch (action.type) {
    case questionActionType.LOAD_QUESTION:
      return { ...state, loading: true };
    case questionActionType.LOAD_QUESTION_SUCCESS:
      return { ...state, loading: false, list: action.payload };
    case configActionType.RESET_CONFIG:
      return initialState;

    default:
      return state;
  }
};

export default questionReducer;
