import { QuestionConfig } from '../../models';

export enum configActionType {
  SET_CONFIG = 'set_config',
  RESET_CONFIG = 'reset_config',
}

export interface SetConfigAction {
  type: configActionType.SET_CONFIG;
  payload: QuestionConfig;
}

export interface ResetConfigAction {
  type: configActionType.RESET_CONFIG;
}

export type ConfigAction = ResetConfigAction | SetConfigAction;
