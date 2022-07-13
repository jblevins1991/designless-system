import * as React from 'react';
import classNames from 'classnames';

import {
    useControlled,
    useCreateBlurHandler,
    useCreateClickHandler,
    useCreateFocusHandler,
    useCreateKeyDownHandler
} from '../../hooks';

export interface SelectableListProps {
    children?: React.ReactNode;
    className?: string;
    defaultValue?: string | string[] | undefined;
    disabled?: boolean;
    id?: string;
    onBlur?: (event: React.FocusEvent<HTMLUListElement>) => void;
    onClick?: (event: React.MouseEvent<HTMLUListElement>) => void;
    onChange?: (value: string | string[] | undefined) => void;
    onFocus?: (event: React.FocusEvent<HTMLUListElement>) => void;
    value?: string | string[] | undefined;
}

const SelectableList = React.forwardRef<
    HTMLUListElement,
    SelectableListProps
>(({
    children,
    className,
    defaultValue = undefined,
    disabled = false,
    id,
    onBlur,
    onClick,
    onChange,
    onFocus,
    value: valueProp
}, ref) => {
    const [value, setValueIfUncontrolled] = useControlled({
        controlled: valueProp,
        default: defaultValue,
        name: 'SelectableList'
    });

    const [focusIndex, setFocusIndex] = React.useState(0);
    const focusedListItem = React.useRef<HTMLButtonElement>(null);

    // const focusRoot = () => ref.current?.focus();

    const handleBlur = useCreateBlurHandler(
        (event: React.FocusEvent<HTMLUListElement>) => {
            onBlur?.(event);
        },
        disabled
    );

    const handleClick = useCreateClickHandler(
        (event: React.MouseEvent<HTMLUListElement>) => {
            onClick?.(event);
        },
        disabled
    );

    const handleFocus = useCreateFocusHandler(
        (event: React.FocusEvent<HTMLUListElement>) => {
            onFocus?.(event);
        },
        disabled
    );

    const handleKeyDown = useCreateKeyDownHandler(
        (event: React.KeyboardEvent<HTMLUListElement>) => {
            switch(event.code) {
                /**
                 * Move to the previous list item.
                 */
                case '':
                case 'ArrowDown':
                case '':
                case '':
                    focusedListItem.current?.focus();
            }
        },
        disabled
    );

    /**
     * When the focusedListItem changes, fire the focus DOM api.
     */
    React.useEffect(() => {
        console.log('focused list item', focusedListItem.current?.focus);
        focusedListItem.current?.focus();
    }, [focusedListItem.current]);

    /**
     * Fires the `onChange` handler whenever a new item is clicked.
     */
    React.useEffect(() => {
        onChange?.(value);
    }, [value]);

    const memoizedListItems = React.useMemo(() => {
        return React.Children.map(children, (child, index) => {
            const assertedChild = child as React.ReactElement;
            const isSelected = focusIndex === index;

            return React.cloneElement(assertedChild, {
                ...assertedChild.props,
                'aria-current': isSelected,
                className: isSelected ? 'selected' : '',
                onKeyDown: (event: React.KeyboardEvent<HTMLUListElement>) => {
                    const lastIndex = React.Children.count(children) - 1;

                    switch(event.code) {
                        /**
                         * Move to the previous list item.
                         */
                        case 'ArrowUp':
                            event.preventDefault();
                            
                            if (focusIndex === 0) {
                                setFocusIndex(lastIndex);
                            } else {
                                setFocusIndex(focusIndex - 1);
                            }
                            break;
                        /**
                         * Move to the next list item.
                         */
                        case 'ArrowDown':
                            event.preventDefault();

                            if (focusIndex === lastIndex) {
                                setFocusIndex(0);
                            } else {
                                setFocusIndex(focusIndex + 1);
                            }
                            break;
                        /**
                         * Move to the first list item.
                         */
                        case 'Home':
                            event.preventDefault();
                            
                            setFocusIndex(0);
                            break;
                        /**
                         * Move to the last list item.
                         */
                        case 'End':
                            event.preventDefault();

                            setFocusIndex(lastIndex);
                            break;
                        /**
                         * Select a list item.
                         */
                        case 'Enter':
                        case ' ':
                            event.preventDefault();
                            
                            setValueIfUncontrolled(assertedChild.props.name);
                            break;
                        /**
                         * Exit the list.
                         */
                        case 'Escape':
                            event.preventDefault();
                            
                            break;
                        /**
                         * No-op
                         */
                        default:
                    }
                },
                ...(isSelected && { ref: focusedListItem }),
            });
        });
    }, [
        children,
        focusIndex
    ]);

    return <ul
        className={
            classNames(
                'selectable-list',
                className
            )
        }
        id={id}
        onBlur={handleBlur}
        onClick={handleClick}
        onChange={handleFocus}
        onKeyDown={handleKeyDown}
        tabIndex={disabled ? -1 : 0}
        ref={ref}
    >
        {memoizedListItems}
    </ul>;
});

SelectableList.displayName = 'SelectableList';

export default SelectableList;
