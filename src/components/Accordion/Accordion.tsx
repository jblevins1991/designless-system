import * as React from 'react';
import classNames from 'classnames';

import {
    useControlled,
    useCreateBlurHandler,
    useCreateClickHandler,
    useCreateFocusHandler
} from '../../hooks';

interface AccordionProps {
    children: React.ReactNode;
    className?: string;
    disabled?: boolean;
    onBlur?: (event: React.FocusEvent<HTMLButtonElement>) => void;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onChange?: (open: boolean) => void;
    onFocus?: (event: React.FocusEvent<HTMLButtonElement>) => void;
    onKeyDown?: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
    open?: boolean;
    title: React.ReactNode;
}

type AccordionHandle = {
    button: React.MutableRefObject<HTMLButtonElement>['current'] | null,
    close: () => void,
    open: () => void,
}

const Accordion = React.forwardRef<
    AccordionHandle,
    AccordionProps
>(({
    children,
    className,
    disabled = false,
    onBlur,
    onClick,
    onChange,
    onFocus,
    onKeyDown,
    open: openProp,
    title,
}, ref) => {
    const id = React.useId();
    const [open, setOpenIfUncontrolled] = useControlled({
        controlled: openProp,
        default: false,
        name: 'Accordion'
    });
    const button = React.useRef<HTMLButtonElement>(null);

    React.useImperativeHandle(ref, () => {
        return {
            button: button.current,
            close: () => {
                setOpenIfUncontrolled(false);
                onChange?.(false);
            },
            open: () => {
                setOpenIfUncontrolled(true);
                onChange?.(false);
            },
        }
    }, [button]);

    React.useEffect(() => {
        onChange?.(open || false);
    }, [open]);

    const handleBlur = useCreateBlurHandler<HTMLButtonElement>(disabled, onBlur);
    const handleClick = useCreateClickHandler<HTMLButtonElement>(
        disabled,
        (event: React.MouseEvent<HTMLButtonElement>) => {
            onClick?.(event);

            setOpenIfUncontrolled(!open);
        }
    );
    const handleFocus = useCreateFocusHandler<HTMLButtonElement>(disabled, onFocus);

    const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
        if (disabled) return;

        onKeyDown?.(event);
    };

    return <>
        <button
            aria-owns={`${id}-accordion-body`}
            className={
                classNames(
                    'accordion-header',
                    className
                )}
            onBlur={handleBlur}
            onClick={handleClick}
            onFocus={handleFocus}
            onKeyDown={handleKeyDown}
            ref={button}
        >
            { title }
        </button>

        <div
            className={
                classNames(
                    'accordion-content',
                    open ? 'visible' : 'hidden'
                )}
            id={`${id}-accordion-body`}
        >
            { children }
        </div>
    </>;
});

Accordion.displayName = 'Accordion';

export type {
    AccordionProps,
    AccordionHandle
};

export default Accordion;