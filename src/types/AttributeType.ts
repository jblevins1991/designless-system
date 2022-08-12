import React from "react";

/**
 * Component Prop Types
 * 
 * Unions React.AllHTMLAttributes and React.AriaAttributes so that all components that use this 
 * as their props interface.
 */
export type AttributeType<HTMLElementType> = React.AllHTMLAttributes<HTMLElementType> &
    React.AriaAttributes;