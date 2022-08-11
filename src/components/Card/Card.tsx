import * as React from "react";
import classNames from "classnames";

import { AttributeType } from '../../types/AttributeType';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface CardProps extends AttributeType<HTMLDivElement> {}

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