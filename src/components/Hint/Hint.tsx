import * as React from 'react';

export interface HintProps {
    children?: React.ReactNode;
    id: string;
}

const Hint: React.FC<HintProps> = ({
    children,
    id
}) => {
    return <span id={id}>
        { children }
    </span>
};

Hint.displayName = 'Hint';

export default Hint;
