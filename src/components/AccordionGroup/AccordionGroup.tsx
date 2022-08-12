import * as React from 'react';
import { useListFocusTrap } from '../../hooks';

import { AccordionHandle } from '../Accordion/Accordion';

interface AccordionGroupProps {
    children?: React.ReactNode;
}

const AccordionGroup: React.FC<AccordionGroupProps> = ({
    children
}) => {
    const accordionGroup = React.useRef<HTMLDivElement>(null);

    const returnFocus = () => {
    }

    const {
        isTrapped,
        setIsTrapped,
        focusIndex,
        setFocusIndex,
        handleKeyDown,
        previousFocusIndex,
        setPreviousFocusIndex
    } = useListFocusTrap(
        React.Children.count(children),
        returnFocus
    );

    const activeAccordion = React.useRef<AccordionHandle>(null);
    const previousAccordion = React.useRef<AccordionHandle>(null);

    React.useEffect(() => {
        if (isTrapped && activeAccordion.current !== null) {
            activeAccordion.current?.button?.focus();
        }
    }, [isTrapped]);

    React.useEffect(() => {
        if (activeAccordion.current !== null) {
           activeAccordion.current?.button?.focus();
        }
    }, [focusIndex]);

    React.useEffect(() => {
        activeAccordion.current?.open();
    }, [
        activeAccordion.current
    ]);

    React.useEffect(() => {
        previousAccordion.current?.close();
    }, [
        previousAccordion.current
    ]);

    const handleOnAccordionClick = async (index: number) => {
        if (focusIndex !== index) {
            await setPreviousFocusIndex(focusIndex);
            await setFocusIndex(index);
        }
    };

    const handleAccordionGroupKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
        switch (event.key) {
            case 'ArrowDown':
                setIsTrapped(true);
                break;
            default:
                break;
        }
    };

    return <div
        onKeyDown={handleAccordionGroupKeyDown}
        tabIndex={0}
    >
        {
            React.Children.map(children, (child: React.ReactNode, index: number) => {
                const assertedChild = child as React.ReactElement;

                return React.cloneElement(assertedChild, {
                    key: assertedChild.props.title,
                    ...assertedChild.props,
                    onClick: () => {
                        handleOnAccordionClick(index);
                    },
                    onKeyDown: handleKeyDown,
                    ...(index === focusIndex && { ref: activeAccordion }),
                    ...(index === previousFocusIndex && { ref: previousAccordion })
                });
            })
        }
    </div>
};

AccordionGroup.displayName = 'AccordionGroup';

export type {
    AccordionGroupProps
};

export default AccordionGroup;