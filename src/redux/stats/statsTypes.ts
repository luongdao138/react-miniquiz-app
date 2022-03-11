import { Stats } from '../../models';

export enum statsActionType {
  UPDATE_STATS = 'update_stats',
}

export interface UpdateStatsAction {
  type: statsActionType.UPDATE_STATS;
  payload: Partial<Stats>;
}

export type StatsAction = UpdateStatsAction;
