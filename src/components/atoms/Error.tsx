/** @jsx jsx */
import { FC } from 'react';

import { css, jsx } from '@emotion/core';

interface IError {
    /** 출력할 메시지 */
    message: string;
}

const ErrorStyle = css`
    width: 100%;
    text-align: center;
`;

/** 에러 메시지 출력용 컴포넌트 */
const Error: FC<IError> = ({ message }) => <p css={ErrorStyle}>{message}</p>;

export default Error;
