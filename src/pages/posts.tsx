import React from 'react';
import { NextPage } from 'next';
import { shallowEqual, useSelector } from 'react-redux';

import { PostsAction } from 'store/actions';
import { StoreState } from 'store';

import GnbLayout from 'components/templates/GnbLayout';

import PostsList from 'components/organisms/PostsList';

import Loading from 'components/atoms/Loading';
import Error from 'components/atoms/Error';

const Posts: NextPage = () => {
    const { loading, error, data } = useSelector(
        (state: StoreState) => ({
            loading: state.PostsReducer.loading,
            error: state.PostsReducer.error,
            data: state.PostsReducer.data
        }),
        shallowEqual
    );

    return (
        <GnbLayout>
            <h1>Post List</h1>
            {loading && <Loading />}
            {!loading && error && <Error message={error} />}
            {!loading && !data && <Error message="게시글이 없습니다." />}
            {!loading && data && <PostsList posts={data} />}
        </GnbLayout>
    );
};

Posts.getInitialProps = async ({ store }) => {
    store.dispatch(PostsAction.fetchPosts());

    return {};
};

export default Posts;
