import React from 'react';

import IPost from 'types/IPost';

import PostsItem from 'components/molecules/PostsItem';

interface IPostsList {
    posts: IPost[];
}

const PostsList: React.FunctionComponent<IPostsList> = ({ posts }) => (
    <ul>
        {posts.map((post) => (
            <PostsItem {...post} key={post.id} />
        ))}
    </ul>
);

export default PostsList;
