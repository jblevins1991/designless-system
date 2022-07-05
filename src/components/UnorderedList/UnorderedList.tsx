import * as React from 'react';
import classNames from 'classnames';

export interface UnorderedListProps extends React.HTMLAttributes<HTMLUListElement> {}

const UnorderedList: React.FC<UnorderedListProps> = ({
    children,
    className,
    ...props
}) => {
    return <ul
        className={
            classNames(
                'unordered-list',
                className
            )
        }
        {...props}
    >
        {children}
    </ul>;
};

UnorderedList.displayName = 'UnorderedList';

export default UnorderedList;