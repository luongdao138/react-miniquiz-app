import { Stats } from '../../models';
import { configActionType, ResetConfigAction } from '../config';
import { StatsAction, statsActionType } from './statsTypes';

const initalState: Stats = {
  correctAns: 0,
  incorrectAns: 0,
  currentQuestion: 0,
  score: 0,
  attemptedQuestion: 0,
  history: [],
};

const statsReducer = (
  state: Stats = initalState,
  action: StatsAction | ResetConfigAction
): Stats => {
  switch (action.type) {
    case statsActionType.UPDATE_STATS:
      return { ...state, ...action.payload };
    case configActionType.RESET_CONFIG:
      return initalState;

    default:
      return state;
  }
};

export default statsReducer;
