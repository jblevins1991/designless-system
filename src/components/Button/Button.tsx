import * as React from 'react';
import classNames from 'classnames';

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
    /**
     * Controls the style of the button.
     * 
     * Default value: 'solid'
     */
    variant?: 'solid' | 'outlined' | 'text';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({
    children,
    className,
    color = 'primary',
    disabled = false,
    fullWidth = false,
    size = 'medium',
    variant = 'solid',
    ...props
}, ref) => {
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
        disabled={disabled}
        ref={ref}
    >
        {children}
    </button>
});

Button.displayName = 'Button';

export default Button;