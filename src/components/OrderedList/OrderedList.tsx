import * as React from 'react';
import classNames from 'classnames';

import { AttributeType } from '../../types/AttributeType';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface OrderedListProps extends AttributeType<HTMLOListElement> {}

/**
 * Styless OrderedList Component
 * 
 * The styless ordered list component renders a ol element.
 * 
 * Usage:
 * <OrderedList>
 *   <ListItem>one</ListItem>
 *   ...more list items
 * </OrderedList>
 */
const OrderedList: React.FC<OrderedListProps> = ({
    children,
    className,
    ...props
}) => {
    return <ul
        className={
            classNames(
                'ordered-list',
                className
            )
        }
        {...props}
    >
        {children}
    </ul>;
};

OrderedList.displayName = 'OrderedList';

export type {
    OrderedListProps
};

export default OrderedList;