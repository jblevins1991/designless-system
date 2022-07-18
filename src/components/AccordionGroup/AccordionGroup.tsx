import * as React from 'react';
import { useListFocusTrap } from '../../hooks';

import { AccordionHandle } from '../Accordion/Accordion';

interface AccordionGroupProps {
    children?: React.ReactNode;
}

const AccordionGroup: React.FC<AccordionGroupProps> = ({
    children
}) => {
    const [
        isTrapped,
        setIsTrapped,
        focusableIndex,
        setFocusableIndex,
        handleOnKeyDown,
        previousFocusableIndex,
        setPreviousFocuableIndex,
    ] = useListFocusTrap(React.Children.count(children));

    const accordionGroup = React.useRef(null);
    const previousAccordion = React.useRef<AccordionHandle>(null);
    const activeAccordion = React.useRef<AccordionHandle>(null);

    React.useEffect(() => {
        activeAccordion.current.button.current.focus();
    }, [focusableIndex]);

    React.useEffect(() => {
        previousAccordion.current.close();
        focusableIndex.current.open();
    }, [
        focusableIndex,
        previousFocusableIndex
    ]);

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
        switch (event.key) {
            case 'ArrowDown':
                setIsTrapped(true);
                break;
        };
    };

    return <div
        tabIndex={0}
    >
        {
            React.Children.map(children, (child: React.ReactNode, index: number) => {
                const assertedChild = child as React.ReactElement;

                return React.cloneElement(assertedChild, {
                    key: assertedChild.props.title,
                    ...assertedChild.props,
                    onClick: () => {
                        setPreviousFocuableIndex(focusableIndex);
                        setFocusableIndex(index);
                    },
                    onKeyDown: handleOnKeyDown,
                    ...(index === focusableIndex && { ref: activeAccordion }),
                    ...(index === previousFocusableIndex && { ref: previousAccordion })
                });
            })
        }
    </div>
};

export default AccordionGroup;