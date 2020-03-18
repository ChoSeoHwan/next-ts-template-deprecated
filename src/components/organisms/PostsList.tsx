import React from 'react';

import IPostData from 'types/IPostData';

import PostsItem from 'components/molecules/PostsItem';

interface IPostsList {
    posts: IPostData[];
}

const PostsList: React.FunctionComponent<IPostsList> = ({ posts }) => (
    <ul>
        {posts.map((post) => (
            <PostsItem {...post} key={post.id} />
        ))}
    </ul>
);

export default PostsList;
