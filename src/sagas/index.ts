import { all } from 'redux-saga/effects';

import { PostsSaga } from 'sagas/PostsSaga';

export default function* rootSaga() {
    yield all([PostsSaga()]);
}
