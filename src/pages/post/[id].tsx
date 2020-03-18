import React, { useEffect } from 'react';
import { NextPage } from 'next';
import { useDispatch, useSelector } from 'react-redux';

import TStoreState from 'types/TStoreState';

import { PostAction } from 'modules/PostModule';

import GnbLayout from 'components/templates/GnbLayout';

import PostBody from 'components/organisms/PostBody';

import Loading from 'components/atoms/Loading';
import Error from 'components/atoms/Error';

const Post: NextPage = () => {
    const dispatch = useDispatch();

    const { loading, error, data } = useSelector((state: TStoreState) => ({
        loading: state.PostReducer.loading,
        error: state.PostReducer.error,
        data: state.PostReducer.data
    }));

    // clear post data when unmount
    useEffect(
        () => () => {
            dispatch(PostAction.clearPost());
        },
        []
    );

    return (
        <GnbLayout title={'post'}>
            {loading && <Loading />}
            {!loading && error && <Error message={error} />}
            {!loading && !data && <Error message="게시글이 없습니다." />}
            {!loading && data && <PostBody post={data} />}
        </GnbLayout>
    );
};

Post.getInitialProps = async ({ store, query }) => {
    const { id } = query;
    const postId: number = parseInt(id.toString(), 10);
    store.dispatch(PostAction.fetchPost(postId));

    return {};
};

export default Post;
