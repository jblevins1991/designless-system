import * as React from 'react';
import classNames from 'classnames';

import {
    useCreateBlurHandler,
    useCreateClickHandler,
    useCreateFocusHandler
} from '../../hooks';

interface AccordionProps {
    children: React.ReactNode;
    className?: string;
    disabled?: boolean;
    onBlur: (event: React.FocusEvent<HTMLButtonElement>) => void;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onFocus: (event: React.FocusEvent<HTMLButtonElement>) => void;
    onKeyDown: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
    title: React.ReactNode;
}

type AccordionHandle = {
    button: React.MutableRefObject<HTMLButtonElement>,
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
    onFocus,
    onKeyDown,
    title,
}, ref) => {
    const id = React.useId();
    const [isOpen, setIsOpen] = React.useState(false);
    const button = React.useRef(null);

    React.useImperativeHandle(ref, () => {
        return {
            button,
            close: () => setIsOpen(false),
            open: () => setIsOpen(true),
        }
    });
    const handleBlur = useCreateBlurHandler((event: React.FocusEvent<HTMLButtonElement>) => {
        onBlur?.(event);
    }, disabled);
    
    const handleClick = useCreateClickHandler((event: React.MouseEvent<HTMLButtonElement>) => {
        setIsOpen(!isOpen);

        onClick?.(event);
    }, disabled);
    
    const handleFocus = useCreateFocusHandler((event: React.FocusEvent<HTMLButtonElement>) => {
        onFocus?.(event);
    }, disabled);

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
                    isOpen ? 'visible' : 'hidden'
                )}
            id={`${id}-accordion-body`}
        >
            { children }
        </div>
    </>;
});

export type {
    AccordionProps,
    AccordionHandle
};

export default Accordion;