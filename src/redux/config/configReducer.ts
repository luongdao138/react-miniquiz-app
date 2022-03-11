import { QuestionConfig } from '../../models';
import { ConfigAction, configActionType } from './configTypes';

const initialState: QuestionConfig = {} as QuestionConfig;

const configReducer = (state = initialState, action: ConfigAction): QuestionConfig => {
  switch (action.type) {
    case configActionType.SET_CONFIG:
      return action.payload;
    case configActionType.RESET_CONFIG:
      return initialState;

    default:
      return state;
  }
};

export default configReducer;
