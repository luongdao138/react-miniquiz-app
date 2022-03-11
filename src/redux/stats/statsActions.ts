import { Stats } from '../../models';
import { statsActionType, UpdateStatsAction } from './statsTypes';
export const updateStats = (newStats: Partial<Stats>): UpdateStatsAction => {
  return {
    type: statsActionType.UPDATE_STATS,
    payload: newStats,
  };
};
