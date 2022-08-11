import * as React from "react";
import classNames from "classnames";

import { AttributeType } from '../../types/AttributeType';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface CardProps extends AttributeType<HTMLDivElement> {}

/**
 * Styless Card Component
 * 
 * The styless card component renders an article element.
 * 
 * Usage:
 * <Card>
 *   <Typography variant='h1'>
 *     Card Heading
 *   </Typography>
 * 
 *   <Typography>
 *     Some card content.
 *   </Typography>
 * 
 *   <Link href='/to/somewhere' aria-label='view more about the topic of this content'>
 *     View more
 *   </Link>
 * </Card>
 */
const Card: React.FC<CardProps> = ({
    children,
    className,
    ...props
}) => {
    return <article
        className={
            classNames(
                'card',
                className
            )
        }
        {...props}
    >
        {children}
    </article>
};

Card.displayName = 'Card';

export type {
    CardProps
};

export default Card;