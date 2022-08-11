import React from "react";

export type AttributeType<HTMLElementType> = React.AllHTMLAttributes<HTMLElementType> &
    React.AriaAttributes;