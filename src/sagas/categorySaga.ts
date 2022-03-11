import { call, all, takeLatest, put } from 'redux-saga/effects';
import { CategoryActionType, loadCategorySuccess } from '../redux/category';
import categoryApi from '../api/categoryApi';
import { Category, ListResponse } from '../models';

function* handleLoadCategories() {
  const categories: ListResponse<Category> = yield call(categoryApi.getAll);
  yield put(loadCategorySuccess(categories.results));
}

function* watchLoadCategories() {
  yield takeLatest(CategoryActionType.LOAD_CATEGORIES, handleLoadCategories);
}

function* categorySaga() {
  yield all([watchLoadCategories()]);
}

export default categorySaga;
