import * as React from 'react';

const useCreateBlurHandler = <ElementType>(
    disabled: boolean,
    onBlur?: (event: React.FocusEvent<ElementType>) => void
) => {
    return (event: React.FocusEvent<ElementType>) => {
        if (disabled) return;

        onBlur?.(event);
    };
};

export default useCreateBlurHandler;
