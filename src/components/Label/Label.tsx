import * as React from 'react';
import classNames from 'classnames';

import { AttributeType } from '../../types/AttributeType';

interface LabelProps extends AttributeType<HTMLLabelElement> {}

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
