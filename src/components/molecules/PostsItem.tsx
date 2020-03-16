import React from 'react';
import Link from 'next/link';

import IPost from 'types/IPost';

const PostsItem: React.FunctionComponent<IPost> = ({ id, userId, title }) => (
    <li>
        <p>
            <strong>{userId}</strong>
            <Link href={'/post/[id]'} as={`/post/${id}`}>
                <a>{title}</a>
            </Link>
        </p>
    </li>
);
export default PostsItem;
