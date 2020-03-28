import React, { FC } from 'react';

interface IError {
    /** 출력할 메시지 */
    message: string;
}

/** 에러 메시지 출력용 컴포넌트 */
const Error: FC<IError> = ({ message }) => <p>{message}</p>;

export default Error;
