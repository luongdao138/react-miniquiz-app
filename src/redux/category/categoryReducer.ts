import { CategoryAction, CategoryActionType, CategoryState } from './categoryTypes';

const initialState: CategoryState = {
  list: [],
};

const categoryReducer = (state = initialState, action: CategoryAction): CategoryState => {
  switch (action.type) {
    case CategoryActionType.LOAD_CATEGORIES_SUCCESS:
      return { ...state, list: action.payload };
    default:
      return state;
  }
};

export default categoryReducer;
