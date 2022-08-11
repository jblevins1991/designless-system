import * as React from 'react';
import classNames from 'classnames';

import { AttributeType } from '../../types/AttributeType';

interface LabelProps extends AttributeType<HTMLLabelElement> {}

/**
 * Styless Label Component
 * 
 * The styless label component renders a label element. The 
 * label component is designed mainly for building out custom 
 * input elements.
 */
const Label: React.FC<LabelProps> = ({
    children,
    className,
    htmlFor,
    ...props
}) => {
    return <label
        {...props}
        className={
            classNames(
                'label',
                className
            )
        }
        htmlFor={htmlFor}
    >
        {children}
    </label>;
};

export type {
    LabelProps
};

export default Label;
