import { takeEvery, put, call } from 'redux-saga/effects';

import axios from 'libs/axios';

import { API_URL } from 'constants/domain';

import { PostAction } from 'modules/PostModule';

// call post data api
function fetchPostApi(id: number) {
    return axios.get(`${API_URL}/posts/${id}`);
}

// get post data saga
function* fetchPostSaga(id: number) {
    try {
        const response = yield call(fetchPostApi, id);

        yield put(PostAction.fetchPostSucceed(response.data));
    } catch (error) {
        yield put(PostAction.fetchPostError(error));
    }
}

export function* PostSaga() {
    yield takeEvery<ReturnType<typeof PostAction.fetchPost>>(
        PostAction.fetchPost.type,
        ({ payload }) => fetchPostSaga(payload)
    );
}
