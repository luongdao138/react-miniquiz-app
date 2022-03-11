import { QuestionConfig } from '../../models';
import { configActionType, ResetConfigAction, SetConfigAction } from './configTypes';

export const setConfig = (config: QuestionConfig): SetConfigAction => ({
  type: configActionType.SET_CONFIG,
  payload: config,
});

export const reSetConfig = (): ResetConfigAction => ({
  type: configActionType.RESET_CONFIG,
});
