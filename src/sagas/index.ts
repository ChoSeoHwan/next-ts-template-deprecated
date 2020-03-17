import { all } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';

import { PostsSaga } from 'sagas/PostsSaga';

// root saga
function* rootSaga() {
    yield all([PostsSaga()]);
}

// create saga middleware
export const sagaMiddleware = createSagaMiddleware();

// saga running task
export let sagaTask: ReturnType<ReturnType<typeof createSagaMiddleware>['run']>;

// start saga middleware
export const runSagaMiddleware = () => {
    sagaTask = sagaMiddleware.run(rootSaga);
};
