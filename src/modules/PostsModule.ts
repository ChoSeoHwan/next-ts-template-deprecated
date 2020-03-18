import {
    ImmerReducer,
    createReducerFunction,
    createActionCreators
} from 'immer-reducer';

import IPostData from 'types/IPostData';

interface IPostsModule {
    loading: boolean;
    error: string | null;
    data: IPostData[];
}

const initialState: IPostsModule = {
    loading: false,
    error: null,
    data: []
};

class PostsModule extends ImmerReducer<IPostsModule> {
    /**
     * start fetch post list
     */
    public fetchPosts() {
        this.draftState = {
            loading: true,
            error: null,
            data: []
        };
    }

    /**
     * fetch post list succeed
     * @param data
     */
    public fetchPostsSucceed(data: IPostData[]) {
        this.draftState = {
            ...this.draftState,
            loading: false,
            error: null,
            data
        };
    }

    /**
     * fetch post list failed with error
     * @param error
     */
    public fetchPostsError(error: string) {
        this.draftState = {
            loading: false,
            error,
            data: []
        };
    }

    /**
     * clear post list
     */
    public clearPosts() {
        this.draftState = initialState;
    }
}

export const PostsReducer = createReducerFunction(PostsModule, initialState);
export const PostsAction = createActionCreators(PostsModule);
