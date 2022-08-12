import classNames from 'classnames';
import * as React from 'react';

import Button, { ButtonProps } from '../Button/Button';

type IconButtonPropsToOmit = 'aria-label' | 'children';

interface IconButtonProps extends Omit<ButtonProps, IconButtonPropsToOmit> {
    'aria-label': string;
    icon: React.ReactNode;
}

/**
 * Styless IconButton Component
 * 
 * The icon button component renders our button component with icon rendering 
 * capabilities. The icon is always rendered before the button text.
 * 
 * Usage:
 * <IconButton icon={TrashIcon}>
 *   Delete
 * </IconButton>
 */
const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(({
    'aria-label': ariaLabel,
    className,
    icon,
    name,
    ...props
}, ref) => {
    return <Button
        {...props}
        aria-label={ariaLabel}
        className={
            classNames(
                'icon-button',
                className
            )
        }
        name={name}
        ref={ref}
    >
        {icon}
    </Button>
});

IconButton.displayName = 'IconButton';

export type {
    IconButtonProps
};

export default IconButton;