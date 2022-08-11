import * as React from 'react';
import classNames from 'classnames';

import { AttributeType } from '../../types/AttributeType';

interface FieldsetProps extends AttributeType<HTMLFieldSetElement> {
    legend: string;
}

/**
 * Styless Fieldset Component
 * 
 * The fieldset component renders a fieldset, legend, and children
 * passed to it. The legend prop controls the legend text that is 
 * rendered.
 * 
 * Usage:
 * <Fieldset legend='Personal Information'>
 *   <Input label='First Name' hint='Allison' />
 *   <Input label='Last Name' hint='Smith' />
 *   <Email label='Email' hint='example@example.com' />
 * </Fieldset>
 */
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
