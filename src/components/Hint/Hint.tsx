import * as React from 'react';

interface HintProps {
    children?: React.ReactNode;
    id: string;
}

/**
 * Styless Hint Component
 * 
 * The styless hint component renders a span element. The 
 * hint component is designed mainly for building out custom 
 * input elements.
 */
const Hint: React.FC<HintProps> = ({
    children,
    id
}) => {
    return <span id={id}>
        { children }
    </span>
};

Hint.displayName = 'Hint';

export type {
    HintProps
};

export default Hint;
