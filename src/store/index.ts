import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { MakeStore } from 'next-redux-wrapper';

import rootReducer from 'store/reducers';

import rootSaga from 'sagas';

// all reducer state type
export type StoreState = ReturnType<typeof rootReducer>;

// saga running task for saga control when SSR
export let sagaTask: ReturnType<
    ReturnType<typeof createSagaMiddleware>['run']
> | null = null;

export const initStore: MakeStore = (initialState: StoreState) => {
    const sagaMiddleware = createSagaMiddleware();

    const store: ReturnType<typeof createStore> = createStore(
        rootReducer,
        initialState,
        composeWithDevTools(applyMiddleware(sagaMiddleware))
    );

    sagaTask = sagaMiddleware.run(rootSaga);

    return store;
};
