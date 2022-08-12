import classNames from 'classnames';
import * as React from 'react';
import { useControlled, useCreateBlurHandler, useCreateChangeHandler, useCreateFocusHandler } from '../../hooks';

import { AttributeType } from '../../types/AttributeType';
import { CommonInputType } from '../../types/CommonInputType';
import Error from '../Error/Error';
import Hint from '../Hint/Hint';

type OmittedInputProps = 'label' | 'name'

interface InputProps extends Omit<AttributeType<HTMLInputElement>, OmittedInputProps>, CommonInputType {
    /**
     * 
     */
    variant?: 'filled' | 'outlined';
}

/**
 * Styless Input Component
 * 
 * The styless input component contains the label, input, hint, and error component. This 
 * is to make input elements ada-compliant by default. The hint and error components will 
 * only render if you provide a value for their respective props. The usage example below 
 * shows how to use an input that will have a hint and error component.
 * 
 * Usage:
 * <Input
 *   error='Please enter a valid first name.'
 *   hint='Joe Smith'
 *   label='First Name'
 * />
 */
const Input = React.forwardRef<
    HTMLInputElement,
    InputProps
>(({
    className,
    defaultValue,
    disabled = false,
    error,
    hint,
    label,
    name,
    onBlur,
    onChange,
    onFocus,
    placeholder,
    value: valueProp,
    variant = 'filled',
    ...props
}, ref) => {
    const id = React.useId();

    const [value, setValueIfUndefined] = useControlled({
        controlled: valueProp,
        default: defaultValue,
        name: 'Input'
    });


    const handleBlur = useCreateBlurHandler<HTMLInputElement>(disabled, onBlur);

    const handleChange = useCreateChangeHandler<HTMLInputElement>(
        disabled,
        (event: React.ChangeEvent<HTMLInputElement>) => {
            onChange?.(event);

            setValueIfUndefined(event.currentTarget.value);
        }
    );
    
    const handleFocus = useCreateFocusHandler<HTMLInputElement>(disabled, onFocus);

    return <>
        <label htmlFor={`${id}-input`}>
            {label}

            <input
                {...props}
                aria-describedby={`${id}-hint`}
                aria-errormessage={`${id}-error`}
                aria-invalid={!!error}
                className={
                    classNames(
                        'input',
                        variant,
                        className
                    )
                }
                id={`${id}-input`}
                name={name}
                onBlur={handleBlur}
                onChange={handleChange}
                onFocus={handleFocus}
                placeholder={placeholder}
                value={value}
                ref={ref}
            />
        </label>

        {hint && <Hint id={`${id}-hint`}>
            {hint}
        </Hint>}

        {error && <Error id={`${id}-error`}>
            {error}
        </Error>}
    </>;
});

Input.displayName = 'Input';

export type {
    InputProps
};

export default Input;