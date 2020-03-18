import {
    createActionCreators,
    createReducerFunction,
    ImmerReducer
} from 'immer-reducer';

import IPostData from 'types/IPostData';

interface IPostModule {
    loading: boolean;
    error: string | null;
    id: number | null;
    data: IPostData | null;
}

const initialState: IPostModule = {
    loading: false,
    error: null,
    id: null,
    data: null
};

class PostModule extends ImmerReducer<IPostModule> {
    /**
     * start fetch post data
     */
    public fetchPost(id: number) {
        this.draftState = {
            loading: true,
            error: null,
            id,
            data: null
        };
    }

    /**
     * fetch post data succeed
     * @param data
     */
    public fetchPostSucceed(data: IPostData) {
        this.draftState = {
            ...this.draftState,
            loading: false,
            error: null,
            data
        };
    }

    /**
     * fetch post data failed with error
     * @param error
     */
    public fetchPostError(error: string) {
        this.draftState = {
            ...this.draftState,
            loading: false,
            error,
            data: null
        };
    }

    /**
     * clear post data
     */
    public clearPost() {
        this.draftState = initialState;
    }
}

export const PostReducer = createReducerFunction(PostModule, initialState);
export const PostAction = createActionCreators(PostModule);
