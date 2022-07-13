import * as React from 'react';

const useCreateKeyDownHandler = <ElementType>(
    onKeyDown: (event: React.KeyboardEvent<ElementType>) => void,
    disabled: boolean,
    deps?: React.DependencyList,
) => {
    return React.useCallback((event: React.KeyboardEvent<ElementType>) => {
        if (disabled) return;

        onKeyDown?.(event);
    }, [
        disabled,
        deps
    ]);
};

export default useCreateKeyDownHandler;
