import * as React from 'react';
import classNames from 'classnames';

import { AttributeType } from '../../types/AttributeType';

interface FieldsetProps extends AttributeType<HTMLFieldSetElement> {
    legend: string;
}

const Fieldset: React.FC<FieldsetProps> = ({
    children,
    className,
    legend,
    ...props
}) => {
    return <fieldset
        {...props}
        className={
            classNames(
                'fieldset',
                className
            )
        }
    >
        <legend className='fieldset-legend'>
            {legend}
        </legend>

        {children}
    </fieldset>;
};

export type {
    FieldsetProps
};

export default Fieldset;
