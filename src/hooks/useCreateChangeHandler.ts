import * as React from 'react';

const useCreateChangeHandler = <ElementType>(
    onChange: (event: React.ChangeEvent<ElementType>) => void,
    disabled: boolean,
    deps?: React.DependencyList,
) => {
    return React.useCallback((event: React.ChangeEvent<ElementType>) => {
        if (!disabled) {
            if (onChange) {
                onChange(event);
            }
        }
    }, [
        disabled,
        deps,
    ]);
};

export default useCreateChangeHandler;
