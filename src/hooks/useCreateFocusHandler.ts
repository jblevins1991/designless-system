import * as React from 'react';

const useCreateFocusHandler = <ElementType>(
    onFocus: (event: React.FocusEvent<ElementType>) => void,
    disabled: boolean
) => {
    return (event: React.FocusEvent<ElementType>) => {
        if (disabled) return;

        onFocus?.(event);
    };
};

export default useCreateFocusHandler;
