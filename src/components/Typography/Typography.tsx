import * as React from 'react';
import classNames from 'classnames';
import { TypographyElements } from '../../types/compoundElements';

interface TypographyProps extends React.HTMLAttributes<TypographyElements> {
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
}

const Typography: React.FC<TypographyProps> = ({
    children,
    className,
    variant = 'p',
    ...props
}) => {
    return React.createElement(variant, {
        ...props,
        className: classNames('typography', variant, className),
    }, children);
};

Typography.displayName = 'Typography';

export type {
    TypographyProps
};

export default Typography;
