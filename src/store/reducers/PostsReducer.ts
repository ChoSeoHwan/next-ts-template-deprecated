import {
    ImmerReducer,
    createReducerFunction,
    createActionCreators
} from 'immer-reducer';

import IPost from 'types/IPost';

interface IPostsReducer {
    loading: boolean;
    error: string | null;
    data: IPost[];
}

const initialState: IPostsReducer = {
    loading: false,
    error: null,
    data: []
};

class PostsReducer extends ImmerReducer<IPostsReducer> {
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

export default createReducerFunction(PostsReducer, initialState);
export const PostsAction = createActionCreators(PostsReducer);
