import * as React from 'react';
import classNames from 'classnames';

import {
    useCreateBlurHandler,
    useCreateClickHandler,
    useCreateFocusHandler,
    useCreateKeyDownHandler
} from '../../hooks';

type OmitSelectableListItem = 'onBlur' |
    'onClick' |
    'onChange' |
    'onFocus' |
    'onKeyDown'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SelectableListItemProps extends Omit<React.HTMLAttributes<HTMLLIElement>, OmitSelectableListItem> {
    disabled?: boolean;
    name: string;
    onBlur?: (event: React.FocusEvent<HTMLButtonElement>) => void;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onFocus?: (event: React.FocusEvent<HTMLButtonElement>) => void;
    onKeyDown?: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
    value?: string;
}

const SelectableListItem = React.forwardRef<
    HTMLButtonElement,
    SelectableListItemProps
>(({
    children,
    className,
    disabled = false,
    id,
    name,
    onBlur,
    onClick,
    onFocus,
    onKeyDown,
    value,
    ...props
}, ref) => {
    const handleBlur = useCreateBlurHandler(
        (event: React.FocusEvent<HTMLButtonElement>) => {
            onBlur?.(event);
        },
        disabled
    );

    const handleClick = useCreateClickHandler(
        (event: React.MouseEvent<HTMLButtonElement>) => {
            onClick?.(event);
        },
        disabled
    );

    const handleFocus = useCreateFocusHandler(
        (event: React.FocusEvent<HTMLButtonElement>) => {
            onFocus?.(event);
        },
        disabled
    );

    const handleKeyDown = useCreateKeyDownHandler(
        (event: React.KeyboardEvent<HTMLButtonElement>) => {
            onKeyDown?.(event);
        },
        disabled
    );

    return <li
        {...props}
        className={
            classNames(
                'list-item',
                className
            )
        }
        id={id}
    >
        <button
            name={name}
            onBlur={handleBlur}
            onClick={handleClick}
            onFocus={handleFocus}
            onKeyDown={handleKeyDown}
            value={value}
            ref={ref}
        >
            {children}
        </button>
    </li>
});

SelectableListItem.displayName = 'SelectableListItem';

export default SelectableListItem;
