import * as React from 'react';
import classNames from 'classnames';
import { TypographyElements } from '../../types/compoundElements';

import { AttributeType } from '../../types/AttributeType';

interface TypographyProps extends AttributeType<TypographyElements> {
    /**
     * Controls the style of the link.
     * 
     * Default value: 'p'
     */
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
}

/**
 * The typography component renders the correct element based off of 
 * the variant prop's value.
 * 
 * Usage:
 * <Typography variant='h1'>
 *   Main Heading
 * </Typography>
 * 
 * <Typography>
 *   Body text.
 * </Typography>
 */
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
