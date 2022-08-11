import * as React from 'react';
import classNames from 'classnames';

import {
    Error,
    Hint
} from '..';

import {
    useCreateBlurHandler,
    useCreateChangeHandler,
    useCreateClickHandler,
    useCreateFocusHandler
} from '../../hooks';
import Label from '../Label/Label';

import { AttributeType } from '../../types/AttributeType';

type TextareaOmitProps = 'name';

interface TextareaProps extends Omit<AttributeType<HTMLTextAreaElement>, TextareaOmitProps> {
    /**
     * Makes the button non-interactive.
     * 
     * Default value: false
     */
    disabled?: boolean;
    /**
     * A string representing the error text.
     */
    error?: string;
    /**
     * A string representing the hint text.
     */
    hint?: string;
    /**
     * A string representing the label text.
     */
    label: string;
    /**
     * The name of the textarea component.
     */
    name: string;
}

const Textarea = React.forwardRef<
    HTMLTextAreaElement,
    TextareaProps
>(({
    className,
    disabled = false,
    error,
    hint,
    label,
    name,
    onBlur,
    onChange,
    onClick,
    onFocus,
    ...props
}, ref) => {
    const id = React.useId();

    const handleBlur = useCreateBlurHandler(
        (event: React.FocusEvent<HTMLTextAreaElement>) => {
            onBlur?.(event);
        },
        disabled
    );

    const handleChange = useCreateChangeHandler(
        (event: React.ChangeEvent<HTMLTextAreaElement>) => {
            onChange?.(event);
        },
        disabled
    );

    const handleClick = useCreateClickHandler(
        (event: React.MouseEvent<HTMLTextAreaElement>) => {
            onClick?.(event);
        },
        disabled
    );

    const handleFocus = useCreateFocusHandler(
        (event: React.FocusEvent<HTMLTextAreaElement>) => {
            onFocus?.(event);
        },
        disabled
    );

    return <>
        <Label htmlFor={`${id}-textarea`}>
            {label}
        </Label>

        <textarea
            {...props}
            aria-describedby={`${id}-hint`}
            aria-errormessage={`${id}-error`}
            aria-invalid={!!error}
            className={
                classNames(
                    'textarea',
                    className
                )
            }
            disabled={disabled}
            id={`${id}-textarea`}
            name={name}
            onBlur={handleBlur}
            onChange={handleChange}
            onClick={handleClick}
            onFocus={handleFocus}
            ref={ref}
        />

        {hint && <Hint id={`${id}-hint`}>
            {hint}
        </Hint>}

        {error && <Error id={`${id}-error`}>
            {error}    
        </Error>}
    </>
});

Textarea.displayName = 'Textarea';

export type {
    TextareaProps
};

export default Textarea;
