import * as React from 'react';
import classNames from 'classnames';

import { AttributeType } from '../../types/AttributeType';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
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

Label.displayName = 'Label';

export type {
    LabelProps
};

export default Label;
