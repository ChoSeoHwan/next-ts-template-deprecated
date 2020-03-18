import React, { useEffect } from 'react';
import { NextPage } from 'next';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import TStoreState from 'types/TStoreState';

import { PostsAction } from 'modules/PostsModule';

import GnbLayout from 'components/templates/GnbLayout';

import PostsList from 'components/organisms/PostsList';

import Loading from 'components/atoms/Loading';
import Error from 'components/atoms/Error';

const Posts: NextPage = () => {
    const dispatch = useDispatch();

    const { loading, error, data } = useSelector(
        (state: TStoreState) => ({
            loading: state.PostsReducer.loading,
            error: state.PostsReducer.error,
            data: state.PostsReducer.data
        }),
        shallowEqual
    );

    // clear post list data when unmount
    useEffect(
        () => () => {
            dispatch(PostsAction.clearPosts());
        },
        []
    );

    return (
        <GnbLayout title={'Post List'}>
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
