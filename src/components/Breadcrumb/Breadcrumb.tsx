import * as React from "react";
import classNames from "classnames";

export interface BreadcrumbProps {
    className?: string;
    id?: string;
    url: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({
    className,
    id,
}) => {
    return <nav
        className={
            classNames(
                'breadcrumbs',
                className,
            )
        }
        id={`${id}-breadcrumb-wrapper`}
    >
        {}
    </nav>;
};

Breadcrumb.displayName = 'Breadcrumb';

export default Breadcrumb;
