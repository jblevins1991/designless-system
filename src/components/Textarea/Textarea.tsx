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

type TextareaOmitProps = 'name';

export interface TextareaProps extends Omit<React.HTMLAttributes<HTMLTextAreaElement>, TextareaOmitProps> {
    disabled?: boolean;
    error?: string;
    hint?: string;
    label: string;
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
    console.log('disabled', disabled);
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
        <label htmlFor={`${id}-textarea`}>
            {label}
        </label>

        <textarea
            {...props}
            aria-describedby={`${id}-error`}
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

export default Textarea;
