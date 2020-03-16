import React from 'react';

interface IError {
    message: string;
}

const Error: React.FunctionComponent<IError> = ({ message }) => (
    <p>{message}</p>
);

export default Error;
