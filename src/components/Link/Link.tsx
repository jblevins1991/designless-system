import * as React from 'react';
import classNames from 'classnames';

import {
    useCreateBlurHandler,
    useCreateClickHandler,
    useCreateFocusHandler
} from '../../hooks';

import { AttributeType } from '../../types/AttributeType';

interface LinkProps extends AttributeType<HTMLAnchorElement> {
    /**
     * A URL to navigate to.
     */
    href: string;
    /**
     * Controls the style of the link.
     * 
     * Default value: 'link'
     */
    variant?: 'link' | 'button';
}

/**
 * Styless Link Component
 * 
 * The link component renders an anchor element. The anchor element 
 * has two variants associated with it: 'link' and 'button'. The link 
 * variant is the default variant that will render.
 * 
 * Usage:
 * <Link href='https://example.com'>
 *   Link Text
 * </Link>
 */
const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(({
    children,
    className,
    href,
    onBlur,
    onClick,
    onFocus,
    variant = 'link',
    ...props
}, ref) => {
    if (process.env.ENVIRONMENT !== 'production') {
        if (!href.startsWith('http://') || !href.startsWith('https://')) {
            console.error(`
                DS: links require their href prop to start with either http:// or https://.
            `);
        }
    }

    const handleBlur = useCreateBlurHandler((event: React.FocusEvent<HTMLAnchorElement>) => {
        onBlur?.(event);
    }, false);
    
    const handleClick = useCreateClickHandler((event: React.MouseEvent<HTMLAnchorElement>) => {
        onClick?.(event);
    }, false);
    
    const handleFocus = useCreateFocusHandler((event: React.FocusEvent<HTMLAnchorElement>) => {
        onFocus?.(event);
    }, false);

    return <a
        {...props}
        className={
            classNames(
                'link',
                variant,
                className
            )
        }
        href={href}
        onBlur={handleBlur}
        onClick={handleClick}
        onFocus={handleFocus}
        ref={ref}
    >
        {children}
    </a>
});

Link.displayName = 'Link';

export type {
    LinkProps
};

export default Link;