import * as React from 'react';
import classNames from 'classnames';

export interface LinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
    /**
     * 
     */
    href: string;
    /**
     * 
     */
    variant?: 'link' | 'button';
}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(({
    children,
    className,
    href,
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

    return <a
        {...props}
        className={
            classNames(
                'link',
                variant,
                className
            )
        }
        ref={ref}
    >
        {children}
    </a>
});

Link.displayName = 'Link';

export default Link;