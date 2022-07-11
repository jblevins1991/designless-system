import * as React from 'react';

const useCreateFocusHandler = <ElementType>(
    onFocus: (event: React.FocusEvent<ElementType>) => void,
    disabled: boolean,
    deps?: React.DependencyList,
) => {
    return React.useCallback((event: React.FocusEvent<ElementType>) => {
        if (disabled) return;

        onFocus?.(event);
    }, [
        disabled,
        deps
    ]);
};

export default useCreateFocusHandler;
