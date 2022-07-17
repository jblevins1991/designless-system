import * as React from 'react';

interface ErrorProps {
    children?: React.ReactNode;
    id: string;
}

const Error: React.FC<ErrorProps> = ({
    children,
    id
}) => {
    return <span
        aria-live='polite'
        id={id}
        role='region'
    >
        { children }
    </span>
};

Error.displayName = 'Error';

export type {
    ErrorProps
};

export default Error;
