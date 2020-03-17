import {
    ImmerReducer,
    createReducerFunction,
    createActionCreators
} from 'immer-reducer';

import IPost from 'types/IPost';

interface IPostsModule {
    loading: boolean;
    error: string | null;
    data: IPost[];
}

const initialState: IPostsModule = {
    loading: false,
    error: null,
    data: []
};

class PostsModule extends ImmerReducer<IPostsModule> {
    /**
     * start fetch post
     */
    public fetchPosts() {
        this.draftState = {
            loading: true,
            error: null,
            data: []
        };
    }

    /**
     * fetch post succeed
     * @param data
     */
    public fetchPostsSucceed(data: IPost[]) {
        this.draftState = {
            ...this.draftState,
            loading: false,
            error: null,
            data
        };
    }

    /**
     * fetch post failed with error
     * @param error
     */
    public fetchPostsError(error: string) {
        this.draftState = {
            loading: false,
            error,
            data: []
        };
    }
}

export const PostsReducer = createReducerFunction(PostsModule, initialState);
export const PostsAction = createActionCreators(PostsModule);
