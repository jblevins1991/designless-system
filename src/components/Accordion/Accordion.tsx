import * as React from 'react';
import classNames from "classnames";

export interface AccordionProps {
    children: React.ReactNode;
    className?: string;
    closedIcon: React.ReactNode;
    id?: string;
    name: string;
    openIcon: React.ReactNode;
    tabIndex?: number;
    title: string;
}

const Accordion = React.forwardRef<HTMLButtonElement, AccordionProps>(({
    children,
    className,
    closedIcon,
    id,
    name,
    openIcon,
    tabIndex = 0,
    title,
}, ref) => {
    const [isExpanded, setIsExpanded] = React.useState(false);

    const handleAccordionHeaderClick = () => {
        setIsExpanded((prevState: boolean) => !prevState);
    };

    return <>
        <button
            aria-owns={`${name}-accordion-panel`}
            aria-expanded={isExpanded}
            className={
                classNames(
                    'accordion-header',
                    className
                )
            }
            id={`${id}-accordion-header`}
            name={name}
            onClick={handleAccordionHeaderClick}
            tabIndex={tabIndex}
            role={''}
            ref={ref}
        >
            {title}

            {
                isExpanded
                    ? closedIcon
                    : openIcon
            }
        </button>

        <div
            className={
                classNames(
                    'accordion-panel'
                )
            }
            id={`${id}-accordion-panel`}
            role={''}
        >
            {children}
        </div>
    </>
});

Accordion.displayName = 'Accordion';

export default Accordion;