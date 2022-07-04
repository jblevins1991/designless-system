import * as React from 'react';
import classNames from 'classnames';

export interface OrderedListProps extends React.HTMLAttributes<HTMLOListElement> {}

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

export default OrderedList;