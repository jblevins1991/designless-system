import * as React from 'react';
import classNames from 'classnames';

import { AttributeType } from '../../types/AttributeType';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ListItemProps extends AttributeType<HTMLLIElement> {}

/**
 * Styless ListItem Component
 * 
 * The list item component renders a li element. Its only purpose is 
 * to provide all of the components you need to use the UnorderedList 
 * and OrderedList components.
 */
const ListItem: React.FC<ListItemProps> = ({
    children,
    className,
    ...props
}) => {
    return <li
        className={
            classNames(
                'list-item',
                className
            )
        }
        {...props}
    >
        {children}
    </li>
};

ListItem.displayName = 'ListItem';

export type {
    ListItemProps
};

export default ListItem;
