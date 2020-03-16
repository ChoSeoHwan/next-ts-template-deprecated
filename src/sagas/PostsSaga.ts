import { takeEvery, put, call } from 'redux-saga/effects';

import axios from 'libs/axios';

import { PostsAction } from 'store/actions';

// call posts list api
function fetchPostsApi() {
    return axios.get('http://localhost:8000/posts');
}

// get posts list saga
function* fetchPostsSaga() {
    try {
        const response = yield call(fetchPostsApi);

        yield put(PostsAction.fetchPostsSucceed(response.data));
    } catch (error) {
        yield put(PostsAction.fetchPostsError(error.message));
    }
}

export function* PostsSaga() {
    yield takeEvery<ReturnType<typeof PostsAction.fetchPosts>>(
        PostsAction.fetchPosts.type,
        () => fetchPostsSaga()
    );
}
