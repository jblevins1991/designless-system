import * as React from "react";
import classNames from "classnames";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

const Card: React.FC<CardProps> = ({
    children,
    className,
    ...props
}) => {
    return <div
        className={
            classNames(
                'card',
                className
            )
        }
        {...props}
    >
        {children}
    </div>
};

Card.displayName = 'Card';

export type {
    CardProps
};

export default Card;