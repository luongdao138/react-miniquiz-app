import { Category } from '../../models';
import { CategoryActionType, LoadCategoryAction, LoadCategorySuccessAction } from './categoryTypes';

export const loadCategory = (): LoadCategoryAction => ({
  type: CategoryActionType.LOAD_CATEGORIES,
});

export const loadCategorySuccess = (data: Category[]): LoadCategorySuccessAction => ({
  type: CategoryActionType.LOAD_CATEGORIES_SUCCESS,
  payload: data,
});
