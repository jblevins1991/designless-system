import * as React from 'react';

export interface ErrorProps {
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

export default Error;
