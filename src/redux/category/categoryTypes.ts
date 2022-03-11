import { Category } from '../../models';

export enum CategoryActionType {
  LOAD_CATEGORIES = 'load_categories',
  LOAD_CATEGORIES_SUCCESS = 'load_categories_success',
}

export interface LoadCategoryAction {
  type: CategoryActionType.LOAD_CATEGORIES;
}

export interface LoadCategorySuccessAction {
  type: CategoryActionType.LOAD_CATEGORIES_SUCCESS;
  payload: Category[];
}

export type CategoryAction = LoadCategoryAction | LoadCategorySuccessAction;

export interface CategoryState {
  list: Category[];
}
