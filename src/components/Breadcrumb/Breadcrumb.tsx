import * as React from "react";
import classNames from "classnames";
import Link from "../Link/Link";
import ListItem from "../ListItem/ListItem";
import OrderedList from "../OrderedList/OrderedList";

type Crumb = {
    label: string;
    url: string;
};

interface BreadcrumbProps {
    className?: string;
    crumbs?: Crumb[];
    id?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({
    className,
    crumbs,
    id,
}) => {
    return <nav
        aria-label='Breadcrumbs navigation.'
        className={
            classNames(
                'breadcrumbs',
                className,
            )
        }
        id={`${id}-breadcrumb-wrapper`}
    >
        <OrderedList>
            {
                crumbs?.map((crumb: Crumb, index: number) => {
                    return <ListItem key={crumb.label}>
                        <Link
                            aria-current={index === crumbs.length - 1}
                            href={crumb.url}
                        >
                            {crumb.label}
                        </Link>
                    </ListItem>;
                })
            }
        </OrderedList>
    </nav>;
};

Breadcrumb.displayName = 'Breadcrumb';

export type {
    BreadcrumbProps
};

export default Breadcrumb;
