import * as React from 'react';
import classNames from 'classnames';

import {
    useCreateBlurHandler,
    useCreateClickHandler,
    useCreateFocusHandler
} from '../../hooks';
import { color, size } from '../../types/commonProps';

type ButtonOmitProps = 'size';

export interface ButtonProps extends Omit<React.HTMLAttributes<HTMLButtonElement>, ButtonOmitProps> {
    /**
     * The color of the button.
     * 
     * Default value: 'primary'
     */
    color?: color;
    /**
     * Makes the button non-interactive.
     * 
     * Default value: false
     */
    disabled?: boolean;
    /**
     * Makes the button take 100% of the parent's width.
     * 
     * Default value: false
     */
    fullWidth?: boolean;
    /**
     * Adds a class to the button based on the size prop's value.
     * 
     * Default value: 'medium'
     */
    size?: size;
    type?: 'button' | 'submit' | 'reset';
    /**
     * Controls the style of the button.
     * 
     * Default value: 'solid'
     */
    variant?: 'filled' | 'outlined' | 'text';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({
    children,
    className,
    color = 'primary',
    disabled = false,
    fullWidth = false,
    onBlur,
    onClick,
    onFocus,
    size = 'medium',
    type = 'button',
    variant = 'filled',
    ...props
}, ref) => {
    const handleBlur = useCreateBlurHandler((event: React.FocusEvent<HTMLButtonElement>) => {
        onBlur?.(event);
    }, disabled);
    
    const handleClick = useCreateClickHandler((event: React.MouseEvent<HTMLButtonElement>) => {
        onClick?.(event);
    }, disabled);
    
    const handleFocus = useCreateFocusHandler((event: React.FocusEvent<HTMLButtonElement>) => {
        onFocus?.(event);
    }, disabled);

    return <button
        {...props}
        className={classNames(
            'button',
            color,
            fullWidth,
            size,
            variant,
            className
        )}
        onBlur={handleBlur}
        onClick={handleClick}
        onFocus={handleFocus}
        disabled={disabled}
        type={type}
        ref={ref}
    >
        {children}
    </button>
});

Button.displayName = 'Button';

export default Button;