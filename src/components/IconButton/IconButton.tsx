import classNames from 'classnames';
import * as React from 'react';

import Button, { ButtonProps } from '../Button/Button';

type IconButtonPropsToOmit = 'aria-label' | 'children';

interface IconButtonProps extends Omit<ButtonProps, IconButtonPropsToOmit> {
    'aria-label': string;
    icon: React.ReactNode;
}

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