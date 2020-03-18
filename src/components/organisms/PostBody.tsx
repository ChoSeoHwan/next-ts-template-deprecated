import React from 'react';

import IPostData from 'types/IPostData';

import PostTitle from 'components/molecules/PostTitle';
import PostContent from 'components/molecules/PostContent';

interface IPost {
    post: IPostData;
}

const PostBody: React.FunctionComponent<IPost> = ({
    post: { title, userId, body }
}) => (
    <div>
        <PostTitle title={title} userId={userId} />
        <PostContent body={body} />
    </div>
);

export default PostBody;
