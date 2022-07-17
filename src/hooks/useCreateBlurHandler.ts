import * as React from 'react';

const useCreateBlurHandler = <ElementType>(
    onBlur: (event: React.FocusEvent<ElementType>) => void,
    disabled: boolean
) => {
    return (event: React.FocusEvent<ElementType>) => {
        if (disabled) return;

        onBlur?.(event);
    };
};

export default useCreateBlurHandler;
