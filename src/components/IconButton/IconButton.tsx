import classNames from 'classnames';
import * as React from 'react';

import {Button, ButtonProps} from '..';

export interface IconButtonProps extends ButtonProps {
    icon: React.ReactNode;
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(({
    className,
    icon,
    ...props
}, ref) => {
    return <Button
        {...props}
        className={
            classNames(
                'icon-button',
                className
            )
        }
        ref={ref}
    >
        {icon}
    </Button>
});

IconButton.displayName = 'IconButton';

export default IconButton;