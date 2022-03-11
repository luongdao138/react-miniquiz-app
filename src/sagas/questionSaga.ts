import { takeEvery, call, put, all } from 'redux-saga/effects';
import questionApi from '../api/questionApi';
import { ListResponse, Question } from '../models';
import { LoadQuestionAction, loadQuestionsSuccess, questionActionType } from '../redux/question';

function* handleLoadQuestions({ payload }: LoadQuestionAction) {
  const data: ListResponse<Question> = yield call(questionApi.getAll, payload);
  yield put(loadQuestionsSuccess(data.results));
}

function* watchLoadQuestions() {
  yield takeEvery(questionActionType.LOAD_QUESTION, handleLoadQuestions);
}

function* questionSaga() {
  yield all([watchLoadQuestions()]);
}

export default questionSaga;
